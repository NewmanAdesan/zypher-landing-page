import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <Section className="py-32">
            <div className="absolute inset-0 bg-accent/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

            <div className="relative text-center max-w-4xl mx-auto space-y-8 p-8 md:p-12 rounded-3xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Ready to Take Control?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Join thousands of users worldwide using ZYPHER.CARDS to protect their privacy and spend crypto freely.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-accent hover:bg-accent/90 text-white shadow-xl shadow-accent/20">
                        Start Now – No KYC
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg border-accent/20 text-foreground hover:bg-accent/5">
                        View Documentation
                    </Button>
                </div>
            </div>
        </Section>
    );
}
