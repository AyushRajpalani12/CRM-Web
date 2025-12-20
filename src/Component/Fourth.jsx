import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import {
  Brain,
  Users,
  Settings,
  Activity,
  Megaphone,
  HeartPulse,
  Receipt,
  Boxes,
  ArrowRight,
  Cpu
} from "lucide-react";

const modules = [
  {
    name: "NexaCRM",
    desc: "Complete customer relationship management with AI-driven insights, lead scoring, and automated follow-ups.",
    icon: Brain,
    gradient: "from-indigo-500 via-purple-500 to-purple-600",
    stats: "85% Lead Conversion",
    features: ["AI Lead Scoring", "Customer 360 View", "Automated Follow-ups", "Sales Pipeline"],
    Link: "/nexacrm"
  },
  {
    name: "NexaHR",
    desc: "Human resources management including staff tracking, payroll automation, attendance, and performance analytics.",
    icon: Users,
    gradient: "from-pink-500 via-rose-500 to-pink-600",
    stats: "40% HR Time Saved",
    features: ["Automated Payroll", "Attendance Tracking", "Performance Reviews", "Leave Management"],
    Link: "/nexahr"
  },
  {
    name: "Nexaops",
    desc: "Daily business operations, workflow automation, approval systems, and process management.",
    icon: Settings,
    gradient: "from-teal-500 via-emerald-500 to-green-500",
    stats: "60% Efficiency Gain",
    features: ["Workflow Automation", "Approval Systems", "Process Tracking", "Task Management"],
    Link: "/nexaops"
  },
  {
    name: "Nexapulse",
    desc: "Advanced analytics, real-time business health monitoring, and actionable insights dashboard.",
    icon: Activity,
    gradient: "from-cyan-500 via-blue-500 to-cyan-600",
    stats: "50% Faster Decisions",
    features: ["Real-time Analytics", "Business Health", "Predictive Insights", "Custom Reports"],
    Link: "/nexapulse"
  },
  {
    name: "NexaReach",
    desc: "Marketing automation, WhatsApp campaigns, customer engagement, and multi-channel outreach.",
    icon: Megaphone,
    gradient: "from-violet-500 via-indigo-500 to-purple-500",
    stats: "3x Engagement",
    features: ["WhatsApp Marketing", "Email Campaigns", "Social Media", "Lead Nurturing"],
    Link: "/nexareach"
  },
  {
    name: "NexaCare",
    desc: "Customer support ticketing system, success management, and automated issue resolution.",
    icon: HeartPulse,
    gradient: "from-red-500 via-pink-500 to-rose-500",
    stats: "95% Satisfaction",
    features: ["Ticketing System", "Live Chat", "Knowledge Base", "Customer Success"],
    Link: "/nexacare"
  },
  {
    name: "NexaBill",
    desc: "Complete billing, invoicing, payment processing, and financial management system.",
    icon: Receipt,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    stats: "2x Faster Invoicing",
    features: ["Automated Invoicing", "Payment Processing", "Tax Calculation", "Expense Tracking"],
    Link: "/nexabill"
  },
  {
    name: "NexaStock",
    desc: "Inventory management, vendor relations, stock control, and supply chain optimization.",
    icon: Boxes,
    gradient: "from-green-500 via-lime-500 to-emerald-500",
    stats: "30% Stock Optimized",
    features: ["Inventory Tracking", "Vendor Management", "Stock Alerts", "Order Management"],
    Link: "/nexastock"
  }
];

export default function ModulesOverview() {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Cpu className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
              Modules{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Overview
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            A complete AI-ready business operating system with modular solutions for every aspect of your business
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {modules.map((mod, index) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition"
                whileHover={{ y: -10, scale: 1.03 }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mod.gradient} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-2">{mod.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{mod.desc}</p>

                <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {mod.stats}
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                  {mod.features.map((f, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-gray-50 border border-gray-200 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Explore Button with Link */}
                <Link to={mod.Link} className="block">
                  <button className="w-full py-3 sm:py-3.5 bg-gray-50 border border-gray-300 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                    Explore Module <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            Ready to Transform Your Business Operations?
          </h3>

          <Link to="/bookdemo">
            <button className="px-10 py-4 border-2 border-indigo-500 text-indigo-600 font-bold rounded-full hover:bg-indigo-50 transition">
              Request Demo
            </button>
          </Link>

          <p className="text-gray-500 text-sm mt-6">
            All modules included • 30-day free trial • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
