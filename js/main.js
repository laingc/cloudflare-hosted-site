/**
 * Personal Landing Page - Main JavaScript
 * Minimal interactions with accessibility support
 */

(function() {
    'use strict';

    /**
     * Initialise the page
     */
    function init() {
        setupSmoothScroll();
        setupScrollDownButton();
        setupIntersectionObserver();
        logConsoleMessage();
    }

    /**
     * Enhanced smooth scrolling for anchor links
     * Respects prefers-reduced-motion preference
     */
    function setupSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // Ignore if it's just "#"
                if (href === '#') return;

                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();

                    if (prefersReducedMotion) {
                        // Instant scroll for reduced motion preference
                        target.scrollIntoView();
                    } else {
                        // Smooth scroll
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }

                    // Update focus for accessibility
                    target.setAttribute('tabindex', '-1');
                    target.focus();
                }
            });
        });
    }

    /**
     * Scroll down button functionality
     * Scrolls to the first section after hero
     */
    function setupScrollDownButton() {
        const scrollDownBtn = document.querySelector('.scroll-down');
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!scrollDownBtn) return;

        scrollDownBtn.addEventListener('click', function() {
            // Find the first section after the hero
            const firstSection = document.querySelector('.section');

            if (firstSection) {
                if (prefersReducedMotion) {
                    // Instant scroll for reduced motion preference
                    firstSection.scrollIntoView();
                } else {
                    // Smooth scroll
                    firstSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }

    /**
     * Intersection Observer for fade-in animations
     * Only applies if motion is not reduced
     */
    function setupIntersectionObserver() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Skip animations if reduced motion is preferred
        if (prefersReducedMotion) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Stop observing once visible
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe sections for staggered fade-in
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(section);
        });

        // Add CSS class when visible
        const style = document.createElement('style');
        style.textContent = `
            .is-visible {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Log a friendly message to the console
     */
    function logConsoleMessage() {
        const styles = [
            'color: #00d9ff',
            'background: #0a0a0a',
            'font-size: 14px',
            'padding: 8px',
            'font-family: monospace'
        ].join(';');

        console.log('%cHello, curious developer! 👋', styles);
        console.log('%cLike what you see? Let\'s connect.', styles);
    }

    /**
     * Update copyright year dynamically
     */
    function updateCopyrightYear() {
        const footer = document.querySelector('.footer p');
        if (footer) {
            const currentYear = new Date().getFullYear();
            footer.innerHTML = footer.innerHTML.replace('2025', currentYear);
        }
    }

    /**
     * Detect and log user's colour scheme preference
     */
    function detectColourScheme() {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

        // Log preference (useful for debugging)
        if (process.env.NODE_ENV === 'development') {
            console.log('User prefers dark mode:', darkModeQuery.matches);
        }

        // Listen for changes
        darkModeQuery.addEventListener('change', (e) => {
            if (process.env.NODE_ENV === 'development') {
                console.log('Colour scheme changed. Dark mode:', e.matches);
            }
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Update copyright year
    updateCopyrightYear();

    // Detect colour scheme (only in development)
    if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
        detectColourScheme();
    }

})();
