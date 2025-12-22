import React, { useState } from 'react';
import {Link} from "react-router-dom"
import { 
  BarChart3, 
  Users, 
  MessageSquare, 
  Bell, 
  TrendingUp, 
  Shield, 
  Zap, 
  Cloud, 
  Smartphone,
  Globe,
  Building,
  ShoppingCart,
  CreditCard,
  Database,
  Target,
  PieChart,
  Filter,
  Calendar,
  Mail,
  Phone,
  UserPlus,
  CheckCircle,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-flex items-center bg-blue-800/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="font-medium">Nexa Reach v3.5</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Unified <span className="text-cyan-300">CRM</span> & Business Platform
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Nexa Reach integrates customer relationship management with multi-business operations in one powerful platform. Streamline workflows, enhance engagement, and drive growth across all your ventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            
              <button className="bg-transparent border-2 border-gray-300 hover:border-white text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Book Demo
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-800 to-indigo-900 rounded-xl p-6 transform hover:scale-105 transition duration-300">
                  <Users className="w-12 h-12 text-cyan-300 mb-4" />
                  <h3 className="text-xl font-bold mb-2">CRM Hub</h3>
                  <p className="text-gray-300">Unified customer management</p>
                </div>
                <div className="bg-gradient-to-br from-purple-800 to-pink-900 rounded-xl p-6 transform hover:scale-105 transition duration-300">
                  <Building className="w-12 h-12 text-purple-300 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Multi-Business</h3>
                  <p className="text-gray-300">Manage diverse operations</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-xl p-6 transform hover:scale-105 transition duration-300">
                  <BarChart3 className="w-12 h-12 text-emerald-300 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Analytics</h3>
                  <p className="text-gray-300">Real-time insights & reports</p>
                </div>
                <div className="bg-gradient-to-br from-amber-800 to-orange-900 rounded-xl p-6 transform hover:scale-105 transition duration-300">
                  <TrendingUp className="w-12 h-12 text-amber-300 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Automation</h3>
                  <p className="text-gray-300">Smart workflow automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatItDoes = () => {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Nexa Reach Does</h2>
          <p className="text-lg text-gray-600">
            Nexa Reach is an all-in-one platform that unifies CRM functionality with multi-business management capabilities. It connects customer data with business operations to provide a holistic view of your entire enterprise ecosystem.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Management</h3>
            <p className="text-gray-600">
              Centralize customer information, interactions, and history across all business units with smart segmentation.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Building className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Business Integration</h3>
            <p className="text-gray-600">
              Connect multiple business operations - retail, services, e-commerce - in a single dashboard.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cross-Business Analytics</h3>
            <p className="text-gray-600">
              Gain insights across all business units with unified reporting and predictive analytics.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Unified Communications</h3>
            <p className="text-gray-600">
              Engage customers across all channels - email, SMS, chat, social - with consistent messaging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const KeyFeatures = () => {
  const features = [
    { icon: <Database />, title: "Unified Customer Database", desc: "Single customer view across all business units" },
    { icon: <Target />, title: "Multi-Business Dashboard", desc: "Manage different ventures from one interface" },
    { icon: <PieChart />, title: "Cross-Platform Analytics", desc: "Integrated reporting for all operations" },
    { icon: <Filter />, title: "Smart Segmentation", desc: "Automatically categorize customers by behavior" },
    { icon: <Calendar />, title: "Workflow Automation", desc: "Automate processes across business units" },
    { icon: <Mail />, title: "Omnichannel Engagement", desc: "Reach customers via preferred channels" },
    { icon: <Shield />, title: "Enterprise Security", desc: "Bank-level security for all your data" },
    { icon: <Cloud />, title: "Cloud & On-Premise", desc: "Flexible deployment options" },
    { icon: <Smartphone />, title: "Mobile-First Design", desc: "Manage on the go with our mobile app" },
    { icon: <Globe />, title: "Global Reach", desc: "Multi-currency and multi-language support" },
    { icon: <CreditCard />, title: "Integrated Payments", desc: "Process payments across business types" },
    { icon: <ShoppingCart />, title: "E-commerce Integration", desc: "Connect with major e-commerce platforms" },
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
          <p className="text-lg text-gray-600">
            Nexa Reach combines powerful CRM capabilities with multi-business management tools in one integrated platform.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 text-white">
                {React.cloneElement(feature.icon, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Industries = () => {
  const industries = [
    { name: "Retail & E-commerce", color: "from-blue-500 to-cyan-500", icon: <ShoppingCart /> },
    { name: "Professional Services", color: "from-purple-500 to-pink-500", icon: <Building /> },
    { name: "Healthcare", color: "from-emerald-500 to-teal-500", icon: <Users /> },
    { name: "Hospitality", color: "from-amber-500 to-orange-500", icon: <Globe /> },
    { name: "Real Estate", color: "from-red-500 to-rose-500", icon: <Building /> },
    { name: "Financial Services", color: "from-indigo-500 to-blue-500", icon: <CreditCard /> },
    { name: "Manufacturing", color: "from-gray-600 to-gray-800", icon: <BarChart3 /> },
    { name: "Education", color: "from-green-500 to-emerald-500", icon: <Users /> },
  ];

  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries Supported</h2>
          <p className="text-lg text-gray-300">
            Nexa Reach adapts to diverse business models, providing tailored solutions for various industries.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className={`bg-gradient-to-br ${industry.color} rounded-xl p-6 hover:scale-105 transition-transform duration-300`}>
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                {React.cloneElement(industry.icon, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
              <p className="text-white/80 text-sm">
                Customized CRM and business management solutions for {industry.name.toLowerCase()} sector.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    { number: "01", title: "Data Integration", desc: "Connect all your business data sources into a unified platform.", icon: <Database /> },
    { number: "02", title: "Customer Profiling", desc: "Create comprehensive customer profiles with interaction history.", icon: <Users /> },
    { number: "03", title: "Business Unit Mapping", desc: "Map different business operations and their relationships.", icon: <Building /> },
    { number: "04", title: "Workflow Automation", desc: "Set up automated workflows across all business units.", icon: <Zap /> },
    { number: "05", title: "Engagement & Analysis", desc: "Engage customers and analyze performance across ventures.", icon: <BarChart3 /> },
    { number: "06", title: "Optimization", desc: "Continuously optimize based on insights and performance data.", icon: <TrendingUp /> },
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Nexa Reach Works</h2>
          <p className="text-lg text-gray-600">
            A seamless flow that integrates CRM with multi-business management for unified operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl mr-4">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {React.cloneElement(step.icon, { className: "w-6 h-6" })}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 right-0 transform translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              )}
              
              {index < steps.length - 2 && index % 2 === 0 && (
                <div className="hidden lg:block absolute top-12 right-0 transform translate-x-1/2 translate-y-full w-0.5 h-12 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    { 
      title: "360° Customer View", 
      desc: "See complete customer journey across all your business ventures.",
      impact: "Increase customer retention by up to 40%"
    },
    { 
      title: "Operational Efficiency", 
      desc: "Reduce manual work with automated workflows across business units.",
      impact: "Save 15+ hours per week on administrative tasks"
    },
    { 
      title: "Cross-Selling Opportunities", 
      desc: "Identify opportunities to offer related services across business lines.",
      impact: "Boost revenue by 25% through cross-selling"
    },
    { 
      title: "Unified Reporting", 
      desc: "Get holistic business insights with combined analytics from all ventures.",
      impact: "Make data-driven decisions 3x faster"
    },
    { 
      title: "Scalable Architecture", 
      desc: "Easily add new business units or locations as you grow.",
      impact: "Reduce IT costs by 30% with unified platform"
    },
    { 
      title: "Enhanced Collaboration", 
      desc: "Teams across different business units collaborate seamlessly.",
      impact: "Improve team productivity by 35%"
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Key Benefits</h2>
          <p className="text-lg text-gray-600">
            Discover how combining CRM with multi-business management drives tangible results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{benefit.desc}</p>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-blue-800 font-bold">
                  <TrendingUp className="inline w-4 h-4 mr-2" />
                  {benefit.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CTA = () => {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Transform Your Multi-Business Operations
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Join thousands of businesses that use Nexa Reach to unify their CRM and multi-venture management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
        
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-sm">
              <h3 className="text-xl font-bold mb-4">Schedule a Demo</h3>
              <p className="text-gray-200 mb-6">Personalized demo tailored to your business needs</p>
              <Link to="/bookdemo">
              <button className="w-full bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Book a Demo
              </button>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-400 mr-2" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 text-cyan-400 mr-2" />
              <span>24/7 global support</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              <span>10,000+ businesses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
     
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
 
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhatItDoes />
      <KeyFeatures />
      <Industries />
      <HowItWorks />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;