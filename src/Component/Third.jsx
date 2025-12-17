import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from 'react';
import { 
  Bot, 
  MessageSquare, 
  ShoppingBag, 
  Sparkles, 
  Zap, 
  Clock,
  TrendingUp,
  Users,
  ChevronRight,
  CheckCircle,
  Smartphone,
  CreditCard,
  BarChart3,
  Target,
  Cpu,
  MessageCircle,
  Store
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
  },
];

export default function CoreValuePillars() {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5
      }
    }
  };

  const hoverVariants = {
    rest: { 
      scale: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0
    },
    hover: { 
      scale: 1.05,
      y: -15,
      rotateX: 5,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const floatAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const shimmerAnimation = {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-b from-orange-300/20 to-purple-300/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              rotate: [0, 360, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-orange-300/20 to-red-300/20 rounded-full blur-3xl"
          animate={floatAnimation}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"
          animate={floatAnimation}
          transition={{ delay: 1 }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="text-center">
              {/* <span className="text-orange-600 font-bold text-lg tracking-wider">6.3</span> */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight">
                Core Value{' '}
                <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 bg-clip-text text-transparent">
                  Pillars
                </span>
              </h2>
            </div>
          </div>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Three powerful solutions that form the foundation of business transformation.
            Each pillar delivers measurable results and drives sustainable growth.
          </motion.p>
        </motion.div>

        {/* Core Pillars Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {corePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              custom={index}
              className="relative group"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-br rounded-3xl opacity-0 group-hover:opacity-50 blur transition duration-300"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${pillar.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[0]}, ${pillar.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[2]})`
                }}
              />
              
              {/* Main Card */}
              <motion.div
                className="relative h-full rounded-3xl bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm p-8 shadow-2xl border border-gray-200 overflow-hidden"
                variants={hoverVariants}
                initial="rest"
                whileHover="hover"
              >
                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-5"
                  animate={shimmerAnimation}
                  style={{
                    backgroundSize: "200% 200%",
                    backgroundImage: `linear-gradient(45deg, ${pillar.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[0]}, ${pillar.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[1]}, ${pillar.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[2]})`
                  }}
                />

                {/* Pillar Number */}
                <div className="absolute top-6 left-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </div>

                {/* Icon and Header */}
                <div className="relative mb-8">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                      animate={floatAnimation}
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <div className="text-white">
                        {pillar.icon}
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="px-4 py-2 bg-gradient-to-br from-gray-100 to-white rounded-full shadow-sm border border-gray-200"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        transition: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                      }}
                    >
                      <span className="text-sm font-bold bg-gradient-to-br bg-clip-text text-transparent"
                        style={{ 
                          backgroundImage: `linear-gradient(to right, ${pillar.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[0]}, ${pillar.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[2]})`
                        }}
                      >
                        {pillar.stats}
                      </span>
                    </motion.div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* Key Features */}
                <div className="relative mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Zap className="w-5 h-5 text-orange-500" />
                    </motion.div>
                    <span className="text-sm font-semibold text-gray-700">Core Capabilities:</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {pillar.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 + index * 0.2 }}
                      >
                        <motion.div
                          className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <CheckCircle className="w-3 h-3 text-white" />
                        </motion.div>
                        <span className="font-medium">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Live Demo Preview */}
                <motion.div 
                  className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 mb-6 border border-gray-300 shadow-sm"
                  whileHover={{ backgroundColor: 'rgba(243, 244, 246, 0.8)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-semibold text-gray-900">{pillar.demoTitle}</p>
                      <p className="text-sm text-gray-500">{pillar.demoDesc}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5 text-orange-500" />
                    </motion.div>
                  </div>
                  
                  {/* Demo Interface */}
                  <div className="space-y-3">
                    {index === 0 && (
                      <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                          <Cpu className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">AI processing workflows...</p>
                          <p className="text-xs text-gray-500">Automating 15+ daily tasks</p>
                        </div>
                        <Clock className="w-4 h-4 text-green-500" />
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-sm">
                            <p className="font-medium text-gray-900">12 new WhatsApp leads</p>
                            <p className="text-xs text-gray-500">Automated responses sent</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                          <span className="text-sm text-gray-800">Today's Sales</span>
                          <span className="font-bold text-blue-600">₹45,280</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                          <span className="text-sm text-gray-800">Items Sold</span>
                          <span className="font-bold text-blue-600">128</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Action Button */}
                <motion.button
                  className="group relative w-full px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold rounded-xl shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100"
                    style={{ 
                      backgroundImage: `linear-gradient(to right, ${pillar.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[0]}, ${pillar.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[2]})`
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative flex items-center justify-center gap-3">
                    Explore {pillar.title.split(' ')[0]}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Combined Impact Section */}
        <motion.div
          className="mt-24 bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full mb-6">
              <Target className="w-5 h-5" />
              <span className="font-bold">COMBINED IMPACT</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              When All Three Pillars Work Together
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our integrated platform delivers exponential results when all three core pillars 
              work in harmony to transform your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "End-to-End Automation",
                desc: "From customer contact to checkout, everything flows seamlessly",
                color: "from-orange-500 to-red-500",
                value: "70%"
              },
              {
                title: "Customer Experience",
                desc: "Unified communication and personalized service delivery",
                color: "from-green-500 to-emerald-500",
                value: "95%"
              },
              {
                title: "Operational Efficiency",
                desc: "Streamlined processes and data-driven decision making",
                color: "from-blue-500 to-purple-500",
                value: "3x"
              },
            ].map((impact, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 text-center border border-gray-200"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 30px 60px rgba(255, 107, 0, 0.1)",
                  scale: 1.05
                }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className={`text-5xl font-bold bg-gradient-to-br ${impact.color} bg-clip-text text-transparent mb-4`}>
                  {impact.value}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{impact.title}</h4>
                <p className="text-gray-600">{impact.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Platform Integration Diagram */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-6 border border-orange-100"
            animate={{ 
              boxShadow: [
                "0 10px 40px rgba(255, 107, 0, 0.1)",
                "0 20px 50px rgba(255, 107, 0, 0.15)",
                "0 10px 40px rgba(255, 107, 0, 0.1)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Platform Integration Flow</p>
                  <p className="text-sm text-gray-500">How all three pillars work together</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-semibold">Synced & Active</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-900">AI Automation</p>
                <p className="text-xs text-gray-500">Processes Data →</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-900">WhatsApp CRM</p>
                <p className="text-xs text-gray-500">Engages Customers →</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Retail POS</p>
                <p className="text-xs text-gray-500">Completes Sales</p>
              </div>
            </div>

            {/* Final CTA */}
            <motion.div 
              className="mt-10 text-center"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <button className="inline-flex items-center gap-3 px-12 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CreditCard className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Transform Your Business with All Three Pillars
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  ✨
                </motion.span>
              </button>
              <p className="text-sm text-gray-500 mt-4">Free business consultation • Custom implementation • ROI guarantee</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}