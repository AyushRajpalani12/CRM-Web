import { useState } from "react";
import { Play, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import video from "../assets/video.mp4"

// Import your logo - update the path as needed
import logo from "../assets/main2.png";

export default function BookDemoForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    companyName: "",
    country: "",
    organizationSize: "",
    phone: "",
    areaOfInterest: ""
  });

  const [errors, setErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "India",
    "Germany",
    "France",
    "Singapore",
    "Japan",
    "Brazil",
    "Mexico",
    "Other"
  ];

  const organizationSizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees"
  ];

  const areasOfInterest = [
    "Customer Management & CRM",
  
    "Automation ",
    "Real-Estate",
   
    "Jewellary Business",
     "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = "Please enter a valid email";
    }
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.organizationSize) newErrors.organizationSize = "Organization size is required";
    if (!formData.areaOfInterest) newErrors.areaOfInterest = "Area of interest is required";
    if (!termsAccepted) newErrors.terms = "Please accept terms and privacy policy";
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      console.log("Form submitted:", formData);
      
      // Here you would typically make an API call
      // setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      businessEmail: "",
      companyName: "",
      country: "",
      organizationSize: "",
      phone: "",
      areaOfInterest: ""
    });
    setTermsAccepted(false);
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navbar */}
     

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Book a Personalized Demo
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            See how our AI-powered CRM can transform your retail or service business
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="max-w-3xl mx-auto mb-8 bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Demo Request Submitted!</h3>
                <p className="text-gray-700 mb-3">
                  Thank you, {formData.firstName}! Our team will contact you within 24 hours to schedule your demo about{" "}
                  <span className="font-semibold">{formData.areaOfInterest}</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={resetForm}
                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Book Another Demo
                  </button>
                  <Link 
                    to="/"
                    className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-center"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Content upper, Video below with gap */}
          <div className="lg:w-2/5">
            {/* Upper: What to expect content */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                What to expect from your demo:
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-blue-600 font-bold text-sm sm:text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                      Personalized Walkthrough
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      30-minute demo with our solutions specialist, tailored to your business needs
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-green-600 font-bold text-sm sm:text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                      No-Commitment Consultation
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Discuss your challenges and see how our CRM can solve them
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-purple-600 font-bold text-sm sm:text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                      Live Product Experience
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      See real product capabilities and features in action
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Selected Interest Preview */}
              {formData.areaOfInterest && !isSubmitted && (
                <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-gray-900 mb-2">Your Focus Area:</h3>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full mr-2 sm:mr-3"></div>
                    <p className="text-sm sm:text-base text-gray-800 font-medium">{formData.areaOfInterest}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3">
                    We'll focus the demo on your selected area of interest
                  </p>
                </div>
              )}
            </div>

            {/* Gap between content and video */}
            <div className="mb-8 sm:mb-10"></div>

            {/* Below: Playable YouTube Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video}
                  title="CRM Platform Demo - How it Works"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6">
                <div className="text-white">
                  <p className="font-medium text-sm sm:text-lg">CRM Platform Demo</p>
                  {/* <p className="text-xs sm:text-sm text-white/70">See key features & benefits in action (3:15)</p> */}
                </div>
              </div>
              
              {/* Play indicator */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-black/50 backdrop-blur-sm rounded-full">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-xs sm:text-sm font-medium">LIVE DEMO</span>
                </div>
              </div>
            </div>

            {/* Additional info below video */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                What customers say
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-3 sm:pl-4">
                  <p className="text-sm sm:text-base text-gray-700 italic">
                    "The demo completely changed how we manage customer relationships. Our sales increased by 40% in 3 months."
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">- Retail Store Owner</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3 sm:pl-4">
                  <p className="text-sm sm:text-text-base text-gray-700 italic">
                    "The AI insights have been game-changing for our service business. Highly recommend the demo!"
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">- Service Business CEO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-3/5">
            {!isSubmitted ? (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-5 border border-blue-200">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                    Limited demo slots available this week
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Schedule Your Personalized Demo
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600">
                    Fill in your details below. Our team will reach out within 24 hours to schedule.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-900">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 border ${errors.firstName ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 transition-all`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-900">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 border ${errors.lastName ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 transition-all`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Business Email */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-900">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 border ${errors.businessEmail ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 transition-all`}
                      placeholder="you@company.com"
                    />
                    {errors.businessEmail && (
                      <p className="text-sm text-red-600 mt-1">{errors.businessEmail}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-900">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 border ${errors.companyName ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 transition-all`}
                      placeholder="Your company name"
                    />
                    {errors.companyName && (
                      <p className="text-sm text-red-600 mt-1">{errors.companyName}</p>
                    )}
                  </div>

                  {/* Country, Organization Size, and Area of Interest */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-900">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 border ${errors.country ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 bg-white transition-all`}
                      >
                        <option value="">Select country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                      {errors.country && (
                        <p className="text-sm text-red-600 mt-1">{errors.country}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-900">
                        Company Size <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="organizationSize"
                        value={formData.organizationSize}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 border ${errors.organizationSize ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 bg-white transition-all`}
                      >
                        <option value="">Select size</option>
                        {organizationSizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                      {errors.organizationSize && (
                        <p className="text-sm text-red-600 mt-1">{errors.organizationSize}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-900">
                        Interest Area <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 border ${errors.areaOfInterest ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 bg-white transition-all`}
                      >
                        <option value="">Select focus area</option>
                        {areasOfInterest.map((interest) => (
                          <option key={interest} value={interest}>
                            {interest}
                          </option>
                        ))}
                      </select>
                      {errors.areaOfInterest && (
                        <p className="text-sm text-red-600 mt-1">{errors.areaOfInterest}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-900">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:px-5 sm:py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                    <p className="text-xs sm:text-sm text-gray-500">We'll call to confirm your demo time</p>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="pt-2 sm:pt-4">
                    <div className={`flex items-start p-4 ${errors.terms ? 'bg-red-50 border border-red-200' : 'bg-gray-50'} rounded-lg`}>
                      <input
                        type="checkbox"
                        id="terms"
                        checked={termsAccepted}
                        onChange={(e) => {
                          setTermsAccepted(e.target.checked);
                          if (errors.terms) setErrors(prev => ({ ...prev, terms: "" }));
                        }}
                        className="mt-1 mr-3 sm:mr-4 w-4 h-4 sm:w-5 sm:h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="terms" className="text-xs sm:text-sm text-gray-700">
                        By supplying my contact information, I accept the{" "}
                        <a href="#" className="text-blue-600 hover:underline font-bold">Terms of Service</a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-600 hover:underline font-bold">Privacy Notice</a>.
                      </label>
                    </div>
                    {errors.terms && (
                      <p className="text-sm text-red-600 mt-2 ml-4">{errors.terms}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 sm:pt-6">
                    <button
                      type="submit"
                      className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-base sm:text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all focus:outline-none focus:ring-3 sm:focus:ring-4 focus:ring-blue-500/30 shadow-lg hover:shadow-xl"
                    >
                      Book My Demo Now
                    </button>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-xs sm:text-sm text-gray-600">24-hour response time</span>
                      </div>
                      <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-xs sm:text-sm text-gray-600">No commitment required</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}