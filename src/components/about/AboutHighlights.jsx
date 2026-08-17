import { HIGHLIGHT_ICONS } from "./about.constants";

export const AboutHighlights = ({ highlights }) => {
    if (!highlights || !Array.isArray(highlights)) return null;

    return (
        <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
                const Icon = HIGHLIGHT_ICONS[index];
                return (
                    <div
                        key={index}
                        className="glass p-6 rounded-2xl animate-fade-in hover:border-primary/30 transition-all duration-300 group"
                        style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                            {Icon && <Icon className="w-6 h-6 text-primary" />}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 min-h-7">
                            {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed min-h-10">
                            {item.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};