// ==========================================================================
// SUPERHERO CARTOON MULTIVERSE HUB - Main JS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Loading Screen
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => loader.style.display = 'none', 800);
        }, 1500); // Wait 1.5s then fade out
    }

    // 2. Custom Cursor
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            // Smooth cursor movement using GSAP if available, otherwise fallback
            if (typeof gsap !== 'undefined') {
                gsap.to(cursor, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.1,
                    ease: 'power2.out'
                });
            } else {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        });

        const hoverElements = document.querySelectorAll('a, button, .glass-card, .hover-target');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    // 3. Sticky Navbar
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 4. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // 5. GSAP Scroll Animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Fade Up Elements
        const fadeUpElements = document.querySelectorAll('.fade-up');
        fadeUpElements.forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        });

        // Zig Zag Section Animations
        const zigzags = document.querySelectorAll('.zig-zag');
        zigzags.forEach((section, index) => {
            const content = section.querySelector('.zig-zag-content');
            const image = section.querySelector('.zig-zag-image');
            
            const isEven = index % 2 === 0;
            
            if(content && image) {
                gsap.from(content, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                    },
                    x: isEven ? -100 : 100,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power3.out'
                });

                gsap.from(image, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                    },
                    x: isEven ? 100 : -100,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    delay: 0.2
                });
            }
        });

        // Parallax Hero
        const heroBg = document.querySelector('.hero-bg');
        if (heroBg) {
            gsap.to(heroBg, {
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                },
                y: 200,
                ease: 'none'
            });
        }
    }

    // 6. Easter Egg: Typing "MULTIVERSE"
    let typedKeys = '';
    const secretCode = 'multiverse';
    document.addEventListener('keydown', (e) => {
        typedKeys += e.key.toLowerCase();
        if (typedKeys.length > secretCode.length) {
            typedKeys = typedKeys.slice(-secretCode.length);
        }
        if (typedKeys === secretCode) {
            triggerEasterEgg();
            typedKeys = ''; // reset
        }
    });

    function triggerEasterEgg() {
        // Play sound if possible or show huge animation
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'conic-gradient(from 0deg, var(--neon-blue), var(--neon-purple), var(--neon-green), var(--neon-blue))';
        overlay.style.zIndex = '99999';
        overlay.style.mixBlendMode = 'screen';
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        document.body.appendChild(overlay);

        if (typeof gsap !== 'undefined') {
            gsap.to(overlay, {
                opacity: 0.8,
                duration: 2,
                rotation: 720,
                ease: 'power2.inOut',
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    overlay.remove();
                    alert("🌌 You have unlocked the true Multiverse Portal! 🌌");
                }
            });
        }
    }
});
