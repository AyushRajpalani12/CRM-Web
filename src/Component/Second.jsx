import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { 
  Store, 
  Gem, 
  Car, 
  Home, 
  Scissors, 
  Dumbbell,
  Stethoscope,
  Building,
  Target,
  Zap,
  Users,
  TrendingUp
} from "lucide-react";

const industries = [
  {
    title: "Retail Stores",
    desc: "Complete POS, inventory management, customer loyalty programs, and real-time sales analytics",
    gradient: "from-orange-400 to-pink-500",
    icon: <Store className="w-8 h-8" />,
    stats: "45% Sales Increase",
    features: ["Smart Inventory", "Loyalty Programs", "Sales Analytics", "Multi-store Sync"]
  },
  {
    title: "Jewellery Business",
    desc: "High-value sales tracking, customer history management, and automated follow-up system",
    gradient: "from-yellow-400 to-orange-500",
    icon: <Gem className="w-8 h-8" />,
    stats: "3x Client Retention",
    features: ["Valuation Tracking", "Customer History", "Secure Transactions", "Custom Catalog"]
  },
  {
    title: "Automobile Dealership",
    desc: "Lead management, test drive scheduling, service tracking, and sales pipeline automation",
    gradient: "from-blue-500 to-indigo-600",
    icon: <Car className="w-8 h-8" />,
    stats: "60% Faster Sales",
    features: ["Lead Scoring", "Test Drive Booking", "Service History", "Inventory Mgmt"]
  },
  {
    title: "Real Estate",
    desc: "Property lead management, site visit scheduling, deal pipeline tracking, and client communication",
    gradient: "from-emerald-400 to-teal-600",
    icon: <Home className="w-8 h-8" />,
    stats: "2.5x Conversions",
    features: ["Property CRM", "Site Visit Mgmt", "Deal Pipeline", "Document Tracking"]
  },
  {
    title: "Salon & Spa",
    desc: "Appointment scheduling, staff management, customer profiles, and membership programs",
    gradient: "from-pink-500 to-rose-500",
    icon: <Scissors className="w-8 h-8" />,
    stats: "95% Retention Rate",
    features: ["Smart Booking", "Staff Roster", "Client History", "Membership Plans"]
  },
  {
    title: "Gym & Fitness",
    desc: "Membership management, trainer scheduling, attendance tracking, and renewal automation",
    gradient: "from-red-500 to-orange-500",
    icon: <Dumbbell className="w-8 h-8" />,
    stats: "40% Growth",
    features: ["Member Portal", "Trainer Booking", "Attendance", "Payment Automation"]
  },
  {
    title: "Clinics & Hospitals",
    desc: "Patient management, appointment scheduling, billing automation, and follow-up system",
    gradient: "from-cyan-500 to-blue-600",
    icon: <Stethoscope className="w-8 h-8" />,
    stats: "50% Efficiency",
    features: ["Patient Records", "Appointment Mgmt", "Billing", "Follow-up System"]
  },
  {
    title: "Multi-Branch",
    desc: "Centralized control across multiple locations with unified reporting and management",
    gradient: "from-purple-500 to-indigo-600",
    icon: <Building className="w-8 h-8" />,
    stats: "Unified Control",
    features: ["Central Dashboard", "Branch Analytics", "Stock Transfer", "Staff Sync"]
  },
];

export default function IndustryGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });
  const controls = useAnimation();

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
      y: 60, 
      opacity: 0,
      scale: 0.9
    },
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

  const cardHoverVariants = {
    rest: { 
      scale: 1,
      y: 0,
      rotateX: 0
    },
    hover: { 
      scale: 1.05,
      y: -15,
      rotateX: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section ref={ref} className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-500/10 rounded-full blur-3xl"
          animate={floatAnimation}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={floatAnimation}
          transition={{ delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div
              className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              <Target className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
                Built for{' '}
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Every Business Type
                </span>
              </h2>
            </div>
          </div>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            One AI-powered platform that adapts to multiple industries with customized solutions
          </motion.p>
        </motion.div>

        {/* Industry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              variants={itemVariants}
              custom={index}
            >
              <motion.div
                className="group relative h-full bg-white rounded-3xl p-6 shadow-xl border border-gray-100 overflow-hidden"
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
              >
                {/* Animated Gradient Background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${industry.gradient.replace('from-', '').replace('to-', '').split(' ')[0]}, ${industry.gradient.replace('from-', '').replace('to-', '').split(' ')[1]})`
                  }}
                />

                {/* Industry Icon */}
                <div className="relative mb-4">
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${industry.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                    animate={floatAnimation}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-white">
                      {industry.icon}
                    </div>
                  </motion.div>
                  
                  {/* Stats Badge */}
                  <motion.div
                    className="absolute -top-2 -right-2 bg-gradient-to-br from-white to-gray-50 rounded-full px-3 py-1 shadow-sm border border-gray-200"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      transition: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                    }}
                  >
                    <span className="text-xs font-bold bg-gradient-to-br bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${industry.gradient.replace('from-', '').replace('to-', '').split(' ')[0]}, ${industry.gradient.replace('from-', '').replace('to-', '').split(' ')[1]})`
                      }}
                    >
                      {industry.stats}
                    </span>
                  </motion.div>
                </div>

                {/* Industry Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {industry.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {industry.desc}
                  </p>

                  {/* Feature Points */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-orange-500" />
                      <span className="text-xs font-semibold text-gray-700">Key Features:</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {industry.features.map((feature, idx) => (
                        <motion.span
                          key={idx}
                          className="inline-block px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-xs text-gray-700 rounded-full border border-gray-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.1 + index * 0.1 }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: 'rgba(255, 255, 255, 0.9)'
                          }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="group relative w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-white text-gray-800 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2 text-sm">
                      Explore Solution
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Business Benefits Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 rounded-3xl p-8 shadow-xl border border-orange-100"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                One Platform,{' '}
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Infinite Possibilities
                </span>
              </h3>
              <p className="text-gray-600 mb-6">
                Whether you're running a single salon or managing multiple retail stores, 
                our AI-powered platform adapts to your unique business needs with 
                customizable modules and scalable solutions.
              </p>
              
              <div className="space-y-4">
                {[
                  "Fully customizable dashboards",
                  "Industry-specific templates",
                  "Scalable from 1 to 1000+ users",
                  "Multi-language & currency support"
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Users />, value: "10,000+", label: "Businesses" },
                { icon: <TrendingUp />, value: "98%", label: "Satisfaction" },
                { icon: <Zap />, value: "3x", label: "Growth Rate" },
                { icon: <Target />, value: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg border border-orange-100"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255, 107, 0, 0.15)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-3 mx-auto">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Unified CTA */}
          <motion.div 
            className="mt-10 text-center"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <button className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-shadow">
              <Target className="w-5 h-5" />
              Get Started for Your Industry
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span>
            </button>
            <p className="text-sm text-gray-500 mt-4">Free consultation • Custom solution • 30-day trial</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}