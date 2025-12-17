import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Car,
  Users,
  Calendar,
  FileText,
  Wrench,
  Clock,
  TrendingUp,
  Shield,
  BarChart3,
  Target,
  CheckCircle,
  ArrowRight,
  Zap,
  Star,
  Award,
  DollarSign,
  Settings,
  Bell,
  ClipboardCheck,
  Sparkles,
  Fuel,
  Gauge,
  ShieldCheck,
  Key,
  Package
} from "lucide-react";

const AutomobilePage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [stats, setStats] = useState({ customers: 0, vehicles: 0, services: 0, revenue: 0 });
  const controls = useAnimation();

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer + Vehicle History",
      description: "Complete lifetime record of customers and their vehicles",
      points: [
        "Detailed customer profiles",
        "Complete vehicle service history",
        "Ownership timeline tracking",
        "Preference and behavior analysis"
      ],
      color: "from-blue-500 to-cyan-500",
      stat: "15,000+",
      statLabel: "Customer Records"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Service Reminders",
      description: "Automated maintenance and service notifications",
      points: [
        "Scheduled maintenance alerts",
        "Warranty expiry reminders",
        "Insurance renewal notifications",
        "Custom reminder intervals"
      ],
      color: "from-emerald-500 to-green-500",
      stat: "92%",
      statLabel: "Retention Rate"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Invoicing & Billing",
      description: "Professional invoicing and payment processing system",
      points: [
        "Automated invoice generation",
        "Multi-payment gateway support",
        "Tax calculation and compliance",
        "Digital receipt delivery"
      ],
      color: "from-purple-500 to-pink-500",
      stat: "40%",
      statLabel: "Faster Billing"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Workshop Scheduling",
      description: "Efficient workshop and service bay management",
      points: [
        "Real-time slot availability",
        "Technician assignment",
        "Service bay optimization",
        "Mobile appointment booking"
      ],
      color: "from-amber-500 to-orange-500",
      stat: "85%",
      statLabel: "Utilization Rate"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increase Repeat Business",
      description: "35% more repeat customers with automated follow-ups"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Reduce Service Time",
      description: "Cut service turnaround time by 50% with efficient scheduling"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance & Safety",
      description: "Maintain complete service records for warranty and safety"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Boost Revenue",
      description: "Increase average service value by 25% with upselling"
    }
  ];



  const workflow = [
    {
      step: "01",
      title: "Customer Check-in",
      description: "Digital check-in with vehicle details and service requirements"
    },
    {
      step: "02",
      title: "Service Scheduling",
      description: "Automatic slot allocation based on technician availability"
    },
    {
      step: "03",
      title: "Service Execution",
      description: "Real-time tracking of service progress and updates"
    },
    {
      step: "04",
      title: "Digital Delivery",
      description: "Automated invoicing and service history update"
    }
  ];

  const vehicleTypes = [
    { type: "Passenger Cars", count: "5,200+", icon: <Car className="w-5 h-5" /> },
    { type: "Commercial Vehicles", count: "1,800+", icon: <Package className="w-5 h-5" /> },
    { type: "Two-Wheelers", count: "8,500+", icon: <Gauge className="w-5 h-5" /> },
    { type: "Luxury Vehicles", count: "450+", icon: <Sparkles className="w-5 h-5" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateStats = async () => {
      await controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.5 }
      });
      
      const duration = 2000;
      const steps = 100;
      
      const customersTimer = setInterval(() => {
        setStats(prev => ({
          ...prev,
          customers: Math.min(prev.customers + 15600/steps, 15600)
        }));
      }, duration / steps);
      
      const vehiclesTimer = setInterval(() => {
        setStats(prev => ({
          ...prev,
          vehicles: Math.min(prev.vehicles + 24500/steps, 24500)
        }));
      }, duration / steps);
      
      const servicesTimer = setInterval(() => {
        setStats(prev => ({
          ...prev,
          services: Math.min(prev.services + 184000/steps, 184000)
        }));
      }, duration / steps);
      
      const revenueTimer = setInterval(() => {
        setStats(prev => ({
          ...prev,
          revenue: Math.min(prev.revenue + 42.5/steps, 42.5)
        }));
      }, duration / steps);
      
      setTimeout(() => {
        clearInterval(customersTimer);
        clearInterval(vehiclesTimer);
        clearInterval(servicesTimer);
        clearInterval(revenueTimer);
      }, duration);
    };
    
    animateStats();
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Car className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium">Automotive Business Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Drive Your <span className="text-blue-300">Automotive Business</span>
              <br />
              to New Heights
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Complete CRM platform for dealerships, service centers, and workshops.
              Manage customers, vehicles, services, and grow your automotive business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/bookdemo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-xl transition-all"
                >
                  <span className="flex items-center gap-2">
                    Book Automotive Demo
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

      {/* Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {Math.round(stats.customers).toLocaleString()}+
            </div>
            <div className="text-gray-600">Satisfied Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">
              {Math.round(stats.vehicles).toLocaleString()}+
            </div>
            <div className="text-gray-600">Vehicles Managed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {Math.round(stats.services).toLocaleString()}+
            </div>
            <div className="text-gray-600">Services Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">
              ${stats.revenue.toFixed(1)}M+
            </div>
            <div className="text-gray-600">Revenue Generated</div>
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
              Complete Automotive Management Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your dealership or service center efficiently
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
                          <Car className="w-6 h-6 text-blue-400" />
                          <h3 className="text-white font-bold">Automotive Dashboard</h3>
                        </div>
                        <div className="text-sm text-gray-400">{features[activeFeature].title}</div>
                      </div>
                    </div>
                    
                    {/* Dashboard Content */}
                    <div className="p-6">
                      {/* Vehicle Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {vehicleTypes.map((vehicle, idx) => (
                          <div key={idx} className="bg-gray-800 rounded-lg p-4">
                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                              {vehicle.icon}
                              {vehicle.type}
                            </div>
                            <div className="text-white text-xl font-bold">{vehicle.count}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Service Timeline */}
                      <div className="bg-gray-800 rounded-lg p-4 mb-6">
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-white font-medium">Today's Schedule</div>
                          <div className="text-gray-400 text-sm">{new Date().toLocaleDateString()}</div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { time: "09:00 AM", service: "Oil Change", customer: "John D.", status: "In Progress" },
                            { time: "11:30 AM", service: "Brake Service", customer: "Sarah M.", status: "Scheduled" },
                            { time: "02:00 PM", service: "Annual Service", customer: "Robert K.", status: "Confirmed" }
                          ].map((appointment, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-gray-700/50 rounded">
                              <div>
                                <div className="text-white font-medium">{appointment.service}</div>
                                <div className="text-gray-400 text-sm">{appointment.customer}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-white">{appointment.time}</div>
                                <div className={`text-xs ${idx === 0 ? 'text-green-400' : 'text-yellow-400'}`}>
                                  {appointment.status}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Service Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-800 rounded-lg p-3 text-center">
                          <div className="text-white text-lg font-bold">12</div>
                          <div className="text-gray-400 text-xs">Today's Services</div>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-3 text-center">
                          <div className="text-white text-lg font-bold">4</div>
                          <div className="text-gray-400 text-xs">In Progress</div>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-3 text-center">
                          <div className="text-white text-lg font-bold">8</div>
                          <div className="text-gray-400 text-xs">Completed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Car Element */}
                  <motion.div
                    animate={{
                      x: [0, 20, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut"
                    }}
                    className="absolute bottom-8 right-8 w-24 h-24 opacity-10"
                  >
                    <Car className="w-full h-full text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Manage All Vehicle Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for every segment of the automotive industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicleTypes.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                  <div className="text-white">
                    {vehicle.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {vehicle.type}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {vehicle.count}
                </div>
                <p className="text-gray-600 text-sm">
                  Successfully managed in our system
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Streamlined Service Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From customer arrival to vehicle delivery, every step optimized
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="text-5xl font-bold text-blue-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Automotive Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join 500+ automotive businesses that have revolutionized their operations
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

      {/* Testimonials */}
       

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
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
              Ready to Accelerate Your Automotive Business?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join leading automotive businesses managing thousands of vehicles
              and millions in revenue with our specialized CRM platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/bookdemo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-2xl transition-all"
                >
                  <span className="flex items-center gap-2">
                    Book Automotive Demo
                    <Car className="w-5 h-5" />
                  </span>
                </motion.button>
              </Link>
              
              <button className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                Download Case Studies
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">30-Day</div>
                <div className="text-blue-200 text-sm">Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-blue-200 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-blue-200 text-sm">Automotive Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Free</div>
                <div className="text-blue-200 text-sm">Training</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AutomobilePage;