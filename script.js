const root = document.documentElement;
const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const languageButton = document.querySelector('[data-language]');
const products = [...document.querySelectorAll('[data-product]')];
const routeStops = [...document.querySelectorAll('[data-route-stop]')];
const routeProgress = document.querySelector('[data-route-progress]');
const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
}

menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
    document.body.classList.toggle('menu-open', !open);
});

nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
});

function setLanguage(language) {
    const lang = language === 'en' ? 'en' : 'zh';
    root.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    root.dataset.lang = lang;

    document.querySelectorAll('[data-zh][data-en]').forEach((element) => {
        element.textContent = element.dataset[lang];
    });

    languageButton.textContent = lang === 'zh' ? 'EN' : '中文';
    languageButton.setAttribute(
        'aria-label',
        lang === 'zh' ? 'Switch to English' : '切換至繁體中文'
    );
    document.title =
        lang === 'zh'
            ? 'Barneysbro — 城市交通與生活 App'
            : 'Barneysbro — Apps for moving cities';
    document.querySelector('meta[name="description"]').content =
        lang === 'zh'
            ? 'Barneysbro 打造七款實用 iOS App，從城市交通、垃圾清運與即時路況，到常用文字快速輸入。'
            : 'Barneysbro makes seven focused iOS apps for transit, city routines, live road cameras, and faster replies.';

    try {
        localStorage.setItem('barneysbro-language', lang);
    } catch {}
}

let savedLanguage;
try {
    savedLanguage = localStorage.getItem('barneysbro-language');
} catch {}
setLanguage(savedLanguage || (navigator.language.startsWith('zh') ? 'zh' : 'en'));
languageButton.addEventListener('click', () => {
    setLanguage(root.dataset.lang === 'zh' ? 'en' : 'zh');
});

routeStops.forEach((stop) => {
    stop.style.setProperty('--stop-color', stop.dataset.color);
});

let ticking = false;
function updateScrollState() {
    const y = scrollY + innerHeight * 0.48;
    header.classList.toggle('is-over-hero', scrollY < innerHeight * 0.72);

    const first = products[0].offsetTop;
    const last = products.at(-1);
    const distance = last.offsetTop + last.offsetHeight - first;
    const progress = Math.min(1, Math.max(0, (y - first) / distance));
    routeProgress.style.setProperty('--route-progress', progress);

    let active = 0;
    products.forEach((product, index) => {
        if (y >= product.offsetTop) active = index;
    });
    routeStops.forEach((stop, index) => {
        const isActive = index === active;
        stop.classList.toggle('is-active', isActive);
        if (isActive) stop.setAttribute('aria-current', 'location');
        else stop.removeAttribute('aria-current');
    });
    routeProgress.style.setProperty(
        '--route-color',
        products[active].dataset.routeColor
    );
    ticking = false;
}

addEventListener(
    'scroll',
    () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollState);
            ticking = true;
        }
    },
    { passive: true }
);
addEventListener('resize', updateScrollState, { passive: true });
updateScrollState();

if (!prefersReducedMotion.matches && 'IntersectionObserver' in window) {
    document.body.classList.add('motion-ready');
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );
    products.forEach((product) => revealObserver.observe(product));
    revealObserver.observe(document.querySelector('.studio'));
}
