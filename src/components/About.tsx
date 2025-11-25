import { Target, Zap, Brain } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Precision",
    description: "High-quality delivery with clean, minimal, and modern solutions that exceed expectations.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Quick execution powered by internal templates, frameworks, and reusable components.",
  },
  {
    icon: Brain,
    title: "Strategy First",
    description: "We don't just sell visuals—we sell thinking, structure, and logic that drives results.",
  },
];

export const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-mono-charcoal/10 border border-mono-light/20 rounded-full">
                <span className="text-sm font-medium text-mono-charcoal tracking-wider">WHO WE ARE</span>
              </div>
              <h2 className="text-5xl font-bold text-mono-black leading-tight">
                A Lean Intelligence Company
              </h2>
              <p className="text-lg text-mono-medium leading-relaxed">
                EIZZIE is a next-generation technology company built to empower brands, businesses, 
                and innovators through intelligent digital transformation. We bridge creativity, 
                technology, and strategy to design scalable systems that grow with ambition.
              </p>
              <p className="text-lg text-mono-medium leading-relaxed">
                From early-stage startups to advanced enterprises adopting AI and Web3 innovations, 
                we don't just develop software—we engineer growth ecosystems.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mono-charcoal to-mono-dark rounded-3xl transform rotate-3" />
              <div className="relative bg-mono-black rounded-3xl p-12 text-mono-white space-y-6">
                <h3 className="text-2xl font-bold">Our Motto</h3>
                <p className="text-4xl font-bold leading-tight">
                  "Empowering Business, Enabling Innovation"
                </p>
                <div className="pt-6 space-y-2 text-mono-light">
                  <p className="text-sm">Est. October 10, 2020</p>
                  <p className="text-sm">Global Digital Transformation Partner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core principles */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-mono-black">Our Core Principles</h3>
              <p className="text-mono-medium">The foundation of everything we build</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div 
                    key={index}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-mono-charcoal to-mono-dark rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                    <div className="relative bg-card border-2 border-mono-light/50 rounded-2xl p-8 space-y-4 hover:border-mono-charcoal transition-all">
                      <div className="w-12 h-12 rounded-xl bg-mono-charcoal text-mono-white flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-2xl font-bold text-mono-black">{principle.title}</h4>
                      <p className="text-mono-medium leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
