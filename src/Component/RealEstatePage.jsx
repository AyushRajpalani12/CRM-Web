import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Users,
  Calendar,
  TrendingUp,
  Target,
  BarChart3,
  MapPin,
  Phone,
  Home,
  CheckCircle,
  ArrowRight,
  Shield,
  Globe,
  Clock,
  Star,
  Award,
  Zap,
  ChevronRight,
  Building,
  Key,
  DollarSign,
  LineChart,
  FileText
} from "lucide-react";

const RealEstatePage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [stats, setStats] = useState({ leads: 0, properties: 0, agents: 0, deals: 0 });
  const controls = useAnimation();

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lead Management",
      description: "Capture, qualify, and nurture real estate leads effectively",
      points: [
        "Automated lead capture from all sources",
        "Lead scoring and prioritization",
        "Follow-up automation",
        "Lead distribution to agents"
      ],
      color: "from-blue-500 to-cyan-500",
      stat: "1200+",
      statLabel: "Leads Managed"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Property Inquiry Tracking",
      description: "Track every inquiry across all your property listings",
      points: [
        "Centralized inquiry database",
        "Property-wise inquiry tracking",
        "Source attribution analysis",
        "Response time monitoring"
      ],
      color: "from-emerald-500 to-green-500",
      stat: "500+",
      statLabel: "Daily Inquiries"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Site Visit Scheduling",
      description: "Streamlined appointment booking and property viewing management",
      points: [
        "Automated scheduling system",
        "Agent availability management",
        "Client reminders & follow-ups",
        "Visit feedback collection"
      ],
      color: "from-purple-500 to-pink-500",
      stat: "85%",
      statLabel: "Visit Conversion"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Agent Performance",
      description: "Monitor and improve your real estate agents' performance",
      points: [
        "Individual agent dashboards",
        "Deal pipeline tracking",
        "Commission calculation",
        "Performance benchmarking"
      ],
      color: "from-amber-500 to-orange-500",
      stat: "40%",
      statLabel: "Performance Increase"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Multi-project Dashboards",
      description: "Manage multiple real estate projects from a single dashboard",
      points: [
        "Project-wise analytics",
        "Inventory management",
        "Sales progress tracking",
        "Team collaboration tools"
      ],
      color: "from-indigo-500 to-blue-500",
      stat: "50+",
      statLabel: "Projects Managed"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Reduce Response Time",
      description: "Respond to inquiries 3x faster with automated systems"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Increase Conversions",
      description: "Convert 35% more leads with systematic follow-ups"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Security",
      description: "Bank-level security for client and property data"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Live insights into sales, inventory, and team performance"
    }
  ];

  const testimonials = [
    {
      name: "Rohan Mehta",
      role: "CEO, UrbanSky Builders",
      content: "Our lead conversion rate increased from 12% to 38% in just 3 months. The property inquiry tracking is a game-changer!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Priya Sharma",
      role: "Director, Prime Properties",
      content: "Managing 15 projects across 3 cities became effortless. The multi-project dashboard saved us countless hours.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b786d4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Arun Kumar",
      role: "Founder, Metro Realty",
      content: "Agent performance tracking helped us identify top performers and train others effectively. Revenue grew by 45%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Lead Capture",
      description: "Automatically capture leads from website, social media, and calls"
    },
    {
      number: "02",
      title: "Qualification",
      description: "AI-powered lead scoring to prioritize hot prospects"
    },
    {
      number: "03",
      title: "Distribution",
      description: "Smart routing to the most suitable agent or team"
    },
    {
      number: "04",
      title: "Conversion",
      description: "Systematic follow-ups until deal closure"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate stats
    const animateStats = async () => {
      await controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.5 }
      });
      
      // Count up animation
      const duration = 2000;
      const steps = 100;
      const increment = (target, start) => (target - start) / steps;
      
      const leadsTimer = setInterval(() => {
        setStats(prev => ({
          ...prev,
          leads: Math.min(prev.leads + increment(1547, 0), 1547)
        }));
      }, duration / steps);
      
      const propertiesTimer = setInterval(() => {
        setStats(prev => ({
          ...prev,
          properties: Math.min(prev.properties + increment(324, 0), 324)
        }));
      }, duration / steps);
      
      const agentsTimer = setInterval(() => {
        setStats(prev => ({
          ...prev,
          agents: Math.min(prev.agents + increment(87, 0), 87)
        }));
      }, duration / steps);
      
      const dealsTimer = setInterval(() => {
        setStats(prev => ({
          ...prev,
          deals: Math.min(prev.deals + increment(428, 0), 428)
        }));
      }, duration / steps);
      
      setTimeout(() => {
        clearInterval(leadsTimer);
        clearInterval(propertiesTimer);
        clearInterval(agentsTimer);
        clearInterval(dealsTimer);
      }, duration);
    };
    
    animateStats();
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Building className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium">Real Estate CRM Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-blue-300">Real Estate Business</span>
              <br />
              with Intelligent CRM
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Complete CRM platform designed specifically for real estate developers, 
              brokers, and agents. Manage leads, track properties, and close more deals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/bookdemo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-xl transition-all"
                >
                  <span className="flex items-center gap-2">
                    Book Real Estate Demo
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </Link>
              
              <button className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                Download Case Study
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {Math.round(stats.leads).toLocaleString()}+
            </div>
            <div className="text-gray-600">Leads Managed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">
              {Math.round(stats.properties).toLocaleString()}+
            </div>
            <div className="text-gray-600">Properties Listed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {Math.round(stats.agents).toLocaleString()}+
            </div>
            <div className="text-gray-600">Active Agents</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">
              {Math.round(stats.deals).toLocaleString()}+
            </div>
            <div className="text-gray-600">Deals Closed</div>
          </div>
        </div>
      </motion.div>

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
              Complete Real Estate Management Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage, sell, and grow your real estate business
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Feature Cards */}
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
                      ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50 shadow-xl'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {feature.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">{feature.stat}</div>
                          <div className="text-sm text-gray-500">{feature.statLabel}</div>
                        </div>
                      </div>
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

            {/* Visual Dashboard */}
            <div className="relative">
              <motion.div
                animate={controls}
                className="sticky top-24"
              >
                <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  {/* Dashboard Mockup */}
                  <div className="absolute inset-0 bg-gray-900">
                    {/* Dashboard Header */}
                    <div className="bg-gray-800 p-4 border-b border-gray-700">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Building className="w-6 h-6 text-blue-400" />
                          <h3 className="text-white font-bold">Real Estate Dashboard</h3>
                        </div>
                        <div className="text-sm text-gray-400">{features[activeFeature].title}</div>
                      </div>
                    </div>
                    
                    {/* Dashboard Content */}
                    <div className="p-6">
                      {/* Stats Row */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-gray-800 rounded-lg p-4">
                            <div className="text-gray-400 text-sm mb-1">Metric {i}</div>
                            <div className="text-white text-xl font-bold">$124,5{i}0</div>
                            <div className="text-green-400 text-xs">+12.{i}%</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Chart Area */}
                      <div className="bg-gray-800 rounded-lg p-4 mb-6">
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-white font-medium">Sales Pipeline</div>
                          <div className="text-gray-400 text-sm">Last 30 days</div>
                        </div>
                        <div className="h-32 flex items-end gap-2">
                          {[40, 60, 80, 65, 90, 75, 50].map((height, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ delay: idx * 0.1 }}
                              className={`flex-1 rounded-t ${
                                idx === activeFeature ? 'bg-gradient-to-t from-blue-500 to-cyan-500' : 'bg-gray-700'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Recent Activity */}
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="text-white font-medium mb-4">Recent Leads</div>
                        <div className="space-y-3">
                          {["New Inquiry - Luxury Villa", "Site Visit Scheduled", "Deal Closed - Apartment"].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
                              <div className={`w-2 h-2 rounded-full ${
                                idx === 0 ? 'bg-green-500' : 
                                idx === 1 ? 'bg-yellow-500' : 'bg-blue-500'
                              }`} />
                              <div className="text-gray-300 text-sm">{item}</div>
                              <div className="text-gray-500 text-xs ml-auto">2h ago</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 360, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                      ease: "linear"
                    }}
                    className="absolute top-1/3 left-1/4 w-20 h-20 opacity-10"
                  >
                    <Building className="w-full h-full text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From Lead to Deal in 4 Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures no lead falls through the cracks
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Real Estate Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join 1000+ real estate companies transforming their business
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
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
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
              <Zap className="w-5 h-5" />
              <span className="font-bold">Industry-Leading Solution</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Revolutionize Your Real Estate Business?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join leading real estate companies managing billions in property transactions
              with our specialized CRM platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/bookdemo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-2xl transition-all"
                >
                  <span className="flex items-center gap-2">
                    Book Real Estate Demo
                    <Key className="w-5 h-5" />
                  </span>
                </motion.button>
              </Link>
              
              <button className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                View Success Stories
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">30-Day</div>
                <div className="text-blue-200 text-sm">Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-blue-200 text-sm">Dedicated Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-blue-200 text-sm">Real Estate Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Free</div>
                <div className="text-blue-200 text-sm">Onboarding</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RealEstatePage;