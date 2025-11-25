import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-mono-charcoal rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-mono-dark rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo/Brand */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mono-charcoal/10 border border-mono-light/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-mono-charcoal" />
            <span className="text-sm font-medium text-mono-charcoal tracking-wider">EIZZIE</span>
          </div>

          {/* Main headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block text-mono-black">Empowering Business,</span>
            <span className="block text-mono-charcoal mt-2">Enabling Innovation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-mono-medium max-w-3xl mx-auto leading-relaxed">
            Next-generation digital transformation through intelligent systems, 
            scalable solutions, and strategic innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-mono-charcoal hover:bg-mono-black text-mono-white px-8 py-6 text-lg group transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-mono-charcoal text-mono-charcoal hover:bg-mono-charcoal hover:text-mono-white px-8 py-6 text-lg transition-all duration-300"
            >
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { label: "Established", value: "2020" },
              { label: "Global Offices", value: "2" },
              { label: "Countries", value: "9+" },
              { label: "Service Tiers", value: "4" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-mono-black">{stat.value}</div>
                <div className="text-sm text-mono-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
