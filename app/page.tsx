'use client';

import React, { useEffect, useState } from 'react';
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

  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <div className="bg-background text-foreground min-h-screen flex flex-col">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <nav className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8" aria-label="Main">
          <div className="flex justify-between items-center min-h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <img src="/logo.png" alt="Sysnova Technologies" className="h-8 w-8 sm:h-9 sm:w-9 object-contain rounded shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-sm sm:text-base font-semibold text-foreground tracking-tight truncate">Danson Omondi Abuya</span>
                <span className="text-xs text-muted-foreground hidden sm:block">Full Stack Developer</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-1 shrink-0">
              {['home', 'about', 'projects', 'skills', 'experience', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              className="md:hidden min-h-[44px] min-w-[44px] p-2 rounded-md text-muted-foreground hover:bg-muted/50 hover:text-foreground touch-manipulation flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-3 border-t border-border/60 flex flex-col gap-0.5">
              {['home', 'about', 'projects', 'skills', 'experience', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left px-3 min-h-[44px] py-2.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-sm touch-manipulation flex items-center"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Scrollable main content */}
      <main className="flex-1 overflow-y-auto pt-12 sm:pt-14 pb-16" role="main">
      {/* Hero Section */}
      <section id="home" className="pt-2 pb-3 sm:pb-4 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1 min-w-0">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-1.5 sm:mb-2 break-words">
                Danson Omondi Abuya
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-primary font-semibold mb-1.5 sm:mb-2">Full Stack Developer</p>
              <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto lg:mx-0 mb-2 sm:mb-3 leading-relaxed">
                Over 4 years delivering end-to-end enterprise applications. Strong in Java Spring Boot, Node.js, React, Next.js, and React Native—building API-driven, secure, and high-performance solutions.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-2 lg:mb-0">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="min-h-[44px] px-5 py-2.5 sm:px-6 bg-primary text-primary-foreground rounded-lg font-semibold text-sm shadow-lg shadow-primary/25 hover:opacity-95 transition-opacity touch-manipulation"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="min-h-[44px] px-5 py-2.5 sm:px-6 rounded-lg font-semibold text-sm bg-muted/50 text-foreground hover:bg-muted transition-colors touch-manipulation"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-end order-1 lg:order-2 mb-3 sm:mb-4 lg:mb-0 min-w-0">
              <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-3xl sm:text-5xl font-bold text-primary ring-1 ring-primary/20 shrink-0">
                DA
              </div>
              <div className="mt-2 w-full max-w-[280px] sm:max-w-xs rounded-2xl bg-card/80 p-3 sm:p-4 shadow-sm border border-border/40 text-center lg:text-right">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Quick facts</p>
                <p className="text-sm text-foreground font-medium">Nairobi, Kenya</p>
                <p className="text-sm text-muted-foreground">4+ years experience</p>
                <p className="text-sm text-muted-foreground">Technical Lead · Zimasa Health</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <ChevronDown className="text-primary/70 animate-bounce" size={20} aria-hidden />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-3 sm:py-4 px-3 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-0.5 text-center">About Me</h2>
          <p className="text-muted-foreground text-center text-xs sm:text-sm mb-2 sm:mb-3">Background and expertise</p>
          <div className="grid md:grid-cols-2 gap-3 sm:gap-4 items-start">
            <div className="space-y-2 min-w-0">
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Full Stack Developer with over 4 years of experience delivering end-to-end enterprise applications. Strong expertise in Java Spring Boot, Node.js, React, Next.js, and React Native—building API-driven, secure, and high-performance solutions.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Skilled in Agile methodologies, DevOps pipelines, SIT/UAT testing, and enterprise system support. Proven ability to lead teams, conduct code reviews, and deliver business-impacting solutions. Fluent in English and Kiswahili.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                I focus on security best practices, code quality, and end-to-end project ownership—from requirements and design through deployment and production support.
              </p>
            </div>
            <div className="rounded-2xl bg-card/90 p-3 sm:p-4 shadow-sm border border-border/40 min-w-0">
              <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Expertise</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li><span className="text-foreground font-medium">Frontend:</span> React, Next.js, React Native, Angular, JavaScript, HTML5, CSS3, Bootstrap, Tailwind CSS, Ajax</li>
                <li><span className="text-foreground font-medium">Backend:</span> Java Spring Boot, Node.js, ExpressJS, PHP, RESTful API design & integration</li>
                <li><span className="text-foreground font-medium">Databases:</span> SQL Server, MySQL, PostgreSQL, database design</li>
                <li><span className="text-foreground font-medium">DevOps:</span> Git, GitHub Actions, Jenkins, Docker, Agile workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-3 sm:py-4 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-0.5 text-center">Featured Projects</h2>
          <p className="text-muted-foreground text-center text-xs sm:text-sm mb-2 sm:mb-3">Selected work and side projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {[
              {
                title: 'BiasharaHub',
                description: `Most SMEs tend to sell through social media (e.g. WhatsApp), but operations remain manual. BiasharaHub transforms WhatsApp into a fully automated commerce platform: orders, payments, inventory, and delivery are handled in one system—so businesses can operate smarter, serve customers faster, and scale with confidence.`,
                tech: ['React', 'Next.js', 'Java', 'Java Spring Boot', 'PostgreSQL', 'M-Pesa', 'WhatsApp'],
                link: 'https://biasharahub-app.sysnovatechnologies.com'
              },
              {
                title: 'RentalHub',
                description: 'Property rental management system with booking management, tenant coordination, payment tracking, maintenance scheduling, M-Pesa integration, and WhatsApp notifications.',
                tech: ['Next.js', 'Java', 'Java Spring Boot', 'PostgreSQL', 'M-Pesa', 'WhatsApp'],
                link: 'https://rental-hub-frontend.vercel.app/'
              },
              {
                title: 'Zimasa Payer Solution',
                description: 'Comprehensive insurance solution system enabling seamless interactions between Insurance/TPA, Providers, and Employees. Features claims processing, policy management, real-time transaction monitoring, and integrated financial reporting for efficient healthcare ecosystem management.',
                tech: ['React', 'Java', 'Java Spring Boot', 'MySQL'],
                link: '#',
                isPrivate: true
              },
              {
                title: 'Zimasa Engagement Solution',
                description: 'Employee wellness engagement platform promoting health and well-being. Enables individuals and employees to access wellness resources, participate in health challenges, track wellness activities, and receive personalized recommendations for improved work-life wellness.',
                tech: ['Next.js', 'Java', 'Java Spring Boot', 'MySQL', 'Tailwind CSS', 'WebSocket'],
                link: '#',
                isPrivate: true
              },
              {
                title: 'Zimasa Member App',
                description: 'Mobile-first member management application with profile management, membership tracking, benefits access, and personalized member experiences.',
                tech: ['React Native', 'Vite', 'JavaScript', 'Java', 'Java Spring Boot', 'MySQL'],
                link: '#',
                isPrivate: true
              },
              {
                title: 'TakaTrack',
                description: 'Waste collection and management system enabling efficient scheduling, route optimization, real-time tracking, and reporting for municipal and private collection services.',
                tech: ['React', 'Node.js', 'Java', 'Java Spring Boot', 'PostgreSQL', 'Google Maps API', 'FCM', 'WhatsApp', 'SMS'],
                link: 'https://takatrack.sysnovatechnologies.com/'
              },
              {
                title: 'Mkulima Pro',
                description: 'Smart farming platform connecting smallholder and commercial farmers with agricultural advisory, financing, market access, and logistics solutions—all in one place.',
                tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Java', 'Java Spring Boot', 'AI'],
                link: 'https://mkulima-pro.vercel.app/'
              },
              {
                title: 'LedgerHive',
                description: 'Smart Credit & Collections Platform for SMEs. Enterprise-grade collections management with credit scoring, payment tracking, and streamlined recovery workflows.',
                tech: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Java', 'Java Spring Boot', 'AI', 'WhatsApp', 'SMS'],
                link: 'https://ledgerhive.sysnovatechnologies.com/'
              }
            ].map((project, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-card/90 p-3 sm:p-4 shadow-sm border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-200 min-w-0"
              >
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-1.5">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 leading-relaxed line-clamp-3 sm:line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-1.5 sm:mb-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 bg-muted text-muted-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.isPrivate ? (
                  <span className="text-xs text-muted-foreground">Proprietary</span>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    View Project
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-3 sm:py-4 px-3 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-0.5 text-center">Skills & Expertise</h2>
          <p className="text-muted-foreground text-center text-xs sm:text-sm mb-2 sm:mb-3">Technologies and practices</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {[
              {
                category: 'Frontend',
                skills: ['React', 'Next.js', 'React Native', 'Angular', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Ajax', 'Vite']
              },
              {
                category: 'Backend',
                skills: ['Java', 'Java Spring Boot', 'Node.js', 'ExpressJS', 'PHP', 'RESTful API design', 'MySQL', 'PostgreSQL', 'SQL Server']
              },
              {
                category: 'Tools & DevOps',
                skills: ['Git', 'GitHub Actions', 'Jenkins', 'Docker', 'Agile workflows', 'AWS', 'Vercel', 'SIT/UAT Testing']
              },
              {
                category: 'Other',
                skills: ['Code reviews', 'Security best practices', 'System deployment', 'End-to-end project ownership', 'Team leadership', 'Mentoring']
              }
            ].map((skillGroup, idx) => (
              <div key={idx} className="rounded-2xl bg-card/90 p-3 shadow-sm border border-border/40 min-w-0">
                <h3 className="font-semibold text-foreground mb-1.5 sm:mb-2 text-[10px] sm:text-xs uppercase tracking-wide text-muted-foreground">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                  {skillGroup.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
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
      <section id="experience" className="py-3 sm:py-4 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-0.5 text-center">Work Experience</h2>
          <p className="text-muted-foreground text-center text-xs sm:text-sm mb-2 sm:mb-3">Roles and responsibilities</p>
          <div className="space-y-2">
            {[
              {
                title: 'Technical Lead & Full Stack Developer',
                company: 'Zimasa Health',
                period: 'Current',
                description: 'Delivering end-to-end solutions for three applications: Zimasa Payer Solution (client-facing, in use by a client and three networks), Zimasa Member App (companion for client networks), and Zimasa Engagement Platform (in demo for providers, payers, and consumers). Tech stack: Java Spring Boot (backend), React & Next.js (web), React Native (mobile). Built API-driven architectures for fast, reliable, secure communication. Conduct peer code reviews; lead SIT/UAT testing, deployment, and production support. Collaborate with cross-functional teams on requirements, design, and implementation aligned with business goals.'
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
                className="rounded-2xl bg-card/90 p-3 sm:p-4 shadow-sm border border-border/40 border-l-4 border-l-primary min-w-0"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-0.5 mb-0.5">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">{job.title}</h3>
                  <span className="text-xs text-muted-foreground shrink-0">{job.period}</span>
                </div>
                <p className="text-primary font-medium text-xs sm:text-sm mb-1">{job.company}</p>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-3 sm:py-4 px-3 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-0.5 text-center">Education & Certifications</h2>
          <p className="text-muted-foreground text-center text-xs sm:text-sm mb-2 sm:mb-3">Academic and professional development</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="rounded-2xl bg-card/90 p-3 sm:p-4 shadow-sm border border-border/40 min-w-0">
              <h3 className="font-semibold text-foreground mb-0.5 text-xs sm:text-base">Bachelor of Science in Computer Science</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">Chuka University · 2018 – 2022 · Second Class Honours (Upper Division)</p>
            </div>
            <div className="rounded-2xl bg-card/90 p-3 sm:p-4 shadow-sm border border-border/40 min-w-0">
              <h3 className="font-semibold text-foreground mb-1 text-xs sm:text-base">Professional Certifications & Training</h3>
              <ul className="text-muted-foreground text-xs sm:text-sm space-y-1">
                <li>CCNA 1, 2, 3 · Google Project Management · Google IT Support</li>
                <li>AWS re/Start · Cisco DevNet · Cisco CyberOps · ALX Cloud Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-3 sm:py-4 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center min-w-0">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-0.5">Get in touch</h2>
          <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3">
            Nairobi, Kenya. Open to new opportunities and collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <a
              href="mailto:dansonabuya@gmail.com"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-xl font-medium text-sm shadow-lg shadow-primary/20 hover:opacity-95 transition-opacity touch-manipulation"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href="tel:+254790100189"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm bg-muted hover:bg-muted/80 transition-colors touch-manipulation"
            >
              Call 0790 100 189
            </a>
            <a
              href="https://linkedin.com/in/danson-abuya-b076a023a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm bg-muted hover:bg-muted/80 transition-colors touch-manipulation"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/DansonAbuya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm bg-muted hover:bg-muted/80 transition-colors touch-manipulation"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
          </div>
        </div>
      </section>
      </main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-t border-border/50 py-1.5 sm:py-2">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 min-h-0">
          <p className="text-muted-foreground text-xs sm:text-sm order-2 sm:order-1 text-center sm:text-left break-words max-w-full">
            © {currentYear} Danson Omondi Abuya · Sysnova Technologies
          </p>
          <div className="flex items-center gap-3 sm:gap-4 order-1 sm:order-2">
            <a href="https://github.com/DansonAbuya" target="_blank" rel="noopener noreferrer" className="min-h-[44px] min-w-[44px] flex items-center justify-center text-muted-foreground hover:text-primary transition-colors touch-manipulation" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/danson-abuya-b076a023a" target="_blank" rel="noopener noreferrer" className="min-h-[44px] min-w-[44px] flex items-center justify-center text-muted-foreground hover:text-primary transition-colors touch-manipulation" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:dansonabuya@gmail.com" className="min-h-[44px] min-w-[44px] flex items-center justify-center text-muted-foreground hover:text-primary transition-colors touch-manipulation" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
      </div>
    </React.Fragment>
  );
}
