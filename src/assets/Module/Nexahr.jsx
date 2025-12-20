import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Users,
  Calendar,
  FileText,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  CheckCircle,
  ArrowRight,
  Target,
  BarChart3,
  Clock,
  DollarSign,
  Award,
  Users as UsersRound,
  Briefcase,
  Building,
  GraduationCap,
  Hospital,
  Store,
  Car,
  Home,
  Sparkles,
  Rocket,
  Lock,
  Cloud,
  Smartphone,
  Cpu,
  Palette,
  Globe,
  MessageSquare,
  Search,
  Bell,
  Download,
  Share2,
  PieChart,
  LineChart,
  UserCheck,
  FileCheck,
  Calendar as CalendarDays,
  Wallet,
  Calculator,
  ShieldCheck,
  ChevronRight,
  PlayCircle,
  Star,
  ArrowUpRight,
  Factory,
  ShoppingBag,
  Truck,
  Coffee,
  School,
  Stethoscope,
  Scissors,
  Utensils,
  Film,
  Plane,
  Ship,
  Train,
  Wifi,
  Server,
  Database,
  Key,
  Fingerprint,
  Eye,
  EyeOff,
  Settings,
  HelpCircle,
  BookOpen,
  Video,
  Headphones,
  Mail,
  Phone,
  MapPin,
  Clock as Clock3,
  UserPlus,
  UserMinus,
  UserCog,
  UserX,
  Handshake,
  TrendingUp as TrendingUp2,
  Building as Building2Icon,
  Home as HomeIcon,
  Car as CarIcon,
  Gem,
  Package,
  ShoppingCart,
  CreditCard,
  ClipboardCheck,
  FileBarChart,
  FileSpreadsheet,
  FileSignature,
  FileDigit,
  FileKey,
  FileLock,
  FileSearch,
  FileStack,
  FileType,
  FileUp,
  FileX,
  File,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderSearch,
  FolderTree,
  FolderX,
  Notebook,
  TextCursor,
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
  List,
  ListChecks,
  ListOrdered,
  Table,
  WrapText,
  DollarSign as DollarSign2,
  Goal,
  Hourglass,
  Laptop,
  Medal,
  MessageCircle,
  PhoneCall,
  Presentation,
  Trophy,
  UserCircle,
  Video as Video2,
  Workflow,
  Wrench,
  X,
} from "lucide-react";

// Professional color palette
const colors = {
  primary: {
    from: "#2563eb", // blue-600
    to: "#4f46e5", // indigo-600
  },
  secondary: {
    from: "#059669", // emerald-600
    to: "#0d9488", // teal-600
  },
  accent: {
    from: "#7c3aed", // violet-600
    to: "#db2777", // pink-600
  }
};

const industries = [
  { 
    name: "IT & Tech", 
    icon: <Cpu className="w-8 h-8" />, 
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50"
  },
  { 
    name: "Healthcare", 
    icon: <Hospital className="w-8 h-8" />, 
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50"
  },
  { 
    name: "Retail", 
    icon: <Store className="w-8 h-8" />, 
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50"
  },
  { 
    name: "Manufacturing", 
    icon: <Factory className="w-8 h-8" />, 
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50"
  },
  { 
    name: "Finance", 
    icon: <DollarSign className="w-8 h-8" />, 
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  },
  { 
    name: "Education", 
    icon: <GraduationCap className="w-8 h-8" />, 
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50"
  },
  { 
    name: "Hospitality", 
    icon: <Coffee className="w-8 h-8" />, 
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50"
  },
  { 
    name: "Real Estate", 
    icon: <Building className="w-8 h-8" />, 
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-50"
  },
];

const features = [
  {
    category: "Recruitment & Onboarding",
    items: [
      {
        title: "AI-Powered Recruitment",
        description: "Automated candidate screening, interview scheduling, and applicant tracking",
        icon: <Brain className="w-6 h-6" />,
        metrics: ["Reduce time-to-hire by 50%", "95% candidate match accuracy"]
      },
      {
        title: "Digital Onboarding",
        description: "Paperless onboarding workflows with e-signatures and document management",
        icon: <FileSignature className="w-6 h-6" />,
        metrics: ["Complete onboarding in 24 hours", "Reduce paperwork by 80%"]
      }
    ]
  },
  {
    category: "Employee Management",
    items: [
      {
        title: "Performance Management",
        description: "360-degree reviews, goal setting, and continuous feedback system",
        icon: <TrendingUp className="w-6 h-6" />,
        metrics: ["Increase employee engagement by 40%", "Real-time performance tracking"]
      },
      {
        title: "Attendance & Leave",
        description: "Biometric integration, shift management, and automated leave approvals",
        icon: <CalendarDays className="w-6 h-6" />,
        metrics: ["99.9% accuracy in time tracking", "Reduce payroll errors by 90%"]
      }
    ]
  },
  {
    category: "Payroll & Compliance",
    items: [
      {
        title: "Automated Payroll",
        description: "Tax calculations, direct deposits, and compliance automation",
        icon: <Calculator className="w-6 h-6" />,
        metrics: ["Process payroll in minutes", "100% compliance accuracy"]
      },
      {
        title: "Compliance Management",
        description: "Automated regulatory updates and audit-ready reporting",
        icon: <ShieldCheck className="w-6 h-6" />,
        metrics: ["Reduce compliance risks by 95%", "Automated audit trails"]
      }
    ]
  }
];

const metrics = [
  {
    value: "40%",
    label: "Time Saved on HR Tasks",
    description: "Automation reduces manual workload",
    icon: <Clock className="w-6 h-6" />,
    trend: "up"
  },
  {
    value: "95%",
    label: "Payroll Accuracy",
    description: "Automated calculations eliminate errors",
    icon: <CheckCircle className="w-6 h-6" />,
    trend: "up"
  },
  {
    value: "30%",
    label: "Reduced HR Costs",
    description: "Optimized operations and automation",
    icon: <DollarSign className="w-6 h-6" />,
    trend: "down"
  },
  {
    value: "4.9/5",
    label: "Employee Satisfaction",
    description: "Self-service portal and faster resolutions",
    icon: <Star className="w-6 h-6" />,
    trend: "up"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Director",
    company: "TechNova Inc.",
    content: "NexaHR transformed our HR operations. We reduced onboarding time from 5 days to 24 hours.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "CFO",
    company: "Global Manufacturing Co.",
    content: "The payroll automation saved us 40 hours monthly and eliminated compliance issues.",
    avatar: "MC"
  },
  {
    name: "David Rodriguez",
    role: "Head of People",
    company: "Innovate Solutions",
    content: "Employee engagement increased by 35% after implementing performance management.",
    avatar: "DR"
  }
];

export default function NexaHRProfessional() {
  const location = useLocation();
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // CRITICAL: Scroll to top when component mounts
  useEffect(() => {
    console.log("NexaHR mounted - Scrolling to top");
    
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
  }, [location.pathname]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div className="min-h-screen bg-white">
      {/* Optional: Add a visual scroll indicator */}
      {/* <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 z-50"></div> */}

      {/* Navigation */}


      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Enterprise HR Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Modern HR Management for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Growing Businesses
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed">
                Streamline your human resources with AI-powered automation, 
                comprehensive analytics, and enterprise-grade security. 
                From recruitment to retirement, NexaHR handles it all.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
                <Link to="/bookdemo">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                  >
                    <Rocket className="w-5 h-5" />
                    Book Demo
                  </motion.button>
                </Link>
                <Link to="/demo">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all flex items-center justify-center gap-3"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Watch Demo
                  </motion.button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { label: "No credit card required", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
                  { label: "30-day free trial", icon: <Calendar className="w-5 h-5 text-blue-500" /> },
                  { label: "24/7 support", icon: <Headphones className="w-5 h-5 text-purple-500" /> },
                  { label: "SOC 2 Compliant", icon: <Shield className="w-5 h-5 text-amber-500" /> },
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
                    <div className="text-sm font-medium text-gray-500">HR Dashboard</div>
                    <div className="text-xl md:text-2xl font-bold text-gray-900">Overview</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                  {[
                    { label: "Total Employees", value: "1,248", change: "+12%" },
                    { label: "Active Recruitments", value: "24", change: "+5" },
                    { label: "Pending Approvals", value: "8", change: "-3" },
                    { label: "Avg. Onboarding Time", value: "1.2d", change: "-60%" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-3 md:p-4">
                      <div className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                      <div className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-700">Employee Satisfaction</div>
                    <div className="text-sm font-bold text-blue-600">92%</div>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{ delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm font-medium text-gray-700">Performance Reviews</div>
                    <div className="text-sm font-bold text-emerald-600">98% Complete</div>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl">
                <div className="text-2xl md:text-3xl font-bold">40%</div>
                <div className="text-xs md:text-sm opacity-90">Time Saved on HR Tasks</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== METRICS SECTION ========== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${metric.trend === 'up' ? 'bg-green-50' : 'bg-blue-50'}`}>
                    {metric.icon}
                  </div>
                  <div className={`text-sm font-semibold ${metric.trend === 'up' ? 'text-green-600' : 'text-blue-600'}`}>
                    {metric.trend === 'up' ? '↑ Increase' : '↓ Reduction'}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</div>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section id="features" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <Target className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Comprehensive Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need in One Platform
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From recruitment to retirement, manage your entire employee lifecycle with precision and ease.
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-20">
            {features.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <div className="flex items-center gap-4 mb-8 md:mb-12">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    {categoryIndex === 0 ? <UsersRound className="w-5 h-5 md:w-6 md:h-6 text-white" /> :
                     categoryIndex === 1 ? <UserCog className="w-5 h-5 md:w-6 md:h-6 text-white" /> :
                     <Calculator className="w-5 h-5 md:w-6 md:h-6 text-white" />}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Module</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all group"
                    >
                      <div className="flex items-start gap-4 md:gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="text-blue-600">{item.icon}</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h4>
                          <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">{item.description}</p>
                          <div className="space-y-2 md:space-y-3">
                            {item.metrics.map((metric, metricIndex) => (
                              <div key={metricIndex} className="flex items-center gap-2 md:gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">{metric}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES SECTION ========== */}
      <section id="industries" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <Building2Icon className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Industry Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted Across Industries
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              NexaHR adapts to the unique HR needs of every industry with customizable workflows.
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

      {/* ========== CTA SECTION ========== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto">
              Join 2,500+ companies that trust NexaHR for their human resources management.
              {/* Start your free trial today. */}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
              <Link to="/bookdemo">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 md:px-10 md:py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 md:gap-3"
                >
                  <Rocket className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Book Demo</span>
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 md:px-10 md:py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 md:gap-3"
                >
                  <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Schedule Consultation</span>
                </motion.button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: "Enterprise Security", icon: <Lock className="w-4 h-4 md:w-5 md:h-5" /> },
                { label: "99.9% Uptime", icon: <Cloud className="w-4 h-4 md:w-5 md:h-5" /> },
                { label: "24/7 Support", icon: <Headphones className="w-4 h-4 md:w-5 md:h-5" /> },
                { label: "GDPR Compliant", icon: <Shield className="w-4 h-4 md:w-5 md:h-5" /> },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-2">
                  <div className="text-white">{item.icon}</div>
                  <span className="text-blue-100 text-xs md:text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold">NexaHR</div>
                  <div className="text-sm text-gray-400">Human Resources Management</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Modern HR management platform for growing businesses. 
                Streamline your operations with AI-powered automation.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  support@nexahr.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 NexaHR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 