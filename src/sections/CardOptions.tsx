import { Section } from "@/components/ui/section";
import { Check, CreditCard, Nfc } from "lucide-react";

export function CardOptions() {
    return (
        <Section className="bg-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Visual */}
                <div className="relative order-2 lg:order-1 flex justify-center">
                    {/* Card visual */}
                    <div className="w-[340px] h-[214px] md:w-[420px] md:h-[264px] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl relative shadow-2xl transform -rotate-6 transition-transform hover:rotate-0 duration-500 border border-white/10">
                        {/* Card Details */}
                        <div className="absolute top-6 left-6 w-12 h-8 bg-amber-500/80 rounded flex items-center justify-center">
                            <span className="w-8 h-5 border border-white/30 rounded-sm" />
                        </div>
                        <Nfc className="absolute top-6 right-6 text-white/50 w-8 h-8 rotate-90" />

                        <div className="absolute bottom-6 left-6 text-white tracking-widest font-mono text-lg">
                            **** **** **** 8842
                        </div>

                        <div className="absolute bottom-6 right-6">
                            <div className="flex gap-1">
                                <div className="w-8 h-8 rounded-full bg-red-500/80" />
                                <div className="w-8 h-8 rounded-full bg-orange-500/80 -ml-4" />
                            </div>
                        </div>
                    </div>

                    {/* Shadow/Glow */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-accent/20 blur-3xl rounded-full pointer-events-none" />
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2 space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Standard or Elite?</h2>
                    <p className="text-muted-foreground text-lg">
                        Choose the card that fits your lifestyle. Both anonymous, both secure.
                    </p>

                    <div className="space-y-4">
                        {[
                            "3D Secure V2 Support",
                            "Valid for 24 Months",
                            "Reloadable Instantly",
                            "Visa & Mastercard Available",
                            "Apple Pay & Google Pay Ready"
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-accent" />
                                </div>
                                <span className="font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                        <div className="px-4 py-2 bg-background rounded border border-border flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-muted-foreground" />
                            <span className="text-sm font-semibold">Virtual</span>
                        </div>
                        <div className="px-4 py-2 bg-background rounded border border-border flex items-center gap-2 opacity-50 cursor-not-allowed">
                            <CreditCard className="w-5 h-5 text-muted-foreground" />
                            <span className="text-sm font-semibold">Physical (Coming Soon)</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
