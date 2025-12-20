import React, { useState, useEffect } from 'react';
import { 
  User, Calendar, Clock, FileText, MessageSquare, 
  Bell, Search, Filter, MoreVertical, CheckCircle, 
  Send, Trash2, Edit, Star, Tag, Download,
  Activity, Zap, Brain, History as HistoryIcon
} from 'lucide-react';

const CRM = () => {
  const [activeTab, setActiveTab] = useState('history');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState(0);
  const [newNote, setNewNote] = useState('');
  const [newFollowUp, setNewFollowUp] = useState('');

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
      avatarColor: 'bg-blue-500'
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
      avatarColor: 'bg-pink-500'
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
      avatarColor: 'bg-green-500'
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
      avatarColor: 'bg-purple-500'
    }
  ];

  // Mock data for history
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
    },
    {
      id: 3,
      type: 'meeting',
      title: 'Quarterly review',
      description: 'Annual contract renewal discussion',
      timestamp: '3 days ago',
      duration: '1 hour',
      contactId: 3,
      outcome: 'positive'
    },
    {
      id: 4,
      type: 'task',
      title: 'Send documentation',
      description: 'Technical specifications and API docs',
      timestamp: '1 week ago',
      contactId: 4,
      outcome: 'completed'
    }
  ];

  // Mock data for notes
  const notesData = [
    {
      id: 1,
      title: 'Project Requirements',
      content: 'Client is interested in API integration and needs custom reporting features. Budget approved for Q2.',
      timestamp: 'Yesterday, 2:30 PM',
      tags: ['requirements', 'budget', 'Q2'],
      contactId: 1,
      pinned: true
    },
    {
      id: 2,
      title: 'Meeting Notes',
      content: 'Discussed marketing campaign timelines. Need to follow up on design assets by Friday.',
      timestamp: 'Mar 12, 10:15 AM',
      tags: ['marketing', 'timeline'],
      contactId: 2,
      pinned: false
    },
    {
      id: 3,
      title: 'Technical Questions',
      content: 'Client has concerns about data migration process. Need to schedule a technical deep-dive session.',
      timestamp: 'Mar 10, 4:45 PM',
      tags: ['technical', 'migration'],
      contactId: 3,
      pinned: true
    }
  ];

  // Mock data for AI follow-ups
  const followUpData = [
    {
      id: 1,
      title: 'Schedule follow-up call',
      description: 'AI suggests scheduling a call to discuss the new feature requests mentioned in last meeting.',
      priority: 'high',
      suggestedDate: 'Tomorrow, 10:00 AM',
      contactId: 1,
      aiInsight: 'Client showed high interest in feature X. 87% probability of conversion if contacted within 48 hours.'
    },
    {
      id: 2,
      title: 'Send case studies',
      description: 'Share relevant case studies that match client industry and challenges.',
      priority: 'medium',
      suggestedDate: 'Today, 3:00 PM',
      contactId: 2,
      aiInsight: 'Similar clients responded positively to case studies in this industry. Estimated 30% increase in engagement.'
    },
    {
      id: 3,
      title: 'Contract renewal reminder',
      description: 'Client contract expires in 30 days. AI recommends starting renewal conversation.',
      priority: 'high',
      suggestedDate: 'This week',
      contactId: 3,
      aiInsight: 'Historical data shows 95% renewal rate when contacted 30 days before expiration.'
    }
  ];

  // Filter data based on selected contact
  const filteredHistory = historyData.filter(item => 
    selectedContact === 0 || item.contactId === contacts[selectedContact - 1]?.id
  );
  
  const filteredNotes = notesData.filter(item => 
    selectedContact === 0 || item.contactId === contacts[selectedContact - 1]?.id
  );
  
  const filteredFollowUps = followUpData.filter(item => 
    selectedContact === 0 || item.contactId === contacts[selectedContact - 1]?.id
  );

  const handleAddNote = () => {
    if (!newNote.trim()) return;
    alert(`Note added: ${newNote}`);
    setNewNote('');
  };

  const handleAddFollowUp = () => {
    if (!newFollowUp.trim()) return;
    alert(`Follow-up created: ${newFollowUp}`);
    setNewFollowUp('');
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Activity className="h-8 w-8 text-indigo-600 mr-2" />
                <h1 className="text-2xl font-bold text-gray-900">Unified CRM</h1>
              </div>
              <div className="hidden md:flex items-center text-sm text-gray-500">
                <HistoryIcon className="h-4 w-4 mr-1" />
                <span>History</span>
                <span className="mx-2">•</span>
                <FileText className="h-4 w-4 mr-1" />
                <span>Notes</span>
                <span className="mx-2">•</span>
                <Brain className="h-4 w-4 mr-1" />
                <span>AI Follow-ups</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search contacts, notes..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
                  AJ
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row p-6 gap-6">
        {/* Left Sidebar - Contacts */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Contacts</h2>
              <button className="text-sm bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-3 py-1 rounded-lg font-medium">
                + Add New
              </button>
            </div>
            
            <div className="space-y-3">
              <div 
                className={`flex items-center p-3 rounded-lg cursor-pointer ${selectedContact === 0 ? 'bg-indigo-50 border border-indigo-200' : 'hover:bg-gray-50'}`}
                onClick={() => setSelectedContact(0)}
              >
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">All Contacts</h3>
                  <p className="text-sm text-gray-500">View all activity</p>
                </div>
                <span className="ml-auto text-sm font-medium text-gray-500">
                  {contacts.length}
                </span>
              </div>
              
              {contacts.map((contact, index) => (
                <div 
                  key={contact.id}
                  className={`flex items-center p-3 rounded-lg cursor-pointer ${selectedContact === contact.id ? 'bg-indigo-50 border border-indigo-200' : 'hover:bg-gray-50'}`}
                  onClick={() => setSelectedContact(contact.id)}
                >
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 text-white ${contact.avatarColor}`}>
                    {contact.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <h3 className="font-medium text-gray-900 truncate">{contact.name}</h3>
                      <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${getPriorityColor(contact.priority)}`}>
                        {contact.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{contact.role}</p>
                  </div>
                  <span className={`ml-2 px-2 py-1 text-xs rounded-full ${getStatusColor(contact.status)}`}>
                    {contact.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-600">Total Interactions</p>
                <p className="text-2xl font-bold text-gray-800">24</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-600">Active Follow-ups</p>
                <p className="text-2xl font-bold text-gray-800">{filteredFollowUps.length}</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm text-purple-600">Notes</p>
                <p className="text-2xl font-bold text-gray-8  00">{filteredNotes.length}</p>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-sm text-yellow-600">Pending</p>
                <p className="text-2xl font-bold text-gray-800">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Contact Header */}
          <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            {selectedContact === 0 ? (
              <div className="flex items-center">
                <div className="h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <User className="h-7 w-7 text-gray-500" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">All Contacts</h1>
                  <p className="text-gray-600">Viewing unified profiles across all contacts</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className={`h-14 w-14 rounded-full flex items-center justify-center mr-4 text-white ${contacts[selectedContact-1].avatarColor}`}>
                    <span className="text-xl font-semibold">
                      {contacts[selectedContact-1].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{contacts[selectedContact-1].name}</h1>
                    <p className="text-gray-600">{contacts[selectedContact-1].role} • {contacts[selectedContact-1].company}</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </button>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b mb-6">
            <button
              className={`px-4 py-3 font-medium text-sm ${activeTab === 'history' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('history')}
            >
              <HistoryIcon className="inline h-4 w-4 mr-2" />
              Interaction History
            </button>
            <button
              className={`px-4 py-3 font-medium text-sm ${activeTab === 'notes' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('notes')}
            >
              <FileText className="inline h-4 w-4 mr-2" />
              Notes
            </button>
            <button
              className={`px-4 py-3 font-medium text-sm ${activeTab === 'followups' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('followups')}
            >
              <Zap className="inline h-4 w-4 mr-2" />
              AI Follow-ups
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'history' && (
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">Interaction History</h2>
                  <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                    <Filter className="h-4 w-4 mr-1" />
                    Filter
                  </button>
                </div>
              </div>
              
              <div className="divide-y">
                {filteredHistory.map((item) => (
                  <div key={item.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-4 ${item.outcome === 'positive' ? 'bg-green-100 text-green-600' : item.outcome === 'neutral' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                        {item.type === 'call' && <MessageSquare className="h-5 w-5" />}
                        {item.type === 'email' && <Send className="h-5 w-5" />}
                        {item.type === 'meeting' && <Calendar className="h-5 w-5" />}
                        {item.type === 'task' && <CheckCircle className="h-5 w-5" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-gray-900">{item.title}</h3>
                          <span className="text-sm text-gray-500">{item.timestamp}</span>
                        </div>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded mr-2">
                            {item.type}
                          </span>
                          {item.duration && (
                            <span className="text-xs text-gray-500 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {item.duration}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">Notes</h2>
                  <button className="text-sm bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-lg font-medium">
                    + Add Note
                  </button>
                </div>
              </div>
              
              <div className="p-6 border-b">
                <textarea
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="3"
                  placeholder="Add a new note..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                      <Tag className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                      <Star className="h-4 w-4" />
                    </button>
                  </div>
                  <button 
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    onClick={handleAddNote}
                  >
                    Save Note
                  </button>
                </div>
              </div>
              
              <div className="divide-y">
                {filteredNotes.map((note) => (
                  <div key={note.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h3 className="font-medium text-gray-900">{note.title}</h3>
                          {note.pinned && (
                            <Star className="h-4 w-4 text-yellow-500 ml-2 fill-current" />
                          )}
                        </div>
                        <p className="text-gray-600 mt-2">{note.content}</p>
                        <div className="flex items-center mt-3">
                          {note.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded mr-2">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-2">{note.timestamp}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-gray-100 rounded">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'followups' && (
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">AI Follow-ups</h2>
                    <p className="text-gray-600 text-sm mt-1">Intelligent suggestions for next actions</p>
                  </div>
                  <div className="flex items-center text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg">
                    <Brain className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">AI Powered</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4 text-indigo-600">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">Create a new follow-up</h3>
                    <div className="mt-3">
                      <input
                        type="text"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="What follow-up would you like to schedule?"
                        value={newFollowUp}
                        onChange={(e) => setNewFollowUp(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-end mt-3">
                      <button 
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
                        onClick={handleAddFollowUp}
                      >
                        <Brain className="h-4 w-4 mr-2" />
                        Generate with AI
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="divide-y">
                {filteredFollowUps.map((followUp) => (
                  <div key={followUp.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-4 ${followUp.priority === 'high' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
                        <Bell className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-gray-900">{followUp.title}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${followUp.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {followUp.priority} priority
                          </span>
                        </div>
                        <p className="text-gray-600 mt-2">{followUp.description}</p>
                        
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                          <div className="flex items-center text-blue-700 mb-2">
                            <Brain className="h-4 w-4 mr-2" />
                            <span className="text-sm font-medium">AI Insight</span>
                          </div>
                          <p className="text-sm text-blue-800">{followUp.aiInsight}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            Suggested: {followUp.suggestedDate}
                          </div>
                          <div className="flex space-x-2">
                            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                              Dismiss
                            </button>
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                              Schedule
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Summary Panel */}
          <div className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-start">
              <Brain className="h-8 w-8 mr-4" />
              <div>
                <h3 className="text-xl font-bold">AI-Powered Insights</h3>
                <p className="mt-2 opacity-90">
                  Based on interaction history, AI suggests contacting {selectedContact === 0 ? 'Alex Johnson' : contacts[selectedContact-1]?.name} 
                  within the next 48 hours for a {selectedContact === 0 ? '65%' : '72%'} higher conversion probability.
                </p>
                <div className="flex mt-4 space-x-3">
                  <button className="px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 font-medium">
                    View Detailed Report
                  </button>
                  <button className="px-4 py-2 bg-transparent border border-white rounded-lg hover:bg-white/10 font-medium">
                    Generate Email Draft
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="p-6 text-center text-gray-500 text-sm border-t">
        <p>Unified CRM • History, Notes & AI Follow-ups • {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default CRM;