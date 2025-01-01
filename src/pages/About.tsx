import React from 'react';
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  BookOpen,
  Award,
  Users,
  PenTool,
  GraduationCap,
  Briefcase,
  Trophy,
  Rocket,
  MessageCircle,
  Phone,
  MapPin,
  LineChart,
  BookMarked,
  Brain,
  Code,
  TrendingUp,
} from 'lucide-react';
import Index from '@/components/Index';
import CharacterCursor from '@/components/Cursor/CharacterCursor';

export default function About() {
  return (
    <div className="min-h-screen bg-violet-50">
      <CharacterCursor/>
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
            <Index />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hi, I'm Harsh Ninave
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Founder & Lead Editor at BlogVerse. I'm passionate about creating a platform where
                writers can share their stories and readers can discover new perspectives.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Harshninave04"
                  target="_blank"
                  className="text-gray-600 hover:text-pink-600">
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/HarshNinave2004"
                  target="_blank"
                  className="text-gray-600 hover:text-pink-600">
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/harshninave2004"
                  target="_blank"
                  className="text-gray-600 hover:text-pink-600">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" target="_blank" className="text-gray-600 hover:text-pink-600">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-50/50 to-pink-50/50"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-violet-200 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Milestones Achieved
            <div className="w-24 h-1 bg-pink-600 mx-auto mt-4"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative transform group-hover:-translate-y-2">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-center pt-8">
                  <h3 className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-violet-600 to-pink-600 inline-block text-transparent bg-clip-text">
                    500+
                  </h3>
                  <p className="text-gray-600 font-medium">Articles Published</p>
                  <div className="mt-4 h-1 w-12 bg-gradient-to-r from-violet-600 to-pink-600 mx-auto rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative transform group-hover:-translate-y-2">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-center pt-8">
                  <h3 className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-violet-600 to-pink-600 inline-block text-transparent bg-clip-text">
                    100K+
                  </h3>
                  <p className="text-gray-600 font-medium">Monthly Readers</p>
                  <div className="mt-4 h-1 w-12 bg-gradient-to-r from-violet-600 to-pink-600 mx-auto rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative transform group-hover:-translate-y-2">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-center pt-8">
                  <h3 className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-violet-600 to-pink-600 inline-block text-transparent bg-clip-text">
                    15+
                  </h3>
                  <p className="text-gray-600 font-medium">Writing Awards</p>
                  <div className="mt-4 h-1 w-12 bg-gradient-to-r from-violet-600 to-pink-600 mx-auto rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative transform group-hover:-translate-y-2">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-center pt-8">
                  <h3 className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-violet-600 to-pink-600 inline-block text-transparent bg-clip-text">
                    95%
                  </h3>
                  <p className="text-gray-600 font-medium">Client Satisfaction</p>
                  <div className="mt-4 h-1 w-12 bg-gradient-to-r from-violet-600 to-pink-600 mx-auto rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-pink-50"></div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Content Categories
            <div className="w-24 h-1 bg-pink-600 mx-auto mt-4"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-50 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Code className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Tech Insights</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Deep dives into emerging technologies, coding tutorials, and digital
                    transformation strategies.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <BookMarked className="h-4 w-4 mr-2" />
                    142 articles
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Growth</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Actionable strategies for self-improvement, productivity hacks, and mindfulness
                    practices.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <BookMarked className="h-4 w-4 mr-2" />
                    98 articles
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-50 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <LineChart className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Marketing</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Expert insights on content strategy, SEO optimization, and social media growth.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <BookMarked className="h-4 w-4 mr-2" />
                    76 articles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Journey Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-pink-50/50"></div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            My Professional Journey
            <div className="w-24 h-1 bg-pink-600 mx-auto mt-4"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Current Role */}
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative transform group-hover:-translate-y-2">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <span className="text-pink-600 font-semibold">2024 - Present</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                    Chief Editor at BlogVerse
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-pink-600 rounded-full mr-2"></span>
                      Leading content strategy and editorial direction
                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-pink-600 rounded-full mr-2"></span>
                      Managing a team of 20+ writers and editors
                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-pink-600 rounded-full mr-2"></span>
                      Growing readership by 200% year-over-year
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Weekly Role */}
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative transform group-hover:-translate-y-2">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <span className="text-violet-600 font-semibold">2020 - 2024</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                    Senior Editor at Tech Weekly
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-violet-600 rounded-full mr-2"></span>
                      Spearheaded digital transformation initiatives
                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-violet-600 rounded-full mr-2"></span>
                      Led a team of 10 technology writers
                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-violet-600 rounded-full mr-2"></span>
                      Achieved 5 industry awards for excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Media Role */}
            <div className="group md:translate-x-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative transform group-hover:-translate-y-2">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <span className="text-pink-500 font-semibold">2018 - 2020</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">Content Strategist</h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      Developed comprehensive content strategies
                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      Increased engagement by 150%
                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      Launched successful content campaigns
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="group md:translate-x-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative transform group-hover:-translate-y-2">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <span className="text-violet-500 font-semibold">2014 - 2018</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                    University Education
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
                      BA in Journalism & Mass Communication
                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
                      Editor of University Newsletter
                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
                      Dean's List all semesters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-pink-600"></div>

        {/* Decorative Shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-8 border-white"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border-8 border-white"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-8 border-white"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Connect
              <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have a story to share or interested in collaboration? I'm always excited to connect
              with fellow writers and readers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email Contact */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <Mail className="h-8 w-8 text-violet-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Me</h3>
                <p className="text-white/80 mb-4">Get in touch for collaborations</p>
                <a
                  href="mailto:harshninave32@gmail.com"
                  className="inline-flex items-center text-white hover:text-pink-200 font-medium">
                  harshninave32@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <MapPin className="h-8 w-8 text-violet-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                <p className="text-white/80 mb-4">Maharashtra, India</p>
                <span className="text-white/80">Available for remote collaboration</span>
              </div>
            </div>

            {/* Phone */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <Phone className="h-8 w-8 text-violet-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-white/80 mb-4">Monday to Friday, 9AM-5PM PST</p>
                <a href="tel:+91 7507460897" className="text-white hover:text-pink-200 font-medium">
                  +91 7507460897
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-8">Connect on Social Media</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Harshninave04" className="group">
                <div className="p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <Github className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a href="https://twitter.com/HarshNinave2004" className="group">
                <div className="p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <Twitter className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a href="https://linkedin.com/in/harshninave2004" className="group">
                <div className="p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <Linkedin className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
