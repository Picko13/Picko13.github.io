// Ouverture / fermeture du menu mobile
document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".main-nav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
        var isOpen = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
});

// Apparition progressive des blocs au scroll
document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
        items.forEach(function (el) { el.classList.add("is-visible"); });
        return;
    }

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    items.forEach(function (el) { observer.observe(el); });
});

// Compteurs animés (stats de la page d'accueil)
document.addEventListener("DOMContentLoaded", function () {
    var counters = document.querySelectorAll(".stat .num[data-count]");
    if (!counters.length || !("IntersectionObserver" in window)) return;

    var animate = function (el) {
        var target = parseInt(el.getAttribute("data-count"), 10);
        var suffix = el.getAttribute("data-suffix") || "";
        var duration = 900;
        var start = null;

        function step(ts) {
            if (start === null) start = ts;
            var progress = Math.min((ts - start) / duration, 1);
            var value = Math.round(progress * target);
            el.textContent = value + suffix;
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    };

    var counterObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animate(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.4 }
    );

    counters.forEach(function (el) { counterObserver.observe(el); });
});
