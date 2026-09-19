// ============================================
// Amaury Bernard — Portfolio
// Mobile nav, scroll reveal, image fallbacks, contact form
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // ---- Mobile nav toggle ----
    const navToggle = document.getElementById('navToggle');
    const mobilePanel = document.getElementById('mobilePanel');

    if (navToggle && mobilePanel) {
        navToggle.addEventListener('click', () => {
            const open = mobilePanel.classList.toggle('open');
            navToggle.classList.toggle('open', open);
            navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        mobilePanel.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                mobilePanel.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ---- Scroll reveal ----
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        reveals.forEach((el) => io.observe(el));
    } else {
        reveals.forEach((el) => el.classList.add('in'));
    }

    // ---- Image fallbacks ----
    // Every [data-fallback-img] starts hidden (see style.css). If the real
    // file (images/profil.jpg, images/projet1.png, ...) loads successfully,
    // we reveal it and hide the placeholder that sits right before it in
    // the markup. If it 404s, nothing happens and the placeholder stays.
    document.querySelectorAll('[data-fallback-img]').forEach((img) => {
        img.addEventListener('load', () => {
            img.style.display = 'block';
            const placeholder = img.previousElementSibling;
            if (placeholder) placeholder.style.display = 'none';
        });
    });

    // ---- Contact form -> mailto ----
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('cf-name').value.trim();
            const email = document.getElementById('cf-email').value.trim();
            const message = document.getElementById('cf-message').value.trim();

            const subject = encodeURIComponent('Contact portfolio — ' + name);
            const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');

            window.location.href =
                'mailto:amaury.bernard15@gmail.com?subject=' + subject + '&body=' + body;
        });
    }
});