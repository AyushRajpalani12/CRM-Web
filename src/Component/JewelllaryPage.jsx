import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  ShoppingBag,
  Bell,
  Building,
  TrendingUp,
  Shield,
  BarChart,
  Target,
  Sparkles,
  Gem,
  Crown,
  Zap,
  CheckCircle,
  ArrowRight,
  Calendar,
  Star,
  Award,
  Diamond
} from "lucide-react";

const JewelleryPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const controls = useAnimation();

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "High-value Customer CRM",
      description: "Exclusive relationship management for your premium clients",
      points: [
        "Personal client profiles with preferences",
        "VIP customer segmentation",
        "Personalized communication tracking",
        "Client lifetime value analytics"
      ],
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Purchase History",
      description: "Complete transaction tracking and customer buying patterns",
      points: [
        "Lifetime purchase records",
        "Product preference tracking",
        "Repeat purchase analysis",
        "Average order value monitoring"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Festival & Anniversary Reminders",
      description: "Never miss important occasions for customer engagement",
      points: [
        "Automatic birthday reminders",
        "Festival season alerts",
        "Wedding anniversary tracking",
        "Special occasion gift suggestions"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Multi-branch Chains",
      description: "Seamless management across all your jewellery store locations",
      points: [
        "Centralized inventory management",
        "Cross-branch customer recognition",
        "Unified sales reporting",
        "Branch performance comparison"
      ],
      color: "from-emerald-500 to-green-500"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increase Sales by 40%",
      description: "Targeted campaigns and personalized recommendations drive revenue"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Client Retention",
      description: "VIP customer loyalty programs increase repeat business"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Data Management",
      description: "Bank-level security for customer and transaction data"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Live insights into sales, inventory, and customer behavior"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Owner, Diamond Palace",
      content: "Our VIP customer sales increased by 65% after implementing this CRM. The anniversary reminders are a game-changer!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "CEO, Gold & Gems",
      content: "Managing our 12 branches became effortless. The centralized system saved us 20 hours per week in administration.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Director, Royal Jewellers",
      content: "The purchase history tracking helped us identify our top 10% customers who bring 80% of our revenue.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.5 }
    });
  }, [activeFeature, controls]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-purple-900 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Gem className="w-5 h-5 text-amber-300" />
              <span className="text-sm font-medium">Jewellery Business Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-amber-300">Jewellery Business</span>
              <br />
              with Intelligent CRM
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Exclusive CRM platform designed specifically for jewellery retailers.
              Manage high-value customers, track purchases, and grow your multi-branch business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/bookdemo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-full hover:shadow-xl transition-all"
                >
                  <span className="flex items-center gap-2">
                    Request Demo
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </Link>
              
              <button className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                View Features
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Exclusive Features for Jewellery Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions to elevate your jewellery business management
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Animated Feature Cards */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveFeature(index)}
                  className={`cursor-pointer p-6 rounded-2xl border-2 transition-all ${
                    activeFeature === index
                      ? 'border-amber-500 bg-gradient-to-r from-amber-50 to-yellow-50 shadow-xl'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.points.map((point, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Animated Feature Visual */}
            <div className="relative">
              <motion.div
                animate={controls}
                className="sticky top-24"
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-90`} />
                  
                  <div className="relative h-full p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          {features[activeFeature].icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {features[activeFeature].title}
                        </h3>
                      </div>
                      
                      <p className="text-white/90 text-lg mb-8">
                        {features[activeFeature].description}
                      </p>
                    </div>

                    {/* Animated Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
                      >
                        <div className="text-2xl font-bold text-white">95%</div>
                        <div className="text-sm text-white/80">VIP Client Retention</div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
                      >
                        <div className="text-2xl font-bold text-white">3.5x</div>
                        <div className="text-sm text-white/80">Average Order Value</div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut"
                    }}
                    className="absolute top-8 right-8 w-16 h-16"
                  >
                    <Diamond className="w-full h-full text-white/30" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Business Outcomes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join 500+ jewellery businesses that have revolutionized their operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${features[index].color} flex items-center justify-center mb-6`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-amber-900 to-purple-900 rounded-2xl p-8 text-white"
          >
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-amber-200">Jewellery Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">40%</div>
                <div className="text-amber-200">Average Sales Growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-amber-200">Client Retention Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-amber-200">Customer Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">Limited Time Offer</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Jewellery Business?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join leading jewellery retailers who have revolutionized their customer management
              and increased sales with our specialized CRM platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/bookdemo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-full hover:shadow-2xl transition-all"
                >
                    <Link to={"/Bookdemo"}>
                  <span className="flex items-center gap-2">
                    Book Your Demo Now
                    <Zap className="w-5 h-5" />
                  </span>
                  </Link>
                </motion.button>
              </Link>
              
              <button className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                Download Brochure
              </button>
            </div>
            
            <p className="text-gray-400 mt-8 text-sm">
              Schedule a personalized demo • No credit card required • 30-day free trial
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JewelleryPage;