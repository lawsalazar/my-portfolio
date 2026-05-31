// ==========================================================================
// JS ENGINE - Portfolio Redesign Interactivity
// ==========================================================================

// Initialize Lenis Smooth Scrolling
let lenis;
if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}


// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            if (lenis) {
                lenis.scrollTo(target, {
                    offset: -80
                });
            } else {
                const offset = 80; // Height of navbar
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Active Navigation Link Highlighting on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        const itemHref = item.getAttribute('href').slice(1);
        if (itemHref === current) {
            item.classList.add('active');
        }
    });
});

// Navbar Styling Shift on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.style.background = 'rgba(250, 246, 235, 0.96)';
        navbar.style.borderBottomColor = 'var(--text-primary)';
        navbar.style.boxShadow = '0 4px 20px rgba(13, 13, 13, 0.06)';
    } else {
        navbar.style.background = 'rgba(250, 246, 235, 0.9)';
        navbar.style.borderBottomColor = 'var(--border)';
        navbar.style.boxShadow = 'none';
    }
});

// Typewriter Effect for the Hero Title
const typeWriter = (element, text, speed = 80) => {
    if (!element) return;
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

window.addEventListener('load', () => {
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        typeWriter(nameElement, originalText, 60);
    }
});

// Count Up Stat Counter Engine
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    const duration = 1200; // total duration of counting in ms
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const start = 0;
        let startTime = null;
        
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentVal = Math.floor(progress * (target - start) + start);
            
            if (target === 4) {
                counter.textContent = currentVal + '+';
            } else if (target === 6) {
                counter.textContent = currentVal + ' ';
            } else {
                counter.textContent = currentVal + ' ';
            }
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                // Ensure correct final text tags
                if (target === 4) counter.textContent = '4+';
                else if (target === 6) counter.textContent = '6';
                else if (target === 3) counter.textContent = '3';
            }
        };
        
        window.requestAnimationFrame(step);
    });
};

// Intersection Observer for Section Transitions & Stats Counter
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Stagger animation for skill tags
            if (entry.target.classList.contains('skill-category')) {
                const tags = entry.target.querySelectorAll('.skill-tag');
                tags.forEach((tag, index) => {
                    setTimeout(() => {
                        tag.style.opacity = '1';
                        tag.style.transform = 'translateY(0)';
                    }, index * 40);
                });
            }
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Observe sections for scroll entry fades
    document.querySelectorAll('.section-header').forEach(el => observer.observe(el));
    document.querySelectorAll('.about-content').forEach(el => observer.observe(el));
    document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
    document.querySelectorAll('.skill-category').forEach(el => observer.observe(el));
    document.querySelectorAll('.cert-card').forEach(el => observer.observe(el));
    document.querySelectorAll('.contact-content').forEach(el => observer.observe(el));
    
    // Observer for count-up stats
    const statsContainer = document.querySelector('.about-stats');
    if (statsContainer) {
        const statsObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        statsObserver.observe(statsContainer);
    }
});

// Interactive SRE Command Line Terminal Simulation
const terminalCommands = [
    { type: 'input', text: 'ssh lawrence@ops.local' },
    { type: 'output', text: 'Connecting to ops.local (10.0.8.24) on port 22...', class: 'log-info' },
    { type: 'output', text: 'Connection established. Welcome to Lawrence\'s server!', class: 'log-success' },
    { type: 'output', text: 'Last login: Wed May 20 20:41:23 2026 from 192.168.1.100', class: 'log-gray' },
    { type: 'input', text: 'sre-agent --status' },
    { type: 'output', text: '[INFO] Initializing telemetry analysis...', class: 'log-info' },
    { type: 'output', text: '🟢 Host status: ONLINE', class: 'log-success' },
    { type: 'output', text: '🟢 Experience: 4+ Years SRE Operations', class: 'log-success' },
    { type: 'output', text: '🟢 Systems telemetry: ACTIVE', class: 'log-success' },
    { type: 'output', text: '🟢 SLA Target: 99.99% | Actual: 100.00%', class: 'log-success' },
    { type: 'input', text: 'kubectl get pods -n production' },
    { type: 'output', text: 'NAME                               READY   STATUS    RESTARTS   AGE', class: 'log-gray' },
    { type: 'output', text: 'pod/aws-infrastructure-tf-7d9a8    1/1     Running   0          421d', class: 'log-info' },
    { type: 'output', text: 'pod/gcp-cloud-architect-v2         1/1     Running   0          260d', class: 'log-info' },
    { type: 'output', text: 'pod/traffic-envoy-mesh-router      1/1     Running   0          110d', class: 'log-info' },
    { type: 'output', text: 'pod/prometheus-grafana-alerts      1/1     Running   0          110d', class: 'log-info' },
    { type: 'input', text: 'ping -c 3 hybrid-cloud-routing' },
    { type: 'output', text: '64 bytes from 10.0.12.8: icmp_seq=1 ttl=64 time=12.4 ms', class: 'log-gray' },
    { type: 'output', text: '64 bytes from 10.0.12.8: icmp_seq=2 ttl=64 time=14.2 ms', class: 'log-gray' },
    { type: 'output', text: '64 bytes from 10.0.12.8: icmp_seq=3 ttl=64 time=11.9 ms', class: 'log-gray' },
    { type: 'output', text: '--- hybrid-cloud-routing ping statistics ---', class: 'log-gray' },
    { type: 'output', text: '3 packets transmitted, 3 received, 0% packet loss, time 2002ms', class: 'log-gray' },
    { type: 'output', text: 'rtt min/avg/max/mdev = 11.9/12.83/14.2/0.99 ms', class: 'log-gray' },
    { type: 'input', text: 'terraform apply' },
    { type: 'output', text: 'aws_instance.web_server: Refreshing state... [id=i-0f81dca23b9d]', class: 'log-gray' },
    { type: 'output', text: 'Apply complete! Resources: 0 added, 0 changed, 0 destroyed.', class: 'log-success' },
    { type: 'input', text: 'echo "Systems stable. Enjoy exploring!"' },
    { type: 'output', text: 'Systems stable. Enjoy exploring!', class: 'log-magenta' }
];

const startTerminalEngine = () => {
    const outputContainer = document.getElementById('terminal-output');
    if (!outputContainer) return;
    
    let commandIndex = 0;
    
    const typeLine = (lineData, callback) => {
        const lineElement = document.createElement('div');
        lineElement.className = 'terminal-line';
        outputContainer.appendChild(lineElement);
        
        // Auto scroll terminal body
        const bodyElement = document.querySelector('.terminal-body');
        if (bodyElement) bodyElement.scrollTop = bodyElement.scrollHeight;
        
        if (lineData.type === 'input') {
            const promptSpan = document.createElement('span');
            promptSpan.className = 'terminal-prompt';
            promptSpan.textContent = '[guest@ops-local ~]$ ';
            lineElement.appendChild(promptSpan);
            
            const inputSpan = document.createElement('span');
            inputSpan.className = 'terminal-input-line';
            lineElement.appendChild(inputSpan);
            
            const cursorSpan = document.createElement('span');
            cursorSpan.className = 'terminal-cursor';
            lineElement.appendChild(cursorSpan);
            
            let charIndex = 0;
            const typeChar = () => {
                if (charIndex < lineData.text.length) {
                    inputSpan.textContent += lineData.text.charAt(charIndex);
                    charIndex++;
                    if (bodyElement) bodyElement.scrollTop = bodyElement.scrollHeight;
                    setTimeout(typeChar, 30 + Math.random() * 20); // Dynamic human speed
                } else {
                    cursorSpan.remove(); // Cleanup cursors
                    setTimeout(callback, 800); // Pause after typing
                }
            };
            typeChar();
        } else {
            // Print command line output instantly
            lineElement.className = `terminal-line ${lineData.class || ''}`;
            lineElement.textContent = lineData.text;
            if (bodyElement) bodyElement.scrollTop = bodyElement.scrollHeight;
            setTimeout(callback, 150); // Small interval between outputs
        }
    };
    
    const runSequence = () => {
        if (commandIndex < terminalCommands.length) {
            typeLine(terminalCommands[commandIndex], () => {
                commandIndex++;
                setTimeout(runSequence, 100);
            });
        } else {
            // Loop sequence after a prolonged pause
            setTimeout(() => {
                outputContainer.innerHTML = '';
                commandIndex = 0;
                runSequence();
            }, 6000);
        }
    };
    
    runSequence();
};

// Interactive Mouse-Reactive Parallax Target Guidance Background
const initAntigravityBackground = () => {
    const ring1 = document.querySelector('.ring-1');
    const ring2 = document.querySelector('.ring-2');
    if (!ring1 || !ring2) return;

    let mouseX = 0, mouseY = 0;
    let curX1 = 0, curY1 = 0;
    let curX2 = 0, curY2 = 0;

    window.addEventListener('mousemove', (e) => {
        // Normalize mouse coordinates around the window center (-0.5 to 0.5)
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
    });

    const tick = () => {
        // Smooth spring physics interpolation (damping lag)
        curX1 += (mouseX * 70 - curX1) * 0.05;
        curY1 += (mouseY * 70 - curY1) * 0.05;

        curX2 += (-mouseX * 110 - curX2) * 0.04;
        curY2 += (-mouseY * 110 - curY2) * 0.04;

        // Apply high-performance 3D transforms with rotation to represent steering mechanics
        ring1.style.transform = `translate3d(${curX1}px, ${curY1}px, 0) rotate(${curX1 * 0.15}deg)`;
        ring2.style.transform = `translate3d(${curX2}px, ${curY2}px, 0) rotate(${curX2 * -0.1}deg)`;

        requestAnimationFrame(tick);
    };
    tick();
};

// Initialize SRE Interactive Terminal Engine and Background on load
window.addEventListener('load', () => {
    startTerminalEngine();
    initAntigravityBackground();
});

// Dynamic Parallax for grid overlay background
const heroBackground = document.querySelector('.grid-background');
window.addEventListener('scroll', () => {
    if (heroBackground) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.15;
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// Easter Egg for Developers
console.log(
    '%c🚀 ops.local status: active',
    'font-family: monospace; font-size: 16px; font-weight: bold; color: #E53A27; background-color: #FAF6EB; padding: 4px 8px; border: 1.5px solid #0D0D0D;'
);
console.log(
    '%cSite Reliability & Cloud Operations Center. Looking for highly operational infrastructure design? Contact Lawrence!',
    'font-family: sans-serif; font-size: 12px; color: #7E7A70;'
);