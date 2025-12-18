import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  Cpu,
  MessageCircle,
  Store,
  Sparkles,
  Zap,
  Clock,
  ChevronRight,
  CheckCircle,
  CreditCard,
  BarChart3,
  Target
} from "lucide-react";

const corePillars = [
  {
    title: "AI Automation",
    desc: "Intelligent automation for workflows, lead scoring, follow-ups, and predictive insights. Let AI handle repetitive tasks while you focus on strategy.",
    gradient: "from-orange-500 via-amber-500 to-red-500",
    icon: <Cpu className="w-8 h-8" />,
    stats: "60% Efficiency Boost",
    points: [
      "Smart workflow automation",
      "AI-powered lead scoring",
      "Predictive analytics",
      "Automated follow-ups"
    ],
    demoTitle: "AI Workflow Automation",
    demoDesc: "Watch AI automate your sales process"
  },
  {
    title: "WhatsApp-First CRM",
    desc: "Complete customer relationship management built around WhatsApp. Manage chats, leads, broadcasts, and engagement from one unified platform.",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    icon: <MessageCircle className="w-8 h-8" />,
    stats: "90% Faster Response",
    points: [
      "WhatsApp business integration",
      "Automated chat management",
      "Lead generation from chats",
      "Broadcast campaigns"
    ],
    demoTitle: "WhatsApp CRM Dashboard",
    demoDesc: "Manage all customer conversations"
  },
  {
    title: "Retail-Ready POS & Operations",
    desc: "Complete point-of-sale, inventory management, staff tracking, and business operations built specifically for retail businesses.",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    icon: <Store className="w-8 h-8" />,
    stats: "3x Faster Checkout",
    points: [
      "Integrated POS system",
      "Real-time inventory tracking",
      "Staff performance analytics",
      "Multi-store management"
    ],
    demoTitle: "Retail POS System",
    demoDesc: "Complete checkout in 30 seconds"
  }
];

export default function CoreValuePillars() {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 sm:py-24 px-4 sm:px-6"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Core Value{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 bg-clip-text text-transparent">
              Pillars
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Three powerful solutions that form the foundation of business transformation.
            Each pillar delivers measurable results and drives sustainable growth.
          </p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
        >
          {corePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full rounded-3xl bg-white border border-gray-200 shadow-xl p-6 sm:p-8 flex flex-col"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6`}>
                  <div className="text-white">{pillar.icon}</div>
                </div>

                <span className="inline-block mb-3 text-sm font-bold bg-gradient-to-r bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to right, #fb923c, #ef4444)`
                  }}
                >
                  {pillar.stats}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                  {pillar.desc}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pillar.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm sm:text-base">
                      <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Demo */}
                <div className="rounded-xl border bg-gray-50 p-4 mb-6">
                  <p className="font-semibold text-sm">{pillar.demoTitle}</p>
                  <p className="text-xs text-gray-500">{pillar.demoDesc}</p>
                </div>

                <button className="mt-auto w-full rounded-xl bg-gray-900 text-white py-3 font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                  Explore {pillar.title.split(" ")[0]}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Combined Impact */}
        <div className="mt-20 sm:mt-24 rounded-3xl bg-white border border-gray-200 p-6 sm:p-10 shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full mb-4">
              <Target className="w-4 h-4" />
              <span className="font-bold text-sm">COMBINED IMPACT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              When All Three Pillars Work Together
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Our integrated platform delivers exponential results when all three core pillars work in harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { value: "70%", title: "Automation", color: "from-orange-500 to-red-500" },
              { value: "95%", title: "Customer Experience", color: "from-green-500 to-emerald-500" },
              { value: "3x", title: "Efficiency", color: "from-blue-500 to-purple-500" }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border p-6 bg-gray-50">
                <div className={`text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                  {item.value}
                </div>
                <p className="font-semibold">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold shadow-xl hover:shadow-2xl transition">
              <CreditCard className="w-5 h-5" />
              Transform Your Business
            </button>
            <p className="text-xs sm:text-sm text-gray-500 mt-4">
              Free consultation • Custom setup • ROI focused
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
