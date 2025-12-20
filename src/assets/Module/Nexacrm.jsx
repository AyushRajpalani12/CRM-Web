import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  BarChart3,
  Target,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Building,
  Car,
  Gem,
  Package,
  TrendingUp,
  Clock,
  DollarSign,
  Globe,
  Smartphone,
  Cloud,
  Lock,
  Bell,
  MessageSquare,
  FileText,
  Calendar,
  Star,
  Award,
  ChevronRight,
  Play,
  Download
} from "lucide-react";

const NexaCRMPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      scale: [1, 1.02, 1],
      transition: { duration: 0.5 }
    });
  }, [activeFeature, controls]);

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer 360° View",
      description: "Complete customer profiles with interaction history"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Lead Management",
      description: "Capture, qualify, and convert leads efficiently"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Sales Analytics",
      description: "Real-time insights and performance metrics"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Automated Follow-ups",
      description: "Never miss important customer interactions"
    }
  ];

  const industries = [
    {
      name: "Real Estate",
      icon: <Building className="w-6 h-6" />,
      description: "Property management & sales",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Automobile",
      icon: <Car className="w-6 h-6" />,
      description: "Dealerships & service centers",
      color: "from-emerald-500 to-green-500"
    },
    {
      name: "Jewellery",
      icon: <Gem className="w-6 h-6" />,
      description: "Retail & luxury goods",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Retail",
      icon: <Package className="w-6 h-6" />,
      description: "Multi-store management",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Lead Capture",
      description: "Collect leads from all channels",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Qualification",
      description: "Score and prioritize prospects",
      icon: <Star className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Engagement",
      description: "Automated communication",
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Conversion",
      description: "Close deals efficiently",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      step: "05",
      title: "Retention",
      description: "Customer loyalty programs",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increase Sales",
      description: "Boost conversion rates by up to 40%"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "Reduce manual work by 60%"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Reduce Costs",
      description: "Cut operational expenses by 30%"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Scale Globally",
      description: "Manage multiple locations seamlessly"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.15),transparent_40%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">All-in-One CRM Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-blue-300">NexaCRM</span>
              <br />
              Intelligent Customer Relationship Management
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Transform how you manage customer relationships with AI-powered insights,
              automated workflows, and industry-specific solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/bookdemo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-xl transition-all"
                >
                  <span className="flex items-center gap-2">
                    Get Started Free
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </Link>
              
              <button className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. What it does */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What <span className="text-blue-600">NexaCRM</span> Does
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                NexaCRM is a comprehensive customer relationship management platform 
                designed to streamline your business operations, enhance customer 
                engagement, and drive sustainable growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Centralized Customer Data</h3>
                    <p className="text-gray-600">Unified view of all customer interactions and history</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Automated Workflows</h3>
                    <p className="text-gray-600">Streamline repetitive tasks with intelligent automation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-time Analytics</h3>
                    <p className="text-gray-600">Make data-driven decisions with live insights</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                <div className="grid grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-xl p-6 border-2 transition-all ${
                        activeFeature === index
                          ? 'border-blue-500 shadow-lg'
                          : 'border-gray-200'
                      }`}
                      onMouseEnter={() => setActiveFeature(index)}
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                        <div className="text-white">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Key Features */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage customer relationships effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile App",
                description: "Manage your CRM on the go with our mobile application"
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud-Based",
                description: "Access your data securely from anywhere, anytime"
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Enterprise Security",
                description: "Bank-level security with role-based access control"
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Multi-channel Support",
                description: "Email, SMS, WhatsApp, and social media integration"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Custom Reports",
                description: "Create and schedule personalized reports"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Calendar Sync",
                description: "Sync with Google Calendar, Outlook, and more"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Industries Supported */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for various business sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={industry.name.toLowerCase().replace(' ', '-')}>
                  <div className={`bg-gradient-to-br ${industry.color} rounded-2xl p-8 text-white text-center h-full transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl`}>
                    <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                      <div className="text-white">
                        {industry.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                    <p className="text-white/80 mb-4">{industry.description}</p>
                    <div className="flex items-center justify-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Explore Solution</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How NexaCRM Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 5-step process to transform your customer management
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {workflow.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center relative z-10">
                    <div className="text-5xl font-bold text-blue-600 mb-4">{step.step}</div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business outcomes with NexaCRM
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
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
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
            className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white"
          >
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-200">Businesses Trust Us</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-200">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-200">Customer Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
              <Zap className="w-5 h-5" />
              <span className="font-bold">Limited Time Offer</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of successful businesses using NexaCRM to manage 
              customer relationships and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/bookdemo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-2xl transition-all"
                >
                  <span className="flex items-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </Link>
              
              <button className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2 justify-center">
                <Download className="w-5 h-5" />
                Download Brochure
              </button>
            </div>
            
            <p className="text-gray-400 mt-8 text-sm">
              No credit card required • 30-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NexaCRMPage;