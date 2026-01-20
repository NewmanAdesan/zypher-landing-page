

export function Footer() {
    return (
        <footer className="bg-card border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center h-8 mb-6">
                            <img
                                src="/Light-Theme-Zypher-Logo.png"
                                alt="Zypher Logo"
                                className="h-full w-auto block dark:hidden"
                            />
                            <img
                                src="/Dark-theme-zypher-logo.png"
                                alt="Zypher Logo"
                                className="h-full w-auto hidden dark:block"
                            />
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            The world's most private, secure, and anonymous crypto card platform.
                            Banking without the bank.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-accent transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Card Options</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Offshore details</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Press Kit</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Support</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">System Status</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">API Documentation</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground order-2 md:order-1">
                        © 2025 ZYPHER.CARDS. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 order-1 md:order-2">
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Trusted by</div>
                        {/* Logos placeholder using text for accessibility if images missing */}
                        <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                            {/* We would typically use SVGs here */}
                            <span className="text-xs font-bold">VISA</span>
                            <span className="text-xs font-bold">MASTERCARD</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
