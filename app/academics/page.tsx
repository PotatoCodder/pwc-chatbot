'use client';

import { useState } from 'react';
import { GraduationCap, BookOpen, Award, Briefcase, Palette, Code, Users, ChevronRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState('senior-high');

  const seniorHighPrograms = [
    {
      track: 'Academic Track',
      icon: BookOpen,
      strands: [
        {
          name: 'STEM',
          description: 'Science, Technology, Engineering, and Mathematics',
          careers: ['Engineering', 'Medicine', 'Architecture', 'Computer Science']
        },
        {
          name: 'ABM',
          description: 'Accountancy, Business, and Management',
          careers: ['Business Management', 'Accountancy', 'Entrepreneurship', 'Marketing']
        },
        {
          name: 'HUMSS',
          description: 'Humanities and Social Sciences',
          careers: ['Law', 'Psychology', 'Education', 'Social Work']
        },
        {
          name: 'Arts and Design',
          description: 'Creative and Visual Arts',
          careers: ['Fine Arts', 'Graphic Design', 'Fashion Design', 'Multimedia Arts']
        }
      ]
    },
    {
      track: 'TVL Track',
      icon: Briefcase,
      strands: [
        {
          name: 'ICT',
          description: 'Information and Communications Technology',
          specializations: ['Computer Programming', 'Computer Systems Servicing', 'Animation']
        },
        {
          name: 'Home Economics',
          description: 'Culinary and Food Services',
          specializations: ['Cookery', 'Bread and Pastry', 'Food and Beverage Services']
        },
        {
          name: 'Industrial Arts',
          description: 'Technical Skills and Trades',
          specializations: ['SMAW (Welding)', 'Construction', 'Carpentry']
        }
      ]
    }
  ];

  const collegePrograms = [
    {
      department: 'Business and Entrepreneurship',
      icon: Briefcase,
      color: 'red',
      programs: [
        {
          name: 'Bachelor of Science in Business Administration',
          majors: ['Financial Management', 'Marketing Management', 'Human Resource Development', 'Business Economics'],
          duration: '4 years'
        }
      ]
    },
    {
      department: 'Hospitality and Tourism',
      icon: Users,
      color: 'red',
      programs: [
        {
          name: 'Bachelor of Science in Hospitality Management',
          specializations: ['Hotel Operations', 'Food Service Management', 'Events Management'],
          duration: '4 years'
        },
        {
          name: 'Bachelor of Science in Tourism Management',
          specializations: ['Tour Guiding', 'Travel Services', 'Tourism Promotion', 'Events Management'],
          duration: '4 years'
        }
      ]
    },
    {
      department: 'Fine Arts and Design',
      icon: Palette,
      color: 'red',
      programs: [
        {
          name: 'Bachelor of Fine Arts',
          majors: ['Industrial Design', 'Visual Communication', 'Fashion Design', 'Interior Design'],
          duration: '4 years',
          note: 'Pioneer in Art Education in Mindanao'
        }
      ]
    },
    {
      department: 'Information Technology',
      icon: Code,
      color: 'red',
      programs: [
        {
          name: 'Bachelor of Science in Information Technology',
          specializations: ['Web Development', 'Network Administration', 'Software Development'],
          duration: '4 years'
        }
      ]
    },
    {
      department: 'Education',
      icon: GraduationCap,
      color: 'red',
      programs: [
        {
          name: 'Bachelor of Elementary Education',
          specializations: ['General Education'],
          duration: '4 years'
        },
        {
          name: 'Bachelor of Secondary Education',
          majors: ['English', 'Mathematics', 'Science', 'Social Studies'],
          duration: '4 years'
        },
        {
          name: 'Bachelor of Culture and Arts Education',
          description: 'Specialized program in cultural and arts education',
          duration: '4 years'
        },
        {
          name: 'Bachelor of Physical Education',
          specializations: ['Sports and Fitness', 'School Physical Education'],
          duration: '4 years'
        }
      ]
    },
    {
      department: 'Food Technology',
      icon: Award,
      color: 'red',
      programs: [
        {
          name: 'Bachelor of Science in Food Technology',
          specializations: ['Food Science', 'Food Safety', 'Product Development'],
          duration: '4 years'
        }
      ]
    }
  ];

  const tvetPrograms = [
    { name: 'Housekeeping NC II', category: 'Hospitality' },
    { name: 'Cookery NC II', category: 'Culinary' },
    { name: 'Bread and Pastry Production NC II', category: 'Culinary' },
    { name: 'Commercial Cooking NC III', category: 'Culinary' },
    { name: 'Food and Beverage Services NC II', category: 'Hospitality' },
    { name: 'Front Office Services NC II', category: 'Hospitality' },
    { name: 'Events Management Services NC II', category: 'Hospitality' },
    { name: 'Tourism Promotion Services NC II', category: 'Tourism' },
    { name: 'Travel Services NC II', category: 'Tourism' },
    { name: 'Customer Service NC II', category: 'Business' },
    { name: 'Dressmaking NC II', category: 'Fashion' },
    { name: 'Domestic Work NC II', category: 'General' }
  ];

  const features = [
    {
      icon: Award,
      title: 'CHED & TESDA Accredited',
      description: 'All programs are recognized by Philippine regulatory bodies'
    },
    {
      icon: Users,
      title: 'Industry Partnerships',
      description: 'Hands-on training with top industry partners and professionals'
    },
    {
      icon: Briefcase,
      title: 'Work Immersion',
      description: 'Real-world experience through OJT and internship programs'
    },
    {
      icon: GraduationCap,
      title: 'Ladderized Programs',
      description: "Diploma programs that lead to Bachelor's degrees"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header Section */}
      <div className="bg-gray-50 border-b border-gray-200 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Academic Programs
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality education from Senior High School to College. Choose from a wide range of programs designed to prepare you for success.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 rounded-xl bg-red-50 text-red-700 mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: 'senior-high', label: 'Senior High School' },
              { id: 'college', label: 'College Programs' },
              { id: 'tvet', label: 'TESDA Certifications' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'text-red-700 border-b-2 border-red-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Senior High School */}
          {activeTab === 'senior-high' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Senior High School</h2>
                <p className="text-gray-600 text-lg">
                  K-12 compliant programs with academic and technical-vocational tracks.
                </p>
              </div>

              {seniorHighPrograms.map((trackGroup, idx) => {
                const TrackIcon = trackGroup.icon;
                return (
                  <div key={idx} className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-red-700 text-white">
                        <TrackIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{trackGroup.track}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {trackGroup.strands.map((strand, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-red-700 transition-all"
                        >
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{strand.name}</h4>
                          <p className="text-gray-600 mb-4">{strand.description}</p>
                          
                          {'careers' in strand && (
                            <div>
                              <p className="text-sm font-semibold text-gray-700 mb-2">Career Paths:</p>
                              <div className="flex flex-wrap gap-2">
                                {strand.careers.map((career, i) => (
                                  <span key={i} className="text-xs px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-700">
                                    {career}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {'specializations' in strand && (
                            <div>
                              <p className="text-sm font-semibold text-gray-700 mb-2">Specializations:</p>
                              <ul className="space-y-1">
                                {strand.specializations.map((spec, i) => (
                                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-red-700" />
                                    {spec}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* College Programs */}
          {activeTab === 'college' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">College Programs</h2>
                <p className="text-gray-600 text-lg">
                  Bachelor's degree programs with industry partnerships and hands-on training.
                </p>
              </div>

              <div className="space-y-8">
                {collegePrograms.map((dept, idx) => {
                  const DeptIcon = dept.icon;
                  return (
                    <div key={idx} className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-red-700 text-white">
                          <DeptIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{dept.department}</h3>
                      </div>

                      <div className="space-y-6">
                        {dept.programs.map((program, index) => (
                          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{program.name}</h4>
                                {'description' in program && (
                                  <p className="text-gray-600 text-sm mb-3">{program.description}</p>
                                )}
                              </div>
                              <span className="text-xs px-3 py-1 bg-red-50 text-red-700 rounded-full font-medium">
                                {program.duration}
                              </span>
                            </div>

                            {'majors' in program && (
                              <div className="mb-3">
                                <p className="text-sm font-semibold text-gray-700 mb-2">Majors:</p>
                                <div className="flex flex-wrap gap-2">
                                  {program.majors!.map((major, i) => (
                                    <span key={i} className="text-xs px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700">
                                      {major}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {'specializations' in program && (
                              <div className="mb-3">
                                <p className="text-sm font-semibold text-gray-700 mb-2">Specializations:</p>
                                <div className="flex flex-wrap gap-2">
                                  {program.specializations!.map((spec, i) => (
                                    <span key={i} className="text-xs px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700">
                                      {spec}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {'note' in program && (
                              <div className="mt-3 flex items-center gap-2 text-sm text-red-700">
                                <Award className="w-4 h-4" />
                                <span>{program.note}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* TVET Programs */}
          {activeTab === 'tvet' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">TESDA Certifications</h2>
                <p className="text-gray-600 text-lg">
                  Technical-vocational programs with National Certificates (NC) for immediate employment.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">TESDA Accredited Training Center</h4>
                    <p className="text-sm text-gray-600">
                      All programs are TESDA-accredited with National Certificates. Training includes practical demonstrations, industry exposure, and certification exams.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tvetPrograms.map((program, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-red-700 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{program.name}</h4>
                        <span className="text-xs px-2 py-1 bg-white border border-gray-200 rounded-full text-gray-600">
                          {program.category}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Program Benefits</h4>
                <ul className="space-y-2">
                  {[
                    'Job placement assistance locally and abroad',
                    'Ladderized pathways to Bachelor\'s degrees',
                    'Blended online and offline learning',
                    'Industry-based training and certification',
                    'Self-paced learning options available'
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Explore our programs and find the perfect path for your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-red-700 text-white rounded-xl font-semibold hover:bg-red-800 transition-colors">
              Apply Now
            </button>
            <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl font-semibold hover:border-red-700 transition-colors">
              Download Prospectus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}