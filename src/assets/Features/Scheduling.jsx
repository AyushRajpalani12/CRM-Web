import React, { useState, useEffect } from 'react';
import { 
  User, Calendar, Clock, FileText, MessageSquare, 
  Bell, Search, Filter, MoreVertical, CheckCircle, 
  Send, Trash2, Edit, Star, Tag, Download, X,
  Activity, Zap, Brain, History as HistoryIcon,
  Users, MapPin, Phone, Mail, ChevronRight,
  Plus, Eye, UserPlus, Settings, RefreshCw
} from 'lucide-react';

const CRM = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState(0);
  const [selectedStaff, setSelectedStaff] = useState('all');
  const [newNote, setNewNote] = useState('');
  const [newFollowUp, setNewFollowUp] = useState('');
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    title: '',
    contactId: '',
    staffId: '',
    date: '',
    time: '',
    duration: 60,
    type: 'meeting',
    notes: ''
  });
  const [dateRange, setDateRange] = useState('week');

  // Mock data for contacts
  const contacts = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Product Manager',
      company: 'TechCorp Inc.',
      email: 'alex@techcorp.com',
      phone: '+1 (555) 123-4567',
      lastContact: '2 hours ago',
      status: 'active',
      priority: 'high',
      avatarColor: 'bg-blue-500',
      timezone: 'EST'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      role: 'Marketing Director',
      company: 'GrowthLabs',
      email: 'maria@growthlabs.com',
      phone: '+1 (555) 987-6543',
      lastContact: '1 day ago',
      status: 'active',
      priority: 'medium',
      avatarColor: 'bg-pink-500',
      timezone: 'PST'
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'CTO',
      company: 'InnovateAI',
      email: 'david@innovateai.com',
      phone: '+1 (555) 456-7890',
      lastContact: '3 days ago',
      status: 'pending',
      priority: 'high',
      avatarColor: 'bg-green-500',
      timezone: 'CST'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      role: 'Sales Executive',
      company: 'SalesPro',
      email: 'sarah@salespro.com',
      phone: '+1 (555) 234-5678',
      lastContact: '1 week ago',
      status: 'inactive',
      priority: 'low',
      avatarColor: 'bg-purple-500',
      timezone: 'EST'
    }
  ];

  // Staff/Agent data
  const staffMembers = [
    {
      id: 1,
      name: 'Michael Brown',
      role: 'Senior Account Manager',
      email: 'michael@company.com',
      avatarColor: 'bg-indigo-500',
      availability: 'available',
      skills: ['Enterprise', 'Technical', 'Negotiation'],
      currentLoad: 65,
      maxAppointments: 8
    },
    {
      id: 2,
      name: 'Jessica Wilson',
      role: 'Customer Success',
      email: 'jessica@company.com',
      avatarColor: 'bg-teal-500',
      availability: 'available',
      skills: ['Onboarding', 'Support', 'Training'],
      currentLoad: 40,
      maxAppointments: 6
    },
    {
      id: 3,
      name: 'Robert Taylor',
      role: 'Sales Executive',
      email: 'robert@company.com',
      avatarColor: 'bg-amber-500',
      availability: 'busy',
      skills: ['New Business', 'SaaS', 'Consulting'],
      currentLoad: 85,
      maxAppointments: 10
    },
    {
      id: 4,
      name: 'Lisa Anderson',
      role: 'Technical Specialist',
      email: 'lisa@company.com',
      avatarColor: 'bg-rose-500',
      availability: 'away',
      skills: ['Integration', 'API', 'Development'],
      currentLoad: 30,
      maxAppointments: 6
    }
  ];

  // Appointment data
  const appointmentsData = [
    {
      id: 1,
      title: 'Product Demo',
      contactId: 1,
      staffId: 1,
      date: '2024-03-20',
      time: '10:00',
      duration: 60,
      type: 'demo',
      status: 'confirmed',
      notes: 'Focus on API integration features',
      location: 'Conference Room A',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Contract Review',
      contactId: 2,
      staffId: 2,
      date: '2024-03-20',
      time: '14:30',
      duration: 90,
      type: 'meeting',
      status: 'confirmed',
      notes: 'Annual renewal discussion',
      location: 'Zoom Call',
      color: 'green'
    },
    {
      id: 3,
      title: 'Technical Q&A',
      contactId: 3,
      staffId: 4,
      date: '2024-03-21',
      time: '11:00',
      duration: 120,
      type: 'technical',
      status: 'pending',
      notes: 'Migration strategy and timeline',
      location: 'Teams Meeting',
      color: 'purple'
    },
    {
      id: 4,
      title: 'Onboarding Session',
      contactId: 4,
      staffId: 2,
      date: '2024-03-21',
      time: '13:00',
      duration: 60,
      type: 'onboarding',
      status: 'confirmed',
      notes: 'Platform walkthrough for new team',
      location: 'Conference Room B',
      color: 'amber'
    },
    {
      id: 5,
      title: 'Strategy Call',
      contactId: 1,
      staffId: 3,
      date: '2024-03-22',
      time: '09:30',
      duration: 45,
      type: 'call',
      status: 'tentative',
      notes: 'Q2 planning and resource allocation',
      location: 'Phone',
      color: 'indigo'
    }
  ];

  // Generate smart time slots
  const generateSmartSlots = () => {
    const today = new Date();
    const slots = [];
    
    // Generate slots for next 3 days
    for (let day = 0; day < 3; day++) {
      const date = new Date(today);
      date.setDate(today.getDate() + day);
      const dateStr = date.toISOString().split('T')[0];
      
      // Morning slots
      for (let hour = 9; hour < 12; hour++) {
        const time = `${hour.toString().padStart(2, '0')}:00`;
        const slot = {
          id: `${dateStr}-${time}`,
          date: dateStr,
          time,
          duration: 60,
          available: Math.random() > 0.3, // 70% availability
          suggested: Math.random() > 0.7, // 30% suggested by AI
          staffAvailability: staffMembers.filter(s => s.availability === 'available').length
        };
        slots.push(slot);
      }
      
      // Afternoon slots
      for (let hour = 13; hour < 17; hour++) {
        const time = `${hour.toString().padStart(2, '0')}:00`;
        const slot = {
          id: `${dateStr}-${time}`,
          date: dateStr,
          time,
          duration: 60,
          available: Math.random() > 0.2, // 80% availability
          suggested: Math.random() > 0.6, // 40% suggested by AI
          staffAvailability: staffMembers.filter(s => s.availability === 'available').length
        };
        slots.push(slot);
      }
    }
    
    return slots;
  };

  const [smartSlots, setSmartSlots] = useState(generateSmartSlots());

  // Mock data for history, notes, and follow-ups (from previous example)
  const historyData = [
    {
      id: 1,
      type: 'call',
      title: 'Product demo call',
      description: 'Discussed new features and pricing plans',
      timestamp: '2 hours ago',
      duration: '30 mins',
      contactId: 1,
      outcome: 'positive'
    },
    {
      id: 2,
      type: 'email',
      title: 'Follow-up email',
      description: 'Sent contract proposal and next steps',
      timestamp: '1 day ago',
      contactId: 2,
      outcome: 'neutral'
    }
  ];

  const notesData = [
    {
      id: 1,
      title: 'Project Requirements',
      content: 'Client is interested in API integration and needs custom reporting features. Budget approved for Q2.',
      timestamp: 'Yesterday, 2:30 PM',
      tags: ['requirements', 'budget', 'Q2'],
      contactId: 1,
      pinned: true
    }
  ];

  const followUpData = [
    {
      id: 1,
      title: 'Schedule follow-up call',
      description: 'AI suggests scheduling a call to discuss the new feature requests mentioned in last meeting.',
      priority: 'high',
      suggestedDate: 'Tomorrow, 10:00 AM',
      contactId: 1,
      aiInsight: 'Client showed high interest in feature X. 87% probability of conversion if contacted within 48 hours.'
    }
  ];

  // Filter appointments based on selected staff and date range
  const filteredAppointments = appointmentsData.filter(appointment => {
    if (selectedStaff !== 'all' && appointment.staffId !== parseInt(selectedStaff)) return false;
    
    const appointmentDate = new Date(appointment.date);
    const today = new Date();
    const endDate = new Date();
    
    switch(dateRange) {
      case 'today':
        return appointmentDate.toDateString() === today.toDateString();
      case 'week':
        endDate.setDate(today.getDate() + 7);
        return appointmentDate >= today && appointmentDate <= endDate;
      case 'month':
        endDate.setMonth(today.getMonth() + 1);
        return appointmentDate >= today && appointmentDate <= endDate;
      default:
        return true;
    }
  });

  const handleCreateAppointment = () => {
    if (!newAppointment.title || !newAppointment.contactId || !newAppointment.date || !newAppointment.time) {
      alert('Please fill in all required fields');
      return;
    }
    
    alert(`Appointment created: ${newAppointment.title} with ${contacts.find(c => c.id === parseInt(newAppointment.contactId))?.name}`);
    setShowAppointmentModal(false);
    setNewAppointment({
      title: '',
      contactId: '',
      staffId: '',
      date: '',
      time: '',
      duration: 60,
      type: 'meeting',
      notes: ''
    });
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'tentative': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'demo': return 'bg-blue-100 text-blue-800';
      case 'meeting': return 'bg-green-100 text-green-800';
      case 'technical': return 'bg-purple-100 text-purple-800';
      case 'onboarding': return 'bg-amber-100 text-amber-800';
      case 'call': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityColor = (availability) => {
    switch(availability) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'busy': return 'bg-yellow-100 text-yellow-800';
      case 'away': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const getSuggestedSlots = () => {
    return smartSlots.filter(slot => slot.suggested && slot.available).slice(0, 3);
  };

  return (
    <div className="min-h-screen bg-gray-50">
   

      <div className="flex flex-col lg:flex-row p-6 gap-6">
        {/* Left Sidebar */}
        <div className="lg:w-1/4 space-y-6">
          {/* Staff Allocation Panel */}
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Staff Allocation</h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                <Settings className="h-4 w-4 mr-1" />
                Manage
              </button>
            </div>
            
            <div className="space-y-4">
              {staffMembers.map((staff) => (
                <div key={staff.id} className="p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 text-white ${staff.avatarColor}`}>
                      {staff.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 truncate">{staff.name}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${getAvailabilityColor(staff.availability)}`}>
                          {staff.availability}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{staff.role}</p>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Current Load</span>
                      <span>{staff.currentLoad}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${staff.currentLoad > 80 ? 'bg-red-500' : staff.currentLoad > 60 ? 'bg-yellow-500' : 'bg-green-500'}`}
                        style={{ width: `${staff.currentLoad}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mt-3">
                      {staff.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-3 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {appointmentsData.filter(a => a.staffId === staff.id).length} appointments today
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Capacity</span>
                <span className="font-medium">
                  {staffMembers.reduce((sum, staff) => sum + staff.maxAppointments, 0)} slots available
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Appointment Stats</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-600">Today</p>
                <p className="text-2xl font-bold text-gray-800">
                  {appointmentsData.filter(a => a.date === new Date().toISOString().split('T')[0]).length}
                </p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-600">This Week</p>
                <p className="text-2xl font-bold text-gray-800">{filteredAppointments.length}</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm text-purple-600">Pending</p>
                <p className="text-2xl font-bold text-gray-800">
                  {appointmentsData.filter(a => a.status === 'pending').length}
                </p>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg">
                <p className="text-sm text-amber-600">Utilization</p>
                <p className="text-2xl font-bold text-gray-800">
                  {Math.round((appointmentsData.length / staffMembers.reduce((sum, staff) => sum + staff.maxAppointments, 0)) * 100)}%
                </p>
              </div>
            </div>
          </div>

          {/* Smart Slot Suggestions */}
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Smart Slot Suggestions</h3>
              <button 
                className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
                onClick={() => setSmartSlots(generateSmartSlots())}
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                Refresh
              </button>
            </div>
            
            <div className="space-y-3">
              {getSuggestedSlots().map((slot) => (
                <div key={slot.id} className="p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-medium text-gray-900">{formatDate(slot.date)}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-600">{slot.time} ({slot.duration} min)</span>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                      AI Suggested
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {slot.staffAvailability} staff available
                    </span>
                  </div>
                  <button className="w-full mt-3 px-3 py-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-lg text-sm font-medium">
                    Book This Slot
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-gray-600">
                <Brain className="inline h-3 w-3 mr-1" />
                AI suggests optimal times based on staff availability and historical success rates.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b mb-6">
            <button
              className={`px-4 py-3 font-medium text-sm flex items-center ${activeTab === 'appointments' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('appointments')}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Appointments
            </button>
            <button
              className={`px-4 py-3 font-medium text-sm flex items-center ${activeTab === 'history' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('history')}
            >
              <HistoryIcon className="h-4 w-4 mr-2" />
              History
            </button>
            <button
              className={`px-4 py-3 font-medium text-sm flex items-center ${activeTab === 'notes' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('notes')}
            >
              <FileText className="h-4 w-4 mr-2" />
              Notes
            </button>
            <button
              className={`px-4 py-3 font-medium text-sm flex items-center ${activeTab === 'followups' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('followups')}
            >
              <Zap className="h-4 w-4 mr-2" />
              AI Follow-ups
            </button>
          </div>

          {/* Appointments Tab */}
          {activeTab === 'appointments' && (
            <>
              {/* Filters and Controls */}
              <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-700">Date Range:</span>
                      <select 
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                      >
                        <option value="today">Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                        <option value="all">All Appointments</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-700">Staff:</span>
                      <select 
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={selectedStaff}
                        onChange={(e) => setSelectedStaff(e.target.value)}
                      >
                        <option value="all">All Staff</option>
                        {staffMembers.map((staff) => (
                          <option key={staff.id} value={staff.id}>{staff.name}</option>
                        ))}
                      </select>
                    </div>
                    
                    <button className="flex items-center px-3 py-2 border rounded-lg hover:bg-gray-50">
                      <Filter className="h-4 w-4 mr-2" />
                      More Filters
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </button>
                    <button 
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
                      onClick={() => setShowAppointmentModal(true)}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      New Appointment
                    </button>
                  </div>
                </div>
              </div>

              {/* Calendar View */}
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden mb-6">
                <div className="p-4 border-b">
                  <h2 className="text-xl font-semibold text-gray-800">Upcoming Appointments</h2>
                </div>
                
                <div className="divide-y">
                  {filteredAppointments.length > 0 ? (
                    filteredAppointments.map((appointment) => {
                      const contact = contacts.find(c => c.id === appointment.contactId);
                      const staff = staffMembers.find(s => s.id === appointment.staffId);
                      
                      return (
                        <div key={appointment.id} className="p-6 hover:bg-gray-50">
                          <div className="flex flex-col lg:flex-row lg:items-start">
                            {/* Time Badge */}
                            <div className="lg:w-1/6 mb-4 lg:mb-0">
                              <div className={`p-3 rounded-lg border-l-4 ${appointment.color === 'blue' ? 'border-blue-500 bg-blue-50' : appointment.color === 'green' ? 'border-green-500 bg-green-50' : appointment.color === 'purple' ? 'border-purple-500 bg-purple-50' : 'border-indigo-500 bg-indigo-50'}`}>
                                <div className="text-lg font-bold text-gray-900">{appointment.time}</div>
                                <div className="text-sm text-gray-600">{formatDate(appointment.date)}</div>
                                <div className="text-sm text-gray-500 mt-1">{appointment.duration} minutes</div>
                              </div>
                            </div>
                            
                            {/* Appointment Details */}
                            <div className="lg:w-2/3 lg:px-6">
                              <div className="flex flex-wrap items-start justify-between mb-3">
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-900">{appointment.title}</h3>
                                  <div className="flex items-center mt-1 space-x-4">
                                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(appointment.status)}`}>
                                      {appointment.status}
                                    </span>
                                    <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(appointment.type)}`}>
                                      {appointment.type}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex space-x-2 mt-2 lg:mt-0">
                                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                                    <Edit className="h-4 w-4" />
                                  </button>
                                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-gray-100 rounded">
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                              
                              <p className="text-gray-600 mb-4">{appointment.notes}</p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Contact Info */}
                                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                  <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 text-white ${contact?.avatarColor || 'bg-gray-500'}`}>
                                    {contact?.name.split(' ').map(n => n[0]).join('')}
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-gray-900">{contact?.name}</h4>
                                    <p className="text-sm text-gray-500">{contact?.company}</p>
                                  </div>
                                </div>
                                
                                {/* Staff Info */}
                                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                  <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 text-white ${staff?.avatarColor || 'bg-gray-500'}`}>
                                    {staff?.name.split(' ').map(n => n[0]).join('')}
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-gray-900">{staff?.name}</h4>
                                    <p className="text-sm text-gray-500">{staff?.role}</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-4 flex items-center text-sm text-gray-500">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>{appointment.location}</span>
                              </div>
                            </div>
                            
                            {/* Actions */}
                            <div className="lg:w-1/6 mt-4 lg:mt-0 lg:pl-6">
                              <div className="space-y-2">
                                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm">
                                  Confirm
                                </button>
                                <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                                  Reschedule
                                </button>
                                <button className="w-full px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 text-sm">
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="p-8 text-center">
                      <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No appointments found</h3>
                      <p className="text-gray-500 mb-4">Try adjusting your filters or create a new appointment.</p>
                      <button 
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        onClick={() => setShowAppointmentModal(true)}
                      >
                        Create Appointment
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Available Smart Slots Grid */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">Available Smart Slots</h2>
                    <p className="text-gray-600">AI-recommended times for optimal scheduling</p>
                  </div>
                  <div className="flex items-center text-indigo-600">
                    <Brain className="h-5 w-5 mr-2" />
                    <span className="font-medium">AI Powered</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {smartSlots
                    .filter(slot => slot.available)
                    .slice(0, 6)
                    .map((slot) => (
                      <div key={slot.id} className="border rounded-lg p-4 hover:border-indigo-300 hover:shadow-sm">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="font-medium text-gray-900">{formatDate(slot.date)}</div>
                            <div className="text-2xl font-bold text-gray-900">{slot.time}</div>
                            <div className="text-sm text-gray-500">{slot.duration} minutes</div>
                          </div>
                          {slot.suggested && (
                            <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">
                              AI Suggested
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <span className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {slot.staffAvailability} staff
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${slot.staffAvailability > 2 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {slot.staffAvailability > 2 ? 'High Availability' : 'Limited'}
                          </span>
                        </div>
                        
                        <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
                          Book This Slot
                        </button>
                      </div>
                    ))}
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                      Showing {smartSlots.filter(slot => slot.available).length} available slots out of {smartSlots.length}
                    </p>
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                      View All Slots
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Other Tabs (History, Notes, Follow-ups) would go here */}
          {/* Simplified for brevity - you can add the content from the previous example */}
          
          {/* Appointment Creation Modal */}
          {showAppointmentModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Schedule New Appointment</h2>
                    <button 
                      className="p-2 hover:bg-gray-100 rounded-lg"
                      onClick={() => setShowAppointmentModal(false)}
                    >
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Appointment Title *
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="e.g., Product Demo, Contract Review"
                          value={newAppointment.title}
                          onChange={(e) => setNewAppointment({...newAppointment, title: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Contact *
                        </label>
                        <select
                          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          value={newAppointment.contactId}
                          onChange={(e) => setNewAppointment({...newAppointment, contactId: e.target.value})}
                        >
                          <option value="">Select a contact</option>
                          {contacts.map((contact) => (
                            <option key={contact.id} value={contact.id}>
                              {contact.name} - {contact.company}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Assign Staff
                        </label>
                        <select
                          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          value={newAppointment.staffId}
                          onChange={(e) => setNewAppointment({...newAppointment, staffId: e.target.value})}
                        >
                          <option value="">Auto-assign (AI Recommended)</option>
                          {staffMembers.map((staff) => (
                            <option key={staff.id} value={staff.id}>
                              {staff.name} - {staff.role} ({staff.availability})
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Appointment Type
                        </label>
                        <select
                          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          value={newAppointment.type}
                          onChange={(e) => setNewAppointment({...newAppointment, type: e.target.value})}
                        >
                          <option value="meeting">Meeting</option>
                          <option value="demo">Demo</option>
                          <option value="call">Phone Call</option>
                          <option value="technical">Technical Review</option>
                          <option value="onboarding">Onboarding</option>
                        </select>
                      </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Date *
                        </label>
                        <input
                          type="date"
                          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          value={newAppointment.date}
                          onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Time *
                        </label>
                        <input
                          type="time"
                          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          value={newAppointment.time}
                          onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Duration (minutes)
                        </label>
                        <select
                          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          value={newAppointment.duration}
                          onChange={(e) => setNewAppointment({...newAppointment, duration: parseInt(e.target.value)})}
                        >
                          <option value={15}>15 minutes</option>
                          <option value={30}>30 minutes</option>
                          <option value={45}>45 minutes</option>
                          <option value={60}>1 hour</option>
                          <option value={90}>1.5 hours</option>
                          <option value={120}>2 hours</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="e.g., Conference Room A, Zoom, Teams"
                          value={newAppointment.location}
                          onChange={(e) => setNewAppointment({...newAppointment, location: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Notes
                    </label>
                    <textarea
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      rows="3"
                      placeholder="Add any notes or details about this appointment..."
                      value={newAppointment.notes}
                      onChange={(e) => setNewAppointment({...newAppointment, notes: e.target.value})}
                    />
                  </div>
                  
                  {/* Smart Slot Suggestions */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center text-blue-700 mb-3">
                      <Brain className="h-5 w-5 mr-2" />
                      <span className="font-medium">AI Smart Slot Suggestions</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {getSuggestedSlots().map((slot) => (
                        <button
                          key={slot.id}
                          className="p-3 bg-white border border-blue-200 rounded-lg hover:border-blue-400 text-left"
                          onClick={() => {
                            setNewAppointment({
                              ...newAppointment,
                              date: slot.date,
                              time: slot.time,
                              duration: slot.duration
                            });
                          }}
                        >
                          <div className="font-medium text-gray-900">{formatDate(slot.date)}</div>
                          <div className="text-lg font-bold text-gray-900">{slot.time}</div>
                          <div className="text-sm text-blue-600">AI Recommended</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end space-x-4">
                    <button 
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                      onClick={() => setShowAppointmentModal(false)}
                    >
                      Cancel
                    </button>
                    <button 
                      className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                      onClick={handleCreateAppointment}
                    >
                      Create Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="p-6 text-center text-gray-500 text-sm border-t">
        <p>Unified CRM • Appointments, Staff Allocation & Smart Slots • {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default CRM;