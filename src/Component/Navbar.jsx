import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/main2.png";
import { Link } from "react-router-dom";
import { 
  Globe, User, Building, Car, Gem, Package, ChevronDown, ChevronRight, 
  Search, Check, BarChart3, Calendar, CreditCard, ShoppingCart, Users,
  Heart, Truck, Cpu, PieChart, Mail, Database, ShoppingBag, Layers,
  Briefcase, Target, Wrench, Smartphone, Shield, Zap, Bell, Clock,
  FileText, Phone, MessageSquare, Cloud, Settings, Workflow,Activity,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isFeaturesHovered, setIsFeaturesHovered] = useState(false);
  const [isModulesHovered, setIsModulesHovered] = useState(false);
  const [isProductsMobileOpen, setIsProductsMobileOpen] = useState(false);
  const [isFeaturesMobileOpen, setIsFeaturesMobileOpen] = useState(false);
  const [isModulesMobileOpen, setIsModulesMobileOpen] = useState(false);
  const [isGlobalDropdownOpen, setIsGlobalDropdownOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({
    code: "IN",
    name: "India",
    currency: "INR",
    flag: "🇮🇳",
    language: "English"
  });
  
  const globalDropdownRef = useRef(null);

  // List of countries with flags and currencies
  const countries = [
    { code: "US", name: "United States", currency: "USD", flag: "🇺🇸", language: "English" },
    { code: "GB", name: "United Kingdom", currency: "GBP", flag: "🇬🇧", language: "English" },
    { code: "IN", name: "India", currency: "INR", flag: "🇮🇳", language: "English" },
    { code: "AE", name: "United Arab Emirates", currency: "AED", flag: "🇦🇪", language: "Arabic" },
    { code: "SA", name: "Saudi Arabia", currency: "SAR", flag: "🇸🇦", language: "Arabic" },
    { code: "CA", name: "Canada", currency: "CAD", flag: "🇨🇦", language: "English/French" },
    { code: "AU", name: "Australia", currency: "AUD", flag: "🇦🇺", language: "English" },
    { code: "DE", name: "Germany", currency: "EUR", flag: "🇩🇪", language: "German" },
    { code: "FR", name: "France", currency: "EUR", flag: "🇫🇷", language: "French" },
    { code: "JP", name: "Japan", currency: "JPY", flag: "🇯🇵", language: "Japanese" },
    { code: "SG", name: "Singapore", currency: "SGD", flag: "🇸🇬", language: "English" },
    { code: "MY", name: "Malaysia", currency: "MYR", flag: "🇲🇾", language: "Malay" },
    { code: "CN", name: "China", currency: "CNY", flag: "🇨🇳", language: "Chinese" },
    { code: "ZA", name: "South Africa", currency: "ZAR", flag: "🇿🇦", language: "English" },
    { code: "BR", name: "Brazil", currency: "BRL", flag: "🇧🇷", language: "Portuguese" },
  ];

  // Popular countries for quick selection
  const popularCountries = countries.filter(country => 
    ["US", "GB", "IN", "AE", "CA", "AU"].includes(country.code)
  );

  // Filter countries based on search
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const productCategories = [
    { 
      label: "Real Estate", 
      href: "/real-estate",
      icon: <Building className="w-5 h-5" />,
      description: "Complete property management CRM",
      features: ["Property Listings", "Client Management", "Sales Tracking"],
      color: "from-blue-500 to-blue-600"
    },
    { 
      label: "Automobile", 
      href: "/automobile",
      icon: <Car className="w-5 h-5" />,
      description: "Dealership & vehicle management",
      features: ["Inventory Management", "Customer CRM", "Service Tracking"],
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      label: "Jewellery", 
      href: "/jewellery",
      icon: <Gem className="w-5 h-5" />,
      description: "Jewelry business solutions",
      features: ["Catalog Management", "Customer Database", "Sales Analytics"],
      color: "from-purple-500 to-purple-600"
    },
    { 
      label: "All Solutions", 
      href: "/products",
      icon: <Package className="w-5 h-5" />,
      description: "Complete industry solutions",
      features: ["Cross-industry", "Custom Modules", "Enterprise Ready"],
      color: "from-indigo-500 to-indigo-600"
    },
  ];

  // Nexa CRM Modules
  const nexaModules = [
    {
      name: "NexaCRM",
      description: "Complete Customer Relationship Management",
      icon: <Users className="w-5 h-5" />,
      href: "/modules/nexacrm",
      color: "from-blue-500 to-blue-600",
      features: ["Lead Management", "Sales Pipeline", "Customer 360"],
      category: "Core"
    },
    {
      name: "NexaHR",
      description: "Human Resources Management System",
      icon: <Briefcase className="w-5 h-5" />,
      href: "/modules/nexahr",
      color: "from-emerald-500 to-emerald-600",
      features: ["Employee Management", "Payroll", "Attendance"],
      category: "Operations"
    },
    {
      name: "NexaOps",
      description: "Business Operations Management",
      icon: <Workflow className="w-5 h-5" />,
      href: "/modules/nexaops",
      color: "from-purple-500 to-purple-600",
      features: ["Process Automation", "Workflow Management", "Task Tracking"],
      category: "Operations"
    },
    {
      name: "NexaPulse",
      description: "Real-time Analytics & Business Intelligence",
      icon: <Activity className="w-5 h-5" />,
      href: "/modules/nexapulse",
      color: "from-rose-500 to-rose-600",
      features: ["Dashboards", "Reports", "Predictive Analytics"],
      category: "Analytics"
    },
    {
      name: "NexaReach",
      description: "Marketing Automation & Campaign Management",
      icon: <Target className="w-5 h-5" />,
      href: "/modules/nexareach",
      color: "from-orange-500 to-orange-600",
      features: ["Email Campaigns", "Social Media", "Lead Nurturing"],
      category: "Marketing"
    },
    {
      name: "NexaCare",
      description: "Customer Support & Service Management",
      icon: <Heart className="w-5 h-5" />,
      href: "/modules/nexacare",
      color: "from-pink-500 to-pink-600",
      features: ["Ticketing", "Knowledge Base", "Live Chat"],
      category: "Support"
    },
    {
      name: "NexaBill",
      description: "Billing, Invoicing & Payment Processing",
      icon: <CreditCard className="w-5 h-5" />,
      href: "/modules/nexabill",
      color: "from-green-500 to-green-600",
      features: ["Invoicing", "Payment Gateway", "Recurring Billing"],
      category: "Finance"
    },
    {
      name: "NexaStock",
      description: "Inventory & Warehouse Management",
      icon: <Package className="w-5 h-5" />,
      href: "/modules/nexastock",
      color: "from-amber-500 to-amber-600",
      features: ["Stock Tracking", "Order Management", "Warehouse Ops"],
      category: "Operations"
    },
    {
      name: "NexaConnect",
      description: "Communication & Collaboration Suite",
      icon: <MessageSquare className="w-5 h-5" />,
      href: "/modules/nexaconnect",
      color: "from-indigo-500 to-indigo-600",
      features: ["Team Chat", "Video Calls", "File Sharing"],
      category: "Communication"
    },
    {
      name: "NexaMobile",
      description: "Mobile CRM & Field Service Management",
      icon: <Smartphone className="w-5 h-5" />,
      href: "/modules/nexamobile",
      color: "from-cyan-500 to-cyan-600",
      features: ["Field Service", "Mobile App", "Offline Access"],
      category: "Mobile"
    },
    {
      name: "NexaSecure",
      description: "Security & Compliance Management",
      icon: <Shield className="w-5 h-5" />,
      href: "/modules/nexasecure",
      color: "from-gray-600 to-gray-700",
      features: ["Access Control", "Audit Trails", "Data Encryption"],
      category: "Security"
    },
    {
      name: "NexaIntegrate",
      description: "API & Integration Management",
      icon: <Layers className="w-5 h-5" />,
      href: "/modules/nexaintegrate",
      color: "from-violet-500 to-violet-600",
      features: ["API Gateway", "Third-party Integrations", "Webhooks"],
      category: "Integration"
    }
  ];

  const featureCategories = [
    {
      label: "CRM",
      href: "/features/crm",
      icon: <Users className="w-5 h-5" />,
      description: "Customer Relationship Management",
      features: ["Lead Management", "Customer Database", "Communication Tracking"],
      color: "from-blue-500 to-blue-600",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      label: "Scheduling",
      href: "/features/scheduling",
      icon: <Calendar className="w-5 h-5" />,
      description: "Appointment & Resource Scheduling",
      features: ["Calendar Sync", "Automated Reminders", "Resource Booking"],
      color: "from-emerald-500 to-emerald-600",
      gradient: "bg-gradient-to-br from-emerald-500 to-emerald-600"
    },
    {
      label: "Billing & POS",
      href: "/features/billing",
      icon: <CreditCard className="w-5 h-5" />,
      description: "Billing, Invoicing & Point of Sale",
      features: ["Multi-payment Support", "Invoice Generation", "Inventory Sync"],
      color: "from-purple-500 to-purple-600",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      label: "Analytics",
      href: "/features/analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      description: "Business Intelligence & Reporting",
      features: ["Real-time Dashboards", "Custom Reports", "Predictive Analytics"],
      color: "from-amber-500 to-amber-600",
      gradient: "bg-gradient-to-br from-amber-500 to-amber-600"
    },
  ];

  const otherLinks = [
    { label: "Modules", href: "/modules" },
    { label: "Pricing", href: "/pricing" },
  ];

  const loginOptions = [
    { label: "Customer Login", href: "/login/customer" },
    { label: "Partner Login", href: "/login/partner" },
    { label: "Admin Login", href: "/login/admin" },
  ];

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsGlobalDropdownOpen(false);
    console.log(`Country changed to: ${country.name}`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (globalDropdownRef.current && !globalDropdownRef.current.contains(event.target)) {
        setIsGlobalDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Load selected country from localStorage on mount
  useEffect(() => {
    const savedCountry = localStorage.getItem('selectedCountry');
    if (savedCountry) {
      setSelectedCountry(JSON.parse(savedCountry));
    }
  }, []);

  // Save selected country to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('selectedCountry', JSON.stringify(selectedCountry));
  }, [selectedCountry]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200" onMouseMove={handleMouseMove}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="CRMPro Logo"
                className="h-30 w-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/150x40?text=CRMPro";
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown with Card Display */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsHovered(true)}
              onMouseLeave={() => setIsProductsHovered(false)}
            >
              <div className="relative">
                <button className="text-gray-700 hover:text-blue-600 text-sm font-semibold transition-colors py-2 group flex items-center">
                  Products
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isProductsHovered ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
              
              {/* Products Card Dropdown */}
              <AnimatePresence>
                {isProductsHovered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-100 py-6 z-50"
                    onMouseEnter={() => setIsProductsHovered(true)}
                    onMouseLeave={() => setIsProductsHovered(false)}
                  >
                    <div 
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/20 to-transparent pointer-events-none"
                      style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 40%)`,
                      }}
                    />
                    
                    <div className="relative px-8 pb-4">
                      <motion.h3 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg font-bold text-gray-900"
                      >
                        Industry-Specific Solutions
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="text-sm text-gray-500 mt-1"
                      >
                        Tailored CRM solutions for your business
                      </motion.p>
                    </div>
                    
                    <div className="relative grid grid-cols-2 gap-6 px-8">
                      {productCategories.map((product, index) => (
                        <motion.div
                          key={product.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                        >
                          <Link
                            to={product.href}
                            className="group block"
                            onClick={() => setIsProductsHovered(false)}
                          >
                            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-blue-50/50 group-hover:to-white relative overflow-hidden">
                              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                              
                              <div className="relative flex items-start">
                                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
                                  <div className="text-white">
                                    {product.icon}
                                  </div>
                                </div>
                                <div className="ml-5 flex-1">
                                  <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                                    {product.label}
                                    <ChevronRight className="w-4 h-4 ml-1 inline opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                                  </h4>
                                  <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                                  
                                  <div className="mt-4 flex flex-wrap gap-2">
                                    {product.features.map((feature, featureIndex) => (
                                      <motion.span 
                                        key={featureIndex}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 + featureIndex * 0.05 }}
                                        className="inline-block px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-lg group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300"
                                      >
                                        {feature}
                                      </motion.span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="relative mt-8 pt-6 border-t border-gray-100 px-8"
                    >
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group"
                        onClick={() => setIsProductsHovered(false)}
                      >
                        <span>Need a custom solution? Contact us</span>
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Features Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsFeaturesHovered(true)}
              onMouseLeave={() => setIsFeaturesHovered(false)}
            >
              <div className="relative">
                <button className="text-gray-700 hover:text-blue-600 text-sm font-semibold transition-colors py-2 group flex items-center">
                  Features
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isFeaturesHovered ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
              
              {/* Features Card Dropdown */}
              <AnimatePresence>
                {isFeaturesHovered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 py-6 z-50"
                    onMouseEnter={() => setIsFeaturesHovered(true)}
                    onMouseLeave={() => setIsFeaturesHovered(false)}
                  >
                    <div 
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/20 to-transparent pointer-events-none"
                      style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 40%)`,
                      }}
                    />
                    
                    <div className="relative px-8 pb-4">
                      <motion.h3 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg font-bold text-gray-900"
                      >
                        Powerful Features for Your Business
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="text-sm text-gray-500 mt-1"
                      >
                        Comprehensive tools to manage every aspect of your business
                      </motion.p>
                    </div>
                    
                    <div className="relative grid grid-cols-4 gap-4 px-8">
                      {featureCategories.map((feature, index) => (
                        <motion.div
                          key={feature.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                        >
                          <Link
                            to={feature.href}
                            className="group block"
                            onClick={() => setIsFeaturesHovered(false)}
                          >
                            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden h-full">
                              {/* Background Gradient Effect */}
                              <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                              
                              {/* Icon Container */}
                              <div className="relative mb-5">
                                <div className={`w-16 h-16 ${feature.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
                                  <div className="text-white">
                                    {feature.icon}
                                  </div>
                                </div>
                              </div>
                              
                              {/* Content */}
                              <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                                {feature.label}
                              </h4>
                              <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                              
                              {/* Features List */}
                              <div className="space-y-2">
                                {feature.features.map((feat, featIndex) => (
                                  <motion.div 
                                    key={featIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + featIndex * 0.05 }}
                                    className="flex items-center text-sm text-gray-700"
                                  >
                                    <div className={`w-2 h-2 ${feature.gradient.replace('bg-', 'bg-')} rounded-full mr-3`} />
                                    <span>{feat}</span>
                                  </motion.div>
                                ))}
                              </div>
                              
                              {/* CTA Arrow */}
                              <div className="mt-6 flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                                <span>Learn more</span>
                                <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Feature Highlights */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="relative mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl mx-8 p-6"
                    >
                      <div className="grid grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">99.9%</div>
                          <div className="text-sm text-gray-600 mt-1">Uptime</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">24/7</div>
                          <div className="text-sm text-gray-600 mt-1">Support</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">100+</div>
                          <div className="text-sm text-gray-600 mt-1">Integrations</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="relative mt-8 pt-6 border-t border-gray-100 px-8"
                    >
                      <div className="flex items-center justify-between">
                        <Link
                          to="/features"
                          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group"
                          onClick={() => setIsFeaturesHovered(false)}
                        >
                          <span>View all features</span>
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                        <Link
                          to="/demo"
                          className="inline-flex items-center text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                          onClick={() => setIsFeaturesHovered(false)}
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Demo
                        </Link>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Modules Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsModulesHovered(true)}
              onMouseLeave={() => setIsModulesHovered(false)}
            >
              <div className="relative">
                <button className="text-gray-700 hover:text-blue-600 text-sm font-semibold transition-colors py-2 group flex items-center">
                  Modules
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isModulesHovered ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
              
              {/* Modules Mega Dropdown */}
              <AnimatePresence>
                {isModulesHovered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[1200px] bg-white rounded-2xl shadow-2xl border border-gray-100 py-8 z-50"
                    onMouseEnter={() => setIsModulesHovered(true)}
                    onMouseLeave={() => setIsModulesHovered(false)}
                  >
                    <div 
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/20 to-transparent pointer-events-none"
                      style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 40%)`,
                      }}
                    />
                    
                    <div className="relative px-10 pb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <motion.h3 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl font-bold text-gray-900"
                          >
                            Nexa CRM Modules
                          </motion.h3>
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="text-sm text-gray-500 mt-2"
                          >
                            Comprehensive suite of modules to power your business operations
                          </motion.p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-600">12+</div>
                            <div className="text-sm text-gray-500">Modules</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-600">50+</div>
                            <div className="text-sm text-gray-500">Features</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Module Categories */}
                    <div className="relative grid grid-cols-3 gap-6 px-10">
                      {/* Core Modules */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Core Modules</h4>
                        <div className="space-y-4">
                          {nexaModules.filter(m => m.category === "Core").map((module, index) => (
                            <motion.div
                              key={module.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + index * 0.05 }}
                            >
                              <Link
                                to={module.href}
                                className="group block"
                                onClick={() => setIsModulesHovered(false)}
                              >
                                <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                  <div className="flex items-start">
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mr-4 transform group-hover:scale-110 transition-all duration-300`}>
                                      <div className="text-white">
                                        {module.icon}
                                      </div>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                                        {module.name}
                                      </h4>
                                      <p className="text-xs text-gray-600 mt-1">{module.description}</p>
                                      <div className="mt-3 flex flex-wrap gap-1">
                                        {module.features.slice(0, 2).map((feature, idx) => (
                                          <span 
                                            key={idx}
                                            className="inline-block px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-lg"
                                          >
                                            {feature}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-400 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Operations & Analytics */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Operations & Analytics</h4>
                        <div className="space-y-4">
                          {nexaModules.filter(m => ["Operations", "Analytics"].includes(m.category)).map((module, index) => (
                            <motion.div
                              key={module.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + index * 0.05 }}
                            >
                              <Link
                                to={module.href}
                                className="group block"
                                onClick={() => setIsModulesHovered(false)}
                              >
                                <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                  <div className="flex items-start">
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mr-4 transform group-hover:scale-110 transition-all duration-300`}>
                                      <div className="text-white">
                                        {module.icon}
                                      </div>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                                        {module.name}
                                      </h4>
                                      <p className="text-xs text-gray-600 mt-1">{module.description}</p>
                                      <div className="mt-3 flex flex-wrap gap-1">
                                        {module.features.slice(0, 2).map((feature, idx) => (
                                          <span 
                                            key={idx}
                                            className="inline-block px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-lg"
                                          >
                                            {feature}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Marketing, Support & More */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Marketing, Support & More</h4>
                        <div className="space-y-4">
                          {nexaModules.filter(m => ["Marketing", "Support", "Finance", "Communication", "Mobile", "Security", "Integration"].includes(m.category)).map((module, index) => (
                            <motion.div
                              key={module.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + index * 0.05 }}
                            >
                              <Link
                                to={module.href}
                                className="group block"
                                onClick={() => setIsModulesHovered(false)}
                              >
                                <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                  <div className="flex items-start">
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mr-4 transform group-hover:scale-110 transition-all duration-300`}>
                                      <div className="text-white">
                                        {module.icon}
                                      </div>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                                        {module.name}
                                      </h4>
                                      <p className="text-xs text-gray-600 mt-1">{module.description}</p>
                                      <div className="mt-3 flex flex-wrap gap-1">
                                        {module.features.slice(0, 1).map((feature, idx) => (
                                          <span 
                                            key={idx}
                                            className="inline-block px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-lg"
                                          >
                                            {feature}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Section */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="relative mt-10 pt-8 border-t border-gray-100 px-10"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-gray-900">Build Your Perfect CRM</h4>
                          <p className="text-sm text-gray-500 mt-1">
                            Mix and match modules to create a custom solution for your business
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Link
                            to="/modules/all"
                            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group"
                            onClick={() => setIsModulesHovered(false)}
                          >
                            <span>View All Modules</span>
                            <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                          </Link>
                          <Link
                            to="/contact"
                            className="inline-flex items-center text-sm font-medium bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
                            onClick={() => setIsModulesHovered(false)}
                          >
                            <Settings className="w-4 h-4 mr-2" />
                            Customize Solution
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Links */}
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-blue-600 text-sm font-semibold transition-colors py-2 relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Book Demo Button */}
            <Link to="/bookdemo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
              >
                Book Demo
              </motion.button>
            </Link>
            
            {/* Login Button with Dropdown */}
            <div className="relative">
              <motion.button 
                onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
                onBlur={() => setTimeout(() => setIsLoginDropdownOpen(false), 200)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-sm hover:shadow"
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </motion.button>
              
              {/* Login Dropdown */}
              <AnimatePresence>
                {isLoginDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                  >
                    {loginOptions.map((option) => (
                      <Link
                        key={option.label}
                        to={option.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsLoginDropdownOpen(false)}
                      >
                        {option.label}
                      </Link>
                    ))}
                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <Link
                        to="/signup"
                        className="block px-4 py-3 text-sm text-blue-600 hover:bg-blue-50 transition-colors"
                        onClick={() => setIsLoginDropdownOpen(false)}
                      >
                        Create Account
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Global Button with Country Selector */}
            <div className="relative" ref={globalDropdownRef}>
              <motion.button 
                onClick={() => setIsGlobalDropdownOpen(!isGlobalDropdownOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
              >
                <Globe className="w-4 h-4 mr-2" />
                <span className="flex items-center gap-2">
                  <span className="text-lg">{selectedCountry.flag}</span>
                  <span className="text-xs font-medium">{selectedCountry.code}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isGlobalDropdownOpen ? 'rotate-180' : ''}`} />
                </span>
              </motion.button>
              
              {/* Global Dropdown */}
              <AnimatePresence>
                {isGlobalDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-4 z-50"
                  >
                    {/* Search Bar */}
                    <div className="px-4 mb-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search country..."
                          className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Current Selection */}
                    <div className="px-4 mb-3">
                      <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{selectedCountry.flag}</span>
                          <div>
                            <div className="font-medium text-gray-900">{selectedCountry.name}</div>
                            <div className="text-xs text-gray-500">
                              {selectedCountry.language} • {selectedCountry.currency}
                            </div>
                          </div>
                        </div>
                        <Check className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="text-xs text-gray-500 mt-2 text-center">
                        This changes display language and currency
                      </div>
                    </div>

                    {/* Popular Countries */}
                    {!searchTerm && (
                      <>
                        <div className="px-4 mb-2">
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Popular</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-2 px-4 mb-4">
                          {popularCountries.map((country) => (
                            <motion.button
                              key={country.code}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleCountrySelect(country)}
                              className={`flex items-center justify-between p-3 rounded-lg border ${selectedCountry.code === country.code ? 'bg-blue-50 border-blue-200' : 'border-gray-200 hover:bg-gray-50'}`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xl">{country.flag}</span>
                                <div className="text-left">
                                  <div className="text-sm font-medium text-gray-900">{country.code}</div>
                                  <div className="text-xs text-gray-500">{country.currency}</div>
                                </div>
                              </div>
                              {selectedCountry.code === country.code && (
                                <Check className="w-4 h-4 text-blue-600" />
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </>
                    )}

                    {/* All Countries List */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="px-4 mb-2">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {searchTerm ? 'Search Results' : 'All Countries'}
                        </h4>
                      </div>
                      <div className="max-h-60 overflow-y-auto">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country) => (
                            <motion.button
                              key={country.code}
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              onClick={() => handleCountrySelect(country)}
                              className={`flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 ${selectedCountry.code === country.code ? 'bg-blue-50' : ''}`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xl">{country.flag}</span>
                                <div className="text-left">
                                  <div className="text-sm font-medium text-gray-900">{country.name}</div>
                                  <div className="text-xs text-gray-500">
                                    {country.language} • {country.currency}
                                  </div>
                                </div>
                              </div>
                              {selectedCountry.code === country.code && (
                                <Check className="w-4 h-4 text-blue-600" />
                              )}
                            </motion.button>
                          ))
                        ) : (
                          <div className="px-4 py-8 text-center">
                            <Globe className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-500 text-sm">No countries found</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-gray-200 mt-4 pt-4 px-4">
                      <div className="text-xs text-gray-500 text-center">
                        Prices will be shown in {selectedCountry.currency}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-5 py-6 space-y-6">
              {/* Products Section */}
              <div>
                <button
                  onClick={() => setIsProductsMobileOpen(!isProductsMobileOpen)}
                  className="flex items-center justify-between w-full py-3 px-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  <span className="flex items-center">
                    Products
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsMobileOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isProductsMobileOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-4 space-y-4 overflow-hidden"
                    >
                      {productCategories.map((product) => (
                        <Link
                          key={product.label}
                          to={product.href}
                          className="block"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsProductsMobileOpen(false);
                          }}
                        >
                          <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-all">
                            <div className="flex items-start">
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center mr-3`}>
                                <div className="text-white">
                                  {product.icon}
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-bold text-gray-900">{product.label}</h4>
                                  <ChevronRight className="w-4 h-4 text-gray-400" />
                                </div>
                                <p className="text-xs text-gray-600 mt-1">{product.description}</p>
                                <div className="mt-2 flex flex-wrap gap-1">
                                  {product.features.slice(0, 2).map((feature, index) => (
                                    <span 
                                      key={index}
                                      className="inline-block px-2 py-0.5 text-xs bg-blue-50 text-blue-700 rounded"
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Features Section */}
              <div>
                <button
                  onClick={() => setIsFeaturesMobileOpen(!isFeaturesMobileOpen)}
                  className="flex items-center justify-between w-full py-3 px-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  <span className="flex items-center">
                    Features
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isFeaturesMobileOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isFeaturesMobileOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-4 space-y-4 overflow-hidden"
                    >
                      {featureCategories.map((feature) => (
                        <Link
                          key={feature.label}
                          to={feature.href}
                          className="block"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsFeaturesMobileOpen(false);
                          }}
                        >
                          <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-all">
                            <div className="flex items-start">
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${feature.gradient} flex items-center justify-center mr-3`}>
                                <div className="text-white">
                                  {feature.icon}
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-bold text-gray-900">{feature.label}</h4>
                                  <ChevronRight className="w-4 h-4 text-gray-400" />
                                </div>
                                <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                                <div className="mt-2 space-y-1">
                                  {feature.features.slice(0, 2).map((feat, index) => (
                                    <div key={index} className="flex items-center text-xs text-gray-600">
                                      <div className={`w-1.5 h-1.5 ${feature.gradient.replace('bg-', 'bg-')} rounded-full mr-2`} />
                                      <span>{feat}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                      <div className="pt-4">
                        <Link
                          to="/features"
                          className="block text-center text-blue-600 text-sm font-medium py-2"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsFeaturesMobileOpen(false);
                          }}
                        >
                          View all features →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Modules Section for Mobile */}
              <div>
                <button
                  onClick={() => setIsModulesMobileOpen(!isModulesMobileOpen)}
                  className="flex items-center justify-between w-full py-3 px-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  <span className="flex items-center">
                    Modules
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isModulesMobileOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isModulesMobileOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-4 space-y-3 overflow-hidden"
                    >
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Nexa CRM Modules</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {nexaModules.slice(0, 8).map((module) => (
                            <Link
                              key={module.name}
                              to={module.href}
                              className="block"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsModulesMobileOpen(false);
                              }}
                            >
                              <div className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-all">
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center mb-2 mx-auto`}>
                                  <div className="text-white">
                                    {React.cloneElement(module.icon, { className: "w-4 h-4" })}
                                  </div>
                                </div>
                                <h5 className="text-xs font-bold text-gray-900 text-center">{module.name}</h5>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      <Link
                        to="/modules"
                        className="block text-center text-blue-600 text-sm font-medium py-3 border-t border-gray-200"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsModulesMobileOpen(false);
                        }}
                      >
                        View all 12+ modules →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pricing Link */}
              <div className="border-t border-gray-200 pt-6">
                <Link
                  to="/pricing"
                  className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors font-medium flex items-center justify-between"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Pricing</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              </div>
              
              {/* Actions Section */}
              <div className="pt-6 space-y-4 border-t border-gray-200">
                {/* Book Demo Button */}
                <Link to="/bookdemo" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full py-3.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center">
                    Book Demo
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>
                
                {/* Login Button */}
                <div>
                  <button
                    onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
                    className="w-full py-3.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-between px-4"
                  >
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Login
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isLoginDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isLoginDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 space-y-2 overflow-hidden"
                      >
                        {loginOptions.map((option) => (
                          <Link
                            key={option.label}
                            to={option.href}
                            className="block py-2.5 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsLoginDropdownOpen(false);
                            }}
                          >
                            <span>{option.label}</span>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </Link>
                        ))}
                        <Link
                          to="/signup"
                          className="block py-2.5 px-4 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium flex items-center justify-between mt-2"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsLoginDropdownOpen(false);
                          }}
                        >
                          <span>Create Account</span>
                          <ChevronRight className="w-4 h-4 text-blue-400" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Global Button with Mobile Country Selector */}
                <div>
                  <button
                    onClick={() => setIsGlobalDropdownOpen(!isGlobalDropdownOpen)}
                    className="w-full py-3 text-sm font-medium text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-between px-4"
                  >
                    <span className="flex items-center">
                      <Globe className="w-4 h-4 mr-2" />
                      <span className="flex items-center gap-2">
                        <span className="text-lg">{selectedCountry.flag}</span>
                        {selectedCountry.name}
                      </span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isGlobalDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isGlobalDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 space-y-3 overflow-hidden"
                      >
                        {/* Current Selection */}
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{selectedCountry.flag}</span>
                            <div>
                              <div className="font-medium text-gray-900">{selectedCountry.name}</div>
                              <div className="text-xs text-gray-500">
                                {selectedCountry.language} • {selectedCountry.currency}
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2 text-center">
                            Selected country • Prices in {selectedCountry.currency}
                          </div>
                        </div>

                        {/* Popular Countries for Mobile */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">Popular Countries</h4>
                          {popularCountries.map((country) => (
                            <button
                              key={country.code}
                              onClick={() => {
                                handleCountrySelect(country);
                                setIsGlobalDropdownOpen(false);
                              }}
                              className={`flex items-center justify-between w-full p-3 rounded-lg border ${selectedCountry.code === country.code ? 'bg-blue-50 border-blue-200' : 'border-gray-200 hover:bg-gray-50'}`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xl">{country.flag}</span>
                                <div className="text-left">
                                  <div className="text-sm font-medium text-gray-900">{country.name}</div>
                                  <div className="text-xs text-gray-500">{country.currency}</div>
                                </div>
                              </div>
                              {selectedCountry.code === country.code && (
                                <Check className="w-4 h-4 text-blue-600" />
                              )}
                            </button>
                          ))}
                        </div>

                        {/* View All Countries Link */}
                        <div className="text-center">
                          <button
                            onClick={() => {
                              setIsGlobalDropdownOpen(false);
                              console.log("Show all countries modal");
                            }}
                            className="text-blue-600 text-sm font-medium"
                          >
                            View all countries →
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;