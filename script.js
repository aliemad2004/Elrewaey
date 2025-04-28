// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuButton.classList.toggle('active');
});

// Navbar Scroll Effect
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.classList.remove('scrolled');
        return;
    }
    
    if (currentScroll > lastScroll && !nav.classList.contains('scrolled')) {
        nav.classList.add('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth Scroll
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
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                mobileMenuButton.classList.remove('active');
            }
        }
    });
});

// إضافة خاصية التمرير السلس عند الضغط على عناصر النافبار
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // منع السلوك الافتراضي للرابط
        const targetId = this.getAttribute('href'); // الحصول على الـ ID الخاص بالقسم
        const targetSection = document.querySelector(targetId); // تحديد القسم
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // التمرير السلس
        }
    });
});

// Book Filter
const filterButtons = document.querySelectorAll('.filter-button');
const bookCards = document.querySelectorAll('.book-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.textContent.trim();

        bookCards.forEach(card => {
            if (category === 'الكل' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // تفعيل الزر النشط
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Form Validation
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message }),
        });

        const result = await response.json();
        alert(result.message);
        contactForm.reset();
    } catch (error) {
        console.error(error);
        alert('حدث خطأ أثناء إرسال الرسالة.');
    }
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = newsletterForm.querySelector('input').value;

    try {
        const response = await fetch('http://localhost:5000/api/newsletter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        const result = await response.json();
        alert(result.message);
        newsletterForm.reset();
    } catch (error) {
        console.error(error);
        alert('حدث خطأ أثناء الاشتراك.');
    }
});

// Add animation classes on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-card, .service-card, .book-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// إظهار وإخفاء زر الرجوع للأعلى
const scrollToTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // يظهر الزر بعد التمرير لمسافة 300px
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// التمرير إلى قسم الـ Hero عند الضغط على الزر
scrollToTopButton.addEventListener('click', () => {
    document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
});

// Reveal sections on scroll
const sections = document.querySelectorAll('section');

const revealSection = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) { // إذا كان القسم داخل نافذة العرض
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealSection);
revealSection(); // استدعاء الوظيفة عند تحميل الصفحة

// Google Maps API
function initMap() {
    const location = { lat: 24.7136, lng: 46.6753 }; // موقع الرياض كمثال
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}