'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Sysnova Technologies Logo" className="h-10 w-10 object-contain" />
              <div className="flex flex-col">
                <div className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Danson Abuya
                </div>
                <div className="text-xs text-muted-foreground">Sysnova Technologies</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-2">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left px-2 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent p-1 mb-5">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-3xl font-bold text-primary">
                DA
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              Full Stack Developer & Problem Solver
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-5">
              Crafting elegant, scalable solutions with modern technologies. Passionate about building products that make a difference and writing clean, maintainable code.
            </p>
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors text-sm"
              >
                Get In Touch
              </button>
            </div>
            <ChevronDown
              className="animate-bounce text-primary mt-4"
              size={28}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Full Stack Developer with 3+ years of experience delivering end-to-end enterprise applications. I specialize in building API-driven, secure, and high-performance solutions using Java Spring Boot, Node.js, React, Next.js, and React Native.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Skilled in Agile methodologies, DevOps pipelines, SIT/UAT testing, and enterprise system support. Proven ability to lead teams, conduct code reviews, and deliver business-impacting solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm committed to continuous learning, best practices in security and performance, and mentoring junior developers. When I'm not coding, you'll find me exploring emerging technologies and contributing to the tech community.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-background border border-border p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-primary">Expertise</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">▸</span>
                    <span>Frontend: React, Next.js, TypeScript, Tailwind CSS, JavaScript, Vite</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">▸</span>
                    <span>Backend: Node.js, Express, MySQL, Java</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">▸</span>
                    <span>DevOps: Docker, CI/CD, AWS, Vercel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'BiasharaHub',
                description: 'Built with React and Next.js on the frontend, Java and PostgreSQL on the backend, plus M-Pesa for payments and WhatsApp integration for ordering and business management.',
                tech: ['React', 'Next.js', 'Java', 'PostgreSQL', 'M-Pesa', 'WhatsApp'],
                link: 'https://biasharahub-app.sysnovatechnologies.com'
              },
              {
                title: 'RentalHub',
                description: 'Property rental management system with booking management, tenant coordination, payment tracking, maintenance scheduling, M-Pesa integration, and WhatsApp notifications.',
                tech: ['Next.js', 'Java', 'PostgreSQL', 'M-Pesa', 'WhatsApp'],
                link: 'https://rental-hub-frontend.vercel.app/'
              },
              {
                title: 'Zimasa Payer Solution',
                description: 'Comprehensive insurance solution system enabling seamless interactions between Insurance/TPA, Providers, and Employees. Features claims processing, policy management, real-time transaction monitoring, and integrated financial reporting for efficient healthcare ecosystem management.',
                tech: ['React', 'Java', 'MySQL'],
                link: '#',
                isPrivate: true
              },
              {
                title: 'Zimasa Engagement Solution',
                description: 'Employee wellness engagement platform promoting health and well-being. Enables individuals and employees to access wellness resources, participate in health challenges, track wellness activities, and receive personalized recommendations for improved work-life wellness.',
                tech: ['Next.js', 'MySQL', 'Tailwind CSS', 'WebSocket'],
                link: '#',
                isPrivate: true
              },
              {
                title: 'Zimasa Member App',
                description: 'Mobile-first member management application with profile management, membership tracking, benefits access, and personalized member experiences.',
                tech: ['React Native', 'Vite', 'JavaScript', 'Java', 'MySQL'],
                link: '#',
                isPrivate: true
              },
              {
                title: 'Garbage Collection Management System',
                description: 'Comprehensive waste management platform enabling efficient scheduling, route optimization, real-time tracking, and reporting for municipal and private collection services.',
                tech: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Real-time Tracking'],
                link: '#'
              }
            ].map((project, idx) => (
              <div
                key={idx}
                className="group bg-card border border-border rounded-lg p-4 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.isPrivate ? (
                  <div className="inline-flex items-center gap-2 text-muted-foreground opacity-50 cursor-not-allowed">
                    <span className="text-sm">Proprietary Project</span>
                  </div>
                ) : (
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-10 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                category: 'Frontend',
                skills: ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite']
              },
              {
                category: 'Backend',
                skills: ['Java', 'Java Spring Boot', 'Node.js', 'Express', 'MySQL', 'PostgreSQL', 'RESTful APIs']
              },
              {
                category: 'Tools & DevOps',
                skills: ['Docker', 'Git', 'GitHub Actions', 'Jenkins', 'AWS', 'Vercel', 'SIT/UAT Testing']
              },
              {
                category: 'Soft Skills',
                skills: ['Problem Solving', 'Team Leadership', 'Communication', 'Mentoring']
              }
            ].map((skillGroup, idx) => (
              <div key={idx} className="bg-background border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-3 text-primary">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2 text-sm">
                  {skillGroup.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Work Experience</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Technical Lead & Full Stack Developer',
                company: 'Zimasa Health',
                period: 'Current',
                description: 'Delivered end-to-end solutions for three applications using Java Spring Boot (backend), React & Next.js (web), and React Native (mobile). Built API-driven architectures ensuring fast, reliable, and secure communication. Led SIT/UAT testing, deployment, and production support for enterprise-grade applications.'
              },
              {
                title: 'Software Engineer',
                company: 'Turnkey Africa',
                period: 'Previous Position',
                description: 'Developed full-stack features using React, Angular, and backend services. Worked on database queries, API integration, and production-ready applications. Collaborated with internal IT teams to resolve technical dependencies and ensure smooth delivery.'
              },
              {
                title: 'ICT Intern',
                company: 'Kenya Revenue Authority (KRA)',
                period: 'Previous Position',
                description: 'Assisted in the development and maintenance of enterprise IT systems. Participated in asset tagging of IT and office assets using specialized software and devices, ensuring accurate inventory tracking. Gained exposure to structured development processes and enterprise-grade systems.'
              },
              {
                title: 'Software Development Intern',
                company: 'Sedatech Company Limited',
                period: 'Previous Position',
                description: 'Participated in software development projects and strengthened full-stack technical skills.'
              }
            ].map((job, idx) => (
              <div
                key={idx}
                className="bg-card border-l-4 border-primary pl-4 py-3 hover:bg-card/80 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-primary font-medium mb-2 text-sm">{job.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
            <a
              href="mailto:dansonabuya@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="tel:+254790100189"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              <span>📞</span>
              Call: 0790100189
            </a>
            <a
              href="https://linkedin.com/in/danson-abuya-b076a023a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/DansonAbuya" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/danson-abuya-b076a023a" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="mailto:dansonabuya@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={22} />
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © 2024 Danson Abuya | Sysnova Technologies. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
