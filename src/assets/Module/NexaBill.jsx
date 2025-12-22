import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { 
  CreditCard, 
  FileText, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Zap, 
  Cloud, 
  Smartphone,
  Globe,
  Building,
  Users,
  Clock,
  Bell,
  Download,
  Upload,
  Search,
  Filter,
  CheckCircle,
  Award,
  Lock,
  Cpu,
  ShoppingCart,
  Heart,
  PieChart,
  BarChart,
  Receipt,
  Calculator,
  Wallet,
  Banknote,
  RefreshCw,
  Menu,
  X,
  ChevronRight,
  Play,
  Star,
  AlertCircle,
  Percent,
  Repeat,
  Layers,
  Mail
} from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">NexaBill</h1>
              <p className="text-xs text-indigo-600 font-medium">Intelligent Billing Platform</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium">Features</a>
            <a href="#industries" className="text-gray-700 hover:text-indigo-600 font-medium">Industries</a>
            <a href="#how" className="text-gray-700 hover:text-indigo-600 font-medium">How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600 font-medium">Pricing</a>
         
          </nav>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium py-2">Features</a>
              <a href="#industries" className="text-gray-700 hover:text-indigo-600 font-medium py-2">Industries</a>
              <a href="#how" className="text-gray-700 hover:text-indigo-600 font-medium py-2">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 font-medium py-2">Pricing</a>
           
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 mb-6">
              <Zap className="w-5 h-5 mr-2" />
              <span className="font-medium">NexaBill v3.0 - AI-Powered Billing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smarter <span className="text-indigo-600">Billing</span> & Invoicing
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              NexaBill transforms billing processes with AI-powered automation, real-time analytics, and multi-currency support. Streamline your financial operations and get paid faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link to='/bookdemo'>
              <button className="bg-white border-2 border-indigo-200 hover:border-indigo-300 text-indigo-700 font-bold py-3 px-8 rounded-xl transition duration-300 shadow-sm">
                <Play className="inline w-5 h-5 mr-2" />
                Watch Demo
              </button>
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Bank-Level Security</p>
                  <p className="text-gray-600 text-sm">SOC 2 Type II Certified</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Globe className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">100+ Currencies</p>
                  <p className="text-gray-600 text-sm">Global billing support</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI-Powered Invoice Generator</h3>
                  <p className="text-gray-600">Smart billing automation</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                      <FileText className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Invoice Creation</p>
                      <p className="text-gray-600 text-sm">Generate in 30 seconds</p>
                    </div>
                  </div>
                  <div className="text-green-600 font-bold">90% faster</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                      <Clock className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Payment Collection</p>
                      <p className="text-gray-600 text-sm">Automated reminders</p>
                    </div>
                  </div>
                  <div className="text-green-600 font-bold">40% quicker</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Revenue Recognition</p>
                      <p className="text-gray-600 text-sm">Real-time tracking</p>
                    </div>
                  </div>
                  <div className="text-green-600 font-bold">99% accurate</div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">AI-Powered Insights</h3>
                    <p className="text-indigo-100">Predictive cash flow analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    { 
      icon: <FileText />, 
      title: "Smart Invoicing", 
      desc: "AI-generated invoices with automated calculations and tax handling",
      color: "indigo"
    },
    { 
      icon: <CreditCard />, 
      title: "Payment Processing", 
      desc: "Multi-gateway payment processing with 100+ payment methods",
      color: "purple"
    },
    { 
      icon: <TrendingUp />, 
      title: "Revenue Analytics", 
      desc: "Real-time revenue tracking, forecasting, and performance insights",
      color: "blue"
    },
    { 
      icon: <RefreshCw />, 
      title: "Recurring Billing", 
      desc: "Automated subscription management and recurring invoice scheduling",
      color: "green"
    },
    { 
      icon: <Globe />, 
      title: "Multi-Currency", 
      desc: "Bill in 100+ currencies with automatic exchange rate updates",
      color: "amber"
    },
    { 
      icon: <Bell />, 
      title: "Automated Reminders", 
      desc: "Smart payment reminders and late fee calculations",
      color: "red"
    },
    { 
      icon: <BarChart />, 
      title: "Financial Reporting", 
      desc: "Customizable financial reports, profit/loss statements, and tax reports",
      color: "cyan"
    },
    { 
      icon: <Lock />, 
      title: "Bank-Level Security", 
      desc: "SOC 2 Type II certification, encryption, and compliance tools",
      color: "gray"
    },
    { 
      icon: <Layers />, 
      title: "ERP Integration", 
      desc: "Seamless integration with QuickBooks, Xero, SAP, and other ERPs",
      color: "teal"
    },
    { 
      icon: <Mail />, 
      title: "Client Portal", 
      desc: "Self-service client portal for invoice viewing and payments",
      color: "pink"
    },
    { 
      icon: <Calculator />, 
      title: "Tax Automation", 
      desc: "Automatic tax calculations for 50+ countries with compliance",
      color: "orange"
    },
    { 
      icon: <Users />, 
      title: "Team Collaboration", 
      desc: "Role-based access, approval workflows, and team billing",
      color: "emerald"
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      indigo: "from-indigo-500 to-purple-600",
      purple: "from-purple-500 to-pink-600",
      blue: "from-blue-500 to-cyan-600",
      green: "from-green-500 to-emerald-600",
      amber: "from-amber-500 to-orange-600",
      red: "from-red-500 to-rose-600",
      cyan: "from-cyan-500 to-teal-600",
      gray: "from-gray-600 to-gray-700",
      teal: "from-teal-500 to-emerald-600",
      pink: "from-pink-500 to-rose-600",
      orange: "from-orange-500 to-amber-600",
      emerald: "from-emerald-500 to-green-600",
    };
    return colors[color] || "from-indigo-500 to-purple-600";
  };

  return (
    <div id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Powerful Billing Features</h2>
          <p className="text-lg text-gray-600">
            Everything you need to streamline your billing process and get paid faster.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(feature.color)} rounded-lg flex items-center justify-center mb-4 text-white`}>
                {React.cloneElement(feature.icon, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">AI-Powered Invoice Generation</h3>
              <p className="text-gray-600 mb-6">
                Our AI analyzes your contracts, services, and client history to automatically generate accurate invoices, reducing manual work by 90%.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Automated line item creation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Smart tax calculations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Contract compliance checking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Multi-currency conversion</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">90%</div>
                  <div className="text-gray-600">Reduction in manual billing work</div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Time saved per invoice</span>
                    <span className="font-bold text-green-600">15 min</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Industries = () => {
  const industries = [
    {
      title: "Professional Services",
      desc: "Billing for consultants, agencies, lawyers, and accountants",
      icon: <Users />,
      stats: ["Hourly billing", "Retainer management", "Expense tracking"]
    },
    {
      title: "SaaS & Subscriptions",
      desc: "Recurring billing for subscription-based businesses",
      icon: <Repeat />,
      stats: ["Usage-based billing", "Subscription management", "Upgrade/downgrade"]
    },
    {
      title: "E-commerce & Retail",
      desc: "Automated billing for online stores and retail operations",
      icon: <ShoppingCart />,
      stats: ["Order-based invoicing", "Tax compliance", "Multi-currency"]
    },
    {
      title: "Healthcare",
      desc: "Medical billing with insurance and patient invoicing",
      icon: <Heart />,
      stats: ["Insurance claims", "Patient billing", "Compliance tracking"]
    },
    {
      title: "Real Estate",
      desc: "Property management billing and rent collection",
      icon: <Building />,
      stats: ["Recurrent rent", "Maintenance billing", "Tenant portal"]
    },
    {
      title: "Manufacturing",
      desc: "Complex billing for B2B manufacturing and wholesale",
      icon: <Layers />,
      stats: ["Project billing", "Purchase orders", "Progress invoicing"]
    },
  ];

  return (
    <div id="industries" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industry-Specific Solutions</h2>
          <p className="text-lg text-gray-600">
            Tailored billing solutions for different business models and industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                {React.cloneElement(industry.icon, { className: "w-7 h-7" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.title}</h3>
              <p className="text-gray-600 mb-6">{industry.desc}</p>
              
              <div className="space-y-3 mb-6">
                {industry.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{stat}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full text-indigo-600 hover:text-indigo-700 font-medium py-2 border border-indigo-200 rounded-lg hover:border-indigo-300 transition duration-300">
                View Industry Solution
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    { 
      number: "01", 
      title: "Connect & Import", 
      desc: "Connect your accounting system and import existing client data.",
      icon: <Upload />
    },
    { 
      number: "02", 
      title: "Configure Workflows", 
      desc: "Set up billing rules, approval processes, and automation.",
      icon: <Filter />
    },
    { 
      number: "03", 
      title: "Generate Invoices", 
      desc: "AI-powered invoice generation with automated calculations.",
      icon: <FileText />
    },
    { 
      number: "04", 
      title: "Send & Track", 
      desc: "Send invoices via email, portal, or API and track status.",
      icon: <Mail />
    },
    { 
      number: "05", 
      title: "Process Payments", 
      desc: "Accept payments through multiple gateways and methods.",
      icon: <CreditCard />
    },
    { 
      number: "06", 
      title: "Analyze & Optimize", 
      desc: "Gain insights with analytics and optimize your billing cycle.",
      icon: <PieChart />
    },
  ];

  return (
    <div id="how" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How NexaBill Works</h2>
          <p className="text-lg text-gray-600">
            A seamless billing automation process that saves time and improves cash flow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 h-full border border-indigo-100">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl mr-4">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                    {React.cloneElement(step.icon, { className: "w-6 h-6" })}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 transform translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Billing Process?</h3>
              <p className="text-indigo-100 mb-6">
                Join 10,000+ businesses that trust NexaBill for their billing and invoicing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
               
                <button className="bg-indigo-800 hover:bg-indigo-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300 border border-indigo-500">
                  Schedule a Demo
                </button>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 mr-3" />
                  <div>
                    <p className="font-bold text-lg">4.9/5 Rating</p>
                    <p className="text-indigo-100 text-sm">Billing software satisfaction</p>
                  </div>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Faster Payments",
      desc: "Reduce payment collection time with automated reminders and easy payment options.",
      stat: "35% faster"
    },
    {
      title: "Reduced Errors",
      desc: "Automated calculations and validations minimize billing errors and disputes.",
      stat: "99.9% accuracy"
    },
    {
      title: "Time Savings",
      desc: "Cut manual billing work by up to 90% with automation and AI assistance.",
      stat: "15 hrs/week saved"
    },
    {
      title: "Improved Cash Flow",
      desc: "Better tracking and forecasting leads to more predictable revenue streams.",
      stat: "28% improvement"
    },
    {
      title: "Scalability",
      desc: "Easily handle growing transaction volumes without additional staff.",
      stat: "Unlimited scaling"
    },
    {
      title: "Compliance",
      desc: "Stay compliant with tax regulations and financial reporting requirements.",
      stat: "50+ countries"
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tangible Business Benefits</h2>
          <p className="text-lg text-gray-600">
            See the measurable impact NexaBill has on your business operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{benefit.desc}</p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                <p className="text-indigo-800 font-bold">
                  <TrendingUp className="inline w-4 h-4 mr-2" />
                  {benefit.stat}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CTASection = () => {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Shield className="w-5 h-5 mr-3" />
            <span className="font-medium">SOC 2 Type II Certified • Bank-Level Security</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Start Your Free 30-Day Trial Today
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            No credit card required. Experience the power of intelligent billing automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-sm">
              <h3 className="text-xl font-bold mb-4">Free Trial</h3>
              <p className="text-indigo-100 mb-6">Full platform access for 30 days</p>
              <button className="w-full bg-white text-indigo-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300">
                Start Free Trial
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-sm">
              <h3 className="text-xl font-bold mb-4">Schedule Demo</h3>
              <p className="text-indigo-100 mb-6">Personalized walkthrough for your business</p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Book a Demo
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center text-sm">
            <div className="flex items-center">
              <Lock className="w-4 h-4 text-indigo-300 mr-2" />
              <span>Bank-level encryption</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 text-indigo-300 mr-2" />
              <span>100+ currency support</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 text-indigo-300 mr-2" />
              <span>10,000+ businesses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">NexaBill</h2>
                <p className="text-sm text-indigo-400">Intelligent Billing Platform</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming billing processes with AI-powered automation and intelligent insights.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition">
                <span className="font-bold">FB</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition">
                <span className="font-bold">TW</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition">
                <span className="font-bold">IN</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Industries</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Security</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Compliance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                <span>1-800-BILLING</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3" />
                <span>sales@nexabill.com</span>
              </li>
              <li className="flex items-center">
                <Globe className="w-4 h-4 mr-3" />
                <span>24/7 Global Support</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NexaBill. All rights reserved. | Privacy Policy | Terms of Service
          </p>
          <div className="flex items-center">
            <Shield className="w-4 h-4 text-indigo-400 mr-2" />
            <span className="text-sm text-gray-400">SOC 2 Type II Certified • GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const NexaBill = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <Hero />
      <Features />
      <Industries />
      <HowItWorks />
      <Benefits />
      <CTASection />
      {/* <Footer /> */}
    </div>
  );
};

export default NexaBill;