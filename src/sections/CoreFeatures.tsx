import { Section } from "@/components/ui/section";
import {
    Wallet, CreditCard, Landmark, Coins,
    BarChart3, Smartphone, Eye, Globe
} from "lucide-react";

const features = [
    { icon: Wallet, title: "Fully Encrypted Wallet", desc: "Your funds stay secure 24/7" },
    { icon: CreditCard, title: "Instant Virtual Cards", desc: "Get your card in minutes" },
    { icon: Landmark, title: "Global USD Accounts", desc: "Spend USD anywhere" },
    { icon: Coins, title: "Crypto Deposits", desc: "Fund with USDC, USDT" },
    { icon: BarChart3, title: "High Limits", desc: "No daily/monthly caps" },
    { icon: Smartphone, title: "Mobile Payments", desc: "Apple & Google Pay" },
    { icon: Eye, title: "Monitoring", desc: "View spending anytime" },
    { icon: Globe, title: "Worldwide", desc: "150M+ locations" },
];

export function CoreFeatures() {
    return (
        <Section>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Everything you need for seamless crypto spending.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-xl bg-card border border-border/50 hover:bg-muted/50 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <feature.icon className="w-5 h-5 text-accent" />
                            <h3 className="font-semibold">{feature.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
