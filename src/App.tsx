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
  Server,
  Globe2,
  Layers,
  MapPin,
  Phone,  
  MessageCircle
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'skills', 'services','projects', 'contact'];
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
            <h1 className="bg-gradient-to-r font-bold from-blue-600 to-cyan-500 bg-clip-text text-transparent">
             Doaa Hazem
            </h1>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'education', label: 'Education' },
                { id: 'skills', label: 'Skills' },
                { id: 'services', label: 'Services' },
                { id: 'projects', label: 'Projects' },
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
      <p className="text-xl md:text-2xl text-black-600 mb-2 max-w-3xl mx-auto">
        Data Scientist | AI/ML Engineer | Data Analyst 
      </p>
      <p className="text-xl md:text-2xl text-gray-00 mb-8 max-w-3xl mx-auto">
        passionate about transforming data into actionable insights.
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
        <p className="text-lg text-gray-600 mb-4">
          I’m <span className="font-semibold text-blue-600">Doaa Hazem</span>, a Data Scientist specialized in Artificial Intelligence 
          with a strong focus on delivering real business value from data.
        </p>
        
        <p className="text-lg text-gray-600 mb-4">
          My goal isn’t just to build models, but to <span className="font-medium text-gray-900">help clients solve their problems and make smarter decisions</span>. 
          Whether it’s analyzing customer behavior, predicting trends, or automating workflows, I make sure every solution is 
          practical, accurate, and aligned with the client’s goals.
        </p>
        
        <p className="text-lg text-gray-600 mb-4">
          What makes me different? <span className="font-medium text-blue-600">I combine technical depth with creativity and clarity</span>. 
          I simplify complex data into actionable insights, design intuitive dashboards, and build AI systems that are not only 
          powerful but also easy to use.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Clients choose me because I’m <span className="font-medium text-gray-900"> curious, detail-oriented, and committed to delivering 
          impact—not just outputs. </span>
        </p>


        {/* Skills highlights with icons */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Analytics</h3>
              <p className="text-gray-600 text-sm">Uncovering insights in data</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-cyan-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Machine Learning</h3>
              <p className="text-gray-600 text-sm">Building predictive models</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Data Preprocessing</h3>
              <p className="text-gray-600 text-sm">Cleaning & transforming raw data</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Visualization</h3>
              <p className="text-gray-600 text-sm">Interactive dashboards & reports</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right: Profile Image */}
      <div className="flex justify-center">
        <img 
          src="/Doaa.jpg"
          alt="Doaa Hazem" 
          className="rounded-2xl shadow-lg w-83 h-83 object-cover"
        />
      </div>
    </div>
  </div>
</section>


{/* Education Section */}
<section id="education" className="py-20 bg-white"> 
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Education & Training
      </h2>
    </div>

    {/* Cards Container */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* University */}
      <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center">
        <img 
          src="/UNVV.jpg"   
          alt="Benha University Logo" 
          className="w-30 h-28 object-contain mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-900">
          Bachelor of Computers & AI
        </h3>
        <p className="text-gray-700">Specialization: <span className="font-medium">Artificial Intelligence</span></p>
        <p className="text-gray-700">Benha University</p>
        <p className="text-gray-600 text-sm">Sep 2021 – Jun 2025</p>
        <p className="text-gray-700 mt-2">Grade: Distinction with Honours</p>
        <p className="text-gray-700">GPA: 3.72 / 4.00</p>
      </div>

      {/* NTI */}
      <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col text-center">
        <img 
          src="/NTI.png"   
          alt="NTI Logo" 
          className="w-30 h-28 object-contain mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-900">
          Machine Learning for Data Analysis
        </h3>
        <p className="text-gray-700">National Telecommunication Institute (NTI), Egypt</p>
        <p className="text-gray-600 text-sm">Jul 2024 – Sep 2024</p>
        <ul className="text-gray-700 text-sm mt-3 list-disc list-inside text-left">
          <li>Practical experience in ML and data science techniques</li>
          <li>Worked on real-world projects with preprocessing & feature engineering</li>
          <li>Enhanced proficiency in predictive modeling</li>
        </ul>
      </div>

      {/* DEPI */}
      <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col text-center">
        <img 
          src="/DEPI.png"   
          alt="DEPI Logo" 
          className="w-30 h-28 object-contain mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-900">
          AI & Data Science Trainee
        </h3>
        <p className="text-gray-700">Digital Egypt Pioneers Initiative (DEPI) / MCIT</p>
        <p className="text-gray-600 text-sm">Jun 2025 – Present</p>
        <ul className="text-gray-700 text-sm mt-3 list-disc list-inside text-left">
          <li>Hands-on Python programming for analysis & automation</li>
          <li>Developed web scraping and data collection skills</li>
          <li>Collaborative coding & version control with Git/GitHub</li>
          <li>Strengthened knowledge of end-to-end data science workflow</li>
        </ul>
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
        Tools and technologies I use to build data-driven solutions
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Programming & Scripting */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
        <h3 className="font-semibold text-gray-900 mb-3">Programming & Scripting</h3>
        <div className="flex flex-wrap gap-2">
          {['Python', 'SQL'].map((skill, idx) => (
            <span key={idx} className="px-3 py-1 border border-blue-200 bg-blue-50 text-blue-700 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>

      {/* Data Processing & Analysis */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
        <h3 className="font-semibold text-gray-900 mb-3">Data Processing & Analysis</h3>
        <div className="flex flex-wrap gap-2">
          {['NumPy', 'Pandas', 'Feature Engineering', 'Clustering', 'Dimensionality Reduction'].map((skill, idx) => (
            <span key={idx} className="px-3 py-1 border border-blue-200 bg-blue-50 text-blue-700 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>

      {/* Machine Learning & AI (Spanning 2 rows) */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 lg:row-span-2">
        <h3 className="font-semibold text-gray-900 mb-3">Machine Learning & AI</h3>
        <div className="flex flex-wrap gap-2">
          {['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Time-Series', 'Deep Learning', 'Transformers'].map((skill, idx) => (
            <span key={idx} className="px-3 py-1 border border-blue-200 bg-blue-50 text-blue-700 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>

      {/* Data Visualization */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
        <h3 className="font-semibold text-gray-900 mb-3">Data Visualization</h3>
        <div className="flex flex-wrap gap-2">
          {['Matplotlib', 'Seaborn', 'Plotly', 'Dash', 'Power BI'].map((skill, idx) => (
            <span key={idx} className="px-3 py-1 border border-blue-200 bg-blue-50 text-blue-700 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>

      {/* Mathematics & Algorithms */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
        <h3 className="font-semibold text-gray-900 mb-3">Mathematics & Algorithms</h3>
        <div className="flex flex-wrap gap-2">
          {['Linear Algebra', 'Probability', 'Statistics', 'Optimization'].map((skill, idx) => (
            <span key={idx} className="px-3 py-1 border border-blue-200 bg-blue-50 text-blue-700 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>

      {/* Deployment & MLOps */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
        <h3 className="font-semibold text-gray-900 mb-3">Deployment & MLOps</h3>
        <div className="flex flex-wrap gap-2">
          {['Flask', 'Streamlit', 'Gradio'].map((skill, idx) => (
            <span key={idx} className="px-3 py-1 border border-blue-200 bg-blue-50 text-blue-700 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>

      {/* Version Control */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
        <h3 className="font-semibold text-gray-900 mb-3">Version Control & Collaboration</h3>
        <div className="flex flex-wrap gap-2">
          {['Git', 'GitHub'].map((skill, idx) => (
            <span key={idx} className="px-3 py-1 border border-blue-200 bg-blue-50 text-blue-700 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>

      {/* Other Tools */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
        <h3 className="font-semibold text-gray-900 mb-3">Other Tools & Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {['Web Scraping', 'Interactive Dashboards'].map((skill, idx) => (
            <span key={idx} className="px-3 py-1 border border-blue-200 bg-blue-50 text-blue-700 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* Services Section */}
<section id="services" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Offered Services
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Helping businesses and researchers turn data into actionable insights with modern AI solutions
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: 'Data Analysis & Visualization',
          description: 'Exploratory data analysis, interactive dashboards, and visual storytelling using Python, Power BI, and Plotly.',
          icon: <BarChart3 className="w-6 h-6 text-blue-500" />
        },
        {
          title: 'Machine Learning Models',
          description: 'Building predictive and descriptive ML models for classification, regression, clustering, NLP, and computer vision.',
          icon: <Brain className="w-6 h-6 text-green-500" />
        },
        {
          title: 'Deep Learning Solutions',
          description: 'Developing neural networks, transformers, and time-series forecasting models for complex problems.',
          icon: <Layers className="w-6 h-6 text-purple-500" />
        },
        {
          title: 'Data Preparation & Engineering',
          description: 'Data cleaning, preprocessing, feature engineering, and ETL pipeline development.',
          icon: <Database className="w-6 h-6 text-orange-500" />
        },
        {
          title: 'Web Scraping & Data Collection',
          description: 'Automating data collection from online sources using Python and web scraping tools.',
          icon: <Globe2 className="w-6 h-6 text-cyan-500" />
        },
        {
          title: 'Deployment & MLOps',
          description: 'Deploying ML models with Flask, Streamlit, and Gradio for real-world applications.',
          icon: <Server className="w-6 h-6 text-pink-500" />
        }
      ].map((service, idx) => (
        <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
          <div className="flex items-center gap-3 mb-4">
            {service.icon}
            <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
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
        A showcase of my academic projects in data science and AI
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: 'Nexus: AI-powered Student Engagement System',
          description: 'Developed a system to analyze student engagement using computer vision and NLP to enhance e-learning experiences.',
          technologies: ['Python', 'OpenCV', 'Transformers', 'Flask'],
          image: '/nexus.jpeg',
          link: 'https://github.com/DoaaHazem/nexus_app'
        },
        {
          title: 'Hotel Booking Cancellation Prediction',
          description: 'Built a machine learning model to predict hotel booking cancellations and help optimize revenue management.',
          technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
          image: '/hotel.png',
          link: 'https://github.com/DoaaHazem/Machine_Learning'
        },
        {
          title: 'Calories Burnt Prediction',
          description: 'Created a regression model to estimate calories burnt based on physical activity data.',
          technologies: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn'],
          image: '/calory.png',
          link: 'https://github.com/DoaaHazem/Machine_Learning_2'
        },
        {
          title: 'Breast Cancer Detection',
          description: 'Designed a deep learning model to classify breast cancer tumors from medical images.',
          technologies: ['Python', 'TensorFlow', 'Keras'],
          image: '/cancer.jpg'
        },
        {
          title: 'Sales Dashboard',
          description: 'Interactive Power BI dashboard to analyze sales performance, track KPIs, and provide actionable insights.',
          technologies: ['Power BI', 'CSV Data'],
          image: '/sales.jpeg',
        },
        {
          title: 'Attendance & Cheating Detection Dashboard',
          description: 'Power BI dashboard analyzing attention levels, cheating detection indicators, and student behavior in online exams.',
          technologies: ['Power BI', 'CSV Data'],
          image: '/dashh.png',
        },
        {
          title: 'Hotel Management Dashboard',
          description: 'Comprehensive Power BI dashboard for hotel operations, including bookings, revenue analysis, and customer satisfaction trends.',
          technologies: ['Power BI', 'CSV Data'],
          image: '/dash.png',
          link: 'https://github.com/DoaaHazem/Machine_Learning'
        },
        {
          title: 'Employee Management System (Python)',
          description: 'Python program for managing employee records using CSV files.The system allows adding, updating, deleting, searching, and viewing employee details.',
          technologies: ['Python', 'CLI'],
          image: '/cli.png',
          link: 'https://github.com/DoaaHazem/Python_Project'
        },
        {
          title: 'Web Scraping Task',
          description: 'perform web scraping on a target webpage to extract various types of data and store them in structured formats (CSV and JSON).',
          technologies: ['Python', 'Beautiful Soup'],
          image: '/web_scraping_banner.png',
          link: 'https://github.com/DoaaHazem/Web_Scraping'
        },
      ].map((project, idx) => (
      <div 
        key={idx} 
        className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
      >
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300 bg-gray-100"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-3 text-sm">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech, techIdx) => (
              <span 
                key={techIdx}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 text-sm transition-colors duration-200"
            >
              View Project
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* WhatsApp */}
        <div className="text-center group">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
            <MessageCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
          <a 
            href="https://wa.me/201061284242" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-600 transition-colors duration-200"
          >
            Chat on WhatsApp
          </a>
        </div>


        {/* Email */}
        <div className="text-center group">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
          <a href="mailto:doaahazem711@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            Contact me
          </a>
        </div>
        
        {/* LinkedIn */}
        <div className="text-center group">
          <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-200 transition-colors duration-300">
            <Linkedin className="w-8 h-8 text-cyan-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
          <a href="https://www.linkedin.com/in/doaa-hazem-hassan" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200">
            Connect with me
          </a>
        </div>
        
        {/* GitHub */}
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

      {/* Call to Action */}
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
            <p className="text-gray-400 mb-6">Data Scientist | AI/ML Engineer | Data Analyst</p>
            
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