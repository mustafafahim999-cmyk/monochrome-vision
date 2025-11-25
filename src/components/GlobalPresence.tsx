import { MapPin, Globe2 } from "lucide-react";

const offices = [
  {
    type: "Global Office",
    location: "New York, United States",
    address: "380 2nd Ave, New York, NY 10010",
  },
  {
    type: "Headquarters",
    location: "Dhaka, Bangladesh",
    address: "97/5, West Dhanmondi, Dhaka 1209",
  },
];

const markets = [
  "Bangladesh",
  "Thailand",
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Saudi Arabia",
  "UAE",
];

export const GlobalPresence = () => {
  return (
    <section className="py-24 bg-mono-charcoal text-mono-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 geometric-pattern" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mono-white/10 border border-mono-white/20 rounded-full mb-4">
              <Globe2 className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wider">GLOBAL PRESENCE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              Operating Worldwide
            </h2>
            <p className="text-xl text-mono-light max-w-2xl mx-auto">
              Serving clients across continents with strategic offices in key locations
            </p>
          </div>

          {/* Offices */}
          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div 
                key={index}
                className="bg-mono-dark/50 backdrop-blur-sm border border-mono-medium/20 rounded-2xl p-8 space-y-4 hover:bg-mono-dark/70 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-mono-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm uppercase tracking-wider text-mono-light font-semibold">
                      {office.type}
                    </div>
                    <h3 className="text-2xl font-bold">{office.location}</h3>
                    <p className="text-mono-light">{office.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Market Coverage */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Market Coverage</h3>
              <p className="text-mono-light">Active in 9+ countries worldwide</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {markets.map((market, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-mono-white/5 backdrop-blur-sm border border-mono-white/10 rounded-full text-sm font-medium hover:bg-mono-white/10 transition-all"
                >
                  {market}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
