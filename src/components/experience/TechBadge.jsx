export const TechBadge = ({ tech }) => (
    <span className="px-3 py-1 bg-surface text-xs rounded-full border border-border/40 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors">
        {tech}
    </span>
);