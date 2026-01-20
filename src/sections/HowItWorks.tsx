import { Section } from "@/components/ui/section";
import { UserPlus, Coins, CreditCard, ShoppingBag } from "lucide-react";

const steps = [
    {
        icon: UserPlus,
        title: "Create Account",
        desc: "No documents. Just email or phone.",
    },
    {
        icon: Coins,
        title: "Deposit Crypto",
        desc: "USDC, USDT, or Monero for anonymity.",
    },
    {
        icon: CreditCard,
        title: "Issue Card",
        desc: "Instant virtual card in seconds.",
    },
    {
        icon: ShoppingBag,
        title: "Spend Freely",
        desc: "Online or in-store, privately.",
    },
];

export function HowItWorks() {
    return (
        <Section className="bg-muted/30">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-muted-foreground">Four simple steps to financial freedom.</p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-border -z-10" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="relative mb-6">
                                <div className="w-16 h-16 rounded-full bg-background border-2 border-accent flex items-center justify-center text-accent shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                                    <step.icon className="w-7 h-7" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center border-2 border-background">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
