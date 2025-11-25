import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, TrendingUp, Building2, Sparkles } from "lucide-react";

const serviceTiers = [
  {
    icon: Rocket,
    title: "START-UP",
    description: "Transform ideas into reality",
    features: [
      "Minimum Viable Product (MVP)",
      "Rapid Prototyping",
      "Branding & Identity Kit",
      "Landing Pages",
      "Analytics Integration",
    ],
    highlight: "Launch fast, build smart",
  },
  {
    icon: TrendingUp,
    title: "SCALE",
    description: "Accelerate your growth",
    features: [
      "Growth Automation",
      "CRM & Marketing Integration",
      "Advanced Analytics",
      "API Development",
      "Performance Optimization",
    ],
    highlight: "Scale with confidence",
  },
  {
    icon: Building2,
    title: "ENTERPRISE",
    description: "Power your organization",
    features: [
      "Cloud Infrastructure",
      "AI Integration",
      "Custom SaaS Solutions",
      "Security & Compliance",
      "24/7 Support",
    ],
    highlight: "Enterprise-grade solutions",
  },
  {
    icon: Sparkles,
    title: "ADVANCED",
    description: "Lead with innovation",
    features: [
      "Web3 & Blockchain",
      "Custom AI/ML Models",
      "IoT Solutions",
      "Advanced Data Science",
      "R&D Partnerships",
    ],
    highlight: "Future-ready technology",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-mono-offwhite">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-mono-black">
            Service Ecosystem
          </h2>
          <p className="text-xl text-mono-medium">
            Four progressive tiers designed to evolve with your ambition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {serviceTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 border-mono-light/50 hover:border-mono-charcoal bg-card hover:scale-105"
              >
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-mono-charcoal text-mono-white flex items-center justify-center group-hover:bg-mono-black transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-mono-black mb-2">
                      {tier.title}
                    </CardTitle>
                    <CardDescription className="text-mono-medium">
                      {tier.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-mono-dark">
                        <div className="w-1.5 h-1.5 rounded-full bg-mono-charcoal mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-mono-light/50">
                    <p className="text-xs uppercase tracking-wider text-mono-medium font-semibold">
                      {tier.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
