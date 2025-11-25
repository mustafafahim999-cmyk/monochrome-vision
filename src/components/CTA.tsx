import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-mono-charcoal to-mono-dark rounded-3xl transform -rotate-1" />
            
            {/* Content card */}
            <div className="relative bg-mono-black rounded-3xl p-12 md:p-16 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-mono-white">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-mono-light max-w-2xl mx-auto">
                  Let's discuss how EIZZIE can help you build scalable, intelligent solutions 
                  that drive growth and innovation.
                </p>
              </div>

              {/* Contact form */}
              <div className="max-w-md mx-auto space-y-4">
                <div className="flex gap-3">
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="bg-mono-white/10 border-mono-white/20 text-mono-white placeholder:text-mono-light focus:border-mono-white h-12"
                  />
                  <Button 
                    size="lg"
                    className="bg-mono-white text-mono-black hover:bg-mono-light px-6"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact
                  </Button>
                </div>
                <p className="text-sm text-mono-light">
                  Or email us directly at{" "}
                  <a 
                    href="mailto:ask@eizzie.tech" 
                    className="text-mono-white hover:underline font-medium"
                  >
                    ask@eizzie.tech
                  </a>
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-mono-white/10">
                {[
                  { value: "100+", label: "Projects Delivered" },
                  { value: "50+", label: "Happy Clients" },
                  { value: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-mono-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-mono-light">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
