import { motion, useAnimation, useInView } from "framer-motion";
import {Link} from "react-router-dom"
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
  Zap,
  Sparkles,
  Target,
  ArrowRight,
  BarChart3,
  Cloud,
  Cpu,
  Shield
} from "lucide-react";

const modules = [
  {
    name: "NexaCRM",
    desc: "Complete customer relationship management with AI-driven insights, lead scoring, and automated follow-ups.",
    icon: Brain,
    gradient: "from-indigo-500 via-purple-500 to-purple-600",
    stats: "85% Lead Conversion",
    features: ["AI Lead Scoring", "Customer 360 View", "Automated Follow-ups", "Sales Pipeline"]
  },
  {
    name: "NexaHR",
    desc: "Human resources management including staff tracking, payroll automation, attendance, and performance analytics.",
    icon: Users,
    gradient: "from-pink-500 via-rose-500 to-pink-600",
    stats: "40% HR Time Saved",
    features: ["Automated Payroll", "Attendance Tracking", "Performance Reviews", "Leave Management"]
  },
  {
    name: "NexaOps",
    desc: "Daily business operations, workflow automation, approval systems, and process management.",
    icon: Settings,
    gradient: "from-teal-500 via-emerald-500 to-green-500",
    stats: "60% Efficiency Gain",
    features: ["Workflow Automation", "Approval Systems", "Process Tracking", "Task Management"]
  },
  {
    name: "NexaPulse",
    desc: "Advanced analytics, real-time business health monitoring, and actionable insights dashboard.",
    icon: Activity,
    gradient: "from-cyan-500 via-blue-500 to-cyan-600",
    stats: "50% Faster Decisions",
    features: ["Real-time Analytics", "Business Health", "Predictive Insights", "Custom Reports"]
  },
  {
    name: "NexaReach",
    desc: "Marketing automation, WhatsApp campaigns, customer engagement, and multi-channel outreach.",
    icon: Megaphone,
    gradient: "from-violet-500 via-indigo-500 to-purple-500",
    stats: "3x Engagement",
    features: ["WhatsApp Marketing", "Email Campaigns", "Social Media", "Lead Nurturing"]
  },
  {
    name: "NexaCare",
    desc: "Customer support ticketing system, success management, and automated issue resolution.",
    icon: HeartPulse,
    gradient: "from-red-500 via-pink-500 to-rose-500",
    stats: "95% Satisfaction",
    features: ["Ticketing System", "Live Chat", "Knowledge Base", "Customer Success"]
  },
  {
    name: "NexaBill",
    desc: "Complete billing, invoicing, payment processing, and financial management system.",
    icon: Receipt,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    stats: "2x Faster Invoicing",
    features: ["Automated Invoicing", "Payment Processing", "Tax Calculation", "Expense Tracking"]
  },
  {
    name: "NexaStock",
    desc: "Inventory management, vendor relations, stock control, and supply chain optimization.",
    icon: Boxes,
    gradient: "from-green-500 via-lime-500 to-emerald-500",
    stats: "30% Stock Optimized",
    features: ["Inventory Tracking", "Vendor Management", "Stock Alerts", "Order Management"]
  },
];

export default function ModulesOverview() {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9,
      rotateX: -10
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5
      }
    }
  };

  const cardHoverVariants = {
    rest: { 
      scale: 1,
      y: 0,
      rotateY: 0
    },
    hover: { 
      scale: 1.05,
      y: -15,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const floatAnimation = {
    y: [0, -20, 0],
    rotate: [0, 3, 0, -3, 0],
    transition: {
      duration: 4,
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
    <section ref={sectionRef} className="relative py-28 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles - lighter colors */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-br from-indigo-300/40 to-purple-300/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient orbs - very subtle for light theme */}
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl"
          animate={floatAnimation}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-r from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"
          animate={floatAnimation}
          transition={{ delay: 1 }}
        />

        {/* Grid pattern - very subtle */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div
              className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
              animate={{ 
                scale: [1, 1.1, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              <Cpu className="w-7 h-7 text-white" />
            </motion.div>
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-bold mt-2">
                Modules{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Overview
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
            A complete AI-ready business operating system with modular solutions for every aspect of your business
          </motion.p>
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {modules.map((mod, index) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={mod.name}
                variants={itemVariants}
                custom={index}
                className="relative group"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${mod.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[0]}, ${mod.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[2]})`
                  }}
                />
                
                {/* Main Card */}
                <motion.div
                  className="relative h-full rounded-2xl bg-white p-6 shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    animate={shimmerAnimation}
                    style={{
                      backgroundSize: "200% 200%",
                      backgroundImage: `linear-gradient(45deg, ${mod.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[0]}, ${mod.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[1]}, ${mod.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[2]})`
                    }}
                  />

                  {/* AI Ready Badge */}
                  <motion.div
                    className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-indigo-50 to-purple-50 backdrop-blur rounded-full px-3 py-1 border border-indigo-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Zap className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs font-bold text-indigo-600">AI-Ready</span>
                  </motion.div>

                  {/* Icon */}
                  <div className="mb-6">
                    <motion.div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${mod.gradient} shadow-lg`}
                      animate={floatAnimation}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {mod.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {mod.desc}
                    </p>

                    {/* Stats */}
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <div className="text-2xl font-bold bg-gradient-to-br bg-clip-text text-transparent"
                        style={{ 
                          backgroundImage: `linear-gradient(to right, ${mod.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[0]}, ${mod.gradient.replace('from-', '').replace('to-', '').replace('via-', '').split(' ')[2]})`
                        }}
                      >
                        {mod.stats}
                      </div>
                    </motion.div>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {mod.features.map((feature, idx) => (
                        <motion.span
                          key={idx}
                          className="inline-block px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full border border-gray-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: 'rgb(249, 250, 251)',
                            borderColor: 'rgb(229, 231, 235)'
                          }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>

                    {/* Explore Button */}
                    <motion.button
                      className="w-full py-3 bg-gray-50 text-gray-700 font-medium rounded-xl border border-gray-300 flex items-center justify-center gap-2 hover:border-gray-400 hover:bg-gray-100 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Explore Module</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Platform Features Banner */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud-Native",
                desc: "Access anywhere, anytime",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enterprise Security",
                desc: "Bank-grade encryption",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Real-time Analytics",
                desc: "Live business insights",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "AI Integration",
                desc: "Smart automation ready",
                color: "from-orange-500 to-amber-500"
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  animate={{ 
                    rotateY: [0, 180, 360],
                    transition: { duration: 4, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <div className="text-white">{feature.icon}</div>
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="mt-12 text-center"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full px-6 py-3 mb-6 border border-indigo-200">
              <Target className="w-5 h-5 text-indigo-600" />
              <span className="font-bold text-indigo-700">Complete Business Solution</span>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business Operations?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
              
            <Link to="/bookdemo">
  <motion.button
    className="px-10 py-4 border-2 border-indigo-500 text-indigo-600 font-bold rounded-full hover:bg-indigo-50 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Request Demo
  </motion.button>
</Link>
            </div>
            
            <p className="text-gray-500 text-sm mt-6">All modules included • 30-day free trial • No credit card required</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}