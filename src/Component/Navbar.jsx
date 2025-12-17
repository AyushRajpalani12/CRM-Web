import React, { useState } from "react";
import logo from "../assets/main2.png";
import { Link } from "react-router-dom";
import { Globe, User, Building, Car, Gem, Package, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isProductsMobileOpen, setIsProductsMobileOpen] = useState(false); // NEW: For mobile dropdown
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const productCategories = [
    { 
      label: "Real Estate", 
      href: "/real-estate", // Changed to actual page route
      icon: <Building className="w-5 h-5" />,
      description: "Complete property management CRM",
      features: ["Property Listings", "Client Management", "Sales Tracking"],
      color: "from-blue-500 to-blue-600"
    },
    { 
      label: "Automobile", 
      href: "/automobile", // Changed to actual page route
      icon: <Car className="w-5 h-5" />,
      description: "Dealership & vehicle management",
      features: ["Inventory Management", "Customer CRM", "Service Tracking"],
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      label: "Jewellery", 
      href: "/jewellery", // Changed to actual page route
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

  const otherLinks = [
    { label: "Platform", href: "/platform" },
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
          <div className="hidden md:flex items-center space-x-10">
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
                  {/* Animated underline */}
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
                    {/* Animated background effect */}
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
                              {/* Hover gradient effect */}
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
                                  
                                  {/* Features List */}
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

            {/* Other Links */}
            {otherLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-gray-700 hover:text-blue-600 text-sm font-semibold transition-colors py-2 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
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
            
            {/* Global Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              <Globe className="w-4 h-4 mr-2" />
              Global
            </motion.button>
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
              {/* Products Section with Dropdown Toggle */}
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

              {/* Other Links */}
              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-1">
                  {otherLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors font-medium flex items-center justify-between"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  ))}
                </div>
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
                
                {/* Login Button with Dropdown Toggle */}
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
                
                {/* Global Button */}
                <button className="w-full py-3 text-sm font-medium text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center">
                  <Globe className="w-4 h-4 mr-2" />
                  Global
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;