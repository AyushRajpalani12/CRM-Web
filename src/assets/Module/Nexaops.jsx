import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Settings,
  Zap,
  Target,
  BarChart3,
  Users,
  CheckCircle,
  Clock,
  DollarSign,
  Shield,
  Brain,
  ArrowRight,
  PlayCircle,
  Sparkles,
  Rocket,
  MessageSquare,
  Headphones,
  Calendar,
  CreditCard,
  Check,
  TrendingUp,
  Factory,
  Store,
  Building,
  Truck,
  Cpu,
  Cloud,
  Database,
  Wifi,
  Server,
  Lock,
  Globe,
  Smartphone,
  Package,
  ClipboardCheck,
  LineChart,
  PieChart,
  Settings as Settings2,
  Wrench,
  Cog,
  Workflow,
  ShieldCheck,
  FileText,
  Calculator,
  Bell,
  AlertCircle,
  RefreshCw,
  Layers,
  GitBranch,
  Filter,
  Search,
  Bell as Bell2,
  Download,
  Share2,
  Eye,
  EyeOff,
  Key,
  Fingerprint,
  Users as Users2,
  UserCheck,
  CalendarDays,
  Wallet,
  Building as Building2,
  Home,
  Car,
  GraduationCap,
  Hospital,
  Coffee,
  School,
  Stethoscope,
  ShoppingBag,
  Plane,
  Ship,
  Train,
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
  TrendingUp as TrendingUp2,
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

// Professional color palette for NexaOps
const colors = {
  primary: {
    from: "#059669", // emerald-600
    to: "#0d9488", // teal-600
  },
  secondary: {
    from: "#2563eb", // blue-600
    to: "#4f46e5", // indigo-600
  },
  accent: {
    from: "#7c3aed", // violet-600
    to: "#db2777", // pink-600
  }
};

const industries = [
  { 
    name: "Manufacturing", 
    icon: <Factory className="w-8 h-8" />, 
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50"
  },
  { 
    name: "Retail", 
    icon: <Store className="w-8 h-8" />, 
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50"
  },
  { 
    name: "Logistics", 
    icon: <Truck className="w-8 h-8" />, 
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50"
  },
  { 
    name: "IT & Tech", 
    icon: <Cpu className="w-8 h-8" />, 
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50"
  },
  { 
    name: "Healthcare", 
    icon: <Hospital className="w-8 h-8" />, 
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50"
  },
  { 
    name: "Construction", 
    icon: <Building2 className="w-8 h-8" />, 
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50"
  },
  { 
    name: "Hospitality", 
    icon: <Coffee className="w-8 h-8" />, 
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-50"
  },
  { 
    name: "Education", 
    icon: <GraduationCap className="w-8 h-8" />, 
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  },
];

const keyFeatures = [
  {
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows across departments",
    icon: <Workflow className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Real-time Analytics",
    description: "Monitor operations with live dashboards and predictive insights",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Resource Optimization",
    description: "Optimize allocation of people, equipment, and materials",
    icon: <Target className="w-6 h-6" />,
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "Quality Control",
    description: "Maintain consistent quality standards with automated checks",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "from-amber-500 to-yellow-500"
  },
  {
    title: "Inventory Management",
    description: "Track and manage inventory across multiple locations",
    icon: <Package className="w-6 h-6" />,
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "Compliance Tracking",
    description: "Ensure regulatory compliance with automated documentation",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "from-rose-500 to-pink-500"
  },
  {
    title: "Maintenance Scheduling",
    description: "Predictive maintenance and equipment lifecycle management",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Supply Chain Visibility",
    description: "End-to-end visibility across your entire supply chain",
    icon: <Globe className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500"
  },
];

const workflowSteps = [
  {
    step: 1,
    title: "Process Mapping",
    description: "Digitally map your existing workflows and identify optimization opportunities",
    icon: <GitBranch className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    step: 2,
    title: "Automation Setup",
    description: "Configure automated workflows and integrate with existing systems",
    icon: <Workflow className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    step: 3,
    title: "Resource Allocation",
    description: "Optimize resource distribution based on real-time demand and capacity",
    icon: <Target className="w-8 h-8" />,
    color: "from-violet-500 to-purple-500",
  },
  {
    step: 4,
    title: "Monitoring & Analytics",
    description: "Track performance metrics and generate actionable insights",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-amber-500 to-yellow-500",
  },
  {
    step: 5,
    title: "Continuous Improvement",
    description: "Implement feedback loops and AI-driven optimization suggestions",
    icon: <RefreshCw className="w-8 h-8" />,
    color: "from-orange-500 to-amber-500",
  },
];

const benefits = [
  {
    title: "35% Cost Reduction",
    description: "Optimize operations and reduce waste across all processes",
    icon: <DollarSign className="w-10 h-10" />,
    stat: "35%",
    color: "from-emerald-500 to-teal-500",
    trend: "down"
  },
  {
    title: "50% Faster Processes",
    description: "Automate manual tasks and streamline workflows",
    icon: <Zap className="w-10 h-10" />,
    stat: "50%",
    color: "from-blue-500 to-indigo-500",
    trend: "up"
  },
  {
    title: "99.8% Accuracy",
    description: "Eliminate human errors with automated quality checks",
    icon: <CheckCircle className="w-10 h-10" />,
    stat: "99.8%",
    color: "from-violet-500 to-purple-500",
    trend: "up"
  },
  {
    title: "45% Uptime Increase",
    description: "Predictive maintenance reduces equipment downtime",
    icon: <Clock className="w-10 h-10" />,
    stat: "45%",
    color: "from-amber-500 to-yellow-500",
    trend: "up"
  },
];

export default function NexaOps() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-100/50 to-teal-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-600">Operations Excellence Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Streamline Your{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Operations
                </span>
                <br />
                Boost Efficiency by{" "}
                <span className="text-emerald-600">40%</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                NexaOps transforms your business operations with intelligent automation, 
                real-time analytics, and comprehensive workflow management. 
                Achieve operational excellence across all departments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/bookdemo">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all flex items-center gap-3"
                  >
                    <Rocket className="w-5 h-5" />
                    Start Free Trial
                  </motion.button>
                </Link>
                <Link to="/demo">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-all flex items-center gap-3"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Watch Demo
                  </motion.button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "No setup fees", icon: <CheckCircle className="w-5 h-5 text-emerald-500" /> },
                  { label: "30-day free trial", icon: <Calendar className="w-5 h-5 text-blue-500" /> },
                  { label: "24/7 support", icon: <Headphones className="w-5 h-5 text-purple-500" /> },
                  { label: "Enterprise security", icon: <Shield className="w-5 h-5 text-amber-500" /> },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-gray-600 text-sm">{item.label}</span>
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
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-sm font-medium text-gray-500">Operations Dashboard</div>
                    <div className="text-2xl font-bold text-gray-900">Performance Overview</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { label: "Process Efficiency", value: "92%", change: "+8%" },
                    { label: "Cost Reduction", value: "35%", change: "-15%" },
                    { label: "Equipment Uptime", value: "98.5%", change: "+5%" },
                    { label: "Automation Rate", value: "74%", change: "+12%" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                      <div className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-emerald-600'}`}>
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-700">Supply Chain Optimization</div>
                    <div className="text-sm font-bold text-emerald-600">88%</div>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "88%" }}
                      transition={{ delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm font-medium text-gray-700">Quality Control Compliance</div>
                    <div className="text-sm font-bold text-blue-600">96%</div>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "96%" }}
                      transition={{ delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">40%</div>
                <div className="text-sm opacity-90">Efficiency Boost</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What It Does Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <Target className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-600">Core Functionality</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What <span className="text-emerald-600">NexaOps</span> Does
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive operations management platform that automates, optimizes, and scales your business processes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Process Automation",
                description: "Automate repetitive tasks and create intelligent workflows across departments",
                icon: <Workflow className="w-12 h-12" />,
                color: "from-emerald-500 to-teal-500",
              },
              {
                title: "Resource Management",
                description: "Optimize allocation of people, equipment, and materials in real-time",
                icon: <Target className="w-12 h-12" />,
                color: "from-blue-500 to-indigo-500",
              },
              {
                title: "Quality Assurance",
                description: "Maintain consistent quality standards with automated checks and compliance",
                icon: <CheckCircle className="w-12 h-12" />,
                color: "from-violet-500 to-purple-500",
              },
              {
                title: "Inventory Control",
                description: "Real-time tracking and management of inventory across locations",
                icon: <Package className="w-12 h-12" />,
                color: "from-orange-500 to-amber-500",
              },
              {
                title: "Maintenance Planning",
                description: "Predictive maintenance schedules and equipment lifecycle management",
                icon: <Wrench className="w-12 h-12" />,
                color: "from-amber-500 to-yellow-500",
              },
              {
                title: "Supply Chain Optimization",
                description: "End-to-end visibility and optimization of your supply chain",
                icon: <Globe className="w-12 h-12" />,
                color: "from-cyan-500 to-blue-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-600">Powerful Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key <span className="text-emerald-600">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed to optimize every aspect of your operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Supported */}
      <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-600">Industry Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-emerald-600">Industries</span> Supported
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NexaOps adapts to the unique operational needs of every industry
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className={`${industry.bgColor} p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all group`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform`}>
                  <div className="text-white">{industry.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Process Flow */}
      <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <Workflow className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-600">Implementation Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How <span className="text-emerald-600">NexaOps</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to transforming your operations
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500 hidden lg:block" />
            
            <div className="space-y-12 lg:space-y-0">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Step Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center`}>
                          <div className="text-white text-2xl font-bold">{step.step}</div>
                        </div>
                        <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center`}>
                          <div className="text-white">{step.icon}</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block relative">
                    <div className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-full border-4 border-white shadow-lg`} />
                  </div>

                  {/* Empty Spacer for alternating layout */}
                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-600">Measurable Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tangible <span className="text-emerald-600">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the measurable impact NexaOps can have on your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br rounded-3xl opacity-0 group-hover:opacity-30 blur transition duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${benefit.color.replace('from-', '').replace('to-', '').split(' ')[0]}, ${benefit.color.replace('from-', '').replace('to-', '').split(' ')[2]})`
                  }}
                />
                <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-900 mb-2">{benefit.stat}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span className="font-bold text-white">Optimize Your Operations Today</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business Operations?
            </h2>
            
            <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
              Join thousands of companies that have achieved operational excellence with NexaOps. 
              Start your journey towards efficient, automated, and data-driven operations today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/bookdemo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl flex items-center gap-3"
                >
                  <Rocket className="w-5 h-5" />
                  Start Free Trial
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center gap-3"
                >
                  <MessageSquare className="w-5 h-5" />
                  Schedule Demo
                </motion.button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "No Credit Card Required", icon: <CreditCard className="w-5 h-5" /> },
                { label: "30-Day Free Trial", icon: <Calendar className="w-5 h-5" /> },
                { label: "24/7 Support", icon: <Headphones className="w-5 h-5" /> },
                { label: "Enterprise Security", icon: <Shield className="w-5 h-5" /> },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="flex items-center gap-2 text-emerald-100"
                >
                  <div className="text-white">{item.icon}</div>
                  <span className="text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}