import { SOCIAL_LINKS } from "./hero.constants";

export const SocialLinks = ({ followText }) => (
    <div className="flex items-center gap-4 animate-fade-in animate-delay-400">
        <span className="text-sm text-muted-foreground">{followText}</span>
        {SOCIAL_LINKS.map((social) => (
            <a
                key={`social-${social.name}`}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label={social.name}
            >
                {social.icon}
            </a>
        ))}
    </div>
);