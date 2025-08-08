// Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking on links
    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Initialize counter animation
    initCounterAnimation();
});

// Counter Animation Function
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    const options = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                observer.unobserve(counter);
            }
        });
    }, options);

    counters.forEach((counter) => {
        observer.observe(counter);
    });
}

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 2500; // 2.5 seconds for smoother animation
    const startTime = performance.now();

    // Add pulse animation class
    counter.classList.add('animating');
    setTimeout(() => {
        counter.classList.remove('animating');
    }, 300);

    function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Apply easing function
        const easedProgress = easeOutQuart(progress);
        const current = Math.floor(easedProgress * target);

        // Format the number
        counter.textContent = current + suffix;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            // Ensure final value is exact
            counter.textContent = target + suffix;
        }
    }

    requestAnimationFrame(updateCounter);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Hero image slideshow - Random app screenshots
const apps = ['HKBUS', 'SGBUS', 'TPEGARBAGE', 'TPEBUS', 'LONDONBUS'];
const heroImages = [];

// Collect all app screenshots for hero slideshow
function collectHeroImages() {
    const commonExtensions = ['png', 'jpg', 'jpeg', 'webp'];

    apps.forEach((appName) => {
        for (let i = 1; i <= 5; i++) {
            // 每個app最多取5張截圖
            for (const ext of commonExtensions) {
                heroImages.push(`images/${appName}/screenshots/${i}.${ext}`);
            }
        }
    });

    // Shuffle the array for random order
    for (let i = heroImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [heroImages[i], heroImages[j]] = [heroImages[j], heroImages[i]];
    }
}

let currentHeroIndex = 0;
const heroPreview = document.getElementById('hero-preview');

if (heroPreview) {
    collectHeroImages();

    // Preload first few images and start slideshow
    let validImages = [];
    let loadedCount = 0;

    // Test which images actually exist
    heroImages.slice(0, 20).forEach((imagePath, index) => {
        const img = new Image();
        img.onload = function () {
            validImages.push(imagePath);

            // Start slideshow when we have some valid images
            if (validImages.length >= 3 && loadedCount === 0) {
                loadedCount = 1; // Prevent multiple starts
                heroPreview.src = validImages[0];

                setInterval(() => {
                    currentHeroIndex =
                        (currentHeroIndex + 1) % validImages.length;
                    heroPreview.src = validImages[currentHeroIndex];
                }, 3000); // 3秒切換一次
            }
        };
        img.onerror = function () {
            // Skip invalid images
        };
        img.src = imagePath;
    });

    // Fallback if no screenshots found
    setTimeout(() => {
        if (validImages.length === 0) {
            heroPreview.src = 'images/COVER.jpg';
        }
    }, 2000);
}

// App details modal functionality
const appDetails = {
    hkbus: {
        title: 'HKBUS - 香港巴士即時查詢',
        description:
            '香港最全面的巴士即時查詢應用程式，支援九巴、城巴、嶼巴、綠色小巴、港鐵巴士等所有主要巴士公司。提供準確的到站時間預測、詳細路線資訊和智能行程規劃，是香港市民日常出行的最佳助手。',
        features: [
            '即時到站時間 - 精準預測巴士到站時間',
            '全港路線覆蓋 - 支援所有巴士公司路線',
            '離線查詢 - 無網路時也能查看收藏路線',
            '智能搜尋 - 快速找到目的地路線',
            '收藏功能 - 一鍵收藏常用站點和路線',
            '多語言介面 - 繁中、簡中、英文支援',
            '夜間模式 - 保護眼睛的深色主題',
            '無障礙支援 - 為視障用戶優化的語音功能',
        ],
        screenshots: 'images/HKBUS/screenshots/',
        appStoreUrl: 'https://apps.apple.com/hk/app/id1480194097',
        version: '4.1.2',
        rating: '4.7',
        downloads: '100,000+',
        size: '28.5 MB',
    },
    sgbus: {
        title: 'SGBUS - 新加坡巴士查詢專家',
        description:
            '新加坡最完整的公共交通查詢應用，整合 SBS Transit、SMRT Buses 等所有巴士營運商資訊。提供即時到站預測、智能路線規劃和詳細票價資訊，是新加坡居民和遊客的出行首選。',
        features: [
            '即時到站資訊 - 準確預測巴士到達時間',
            '全島路線覆蓋 - 支援所有巴士營運商',
            '智能路線推薦 - AI 推薦最佳出行路線',
            '多語言支援 - 英文、中文、馬來文、淡米爾文',
            '票價計算 - 精確的車資計算功能',
            '離線地圖 - 無網路時查看收藏路線',
            'EZ-Link 整合 - 支援電子錢包餘額查詢',
            '旅遊模式 - 專為遊客設計的景點路線',
        ],
        screenshots: 'images/SGBUS/screenshots/',
        appStoreUrl:
            'https://apps.apple.com/hk/developer/wei-hsiang-chen/id1016836733',
        version: '3.0.1',
        rating: '4.5',
        downloads: '50,000+',
        size: '24.8 MB',
    },
    tpegarbage: {
        title: '台北倒垃圾 - 垃圾車時間查詢',
        description:
            '台北市民生活必備應用！精準預測垃圾車到達時間，支援 GPS 即時追蹤和推播提醒。整合台北市環保局官方資料，讓您再也不會錯過垃圾車，輕鬆實現環保生活。',
        features: [
            '即時位置追蹤 - GPS 定位垃圾車即時位置',
            '精準時間預測 - AI 演算法預測到達時間',
            '智慧推播提醒 - 個人化垃圾車到站通知',
            '路線完整顯示 - 清楚標示垃圾車行駛路線',
            '收藏常用地點 - 一鍵設定住家、公司等常用位置',
            '垃圾分類指南 - 詳細的垃圾分類教學',
            '附近垃圾點搜尋 - 找到最近的垃圾收集點',
            '環保小貼士 - 每日環保知識分享',
        ],
        screenshots: 'images/TPEGARBAGE/screenshots/',
        appStoreUrl: 'https://apps.apple.com/tw/app/id1501309455',
        version: '2.1.5',
        rating: '4.8',
        downloads: '80,000+',
        size: '22.1 MB',
    },
    tpebus: {
        title: '台北公車 - 台北公車即時資訊',
        description:
            '台北市公車即時動態查詢專家！整合台北市政府交通局官方資料，提供最準確的公車到站資訊。支援捷運轉乘建議、票價查詢和個人化路線收藏，是台北通勤族的最佳選擇。',
        features: [
            '即時動態查詢 - 精確的公車到站時間',
            '捷運轉乘資訊 - 智能建議最佳轉乘路線',
            '票價即時查詢 - 支援悠遊卡、一卡通等電子票證',
            '智慧到站提醒 - 個人化的到站推播通知',
            '路線收藏管理 - 收藏常用路線和站點',
            '附近站點搜尋 - 快速找到周邊公車站',
            '無障礙友善 - 輪椅無障礙車輛資訊',
            '夜間公車支援 - 完整的夜間路線資訊',
        ],
        screenshots: 'images/TPEBUS/screenshots/',
        appStoreUrl: 'https://apps.apple.com/tw/app/id1482596231',
        version: '3.2.0',
        rating: '4.6',
        downloads: '60,000+',
        size: '31.2 MB',
    },
    londonbus: {
        title: 'LONDONBUS - 倫敦巴士即時查詢',
        description:
            '倫敦最完整的公共交通查詢應用，整合 Transport for London (TfL) 官方資料。提供即時巴士到站預測、地鐵轉乘資訊和詳細路線規劃，是倫敦居民和遊客的出行首選。',
        features: [
            '即時到站資訊 - 準確預測巴士到達時間',
            '全倫敦路線覆蓋 - 支援所有 TfL 巴士路線',
            '地鐵整合 - Underground、Overground 轉乘建議',
            '多語言支援 - 英文、中文介面',
            '票價計算 - Oyster Card、Contactless 支付資訊',
            '離線地圖 - 無網路時查看收藏路線',
            '夜間巴士 - 完整的夜間公車服務資訊',
            '旅遊模式 - 專為遊客設計的景點路線',
        ],
        screenshots: 'images/LONDONBUS/screenshots/',
        appStoreUrl: 'https://apps.apple.com/gb/app/londonbus/id999999999',
        version: '1.0.0',
        rating: '4.5',
        downloads: '10,000+',
        size: '25.8 MB',
    },
};

function showAppDetails(appId) {
    const app = appDetails[appId];
    if (!app) return;

    const modal = document.getElementById('app-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div class="app-detail-header">
            <div class="app-detail-icon">
                <img src="images/${appId.toUpperCase()}/icon/icon.png" alt="${
        app.title
    } Icon" onerror="this.src='images/Icon-App-60x603x.png'">
            </div>
            <div class="app-detail-info">
                <h2>${app.title}</h2>
                <p class="app-detail-description">${app.description}</p>
                <div class="app-stats">
                    <div class="stat-item">
                        <span class="stat-label">評分</span>
                        <span class="stat-value">⭐ ${app.rating}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">下載次數</span>
                        <span class="stat-value">${app.downloads}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">大小</span>
                        <span class="stat-value">${app.size}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">版本</span>
                        <span class="stat-value">${app.version}</span>
                    </div>
                </div>
                <a href="${
                    app.appStoreUrl
                }" class="btn btn-primary" target="_blank">
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on App Store" style="height: 40px;">
                </a>
            </div>
        </div>
        
        <div class="app-detail-content">
            <div class="app-features-section">
                <h3>主要功能</h3>
                <ul class="features-list">
                    ${app.features
                        .map((feature) => `<li>${feature}</li>`)
                        .join('')}
                </ul>
            </div>
            
            <div class="app-screenshots-section">
                <h3>應用程式截圖</h3>
                <div class="screenshots-gallery" id="screenshots-gallery-${appId}">
                    <!-- Screenshots will be loaded dynamically -->
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Load screenshots dynamically
    loadAppScreenshots(appId, app.screenshots);
}

// Function to dynamically load screenshots
function loadAppScreenshots(appId, screenshotsPath) {
    const gallery = document.getElementById(`screenshots-gallery-${appId}`);
    const commonExtensions = ['png', 'jpg', 'jpeg', 'webp'];
    const screenshots = []; // 收集所有成功載入的截圖
    let loadedCount = 0;
    let totalChecked = 0;
    const maxScreenshots = 20;

    // Try to load screenshots from 1.png, 2.png, etc.
    for (let i = 1; i <= maxScreenshots; i++) {
        for (const ext of commonExtensions) {
            totalChecked++;
            const imagePath = `${screenshotsPath}${i}.${ext}`;
            const img = new Image();

            img.onload = function () {
                // 確保同一個編號只載入一次
                if (!screenshots.find((s) => s.index === i)) {
                    screenshots.push({ index: i, path: imagePath });
                    loadedCount++;
                }

                // 當所有檢查完成後，按順序顯示截圖
                checkAndDisplayScreenshots();
            };

            img.onerror = function () {
                // Silent fail, continue to next image
                checkAndDisplayScreenshots();
            };

            img.src = imagePath;
        }
    }

    function checkAndDisplayScreenshots() {
        totalChecked--;
        if (totalChecked === 0) {
            // 所有檢查完成，按照索引順序排序並顯示
            screenshots.sort((a, b) => a.index - b.index);

            screenshots.forEach((screenshot) => {
                const screenshotDiv = document.createElement('div');
                screenshotDiv.className = 'screenshot-item';
                screenshotDiv.innerHTML = `
                    <img src="${screenshot.path}" alt="Screenshot ${screenshot.index}" loading="lazy">
                `;
                gallery.appendChild(screenshotDiv);
            });

            // If no screenshots are found, show a message
            if (loadedCount === 0) {
                gallery.innerHTML = `
                    <div class="no-screenshots">
                        <p>截圖即將更新...</p>
                    </div>
                `;
            }
        }
    }
}

function closeAppDetails() {
    const modal = document.getElementById('app-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function (event) {
    const modal = document.getElementById('app-modal');
    if (event.target === modal) {
        closeAppDetails();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeAppDetails();
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Add click tracking for analytics (可以整合 Google Analytics)
function trackAppClick(appName, action) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: 'App Interaction',
            event_label: appName,
        });
    }
    console.log(`Tracking: ${action} on ${appName}`);
}

// Observe elements for animation
// Performance optimization: Lazy loading images
// Add event listeners for app interactions
document.addEventListener('DOMContentLoaded', function () {
    // 1. Animation elements
    const animateElements = document.querySelectorAll(
        '.app-card, .section-header, .about-text, .contact-info'
    );
    animateElements.forEach((el) => observer.observe(el));

    // 2. Lazy loading images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    images.forEach((img) => imageObserver.observe(img));

    // 3. Track app store clicks
    document.querySelectorAll('.btn-download').forEach((btn) => {
        btn.addEventListener('click', function () {
            const appCard = this.closest('.app-card');
            const appName = appCard.dataset.app;
            trackAppClick(appName, 'app_store_click');
        });
    });

    // 4. Track detail view clicks
    document.querySelectorAll('.btn-preview').forEach((btn) => {
        btn.addEventListener('click', function () {
            const appCard = this.closest('.app-card');
            const appName = appCard.dataset.app;
            trackAppClick(appName, 'detail_view');
        });
    });

    // 5. Load screenshots preview for app cards (只執行一次)
    loadAppCardScreenshots();
});

// Load screenshots preview in app cards
function loadAppCardScreenshots() {
    const apps = ['hkbus', 'sgbus', 'tpegarbage', 'tpebus', 'londonbus'];

    apps.forEach((appId) => {
        const screenshotsContainer = document.getElementById(
            `screenshots-${appId}`
        );
        if (!screenshotsContainer) return;

        const slider = screenshotsContainer.querySelector(
            '.screenshots-slider'
        );

        // 清空容器以防止重複載入
        slider.innerHTML = '';

        const screenshotsPath = `images/${appId.toUpperCase()}/screenshots/`;
        const commonExtensions = ['png', 'jpg', 'jpeg', 'webp'];
        const screenshots = []; // 收集所有成功載入的截圖
        let loadedCount = 0;
        let totalChecked = 0;
        const maxScreenshots = 20;

        // Try to load screenshots from 1.png, 2.png, etc.
        for (let i = 1; i <= maxScreenshots; i++) {
            for (const ext of commonExtensions) {
                totalChecked++;
                const imagePath = `${screenshotsPath}${i}.${ext}`;
                const img = new Image();

                img.onload = function () {
                    // 確保同一個編號只載入一次
                    if (!screenshots.find((s) => s.index === i)) {
                        screenshots.push({ index: i, path: imagePath });
                        loadedCount++;
                    }

                    // 當所有檢查完成後，按順序顯示截圖
                    checkAndDisplayScreenshots();
                };

                img.onerror = function () {
                    // Silent fail, continue to next image
                    checkAndDisplayScreenshots();
                };

                img.src = imagePath;
            }
        }

        function checkAndDisplayScreenshots() {
            totalChecked--;
            if (totalChecked === 0) {
                // 所有檢查完成，按照索引順序排序並顯示
                screenshots.sort((a, b) => a.index - b.index);

                screenshots.forEach((screenshot) => {
                    const screenshotDiv = document.createElement('div');
                    screenshotDiv.className = 'screenshot-preview-item';
                    screenshotDiv.innerHTML = `
                        <img src="${screenshot.path}" alt="${appId} Screenshot ${screenshot.index}" loading="lazy">
                    `;

                    // Add click event to open full detail modal
                    screenshotDiv.addEventListener('click', () => {
                        showAppDetails(appId);
                    });

                    slider.appendChild(screenshotDiv);
                });

                // If no screenshots are found, show a message
                if (loadedCount === 0) {
                    slider.innerHTML = `
                        <div class="no-screenshots-preview">
                            截圖即將更新...
                        </div>
                    `;
                }
            }
        }
    });
}

// Multi-language Support
class LanguageManager {
    constructor() {
        this.currentLang = 'zh';
        this.init();
    }

    init() {
        // Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const isChineseLang = browserLang.startsWith('zh');

        // Check localStorage for saved preference
        const savedLang = localStorage.getItem('preferred-language');

        if (savedLang) {
            this.currentLang = savedLang;
        } else {
            this.currentLang = isChineseLang ? 'zh' : 'en';
        }

        // Set initial language
        this.setLanguage(this.currentLang);

        // Setup language toggle button
        this.setupLanguageToggle();
    }

    setupLanguageToggle() {
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
        this.setLanguage(this.currentLang);
        localStorage.setItem('preferred-language', this.currentLang);
    }

    setLanguage(lang) {
        this.currentLang = lang;
        const html = document.documentElement;

        // Update html lang attribute
        html.setAttribute('lang', lang === 'zh' ? 'zh-TW' : 'en');
        html.setAttribute('data-lang', lang);

        // Update all elements with language attributes
        const elements = document.querySelectorAll('[data-zh][data-en]');
        elements.forEach((element) => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                if (element.tagName === 'META') {
                    element.setAttribute('content', text);
                } else if (element.tagName === 'TITLE') {
                    element.textContent = text;
                } else if (
                    element.tagName === 'BUTTON' ||
                    element.tagName === 'A'
                ) {
                    element.textContent = text;
                } else {
                    element.textContent = text;
                }
            }
        });

        // Update language toggle button
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            const langText = langToggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = lang === 'zh' ? 'EN' : '中文';
            }
        }

        // Update meta tags
        const metaTags = document.querySelectorAll('meta[data-zh][data-en]');
        metaTags.forEach((meta) => {
            const content = meta.getAttribute(`data-${lang}`);
            if (content) {
                meta.setAttribute('content', content);
            }
        });

        // Update title
        const title = document.querySelector('title[data-zh][data-en]');
        if (title) {
            const titleText = title.getAttribute(`data-${lang}`);
            if (titleText) {
                title.textContent = titleText;
            }
        }

        // Update no-screenshots message if it exists
        const noScreenshots = document.querySelectorAll(
            '.no-screenshots-preview'
        );
        noScreenshots.forEach((element) => {
            element.textContent =
                lang === 'zh'
                    ? '截圖即將更新...'
                    : 'Screenshots coming soon...';
        });
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    new LanguageManager();
});
