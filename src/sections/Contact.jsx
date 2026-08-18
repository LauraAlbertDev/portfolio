import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/Button.jsx";
import { useTranslation } from "@/i18n/LanguageContext";
import { useContactForm } from "@/hooks/useContactForm";
import { FormField } from "@/components/contact/FormField";
export const Contact = () => {
    const { t, language } = useTranslation();
    const {
        formData,
        errors,
        isLoading,
        submitStatus,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useContactForm(t, language);

    const contactInfo = [
        {
            icon: Mail,
            label: t("contact.info.email"),
            value: "lalbertborrell@gmail.com",
            href: "mailto:lalbertborrell@gmail.com",
        },
        {
            icon: MapPin,
            label: t("contact.info.location"),
            value: t("contact.locationValue"),
            href: "#",
        },
    ];

    return (
        <section id="contact" className="py-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full inline-block">
                        {t("contact.badge")}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
                        {t("contact.title")}{" "}
                        <span className="font-serif italic font-normal text-white">
                            {t("contact.titleItalic")}
                        </span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        {t("contact.description")}
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
                    {/* Formulario */}
                    <div className="lg:col-span-7 glass p-8 rounded-3xl border border-primary/20 animate-fade-in relative">
                        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                            <FormField
                                id="name"
                                label={t("contact.nameLabel")}
                                type="text"
                                placeholder={t("contact.namePlaceholder")}
                                value={formData.name}
                                error={errors.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            <FormField
                                id="email"
                                label={t("contact.emailLabel")}
                                type="email"
                                placeholder={t("contact.emailPlaceholder")}
                                value={formData.email}
                                error={errors.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground/80">
                                        {t("contact.messageLabel")}
                                    </label>
                                    {errors.message && (
                                        <span id="message-error" role="alert" className="text-xs text-red-400 font-medium">
                                            {errors.message}
                                        </span>
                                    )}
                                </div>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    maxLength={1000}
                                    placeholder={t("contact.messagePlaceholder")}
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={Boolean(errors.message)}
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                    className={`w-full px-4 py-3 bg-surface rounded-xl border outline-none transition-all resize-none placeholder:text-muted-foreground/30 text-white ${
                                        errors.message
                                            ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                                            : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
                                    }`}
                                />
                                <div className="flex justify-end mt-1">
                                    <span className="text-[10px] text-muted-foreground/60">
                                        {formData.message.length} / 1000 {t("contact.charCount")}
                                    </span>
                                </div>
                            </div>

                            <Button
                                className="w-full flex items-center justify-center gap-2 mt-2"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? t("contact.submitting") : t("contact.submit")}
                                {!isLoading && <Send className="w-5 h-5" />}
                            </Button>

                            {submitStatus.type && (
                                <div
                                    role="alert"
                                    className={`flex items-start gap-3 p-4 rounded-xl border transition-all ${
                                        submitStatus.type === "success"
                                            ? "bg-green-500/10 border-green-500/20 text-green-400"
                                            : "bg-red-500/10 border-red-500/20 text-red-400"
                                    }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="w-5 h-5 shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                    )}
                                    <p className="text-sm font-medium">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-center gap-6 lg:pl-4">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">{t("contact.sideTitle")}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {t("contact.sideDescription")}
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <a
                                        key={index}
                                        href={info.href}
                                        className={`flex items-center gap-4 glass p-4 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all duration-300 group ${
                                            info.href === "#" ? "pointer-events-none" : ""
                                        }`}
                                    >
                                        <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center transition-colors">
                                            <Icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{info.label}</p>
                                            <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">{info.value}</p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

