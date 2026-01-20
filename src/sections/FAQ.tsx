import { Section } from "@/components/ui/section";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        q: "Is KYC required to use ZYPHER.CARDS?",
        a: "No. We operate using an offshore banking infrastructure that allows us to issue cards without requiring Identity Verification (KYC). Your privacy is our priority.",
    },
    {
        q: "Where can I use my card?",
        a: "You can use your Zypher card anywhere Visa and Mastercard are accepted, online and in-store globally (150M+ merchants).",
    },
    {
        q: "What cryptocurrencies can I deposit?",
        a: "We accept all major stablecoins (USDC, USDT, DAI) and privacy-focused coins like Monero (XMR) for funding your card balance.",
    },
    {
        q: "Are there spending limits?",
        a: "We offer high daily spending limits up to $150,000 depending on your card tier. No monthly caps on transaction volume.",
    },
    {
        q: "How long does card issuance take?",
        a: "Virtual cards are issued instantly upon deposit confirmation. You can start spending immediately.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section className="bg-secondary/20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-border rounded-lg bg-card overflow-hidden"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                        >
                            <span className="font-semibold text-lg">{faq.q}</span>
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-accent" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-muted-foreground" />
                            )}
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </Section>
    );
}
