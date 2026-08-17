import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useContactForm = (t) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

    const getFieldError = (name, value) => {
        if (name === "name") {
            if (!value.trim()) return t("contact.errors.nameRequired");
            if (value.trim().length < 3) return t("contact.errors.nameMin");
            return "";
        }

        if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value.trim()) return t("contact.errors.emailRequired");
            if (!emailRegex.test(value.trim())) return t("contact.errors.emailInvalid");
            return "";
        }

        if (name === "message") {
            if (!value.trim()) return t("contact.errors.messageRequired");
            if (value.trim().length < 10) return t("contact.errors.messageMin");
            return "";
        }

        return "";
    };

    const validateField = (name, value) => {
        const errorMsg = getFieldError(name, value);
        setErrors((prev) => ({ ...prev, [name]: errorMsg }));
        return errorMsg;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));

        if (submitStatus.type === "error") {
            setSubmitStatus({ type: null, message: "" });
        }

        if (errors[id]) {
            validateField(id, value);
        }
    };

    const handleBlur = (e) => {
        const { id, value } = e.target;
        validateField(id, value);
    };

    const handleSubmit = async (e, onSuccess) => {
        e.preventDefault();

        const newErrors = {
            name: getFieldError("name", formData.name),
            email: getFieldError("email", formData.email),
            message: getFieldError("message", formData.message),
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(Boolean);
        if (hasErrors) {
            setSubmitStatus({
                type: "error",
                message: t("contact.errors.formInvalid"),
            });
            return;
        }

        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS configuration missing.");
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    message: formData.message,
                },
                publicKey
            );

            setSubmitStatus({
                type: "success",
                message: t("contact.success"),
            });
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error("EmailJS error:", error);
            setSubmitStatus({
                type: "error",
                message: t("contact.error"),
            });
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        errors,
        isLoading,
        submitStatus,
        handleChange,
        handleBlur,
        handleSubmit,
    };
};