import { SKILLS } from "./hero.constants";

export const SkillsMarquee = ({ skillsTitle }) => {
    const duplicatedSkills = [...SKILLS, ...SKILLS];

    return (
        <div className="mt-20 animate-fade-in animate-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">{skillsTitle}</p>
            <div className="relative overflow-hidden">
                <div className="flex animate-marquee">
                    {duplicatedSkills.map((skill, idx) => (
                        <div key={`marquee-skill-${idx}`} className="shrink-0 px-8 py-4">
                            <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                {skill}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};