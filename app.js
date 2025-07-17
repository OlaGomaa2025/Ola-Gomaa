// Netflix-inspired Portfolio Application
class NetflixPortfolio {
    constructor() {
        this.currentPersona = 'educator';
        this.currentTestimonial = 0;
        this.data = {
            name: "Ola Gomaa",
            title: "Global Learning and Development Specialist",
            location: "Breda, The Netherlands",
            contact: {
                mobile: "+31 687344313",
                email: "ola.gomaa77@gmail.com",
                linkedin: "linkedin.com/in/olagomaa"
            },
            summary: "Learning and Development professional with over 10 years of international experience designing impactful, performance-driven training programs. Combines strategic instructional design expertise with hands-on proficiency in authoring tools, LMS platforms, and AI-driven solutions to deliver engaging, scalable, and data-informed learning experiences.",
            education: [
                {degree: "MA in Education and Technology", institution: "University College London, UK", year: "2022"},
                {degree: "MBA in International Business", institution: "Fairleigh Dickinson University, USA", year: "2018"},
                {degree: "BA in English Education", institution: "Ain Shams University, Egypt", year: "2013"}
            ],
            certifications: [
                "Chevening Award, UK Foreign Office (2021)",
                "UNESCO Arab Youth Leader – Education for Sustainable Development (2020)",
                "USAID Women Leadership Award (2015)",
                "UN Youth Assembly Representative, New York (2017)"
            ],
            key_skills: {
                instructional_design: ["ADDIE", "SAM", "Competency Frameworks", "Learning Theories"],
                tools_technologies: ["ChatGPT", "Google Gemini", "Sora", "Synthesia AI", "HeygenAI", "Perplexity", "Deepseek", "Manus AI", "Articulate Storyline", "Adobe Captivate", "Cornerstone LMS", "Moodle", "VEO3", "Figma", "WordPress", "Microsoft Office Suite"],
                ld_specialties: ["Learning Analytics", "E-learning Development", "Stakeholder Engagement", "Generative AI in Learning", "Storyboarding", "Coaching", "Scenario-Based Learning"],
                languages: ["Arabic (Native)", "English (Fluent)", "Dutch (Intermediate)"]
            },
            experience: [
                {
                    role: "Global Learning Specialist",
                    company: "NewCold, Netherlands",
                    period: "Dec 2024 – Present",
                    achievements: [
                        "Design and develop e-learning modules using Articulate Storyline and Adobe Captivate",
                        "Leverage generative AI tools for content creation, significantly accelerating design workflows",
                        "Analyze LMS data and generated insights to evaluate learning effectiveness",
                        "Advise business stakeholders on L&D strategies and training best practices",
                        "Oversee curriculum development for global workforce",
                        "Deliver virtual and in-person training sessions across international teams"
                    ]
                },
                {
                    role: "Senior Learning Analyst",
                    company: "United Nations Office for Project Services- UNOPS, Denmark",
                    period: "June 2024 – Dec 2024",
                    achievements: [
                        "Designed and launched global programs such as 'Discover UNOPS' and the Senior Leadership Programme",
                        "Collaborated with senior leaders and SMEs to align training with strategic UN and SDG priorities",
                        "Analyzed learning data via dashboards and LMS reports for high-level decision-making",
                        "Developed scalable learning assets and best practices documentation",
                        "Led communications strategy to promote continuous learning culture"
                    ]
                },
                {
                    role: "Senior Strategy Learning Experience Manager",
                    company: "Almentor, Remote",
                    period: "Nov 2021 – May 2024",
                    achievements: [
                        "Led design of evidence-based learning strategies grounded in adult learning principles",
                        "Created learner personas and defined learning objectives for tailored solutions",
                        "Supervised digital learning content development with emerging tools",
                        "Monitored program performance via learning analytics",
                        "Collaborated with stakeholders across sectors to align learning with client goals"
                    ]
                }
            ],
            publications: [
                {
                    title: "Sustainability in Education Technology Design: Bridging Green Design and Education for Sustainability",
                    authors: "Gomaa, O. & Gauthier, A.",
                    year: "2024",
                    publication: "Promoting Multi-Sector Sustainability with Policy and Innovation",
                    pages: "90–121",
                    publisher: "IGI Global"
                }
            ],
            personas: {
                educator: {
                    icon: "📚",
                    tagline: "Unlock transformative teaching ideas",
                    description: "Pioneering classroom solutions shaped by international impact and evidence-based practice",
                    key_projects: [
                        "MA in Education and Technology from UCL",
                        "UNESCO Arab Youth Leader for Education",
                        "Global Learning Programs at UNOPS",
                        "Sustainability in EdTech Research"
                    ]
                },
                recruiter: {
                    icon: "🎯",
                    tagline: "Preview measurable leadership wins",
                    description: "Real organizational transformation and proven capacity-building techniques",
                    key_achievements: [
                        "10+ years international L&D experience",
                        "Chevening Scholar and multiple leadership awards",
                        "Led global training programs for UN and corporations",
                        "Expert in AI-driven learning solutions"
                    ]
                },
                collaborator: {
                    icon: "🤝",
                    tagline: "Co-create SDG projects with me",
                    description: "Cross-cultural facilitator with proven UN and NGO partnerships",
                    collaborations: [
                        "UNOPS Senior Leadership Programme",
                        "UNESCO Education for Sustainable Development",
                        "UN Youth Assembly Representative",
                        "Multi-sector sustainability research"
                    ]
                },
                learner: {
                    icon: "🌱",
                    tagline: "Grow skills for a greener future",
                    description: "Story-driven learning adventures for next-generation changemakers",
                    learning_focus: [
                        "Generative AI in Learning Design",
                        "Sustainability in Education Technology",
                        "Cross-cultural Leadership Development",
                        "Evidence-based Learning Strategies"
                    ]
                }
            },
            testimonials: [
                {
                    quote: "Ola's innovative approach to learning design has transformed our global training programs.",
                    author: "Senior Director, NewCold",
                    role: "Leadership Team"
                },
                {
                    quote: "Her expertise in AI-driven learning solutions is unparalleled in the industry.",
                    author: "Program Manager, UNOPS",
                    role: "United Nations"
                },
                {
                    quote: "Ola brings both strategic vision and practical execution to every project.",
                    author: "Chief Learning Officer, Almentor",
                    role: "EdTech Platform"
                }
            ]
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateStaticContent();
    }

    setupEventListeners() {
        // Landing gate
        const introTitle = document.querySelector('.intro-title');
        if (introTitle) {
            introTitle.addEventListener('click', () => this.enterPortfolio());
            introTitle.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    this.enterPortfolio();
                }
            });
        }

        // Persona selection
        const personaCards = document.querySelectorAll('.persona-card');
        personaCards.forEach(card => {
            card.addEventListener('click', () => {
                const persona = card.dataset.persona;
                this.selectPersona(persona);
            });
        });

        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                const section = link.dataset.section;
                this.scrollToSection(section);
                this.setActiveNavLink(link);
            });
        });

        // Persona switch
        const personaSwitch = document.getElementById('persona-switch');
        if (personaSwitch) {
            personaSwitch.addEventListener('click', () => this.showPersonaSelection());
        }

        // Testimonial navigation
        const prevBtn = document.getElementById('prev-testimonial');
        const nextBtn = document.getElementById('next-testimonial');
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => this.previousTestimonial());
            nextBtn.addEventListener('click', () => this.nextTestimonial());
        }

        // Contact actions
        const contactBtn = document.getElementById('contact-btn');
        const resumeBtn = document.getElementById('resume-btn');
        const downloadResumeBtn = document.getElementById('download-resume');
        const linkedinBtn = document.getElementById('connect-linkedin');

        if (contactBtn) {
            contactBtn.addEventListener('click', () => this.scrollToSection('contact'));
        }
        
        if (resumeBtn) {
            resumeBtn.addEventListener('click', () => this.viewResume());
        }
        
        if (downloadResumeBtn) {
            downloadResumeBtn.addEventListener('click', () => this.downloadResume());
        }
        
        if (linkedinBtn) {
            linkedinBtn.addEventListener('click', () => this.connectLinkedIn());
        }

        // Auto-rotate testimonials
        setInterval(() => {
            this.nextTestimonial();
        }, 5000);
    }

    populateStaticContent() {
        this.populateSkills();
        this.populateExperience();
        this.populateEducation();
        this.populateTestimonials();
    }

    enterPortfolio() {
        const introGate = document.getElementById('intro-gate');
        const personaSelection = document.getElementById('persona-selection');
        
        if (introGate && personaSelection) {
            introGate.classList.add('fade-out');
            setTimeout(() => {
                introGate.classList.add('hidden');
                personaSelection.classList.remove('hidden');
                personaSelection.classList.add('fade-in');
            }, 500);
        }
    }

    selectPersona(persona) {
        this.currentPersona = persona;
        const personaSelection = document.getElementById('persona-selection');
        const mainContent = document.getElementById('main-content');
        
        if (personaSelection && mainContent) {
            personaSelection.classList.add('hidden');
            mainContent.classList.remove('hidden');
            mainContent.classList.add('fade-in');
        }
        
        this.updatePersonaContent();
    }

    updatePersonaContent() {
        const personaData = this.data.personas[this.currentPersona];
        
        // Update navigation persona indicator
        const currentPersonaElement = document.getElementById('current-persona');
        if (currentPersonaElement) {
            currentPersonaElement.textContent = this.currentPersona.charAt(0).toUpperCase() + this.currentPersona.slice(1);
        }
        
        // Update hero content
        const heroSubtitle = document.getElementById('hero-subtitle');
        const heroDescription = document.getElementById('hero-description');
        
        if (heroSubtitle && heroDescription) {
            heroSubtitle.textContent = personaData.tagline;
            heroDescription.innerHTML = `<p>${personaData.description}</p><p>${this.data.summary}</p>`;
        }
        
        // Update featured content
        this.updateFeaturedContent();
    }

    updateFeaturedContent() {
        const personaData = this.data.personas[this.currentPersona];
        const featuredCarousel = document.getElementById('featured-carousel');
        const featuredTitle = document.getElementById('featured-title');
        
        if (!featuredCarousel || !featuredTitle) return;
        
        let items = [];
        let title = '';
        
        switch (this.currentPersona) {
            case 'educator':
                title = 'Educational Innovation & Research';
                items = personaData.key_projects;
                break;
            case 'recruiter':
                title = 'Leadership Achievements & Impact';
                items = personaData.key_achievements;
                break;
            case 'collaborator':
                title = 'Strategic Partnerships & Collaborations';
                items = personaData.collaborations;
                break;
            case 'learner':
                title = 'Continuous Learning & Development';
                items = personaData.learning_focus;
                break;
        }
        
        featuredTitle.textContent = title;
        
        featuredCarousel.innerHTML = items.map(item => `
            <div class="carousel-item">
                <h3>${item}</h3>
                <p>Explore the impact and innovation behind this initiative.</p>
            </div>
        `).join('');
    }

    populateSkills() {
        const skills = this.data.key_skills;
        
        // Instructional Design
        const instructionalSkills = document.getElementById('instructional-skills');
        if (instructionalSkills) {
            instructionalSkills.innerHTML = skills.instructional_design.map(skill => 
                `<span class="skill-badge">${skill}</span>`
            ).join('');
        }
        
        // Tools & Technologies
        const toolsSkills = document.getElementById('tools-skills');
        if (toolsSkills) {
            toolsSkills.innerHTML = skills.tools_technologies.map(skill => 
                `<span class="skill-badge">${skill}</span>`
            ).join('');
        }
        
        // L&D Specialties
        const ldSkills = document.getElementById('ld-skills');
        if (ldSkills) {
            ldSkills.innerHTML = skills.ld_specialties.map(skill => 
                `<span class="skill-badge">${skill}</span>`
            ).join('');
        }
        
        // Languages
        const languageSkills = document.getElementById('language-skills');
        if (languageSkills) {
            languageSkills.innerHTML = skills.languages.map(skill => 
                `<span class="skill-badge">${skill}</span>`
            ).join('');
        }
    }

    populateExperience() {
        const experienceTimeline = document.getElementById('experience-timeline');
        if (!experienceTimeline) return;
        
        experienceTimeline.innerHTML = this.data.experience.map(exp => `
            <div class="timeline-item">
                <div class="timeline-content">
                    <h3 class="timeline-title">${exp.role}</h3>
                    <div class="timeline-company">${exp.company}</div>
                    <div class="timeline-period">${exp.period}</div>
                    <ul class="timeline-achievements">
                        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }

    populateEducation() {
        const educationList = document.getElementById('education-list');
        const certificationList = document.getElementById('certification-list');
        
        if (educationList) {
            educationList.innerHTML = this.data.education.map(edu => `
                <div class="education-item">
                    <h4>${edu.degree}</h4>
                    <p>${edu.institution}</p>
                    <p class="education-year">${edu.year}</p>
                </div>
            `).join('');
        }
        
        if (certificationList) {
            certificationList.innerHTML = this.data.certifications.map(cert => `
                <div class="certification-item">
                    <p>${cert}</p>
                </div>
            `).join('');
        }
    }

    populateTestimonials() {
        const testimonialTrack = document.getElementById('testimonial-track');
        if (!testimonialTrack) return;
        
        testimonialTrack.innerHTML = this.data.testimonials.map((testimonial, index) => `
            <div class="testimonial-item ${index === 0 ? 'active' : ''}" style="display: ${index === 0 ? 'block' : 'none'};">
                <div class="testimonial-quote">"${testimonial.quote}"</div>
                <div class="testimonial-author">${testimonial.author}</div>
                <div class="testimonial-role">${testimonial.role}</div>
            </div>
        `).join('');
    }

    nextTestimonial() {
        const testimonials = document.querySelectorAll('.testimonial-item');
        if (testimonials.length === 0) return;
        
        testimonials[this.currentTestimonial].style.display = 'none';
        this.currentTestimonial = (this.currentTestimonial + 1) % testimonials.length;
        testimonials[this.currentTestimonial].style.display = 'block';
    }

    previousTestimonial() {
        const testimonials = document.querySelectorAll('.testimonial-item');
        if (testimonials.length === 0) return;
        
        testimonials[this.currentTestimonial].style.display = 'none';
        this.currentTestimonial = this.currentTestimonial === 0 ? testimonials.length - 1 : this.currentTestimonial - 1;
        testimonials[this.currentTestimonial].style.display = 'block';
    }

    showPersonaSelection() {
        const mainContent = document.getElementById('main-content');
        const personaSelection = document.getElementById('persona-selection');
        
        if (mainContent && personaSelection) {
            mainContent.classList.add('hidden');
            personaSelection.classList.remove('hidden');
            personaSelection.classList.add('fade-in');
        }
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(`${sectionId}-section`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    setActiveNavLink(activeLink) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }

    viewResume() {
        // In a real implementation, this would open a PDF viewer
        alert('Resume viewing functionality would be implemented here with PDF display.');
    }

    downloadResume() {
        // In a real implementation, this would trigger a PDF download
        alert('Resume download functionality would be implemented here.');
    }

    connectLinkedIn() {
        window.open('https://linkedin.com/in/olagomaa', '_blank');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NetflixPortfolio();
});

// Add smooth scrolling behavior for the entire document
document.documentElement.style.scrollBehavior = 'smooth';

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all content sections when they become available
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            observer.observe(section);
        });
    }, 1000);
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const mainContent = document.getElementById('main-content');
        const personaSelection = document.getElementById('persona-selection');
        
        if (mainContent && !mainContent.classList.contains('hidden')) {
            // Show persona selection if in main content
            mainContent.classList.add('hidden');
            personaSelection.classList.remove('hidden');
        }
    }
});

// Add focus management for better accessibility
document.addEventListener('DOMContentLoaded', () => {
    const focusableElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid #E50914';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = '';
            element.style.outlineOffset = '';
        });
    });
});

// Add reduced motion support
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}
