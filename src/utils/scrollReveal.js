const HEADER_OFFSET = 80;

let observer = null;

export function initScrollReveal() {
    const hero = document.getElementById("hero");
    if (hero) {
        hero.querySelectorAll(".animate-fade-in").forEach((el) => {
            el.classList.add("is-visible");
        });
    }

    if (observer) {
        observer.disconnect();
    }

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target
                    .querySelectorAll(".animate-fade-in")
                    .forEach((el) => el.classList.add("is-visible"));

                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.12, rootMargin: `-${HEADER_OFFSET}px 0px -8% 0px` }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
        if (section.id !== "hero") {
            observer.observe(section);
        }
    });
}

export function scrollToSection(href, e) {
    if (e && typeof e.preventDefault === "function") {
        e.preventDefault();
    }

    if (href === "#" || href === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }

    const section = document.querySelector(href);
    if (!section) return;

    const top =
        section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

    window.scrollTo({ top, behavior: "smooth" });
}