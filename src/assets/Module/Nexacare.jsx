import React, { useState } from 'react';
import { 
  Heart, 
  Stethoscope, 
  Shield, 
  Users, 
  Calendar,
  FileText,
  Pill,
  Activity,
  Clock,
  Bell,
  Video,
  MessageSquare,
  Building,
  BarChart3,
  Phone,
  Upload,
  Mail,
  Filter,
  Zap,
  CheckCircle,
  Award,
  Globe,
  Smartphone,
  Lock,
  Cpu,
  Database,
  Target,
  PieChart,
  TrendingUp,
  Menu,
  X,
  ChevronRight,
  Play,
  Star
} from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-50 shadow-sm">
     
    </header>
  );
};

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-emerald-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-flex items-center bg-teal-100 text-teal-800 rounded-full px-4 py-2 mb-6">
              <Zap className="w-5 h-5 mr-2" />
              <span className="font-medium">NexaCare v4.2 - HIPAA Compliant</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Intelligent <span className="text-teal-600">Healthcare</span> Management
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              NexaCare integrates patient management, electronic health records, telemedicine, and practice operations into one seamless platform. Transform healthcare delivery with intelligent technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-xl transition duration-300 flex items-center justify-center shadow-lg">
                Request Demo <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white border-2 border-teal-200 hover:border-teal-300 text-teal-700 font-bold py-3 px-8 rounded-xl transition duration-300 shadow-sm">
                <Play className="inline w-5 h-5 mr-2" />
                Watch Overview
              </button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-teal-600 mr-2" />
                  <span className="text-lg font-bold text-gray-900">HIPAA Compliant</span>
                </div>
                <p className="text-gray-600 text-sm">Enterprise-grade security</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Globe className="w-5 h-5 text-teal-600 mr-2" />
                  <span className="text-lg font-bold text-gray-900">24/7 Support</span>
                </div>
                <p className="text-gray-600 text-sm">Dedicated healthcare support</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6 border border-teal-100 transform hover:scale-105 transition duration-300">
                  <FileText className="w-12 h-12 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">EHR System</h3>
                  <p className="text-gray-600">Electronic Health Records</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 transform hover:scale-105 transition duration-300">
                  <Video className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Telemedicine</h3>
                  <p className="text-gray-600">Virtual care platform</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-100 transform hover:scale-105 transition duration-300">
                  <Calendar className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scheduling</h3>
                  <p className="text-gray-600">Smart appointment system</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 transform hover:scale-105 transition duration-300">
                  <Activity className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics</h3>
                  <p className="text-gray-600">Patient insights & reports</p>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl p-6 text-white">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">AI-Powered Diagnostics</h3>
                    <p className="text-teal-100">Assisted clinical decision support</p>
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
      title: "Electronic Health Records", 
      desc: "Comprehensive EHR with templates, prescriptions, and lab integration",
      color: "teal"
    },
    { 
      icon: <Calendar />, 
      title: "Smart Scheduling", 
      desc: "Automated appointment booking, reminders, and resource allocation",
      color: "blue"
    },
    { 
      icon: <Video />, 
      title: "Telemedicine Suite", 
      desc: "Secure video consultations, virtual waiting rooms, and e-prescriptions",
      color: "emerald"
    },
    { 
      icon: <Activity />, 
      title: "Patient Analytics", 
      desc: "Real-time health monitoring, predictive analytics, and population health",
      color: "purple"
    },
    { 
      icon: <Pill />, 
      title: "Pharmacy Integration", 
      desc: "Direct prescription routing to pharmacies and medication tracking",
      color: "indigo"
    },
    { 
      icon: <MessageSquare />, 
      title: "Patient Portal", 
      desc: "Secure messaging, health records access, and educational resources",
      color: "pink"
    },
    { 
      icon: <BarChart3 />, 
      title: "Practice Analytics", 
      desc: "Financial reports, performance metrics, and operational insights",
      color: "amber"
    },
    { 
      icon: <Lock />, 
      title: "HIPAA Compliance", 
      desc: "End-to-end encryption, audit trails, and compliance monitoring",
      color: "red"
    },
    { 
      icon: <Users />, 
      title: "Care Team Collaboration", 
      desc: "Multi-provider coordination, referral management, and team messaging",
      color: "cyan"
    },
    { 
      icon: <Upload />, 
      title: "Interoperability", 
      desc: "HL7/FHIR standards, EHR integrations, and data exchange",
      color: "green"
    },
    { 
      icon: <Bell />, 
      title: "Automated Alerts", 
      desc: "Critical result notifications, recall reminders, and preventive care alerts",
      color: "orange"
    },
    { 
      icon: <Database />, 
      title: "Centralized Data", 
      desc: "Unified patient database with imaging, labs, and clinical notes",
      color: "gray"
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      teal: "from-teal-500 to-emerald-600",
      blue: "from-blue-500 to-cyan-600",
      emerald: "from-emerald-500 to-green-600",
      purple: "from-purple-500 to-pink-600",
      indigo: "from-indigo-500 to-blue-600",
      pink: "from-pink-500 to-rose-600",
      amber: "from-amber-500 to-orange-600",
      red: "from-red-500 to-rose-600",
      cyan: "from-cyan-500 to-teal-600",
      green: "from-green-500 to-emerald-600",
      orange: "from-orange-500 to-amber-600",
      gray: "from-gray-600 to-gray-700",
    };
    return colors[color] || "from-teal-500 to-emerald-600";
  };

  return (
    <div id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Comprehensive Healthcare Platform</h2>
          <p className="text-lg text-gray-600">
            NexaCare combines all essential healthcare management tools into one integrated, intuitive platform designed for modern medical practices.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(feature.color)} rounded-lg flex items-center justify-center mb-4 text-white`}>
                {React.cloneElement(feature.icon, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Solutions = () => {
  const solutions = [
    {
      title: "Hospitals & Health Systems",
      desc: "Enterprise platform for large healthcare organizations with multi-site management.",
      icon: <Building />,
      features: ["Multi-site coordination", "Enterprise EHR", "Resource optimization", "Centralized billing"]
    },
    {
      title: "Clinics & Medical Practices",
      desc: "Complete practice management for small to medium-sized healthcare providers.",
      icon: <Stethoscope />,
      features: ["Appointment scheduling", "Patient records", "Billing & claims", "Telemedicine"]
    },
    {
      title: "Specialty Care Centers",
      desc: "Specialized modules for cardiology, oncology, pediatrics, and other specialties.",
      icon: <Heart />,
      features: ["Specialty templates", "Procedure tracking", "Referral management", "Outcome analytics"]
    },
    {
      title: "Telehealth Providers",
      desc: "End-to-end virtual care platform for remote healthcare delivery.",
      icon: <Video />,
      features: ["Video consultations", "Virtual waiting rooms", "Remote monitoring", "E-prescriptions"]
    },
    {
      title: "Mental Health Practices",
      desc: "Secure platform for therapists, psychologists, and mental health professionals.",
      icon: <Users />,
      features: ["Secure messaging", "Session notes", "Treatment plans", "Progress tracking"]
    },
    {
      title: "Dental Practices",
      desc: "Comprehensive dental practice management with imaging integration.",
      icon: <Activity />,
      features: ["Dental charting", "Appointment scheduling", "Insurance claims", "Recall system"]
    },
  ];

  return (
    <div id="solutions" className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Specialized Healthcare Solutions</h2>
          <p className="text-lg text-gray-600">
            Tailored solutions for different healthcare providers and specialties.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-xl flex items-center justify-center mb-6 text-teal-600">
                {React.cloneElement(solution.icon, { className: "w-7 h-7" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.desc}</p>
              
              <div className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 w-full text-teal-600 hover:text-teal-700 font-medium py-2 border border-teal-200 rounded-lg hover:border-teal-300 transition duration-300">
                Learn More
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
      title: "Implementation & Onboarding", 
      desc: "Quick setup with data migration, staff training, and system configuration.",
      icon: <Upload />
    },
    { 
      number: "02", 
      title: "Patient Data Integration", 
      desc: "Seamless integration of existing patient records and medical history.",
      icon: <Database />
    },
    { 
      number: "03", 
      title: "Workflow Optimization", 
      desc: "Customize workflows for appointments, documentation, and communications.",
      icon: <Target />
    },
    { 
      number: "04", 
      title: "Telemedicine Activation", 
      desc: "Enable virtual consultations and remote patient monitoring.",
      icon: <Video />
    },
    { 
      number: "05", 
      title: "Analytics & Reporting", 
      desc: "Access real-time insights on practice performance and patient outcomes.",
      icon: <PieChart />
    },
    { 
      number: "06", 
      title: "Continuous Support", 
      desc: "Ongoing training, updates, and dedicated healthcare support.",
      icon: <Users />
    },
  ];

  return (
    <div id="how" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How NexaCare Works</h2>
          <p className="text-lg text-gray-600">
            A seamless implementation process designed specifically for healthcare environments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-6 h-full border border-teal-100">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl mr-4">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                    {React.cloneElement(step.icon, { className: "w-6 h-6" })}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 transform translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-teal-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Healthcare Practice?</h3>
              <p className="text-teal-100 mb-6">
                Join thousands of healthcare providers who trust NexaCare for their practice management needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-teal-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
                  Schedule Live Demo
                </button>
                <button className="bg-teal-800 hover:bg-teal-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300 border border-teal-500">
                  Download Case Study
                </button>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 mr-3" />
                  <div>
                    <p className="font-bold text-lg">4.8/5 Rating</p>
                    <p className="text-teal-100 text-sm">Healthcare IT satisfaction</p>
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

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Medical Director, City General Hospital",
      content: "NexaCare transformed our hospital's efficiency. Patient wait times reduced by 40% and documentation errors decreased significantly.",
      avatarColor: "bg-teal-100"
    },
    {
      name: "Dr. James Wilson",
      role: "Cardiology Practice Owner",
      content: "The telemedicine features allowed us to expand our reach during the pandemic. The platform is intuitive for both staff and patients.",
      avatarColor: "bg-blue-100"
    },
    {
      name: "Maria Rodriguez",
      role: "Clinic Administrator",
      content: "Implementation was seamless with excellent support. Our billing process is now 60% faster and more accurate.",
      avatarColor: "bg-emerald-100"
    },
  ];

  const stats = [
    { value: "2,500+", label: "Healthcare Providers" },
    { value: "4M+", label: "Patients Managed" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "40%", label: "Efficiency Gain" },
  ];

  return (
    <div id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Trusted by Healthcare Professionals</h2>
          <p className="text-lg text-gray-600">
            See how NexaCare is transforming healthcare delivery across different specialties.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center mr-4`}>
                  <Users className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CTASection = () => {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-r from-teal-900 to-emerald-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Shield className="w-5 h-5 mr-3" />
            <span className="font-medium">HIPAA Compliant • Enterprise Security</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Schedule a personalized demo to see how NexaCare can streamline your operations and improve patient care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-sm">
              <h3 className="text-xl font-bold mb-4">Schedule Live Demo</h3>
              <p className="text-teal-100 mb-6">45-minute personalized walkthrough</p>
              <button className="w-full bg-white text-teal-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300">
                Book Demo Now
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-sm">
              <h3 className="text-xl font-bold mb-4">Free Trial</h3>
              <p className="text-teal-100 mb-6">30-day free trial for qualified practices</p>
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Start Free Trial
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center text-sm">
            <div className="flex items-center">
              <Lock className="w-4 h-4 text-teal-300 mr-2" />
              <span>End-to-end encryption</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 text-teal-300 mr-2" />
              <span>24/7 healthcare support</span>
            </div>
            <div className="flex items-center">
              <Smartphone className="w-4 h-4 text-teal-300 mr-2" />
              <span>Mobile app included</span>
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

    </footer>
  );
};

const NexaCare = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default NexaCare;