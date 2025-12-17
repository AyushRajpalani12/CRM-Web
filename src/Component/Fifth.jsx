import { motion } from "framer-motion";
import { 
  Building, 
  Layers, 
  Scale, 
  Brain, 
  Shield, 
  Cloud,
  Target,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: <Building className="w-8 h-8" />,
    title: "Built for Indian Businesses",
    description: "Customized for the unique needs of Indian salons, with local payment gateways, GST compliance, and regional language support.",
    gradient: "from-orange-500 to-amber-500",
    points: ["GST-compliant invoices", "UPI & local payments", "Regional language UI", "Cultural customization"]
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Multi-Industry Ready",
    description: "Proven across beauty, wellness, and retail sectors. Perfect for salons, spas, barber shops, and beauty product stores.",
    gradient: "from-emerald-500 to-teal-500",
    points: ["Salon management", "Spa operations", "Retail inventory", "Service booking"]
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Modular & Scalable",
    description: "Start with what you need, add modules as you grow. Scale from single location to multi-chain operations seamlessly.",
    gradient: "from-blue-500 to-indigo-500",
    points: ["Pay-as-you-grow", "Easy module addition", "Multi-location sync", "Unlimited users"]
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Driven Intelligence",
    description: "Smart recommendations, predictive analytics, and automated workflows powered by cutting-edge artificial intelligence.",
    gradient: "from-purple-500 to-pink-500",
    points: ["Predictive scheduling", "Smart inventory", "Client insights", "Revenue forecasting"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Bank-Grade Security",
    description: "Enterprise-level security with 256-bit encryption, regular audits, and compliance with Indian data protection standards.",
    gradient: "from-rose-500 to-red-500",
    points: ["End-to-end encryption", "Regular security audits", "GDPR compliance", "Data backup"]
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud-Ready Infrastructure",
    description: "Access your salon data anytime, anywhere. 99.9% uptime guaranteed with automatic updates and zero maintenance.",
    gradient: "from-cyan-500 to-sky-500",
    points: ["Anywhere access", "Automatic updates", "Zero downtime", "Mobile-first design"]
  }
];

export default function WhyNexaCoginita() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      rotateX: -20,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
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
      rotateY: 0
    },
    hover: { 
      scale: 1.05,
      y: -10,
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
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const orbitAnimation = {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  };

  const pulseGlow = {
    boxShadow: [
      "0 0 20px rgba(255, 107, 0, 0.2)",
      "0 0 40px rgba(255, 107, 0, 0.3)",
      "0 0 20px rgba(255, 107, 0, 0.2)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section ref={ref} className="relative py-24 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-orange-200/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-orange-100/40 to-amber-100/40 rounded-full blur-3xl"
          animate={floatAnimation}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"
          animate={floatAnimation}
          transition={{ delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div
              className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg"
              animate={pulseGlow}
            >
              <Target className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              {/* <span className="text-orange-600 font-bold text-sm uppercase tracking-wider">6.5</span> */}
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
                Why <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Nexa Coginita</span>
              </h2>
            </div>
          </div>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            The all-in-one platform specifically designed to transform Indian beauty businesses with 
            intelligent, scalable, and secure solutions.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              custom={index}
            >
              <motion.div
                className="group relative h-full bg-white rounded-3xl p-8 shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
              >
                {/* Animated Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Feature Icon */}
                <div className="relative mb-6">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-4`}
                    animate={floatAnimation}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>
                  
                  {/* Feature Badge */}
                  <motion.div
                    className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-gray-50 to-white rounded-full flex items-center justify-center shadow-sm border border-gray-200"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4 text-orange-500" />
                  </motion.div>
                </div>

                {/* Feature Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Feature Points */}
                  <div className="space-y-3">
                    {feature.points.map((point, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 + index * 0.1 }}
                      >
                        <motion.div
                          className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <CheckCircle className="w-3 h-3 text-white" />
                        </motion.div>
                        <span className="text-sm text-gray-700 font-medium">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute -bottom-24 -right-24 w-48 h-48 opacity-10"
                  animate={orbitAnimation}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} rounded-full`} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Proposition Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 rounded-3xl p-8 shadow-xl border border-orange-100"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <motion.div
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full mb-4 shadow-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUp className="w-5 h-5" />
                <span className="font-bold">Proven Results</span>
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Trusted by 5000+ Indian Business
              </h3>
              <p className="text-gray-600">
                Join the community of successful salon owners who have transformed their businesses with Nexa Coginita.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Zap />, value: "40%", label: "Faster Operations" },
                { icon: <Users />, value: "95%", label: "Client Retention" },
                { icon: <TrendingUp />, value: "3.5x", label: "Revenue Growth" },
                { icon: <Sparkles />, value: "4.8/5", label: "User Rating" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255, 107, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-3 mx-auto">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.button
                className="group relative px-10 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-700 to-amber-700 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
  
              </motion.button>
              <p className="text-sm text-gray-500 mt-4">No credit card required • 14-day trial</p>
            </div>
          </div>
        </motion.div>

        {/* Integration Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Seamless Integration with Indian Business Ecosystem
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { name: "UPI", color: "from-blue-500 to-cyan-500", logo: "💸" },
                { name: "GST", color: "from-green-500 to-emerald-500", logo: "📊" },
                { name: "WhatsApp", color: "from-green-600 to-green-700", logo: "💬" },
                { name: "Paytm", color: "from-blue-600 to-indigo-600", logo: "💳" },
                { name: "Razorpay", color: "from-purple-500 to-pink-500", logo: "🏦" },
                { name: "SMS", color: "from-orange-500 to-amber-500", logo: "📱" },
              ].map((integration, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${integration.color} rounded-2xl flex items-center justify-center text-3xl mb-3 shadow-lg`}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    {integration.logo}
                  </motion.div>
                  <span className="text-sm font-semibold text-gray-700">{integration.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}