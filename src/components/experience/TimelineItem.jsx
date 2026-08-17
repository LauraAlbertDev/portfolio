import { TechBadge } from "./TechBadge";

export const TimelineItem = ({ experience, index }) => {
    const isEven = index % 2 === 0;
    const { period, role, company, description, technologies, current } = experience;

    return (
        <div 
            className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
            style={{ transitionDelay: `${(index + 1) * 150}ms` }}
        >
            {/* Indicador del timeline */}
            <div className="absolute left-4 md:left-1/2 top-7 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                {current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                )}
            </div>

            {/* Contenido de la tarjeta */}
            <div className={`pl-12 md:pl-0 ${isEven ? "md:pr-16 md:text-right flex flex-col md:items-end" : "md:col-start-2 md:pl-16 flex flex-col md:items-start"}`}>
                <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 max-w-xl text-left">
                    <span className="text-sm text-primary font-medium bg-primary/5 px-2.5 py-1 rounded-md inline-block">
                        {period}
                    </span>
                    <h3 className="text-xl font-semibold mt-3 text-white">{role}</h3>
                    <p className="text-sm text-primary/80 font-medium">{company}</p>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                        {description}
                    </p>

                    <div className={`flex flex-wrap gap-2 mt-5 ${isEven ? "md:justify-end" : "justify-start"}`}>
                        {technologies?.map((tech, techIdx) => (
                            <TechBadge key={techIdx} tech={tech} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};