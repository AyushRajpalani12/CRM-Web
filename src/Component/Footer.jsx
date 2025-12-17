import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/main3.png";

import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  ChevronRight,
  Sparkles,
  Shield,
  Globe,
  MessageCircle,
  Zap,
  Target,
  Building,
  Users,
  BarChart,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail("");
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
  ];

  const solutions = [
    { name: "AI Automation", icon: <Zap className="w-4 h-4" /> },
    { name: "WhatsApp CRM", icon: <MessageCircle className="w-4 h-4" /> },
    { name: "Retail POS", icon: <Building className="w-4 h-4" /> },
    { name: "Inventory Management", icon: <BarChart className="w-4 h-4" /> },
    { name: "Staff Management", icon: <Users className="w-4 h-4" /> },
    { name: "Business Analytics", icon: <Target className="w-4 h-4" /> },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, name: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
             <div className="flex items-center gap-4">
  <img
    src={logo}
    alt="NexaCoginita Logo"
    className="h-25 w-auto object-contain"
  />

  <div>
    <h3 className="text-2xl font-bold">NexaCoginita</h3>
    <p className="text-sm text-slate-400">AI-Powered Business Platform</p>
  </div>
</div>

             
            </div>
            <p className="text-slate-300">
              Empowering businesses with intelligent automation and integrated solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Shield className="w-4 h-4 text-green-400" /> Trusted worldwide
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="flex items-center gap-2 text-slate-300 hover:text-white">
                    <ChevronRight className="w-4 h-4" /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-bold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((sol) => (
                <li key={sol.name} className="flex items-center gap-3 text-slate-300">
                  {sol.icon} {sol.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <div className="space-y-3 text-slate-300">
              <div className="flex gap-2"><MapPin className="w-4 h-4" /> Bangalore, India</div>
              <div className="flex gap-2"><Phone className="w-4 h-4" /> +91 1800 123 4567</div>
              <div className="flex gap-2"><Mail className="w-4 h-4" /> sales@nexacoginita.com</div>
            </div>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl"
                required
              />
              <button className="w-full py-3 bg-indigo-600 rounded-xl font-bold">
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2"><Globe className="w-4 h-4" /> English (Global)</div>
          <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a></div>
          <div>© {new Date().getFullYear()} NexaCoginita</div>
        </div>

        {/* Support Button */}
        <motion.button
          // className="fixed bottom-8 left-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center"
          // whileHover={{ scale: 1.1 }}
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;