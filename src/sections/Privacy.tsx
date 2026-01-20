import { Section } from "@/components/ui/section";
import { Check } from "lucide-react";

export function Privacy() {
    return (
        <Section className="bg-gradient-to-b from-background to-secondary/20">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium uppercase tracking-wider">
                    Offshore Infrastructure
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                    "Finally, a card that <br />
                    <span className="text-accent underline decoration-accent/30 underline-offset-8">respects your privacy.</span>"
                </h2>

                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    ZYPHER.CARDS empowers free financial access with total privacy.
                    Our offshore-based infrastructure guarantees zero KYC, encrypted transactions,
                    and absolute control over your crypto.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full pt-8">
                    {[
                        "No ID checks",
                        "No data harvesting",
                        "No surveillance",
                        "Used globally"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-center gap-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                            <div className="bg-green-500 rounded-full p-1">
                                <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
