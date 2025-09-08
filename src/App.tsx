import React, { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  Code, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronDown,
  BarChart3,
  Brain,
  Database,
  TrendingUp,
  Award,
  Calendar,
  MapPin,
  Phone
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">
              Doaa Hazem
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
<section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-blue-400 rounded-full blur-2xl opacity-70"></div>
  </div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="animate-fade-in-up">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
        Hello, I’m{' '}
        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Doaa Hazem
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Data Scientist & Machine Learning Engineer passionate about transforming data into actionable insights.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => scrollToSection('projects')}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 justify-center"
        >
          View My Work
          <ExternalLink className="w-4 h-4" />
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-colors duration-200"
        >
          Get In Touch
        </button>
      </div>
    </div>
  </div>
  
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <ChevronDown className="w-6 h-6 text-gray-400" />
  </div>
</section>


{/* About Section */}
<section id="about" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left: Text */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          I’m <span className="font-semibold text-blue-600">Doaa Hazem</span>, a recent Artificial Intelligence graduate (2025) 
          with a GPA of 3.72/4.0. I’m passionate about transforming data into actionable insights 
          and building AI-powered solutions that solve real-world problems. 
        </p>
        <p className="text-lg text-gray-600 mb-8">
          During my studies and training, I worked on diverse projects such as hotel booking 
          cancellation prediction, breast cancer classification, and an AI-powered educational 
          platform using NLP and LLMs. Skilled in Python, SQL, Machine Learning, NLP, and Data 
          Visualization, I aim to leverage AI to bridge the gap between data and decision-making.
        </p>
        
        {/* Skills highlights with icons */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Analytics</h3>
              <p className="text-gray-600 text-sm">Statistical & Predictive Analysis</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-cyan-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Machine Learning</h3>
              <p className="text-gray-600 text-sm">Classification & NLP Models</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Data Engineering</h3>
              <p className="text-gray-600 text-sm">ETL & Pipelines</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Visualization</h3>
              <p className="text-gray-600 text-sm">Dashboards & Storytelling</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right: Profile Image */}
      <div className="flex justify-center">
        <img 
          src="/images/profile.jpg" 
          alt="Doaa Hazem" 
          className="rounded-2xl shadow-lg w-80 h-80 object-cover"
        />
      </div>
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for data science, machine learning, and analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: 'Programming',
                skills: [
                  { name: 'Python', level: 95 },
                  { name: 'R', level: 90 },
                  { name: 'SQL', level: 85 },
                  { name: 'JavaScript', level: 75 }
                ]
              },
              {
                category: 'Machine Learning',
                skills: [
                  { name: 'Scikit-learn', level: 90 },
                  { name: 'TensorFlow', level: 85 },
                  { name: 'PyTorch', level: 80 },
                  { name: 'Keras', level: 88 }
                ]
              },
              {
                category: 'Data Tools',
                skills: [
                  { name: 'Pandas', level: 95 },
                  { name: 'NumPy', level: 90 },
                  { name: 'Apache Spark', level: 75 },
                  { name: 'Hadoop', level: 70 }
                ]
              },
              {
                category: 'Visualization',
                skills: [
                  { name: 'Matplotlib', level: 90 },
                  { name: 'Seaborn', level: 85 },
                  { name: 'Plotly', level: 88 },
                  { name: 'Tableau', level: 80 }
                ]
              }
            ].map((category, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my data science projects and machine learning applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Customer Churn Prediction',
                description: 'Machine learning model to predict customer churn using ensemble methods and feature engineering.',
                technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'],
                image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
                metrics: '94% Accuracy'
              },
              {
                title: 'Sales Forecasting Dashboard',
                description: 'Interactive dashboard for sales forecasting using time series analysis and ARIMA models.',
                technologies: ['R', 'Shiny', 'ggplot2', 'Forecast'],
                image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
                metrics: '15% Error Reduction'
              },
              {
                title: 'Sentiment Analysis System',
                description: 'NLP system for real-time sentiment analysis of social media data with deep learning.',
                technologies: ['Python', 'NLTK', 'TensorFlow', 'Flask'],
                image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
                metrics: '91% F1-Score'
              },
              {
                title: 'Fraud Detection Model',
                description: 'Anomaly detection system for financial fraud using unsupervised learning techniques.',
                technologies: ['Python', 'Isolation Forest', 'DBSCAN', 'Streamlit'],
                image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
                metrics: '98% Detection Rate'
              },
              {
                title: 'Recommendation Engine',
                description: 'Collaborative filtering system for e-commerce product recommendations.',
                technologies: ['Python', 'Surprise', 'Matrix Factorization', 'AWS'],
                image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
                metrics: '25% CTR Increase'
              },
              {
                title: 'COVID-19 Data Analysis',
                description: 'Comprehensive analysis and visualization of COVID-19 trends and patterns.',
                technologies: ['Python', 'Matplotlib', 'Seaborn', 'Jupyter'],
                image: 'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=800',
                metrics: '1M+ Views'
              }
            ].map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.metrics}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors duration-200">
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My journey in data science and machine learning
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            {[
              {
                title: 'Senior Data Scientist',
                company: 'Tech Innovation Corp',
                period: '2023 - Present',
                description: 'Leading machine learning initiatives and mentoring junior data scientists. Developed predictive models that increased revenue by 20%.',
                achievements: [
                  'Built end-to-end ML pipelines',
                  'Improved model accuracy by 15%',
                  'Led team of 4 data scientists'
                ]
              },
              {
                title: 'Data Scientist',
                company: 'Analytics Solutions Ltd',
                period: '2021 - 2023',
                description: 'Developed machine learning models for customer segmentation and recommendation systems.',
                achievements: [
                  'Created customer churn model',
                  'Implemented A/B testing framework',
                  'Reduced analysis time by 40%'
                ]
              },
              {
                title: 'Junior Data Analyst',
                company: 'Data Insights Inc',
                period: '2020 - 2021',
                description: 'Started my journey in data science, focusing on statistical analysis and data visualization.',
                achievements: [
                  'Automated reporting processes',
                  'Created interactive dashboards',
                  'Learned advanced SQL techniques'
                ]
              }
            ].map((exp, idx) => (
              <div key={idx} className={`relative mb-12 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'} md:w-1/2`}>
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full left-2 md:left-auto md:right-[-8px] top-6 transform md:translate-x-1/2"></div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ml-8 md:ml-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIdx) => (
                      <li key={achIdx} className="flex items-center gap-2 text-gray-700">
                        <Award className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Interested in collaborating or discussing data science opportunities? I'd love to hear from you!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:doaahazem711@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  doaahazem711@gmail.com
                </a>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-200 transition-colors duration-300">
                  <Linkedin className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/doaa-hazem-hassan" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200">
                  Connect with me
                </a>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                  <Github className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
                <a href="https://github.com/DoaaHazem" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                  View my code
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
              <p className="mb-6 opacity-90">
                I'm always open to discussing new opportunities and exciting data science projects.
              </p>
              <a 
                href="mailto:doaahazem711@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Doaa Hazem</h3>
            <p className="text-gray-400 mb-6">Data Scientist & Machine Learning Engineer</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:doaahazem711@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/doaa-hazem-hassan" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/DoaaHazem" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="w-6 h-6" />
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 Doaa Hazem. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;