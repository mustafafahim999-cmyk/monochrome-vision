import { Mail, Globe } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mono-charcoal text-mono-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">EIZZIE</h3>
            <p className="text-mono-light text-sm leading-relaxed">
              Empowering Business, Enabling Innovation through intelligent digital transformation.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-mono-light text-sm">
              <li><a href="#" className="hover:text-mono-white transition-colors">START-UP</a></li>
              <li><a href="#" className="hover:text-mono-white transition-colors">SCALE</a></li>
              <li><a href="#" className="hover:text-mono-white transition-colors">ENTERPRISE</a></li>
              <li><a href="#" className="hover:text-mono-white transition-colors">ADVANCED</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-mono-light text-sm">
              <li><a href="#" className="hover:text-mono-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-mono-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-mono-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-mono-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-mono-light text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:ask@eizzie.tech" className="hover:text-mono-white transition-colors">
                  ask@eizzie.tech
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://www.eizzie.tech" className="hover:text-mono-white transition-colors">
                  www.eizzie.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-mono-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-mono-light text-sm">
            © {currentYear} EIZZIE. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-mono-light">
            <a href="#" className="hover:text-mono-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-mono-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
