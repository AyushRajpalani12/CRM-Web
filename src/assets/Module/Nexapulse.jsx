import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
  FileText,
  Brain,
  Zap,
  Target,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  AlertCircle,
  Bell,
  Clock,
  DollarSign,
  Users,
  CheckCircle,
  Shield,
  ArrowRight,
  PlayCircle,
  Sparkles,
  Rocket,
  MessageSquare,
  Headphones,
  Calendar,
  CreditCard,
  Check,
  Cpu,
  Database,
  Server,
  Cloud,
  Globe,
  Smartphone,
  Lock,
  Key,
  EyeOff,
  Settings,
  RefreshCw,
  Layers,
  GitBranch,
  Activity,
  Target as TargetIcon,
  TrendingUp as TrendingUp2,
  BarChart as BarChart2,
  LineChart as LineChart2,
  PieChart as PieChart2,
  Building,
  Factory,
  Store,
  Truck,
  Hospital,
  GraduationCap,
  Coffee,
  School,
  Stethoscope,
  ShoppingBag,
  Building as Building2,
  Home,
  Car,
  Utensils,
  Scissors,
  Film,
  Gem,
  Warehouse,
  FolderTree,
  Notebook,
  Table,
  ListChecks,
  TextCursor,
  AlignCenter,
  Medal,
  Trophy,
  Star,
  Award,
  Briefcase,
  DollarSign as DollarSign2,
  Goal,
  Hourglass,
  Laptop,
  Presentation,
  PhoneCall,
  Mail,
  Phone,
  MapPin,
  X,
} from "lucide-react";

// Professional color palette for NexaPulse
const colors = {
  primary: {
    from: "#7c3aed", // violet-600
    to: "#db2777", // pink-600
  },
  secondary: {
    from: "#2563eb", // blue-600
    to: "#4f46e5", // indigo-600
  },
  accent: {
    from: "#059669", // emerald-600
    to: "#0d9488", // teal-600
  }
};

const industries = [
  { 
    name: "Retail Analytics", 
    icon: <Store className="w-8 h-8" />, 
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50"
  },
  { 
    name: "Healthcare Insights", 
    icon: <Hospital className="w-8 h-8" />, 
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50"
  },
  { 
    name: "Manufacturing Intelligence", 
    icon: <Factory className="w-8 h-8" />, 
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50"
  },
  { 
    name: "Financial Analytics", 
    icon: <DollarSign2 className="w-8 h-8" />, 
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50"
  },
  { 
    name: "Education Analytics", 
    icon: <GraduationCap className="w-8 h-8" />, 
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50"
  },
  { 
    name: "Logistics Intelligence", 
    icon: <Truck className="w-8 h-8" />, 
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50"
  },
  { 
    name: "Hospitality Insights", 
    icon: <Coffee className="w-8 h-8" />, 
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-50"
  },
  { 
    name: "Real Estate Analytics", 
    icon: <Building2 className="w-8 h-8" />, 
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  },
];

const keyFeatures = [
  {
    title: "AI-Powered Predictions",
    description: "Machine learning algorithms forecast trends and outcomes",
    icon: <Brain className="w-6 h-6" />,
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "Real-time Dashboards",
    description: "Live data visualization with customizable widgets",
    icon: <Activity className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Advanced Reporting",
    description: "Automated report generation with scheduled delivery",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Data Integration",
    description: "Connect multiple data sources in one platform",
    icon: <Database className="w-6 h-6" />,
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "Predictive Analytics",
    description: "Identify patterns and forecast future performance",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-rose-500 to-pink-500"
  },
  {
    title: "Custom Metrics",
    description: "Define and track your own KPIs and success metrics",
    icon: <TargetIcon className="w-6 h-6" />,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Automated Alerts",
    description: "Get notified when metrics exceed thresholds",
    icon: <Bell className="w-6 h-6" />,
    color: "from-amber-500 to-yellow-500"
  },
  {
    title: "Data Export",
    description: "Export insights in multiple formats for sharing",
    icon: <Download className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500"
  },
];

const workflowSteps = [
  {
    step: 1,
    title: "Data Collection",
    description: "Aggregate data from multiple sources and systems",
    icon: <Database className="w-8 h-8" />,
    color: "from-violet-500 to-purple-500",
  },
  {
    step: 2,
    title: "Data Processing",
    description: "Clean, transform, and prepare data for analysis",
    icon: <Settings className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    step: 3,
    title: "Analysis & Insights",
    description: "Apply AI algorithms to uncover patterns and trends",
    icon: <Brain className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    step: 4,
    title: "Visualization",
    description: "Transform insights into interactive dashboards",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-amber-500 to-yellow-500",
  },
  {
    step: 5,
    title: "Actionable Reports",
    description: "Generate executive summaries with recommendations",
    icon: <FileText className="w-8 h-8" />,
    color: "from-rose-500 to-pink-500",
  },
];

const benefits = [
  {
    title: "50% Faster Decisions",
    description: "Real-time insights accelerate decision-making processes",
    icon: <Zap className="w-10 h-10" />,
    stat: "50%",
    color: "from-violet-500 to-purple-500",
    trend: "up"
  },
  {
    title: "30% Revenue Growth",
    description: "Data-driven strategies improve business outcomes",
    icon: <TrendingUp className="w-10 h-10" />,
    stat: "30%",
    color: "from-blue-500 to-indigo-500",
    trend: "up"
  },
  {
    title: "95% Accuracy",
    description: "AI-powered predictions with high precision",
    icon: <TargetIcon className="w-10 h-10" />,
    stat: "95%",
    color: "from-emerald-500 to-teal-500",
    trend: "up"
  },
  {
    title: "40% Cost Reduction",
    description: "Identify inefficiencies and optimize spending",
    icon: <DollarSign className="w-10 h-10" />,
    stat: "40%",
    color: "from-rose-500 to-pink-500",
    trend: "down"
  },
];

export default function NexaPulse() {
  const location = useLocation();
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // CRITICAL: Scroll to top when component mounts
  useEffect(() => {
    console.log("NexaPulse mounted - Scrolling to top");
    
    // Multiple methods to ensure scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
    
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Additional scroll methods
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    // Debug logging
    console.log("Window scrollY:", window.scrollY);
    console.log("Document scrollTop:", document.documentElement.scrollTop);
  }, [location.pathname]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div className="min-h-screen bg-white">
      {/* Optional: Add a visual scroll indicator (can remove later) */}
      {/* <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-pink-600 z-50"></div> */}



      {/* ========== HERO SECTION ========== */}
      {/* Test border: remove "border-4 border-green-500" after confirming */}
      <section 
        className="relative pt-12 pb-24 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden "
        ref={sectionRef}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-pink-50" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-violet-100/50 to-pink-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-violet-100/30 to-pink-100/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-medium text-violet-600">AI-Powered Analytics Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Data into{" "}
                <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                  Actionable Insights
                </span>
              </h1>
              
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Make <span className="text-violet-600">50% Faster</span> Decisions
              </div>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed">
                NexaPulse delivers real-time analytics, AI-powered predictions, and comprehensive business intelligence.
                Turn your data into strategic advantage with cutting-edge analytics technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
                <Link to="/bookdemo">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                  >
                    <Rocket className="w-5 h-5" />
                    Book Demo
                  </motion.button>
                </Link>
                <Link to="/demo">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-violet-500 hover:text-violet-600 transition-all flex items-center justify-center gap-3"
                  >
                    <PlayCircle className="w-5 h-5" />
                    View Dashboard Demo
                  </motion.button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { label: "No setup required", icon: <CheckCircle className="w-5 h-5 text-violet-500" /> },
                  { label: "30-day free trial", icon: <Calendar className="w-5 h-5 text-blue-500" /> },
                  { label: "24/7 analytics support", icon: <Headphones className="w-5 h-5 text-pink-500" /> },
                  { label: "GDPR compliant", icon: <Shield className="w-5 h-5 text-emerald-500" /> },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3">
                    {item.icon}
                    <span className="text-sm text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8">
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <div>
                    <div className="text-sm font-medium text-gray-500">Analytics Dashboard</div>
                    <div className="text-xl md:text-2xl font-bold text-gray-900">Live Insights</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Real-time</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                  {[
                    { label: "Revenue Growth", value: "24.8%", change: "+8.2%" },
                    { label: "Customer Satisfaction", value: "94%", change: "+5%" },
                    { label: "Operational Efficiency", value: "87%", change: "+12%" },
                    { label: "Prediction Accuracy", value: "95.2%", change: "+3.1%" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-3 md:p-4">
                      <div className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                      <div className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-700">Data Processing Speed</div>
                    <div className="text-sm font-bold text-violet-600">2.4M/sec</div>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{ delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm font-medium text-gray-700">Insight Generation</div>
                    <div className="text-sm font-bold text-blue-600">98% Automated</div>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-gradient-to-br from-violet-600 to-pink-600 text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl">
                <div className="text-2xl md:text-3xl font-bold">50%</div>
                <div className="text-xs md:text-sm opacity-90">Faster Decisions</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== WHAT IT DOES SECTION ========== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 rounded-full mb-6">
              <TargetIcon className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-medium text-violet-600">Analytics Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What <span className="text-violet-600">NexaPulse</span> Does
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced analytics platform that transforms raw data into strategic insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Real-time Analytics",
                description: "Monitor business performance with live dashboards and instant insights",
                icon: <Activity className="w-10 h-10 md:w-12 md:h-12" />,
                color: "from-violet-500 to-purple-500",
              },
              {
                title: "Predictive Modeling",
                description: "Forecast trends and outcomes with AI-powered algorithms",
                icon: <Brain className="w-10 h-10 md:w-12 md:h-12" />,
                color: "from-blue-500 to-indigo-500",
              },
              {
                title: "Data Visualization",
                description: "Create interactive charts, graphs, and heat maps",
                icon: <BarChart3 className="w-10 h-10 md:w-12 md:h-12" />,
                color: "from-emerald-500 to-teal-500",
              },
              {
                title: "Performance Analytics",
                description: "Track KPIs and measure success across departments",
                icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" />,
                color: "from-rose-500 to-pink-500",
              },
              {
                title: "Customer Intelligence",
                description: "Analyze customer behavior and segmentation",
                icon: <Users className="w-10 h-10 md:w-12 md:h-12" />,
                color: "from-orange-500 to-amber-500",
              },
              {
                title: "Operational Insights",
                description: "Identify bottlenecks and optimize processes",
                icon: <Settings className="w-10 h-10 md:w-12 md:h-12" />,
                color: "from-amber-500 to-yellow-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all group"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== KEY FEATURES SECTION ========== */}
      <section id="features" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 rounded-full mb-6">
              <Zap className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-medium text-violet-600">Advanced Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Key <span className="text-violet-600">Features</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful analytics tools designed to uncover hidden insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 md:p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-3 md:mb-4`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES SUPPORTED ========== */}
      <section id="industries" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-medium text-violet-600">Industry Analytics</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-violet-600">Industries</span> Supported
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized analytics solutions for every industry vertical
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className={`${industry.bgColor} p-4 md:p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all group`}
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-6 group-hover:rotate-6 transition-transform`}>
                  <div className="text-white">{industry.icon}</div>
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 text-center">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS - PROCESS FLOW ========== */}
      <section id="workflow" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 rounded-full mb-6">
              <Settings className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-medium text-violet-600">Analytics Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How <span className="text-violet-600">NexaPulse</span> Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From raw data to strategic insights in 5 intelligent steps
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-violet-500 to-pink-500 hidden lg:block" />
            
            <div className="space-y-8 md:space-y-12 lg:space-y-0">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Step Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8 lg:pr-12' : 'lg:pl-8 lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="flex items-center gap-4 mb-4 md:mb-6">
                        <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center`}>
                          <div className="text-white text-xl md:text-2xl font-bold">{step.step}</div>
                        </div>
                        <div className={`w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center`}>
                          <div className="text-white">{step.icon}</div>
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block relative">
                    <div className={`w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br ${step.color} rounded-full border-4 border-white shadow-lg`} />
                  </div>

                  {/* Empty Spacer for alternating layout */}
                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
      <section id="benefits" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-medium text-violet-600">Measurable Results</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tangible <span className="text-violet-600">Benefits</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              See the measurable impact NexaPulse can have on your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-30 blur transition duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${benefit.color.replace('from-', '').replace('to-', '').split(' ')[0]}, ${benefit.color.replace('from-', '').replace('to-', '').split(' ')[2]})`
                  }}
                />
                <div className="relative bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 md:mb-2">{benefit.stat}</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
              <span className="font-bold text-white text-sm md:text-base">Unlock Your Data Potential</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
              Ready to Transform Your Data into Decisions?
            </h2>
            
            <p className="text-lg md:text-xl text-violet-100 mb-8 md:mb-12 max-w-2xl mx-auto">
              Join thousands of companies that have gained competitive advantage with NexaPulse. 
              Start your journey towards data-driven decision making today.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
              <Link to="/bookdemo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 md:px-10 md:py-4 bg-white text-violet-600 font-bold rounded-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 md:gap-3"
                >
                  <Rocket className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Book Demo</span>
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 md:px-10 md:py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 md:gap-3"
                >
                  <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Schedule Analytics Demo</span>
                </motion.button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: "No Credit Card Required", icon: <CreditCard className="w-4 h-4 md:w-5 md:h-5" /> },
                { label: "30-Day Free Trial", icon: <Calendar className="w-4 h-4 md:w-5 md:h-5" /> },
                { label: "24/7 Analytics Support", icon: <Headphones className="w-4 h-4 md:w-5 md:h-5" /> },
                { label: "Enterprise Security", icon: <Shield className="w-4 h-4 md:w-5 md:h-5" /> },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="flex items-center justify-center gap-2 text-violet-100"
                >
                  <div className="text-white">{item.icon}</div>
                  <span className="text-xs md:text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}