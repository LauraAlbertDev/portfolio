import perfilLaura from "@/assets/Avatar-portfolio.jpg";

export const ProfileCard = ({ availableText, yearsExpText }) => (
    <div className="relative animate-fade-in animate-delay-500">
        <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
            <div className="relative glass rounded-3xl p-2 glow-border">
                <img src={perfilLaura} alt="Laura Albert" className="w-full aspect-4/5 object-cover rounded-2xl" />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium">{availableText}</span>
                    </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animate-delay-500">
                    <div className="text-2xl font-bold text-primary">2+</div>
                    <div className="text-xs text-muted-foreground">{yearsExpText}</div>
                </div>
            </div>
        </div>
    </div>
);