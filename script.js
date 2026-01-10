// ==========================================
// ULTRA MODERN SOCIALMAGIC - JAVASCRIPT
// ==========================================

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.classList.toggle('active');
            }
        }
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animations
const animatedSections = document.querySelectorAll('.why-card, .service-column, .value-card, .process-step, .testimonial-card, .pricing-card');
animatedSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Counter Animation for Stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString('pl-PL');
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start).toLocaleString('pl-PL');
        }
    }, 16);
};

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const number = entry.target.querySelector('.stat-number');
            if (number) {
                const targetValue = parseInt(number.textContent.replace(/\s/g, ''));
                animateCounter(number, targetValue);
            }
            const statValue = entry.target.querySelector('.stat-value');
            if (statValue && !statValue.textContent.includes('+')) {
                // Only animate pure numbers, not percentages or text with +
                const text = statValue.textContent;
                if (text.includes('%')) {
                    const targetValue = parseInt(text.replace(/[^0-9]/g, ''));
                    const tempElement = { value: 0 };
                    const increment = targetValue / 100;
                    const counterInterval = setInterval(() => {
                        tempElement.value += increment;
                        if (tempElement.value >= targetValue) {
                            statValue.textContent = '+' + targetValue + '%';
                            clearInterval(counterInterval);
                        } else {
                            statValue.textContent = '+' + Math.floor(tempElement.value) + '%';
                        }
                    }, 20);
                }
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.floating-card, .testimonial-stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-visual');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add glow effect on hover for buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;

        const ripple = document.createElement('span');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Cursor Glow Effect (Optional - Ultra Modern)
const cursor = document.createElement('div');
cursor.classList.add('cursor-glow');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add CSS for cursor glow
const style = document.createElement('style');
style.textContent = `
    .cursor-glow {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(191, 255, 0, 0.3) 0%, transparent 70%);
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: 9999;
        transition: width 0.3s, height 0.3s;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        width: 20px;
        height: 20px;
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Service Tags Animation
document.querySelectorAll('.tag').forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'scale(0.8)';
    tag.style.transition = 'all 0.4s ease';

    setTimeout(() => {
        tag.style.opacity = '1';
        tag.style.transform = 'scale(1)';
    }, index * 50);
});

// Platform Logos Infinite Scroll
const platformsTrack = document.querySelector('.platforms-track');
if (platformsTrack) {
    // Clone the platform logos for seamless loop
    const clone = platformsTrack.cloneNode(true);
    platformsTrack.parentElement.appendChild(clone);
}

// 3D Tilt Effect for Cards (Mouse Movement)
document.querySelectorAll('.pricing-card, .service-column, .why-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Gradient Text Animation
document.querySelectorAll('.gradient-text').forEach(text => {
    text.setAttribute('data-text', text.textContent);
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('🚀 SocialMagic Ultra Modern Website Loaded!');
