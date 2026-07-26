/* ============================================
   Erkan Taş — Personal Site
   script.js
   ============================================ */

/* ---------- Logger utility (JS logging) ---------- */
const Logger = (() => {
  const KEY = 'et_site_logs';
  const MAX = 50;

  function _read() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch (e) { return []; }
  }

  function _write(logs) {
    try { localStorage.setItem(KEY, JSON.stringify(logs.slice(-MAX))); }
    catch (e) { /* storage unavailable, ignore */ }
  }

  function log(event, details = {}) {
    const entry = {
      event,
      details,
      time: new Date().toISOString(),
      page: window.location.pathname
    };
    console.log(`[ET-LOG] ${entry.time} — ${event}`, details);
    const logs = _read();
    logs.push(entry);
    _write(logs);
  }

  function history() { return _read(); }

  return { log, history };
})();

/* ---------- i18n dictionary ---------- */
const i18n = {
  tr: {
    nav_home: "Anasayfa", nav_about: "Hakkımda", nav_experience: "Deneyim",
    nav_projects: "Projeler", nav_skills: "Yetenekler", nav_certs: "Sertifikalar", nav_hobbies: "Hobiler", nav_contact: "İletişim",
    search_placeholder: "Sitede ara...",
    hero_eyebrow: "MERHABA, BEN",
    hero_role_1: "Siyaset Bilimi ve Uluslararası İlişkiler",
    hero_role_2: "Modern Web Tasarımı",
    hero_role_3: "Profesyonel Kodlama & Yazılım",
    hero_sub: "Uluslararası ilişkiler alanındaki analitik bakış açımı, yazılım geliştirme disiplinindeki teknik yetkinlikle birleştiriyorum.",
    hero_tag: "Sürekli çözüm üreten, yenilikçi ve iş odaklı bir yaklaşımla çalışıyorum.",
    hero_cta1: "Projelerimi Gör", hero_cta2: "İletişime Geç", hero_cta_cv: "CV Görüntüle",
    about_kicker: "HAKKIMDA", about_title: "Sınırların kesiştiği yerde çalışıyorum",
    about_p1: "İnönü Üniversitesi'nde Siyaset Bilimi ve Uluslararası İlişkiler eğitimimi sürdürürken, eş zamanlı olarak Anadolu Üniversitesi'nde Web Tasarımı ve Kodlama alanında akademik ve pratik birikim edinmekteyim. Amacım, küresel meseleleri analiz etme becerimi, teknolojinin sunduğu somut çözüm yöntemleriyle disiplinli bir şekilde bütünleştirmektir.",
    about_p2: "Danışmanlık, kurumsal iletişim, topluluk yönetimi ve liderlik alanlarında edindiğim deneyimler; disiplinler arası, sorumluluk sahibi ve çözüm odaklı bir çalışma anlayışı geliştirmeme katkı sağlamıştır. Hedefim, bu birikimi uluslararası ölçekte faaliyet gösteren kurumlarda katma değer üretecek şekilde kullanmaktır.",
    about_badge1: "Analitik Düşünme", about_badge2: "Problem Çözme", about_badge3: "Takım Liderliği",
    about_badge4: "Yazılım (AI Destekli Geliştirme)", about_badge5: "İletişim",
    exp_kicker: "DENEYİM", exp_title: "Yolculuğumdan kesitler",
    exp1_title: "Danışmanlık — Diş Hastanesi",
    exp1_desc: "Bir diş hastanesinde hasta yönlendirme ve süreç danışmanlığı yaparak, müşteri ilişkileri ve operasyonel iletişim konusunda deneyim kazandım.",
    exp2_title: "İletişim Görevlisi — Fabrika",
    exp2_desc: "Fabrika ortamında iç ve dış iletişim süreçlerini yürüterek, ekipler arası koordinasyon ve hızlı problem çözme yeteneğimi geliştirdim.",
    exp3_title: "Topluluk Yönetimi — Uluslararası İlişkiler",
    exp3_desc: "Uluslararası ilişkiler alanında bir öğrenci topluluğunda görev alarak organizasyon, etkinlik yönetimi ve liderlik deneyimi edindim.",
    exp4_title: "Liderlik",
    exp4_desc: "Farklı proje ve topluluklarda ekip yönlendirme, karar alma ve hedef odaklı çalışma pratiği geliştirdim.",
    proj_kicker: "PROJELER", proj_title: "Öne çıkan çalışmalarım",
    proj1_title: "Uluslararası İşletmelerde Çoklu Kriz Çalışması",
    proj1_desc: "TÜBİTAK 2209-A kapsamında yürütülen, uluslararası işletmelerin çoklu kriz (multi-crisis) dönemlerinde geliştirdiği stratejileri inceleyen akademik araştırma projesi.",
    proj2_tag: "SOSYAL SORUMLULUK",
    proj2_desc: "Hilvanfest 2026 kapsamında yer aldığım sosyal sorumluluk projesi; toplumsal fayda odaklı organizasyon ve saha koordinasyonunda aktif rol aldım.",
    proj3_tag: "ULUSLARARASI İLİŞKİLER",
    proj3_title: "Diplomasi Hub",
    proj3_desc: "Uluslararası ilişkiler alanına odaklanan, güncel diplomatik gelişmelerin ve akademik içeriklerin bir araya getirildiği bir bilgi platformu geliştirme çalışması.",
    proj4_tag: "EĞİTİM",
    proj4_title: "İngilizce Ders Çalışma Defteri",
    proj4_desc: "Kişisel dil öğrenimi için özel olarak tasarlayıp geliştirdiğim, pedagojik hedeflere uygun kapsamlı bir İngilizce çalışma defteri projesi.",
    proj5_tag: "YAZILIM", proj5_title: "Mini Python Quiz Uygulaması", proj5_desc: "Kullanıcıların programlama bilgilerini test edebileceği, interaktif ve dinamik Python tabanlı terminal uygulaması.",
    proj6_tag: "YAZILIM & MOBİL", proj6_title: "React Native Mobil Uygulama Geliştirme", proj6_desc: "Modern mobil arayüz standartlarına uygun olarak tasarlanan, çapraz platform destekli React Native uygulama projeleri.",
    filter_all: "Tümü", filter_ir: "Uluslararası İlişkiler & Sosyal", filter_edu: "Eğitim & Teknoloji",
    blog_kicker: "YAZILARIM", blog_title: "Disiplinler arası düşünceler",
    blog1_title: "Dijital Çağda Çoklu Kriz Yönetimi",
    blog1_desc: "Giderek dijitalleşen dünyada ülkelerin ve kurumların aynı anda karşılaştığı krizleri nasıl yönetmesi gerektiğine dair kısa bir analiz.",
    blog2_title: "Açık Kaynak İstihbaratı (OSINT) ve Diplomasi",
    blog2_desc: "Halka açık verilerin ve dijital izlerin modern diplomatik karar alma süreçlerindeki giderek artan stratejik önemi.",
    blog3_title: "Siyaset Bilimciler Neden Kod Öğrenmeli?",
    blog3_desc: "Veri analizi, algoritma önyargıları ve siber güvenlik... Geleceğin siyaset bilimcileri için yazılım becerilerinin neden kritik olduğunu inceliyoruz.",
    blog_read_more: "Devamını Oku &rarr;",
    skills_kicker: "YETENEKLER", skills_title: "Teknik yetkinlikler ve dil bilgisi",
    skills_tech_title: "Teknik Yetenekler", skills_general_title: "Genel Yetkinlikler", skills_lang_title: "Dil Bilgisi",
    skill_social: "Sosyal Medya Yönetimi", skill_teamwork: "Takım Çalışması", skill_data: "Veri Analizi", skill_ai: "Yapay Zeka",
    level_intermediate: "(Orta Seviye)", level_basic: "(Temel)", level_native: "(Anadil)",
    lang_native: "Türkçe", lang_en_title: "İngilizce",
    lang_reading: "Okuma", lang_listening: "Dinleme", lang_writing: "Yazma", lang_speaking: "Konuşma",
    cert_kicker: "SERTİFİKALAR", cert_title: "Sürekli gelişim",
    cert1: "Profesyonel Atletizm Sertifikası", cert2: "Dijital Verimlilik ve Sosyal Medya",
    cert3: "Profesyonel CV Geliştirme", cert4: "Girişimcilik Temelleri",
    cert5: "AntCloud Sertifikası", cert6: "Mobil Uygulama Geliştirme",
    testi_kicker: "REFERANSLAR", testi_title: "Benimle çalışanlar ne diyor?",
    testi1_text: "\"Erkan, kriz anlarında soğukkanlılığını koruyabilen ve analitik düşünme becerisiyle hızlı çözümler üretebilen harika bir takım arkadaşı. Disiplinli çalışması projelerimize büyük değer kattı.\"",
    testi1_author: "Takım Arkadaşı", testi1_role: "Akademik Danışman",
    testi2_text: "\"Hem diplomatik iletişim dili hem de teknik konulardaki yatkınlığı onu diğerlerinden ayırıyor. Organizasyon becerisi ve sorumluluk bilinci gerçekten üst düzeyde.\"",
    testi2_author: "Furkan Çimen", testi2_role: "Proje Koordinatörü",
    testi3_text: "\"O benim her zaman desteklediğim ve her koşulda arkasında olduğum kardeşim. Disiplini, çalışkanlığı ve başarma arzusuyla her zaman gurur kaynağım olmuştur.\"",
    testi3_author: "Vedat Taş", testi3_role: "Mentör",
    hob_kicker: "HOBİLER", hob_title: "İş dışında beni ben yapanlar",
    hob1: "Spor (Gym)", hob2: "Gitar", hob3: "Kitap Okuma", hob4: "Güncel Haber Takibi & Analiz", hob5: "Fotoğraf Çekimi", hob6: "Seyahat Etmek",
    cta_title: "Web sitenizi daha profesyonel ve iş odaklı bir görünüme kavuşturmak ister misiniz?",
    cta_desc: "1–5 iş günü içinde teslim edilen, güvenilir ve deneyimli bir çalışma süreci sunuyorum.",
    cta_btn: "Hemen İletişime Geç",
    contact_kicker: "İLETİŞİM", contact_title: "Konuşalım",
    contact_address: "Tekirdağ, Ergene, Yeşiltepe Mah. 216. Sok. No:1",
    whatsapp_btn: "WhatsApp'tan Yaz",
    form_name: "Ad Soyad", form_email: "E-posta", form_message: "Mesaj", form_submit: "Gönder",
    footer_rights: "Tüm hakları saklıdır."
  },
  en: {
    nav_home: "Home", nav_about: "About", nav_experience: "Experience",
    nav_projects: "Projects", nav_skills: "Skills", nav_certs: "Certificates", nav_hobbies: "Hobbies", nav_contact: "Contact",
    search_placeholder: "Search the site...",
    hero_eyebrow: "HELLO, I'M",
    hero_role_1: "Political Science and International Relations",
    hero_role_2: "Modern Web Design",
    hero_role_3: "Professional Coding & Software",
    hero_sub: "I combine an analytical perspective in international relations with technical competence in software development.",
    hero_tag: "I work with a consistently solution-driven, innovative and business-focused approach.",
    hero_cta1: "View My Projects", hero_cta2: "Get In Touch", hero_cta_cv: "View CV",
    about_kicker: "ABOUT", about_title: "I work where boundaries intersect",
    about_p1: "I am pursuing a degree in Political Science and International Relations at İnönü University, while simultaneously building academic and practical knowledge in Web Design and Coding at Anadolu University. My goal is to integrate the ability to analyze global issues with the concrete solutions offered by technology, in a disciplined manner.",
    about_p2: "Experience in consulting, corporate communications, community management and leadership has helped me develop an interdisciplinary, responsible and solution-oriented approach to work. My goal is to apply this experience in a way that generates value for internationally operating organizations.",
    about_badge1: "Analytical Thinking", about_badge2: "Problem Solving", about_badge3: "Team Leadership",
    about_badge4: "Software (AI-assisted Development)", about_badge5: "Communication",
    exp_kicker: "EXPERIENCE", exp_title: "Milestones along the way",
    exp1_title: "Consulting — Dental Clinic",
    exp1_desc: "Provided patient guidance and process consulting at a dental clinic, gaining experience in customer relations and operational communication.",
    exp2_title: "Communications Officer — Factory",
    exp2_desc: "Managed internal and external communication processes in a factory setting, developing cross-team coordination and rapid problem-solving skills.",
    exp3_title: "Community Management — International Relations",
    exp3_desc: "Took an active role in a student community focused on international relations, gaining experience in organization, event management and leadership.",
    exp4_title: "Leadership",
    exp4_desc: "Developed skills in guiding teams, decision-making and goal-oriented work across various projects and communities.",
    proj_kicker: "PROJECTS", proj_title: "Selected work",
    proj1_title: "Multi-Crisis Study in International Businesses",
    proj1_desc: "An academic research project conducted under TÜBİTAK 2209-A, examining the strategies international businesses develop during multi-crisis periods.",
    proj2_tag: "SOCIAL RESPONSIBILITY",
    proj2_desc: "A social responsibility project I took part in under Hilvanfest 2026; actively involved in community-focused organization and field coordination.",
    proj3_tag: "INTERNATIONAL RELATIONS",
    proj3_title: "Diplomasi Hub",
    proj3_desc: "A knowledge platform focused on international relations, bringing together current diplomatic developments and academic content.",
    proj4_tag: "EDUCATION",
    proj4_title: "English Course Workbook",
    proj4_desc: "A comprehensive English workbook project designed and developed specifically for personal language learning, tailored to pedagogical goals.",
    proj5_tag: "SOFTWARE", proj5_title: "Mini Python Quiz Application", proj5_desc: "An interactive and dynamic Python-based terminal application where users can test their programming knowledge.",
    proj6_tag: "SOFTWARE & MOBILE", proj6_title: "React Native Mobile App Development", proj6_desc: "Cross-platform React Native application projects designed according to modern mobile interface standards.",
    filter_all: "All", filter_ir: "Int. Relations & Social", filter_edu: "Education & Tech",
    blog_kicker: "ARTICLES", blog_title: "Interdisciplinary thoughts",
    blog1_title: "Multi-Crisis Management in the Digital Age",
    blog1_desc: "A brief analysis of how countries and institutions should manage simultaneous crises in an increasingly digitalized world.",
    blog2_title: "Open Source Intelligence (OSINT) and Diplomacy",
    blog2_desc: "The growing strategic importance of public data and digital footprints in modern diplomatic decision-making processes.",
    blog3_title: "Why Should Political Scientists Learn to Code?",
    blog3_desc: "Data analysis, algorithmic biases, and cybersecurity... We explore why software skills are critical for future political scientists.",
    blog_read_more: "Read More &rarr;",
    skills_kicker: "SKILLS", skills_title: "Technical competencies and language proficiency",
    skills_tech_title: "Technical Skills", skills_general_title: "General Competencies", skills_lang_title: "Language Proficiency",
    skill_social: "Social Media Management", skill_teamwork: "Teamwork", skill_data: "Data Analysis", skill_ai: "Artificial Intelligence",
    level_intermediate: "(Intermediate)", level_basic: "(Basic)", level_native: "(Native)",
    lang_native: "Turkish", lang_en_title: "English",
    lang_reading: "Reading", lang_listening: "Listening", lang_writing: "Writing", lang_speaking: "Speaking",
    cert_kicker: "CERTIFICATES", cert_title: "Continuous growth",
    cert1: "Professional Athletics Certificate", cert2: "Digital Efficiency and Social Media",
    cert3: "Professional CV Development", cert4: "Fundamentals of Entrepreneurship",
    cert5: "AntCloud Certificate", cert6: "Mobile Application Development",
    testi_kicker: "TESTIMONIALS", testi_title: "What my colleagues say",
    testi1_text: "\"Erkan is a great teammate who keeps his cool during crises and produces fast solutions with his analytical thinking. His disciplined work added great value to our projects.\"",
    testi1_author: "Teammate", testi1_role: "Academic Advisor",
    testi2_text: "\"His aptitude for both diplomatic communication and technical subjects sets him apart. His organizational skills and sense of responsibility are truly high-level.\"",
    testi2_author: "Furkan Çimen", testi2_role: "Project Coordinator",
    testi3_text: "\"He is my brother whom I always support and stand behind in all circumstances. His discipline, diligence, and desire to succeed have always been a source of pride for me.\"",
    testi3_author: "Vedat Taş", testi3_role: "Mentor",
    hob_kicker: "HOBBIES", hob_title: "What I do outside of work",
    hob1: "Gym", hob2: "Guitar", hob3: "Reading", hob4: "Following & Analyzing Current News", hob5: "Photography", hob6: "Traveling",
    cta_title: "Want your website to look more professional and business-focused?",
    cta_desc: "Delivered within 1–5 business days, through a reliable and experienced process. Get in touch today.",
    cta_btn: "Get In Touch Now",
    contact_kicker: "CONTACT", contact_title: "Let's talk",
    contact_address: "Tekirdag, Ergene, Yesiltepe Mah. 216. Sok. No:1",
    whatsapp_btn: "Message on WhatsApp",
    form_name: "Full Name", form_email: "Email", form_message: "Message", form_submit: "Send",
    footer_rights: "All rights reserved."
  }
};

let currentLang = 'tr';

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang][key]) el.setAttribute('placeholder', i18n[lang][key]);
  });
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = lang === 'tr' ? 'EN' : 'TR';

  const heroRoleEl = document.getElementById('heroCycleText');
  if (heroRoleEl) {
    typeWriterIndex = 0;
    charIndex = 0;
    isDeleting = false;
  }

  Logger.log('language_switch', { lang });
}

/* ---------- Hero typewriter text ---------- */
let typeWriterIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeWriterTimeout = null;

function typeWriter() {
  const el = document.getElementById('heroCycleText');
  if (!el) return;
  const currentKey = 'hero_role_' + (typeWriterIndex + 1);
  const fullText = i18n[currentLang][currentKey];
  
  if (isDeleting) {
    el.textContent = fullText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    el.textContent = fullText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 25 : 60; // Typing is faster but smooth

  if (!isDeleting && charIndex === fullText.length) {
    typeSpeed = 2000; // Pause at the end of typing
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typeWriterIndex = (typeWriterIndex + 1) % 3;
    // Switch background when typing starts for new text
    const hero = document.querySelector('.et-hero');
    if (hero) {
      if (typeWriterIndex === 0) {
        hero.classList.remove('hero-theme-coding');
        hero.classList.add('hero-theme-politics');
      } else {
        hero.classList.remove('hero-theme-politics');
        hero.classList.add('hero-theme-coding');
      }
    }
    typeSpeed = 500; // Pause before typing new string
  }

  clearTimeout(typeWriterTimeout);
  typeWriterTimeout = setTimeout(typeWriter, typeSpeed);
}

/* ---------- Scroll reveal animations ---------- */
function initScrollReveal() {
  const groups = [
    document.querySelectorAll('.et-kicker'),
    document.querySelectorAll('.et-h2'),
    document.querySelectorAll('.et-p'),
    document.querySelectorAll('.et-card'),
    document.querySelectorAll('.et-cert-card'),
    document.querySelectorAll('.et-hobby'),
    document.querySelectorAll('.et-tl-item'),
    document.querySelectorAll('.et-avatar'),
    document.querySelectorAll('.et-quote-panel'),
    document.querySelectorAll('.accordion-item'),
    document.querySelectorAll('.et-badges'),
    document.querySelectorAll('.et-subheading'),
    document.querySelectorAll('.et-lang-en-title'),
    document.querySelectorAll('.et-contact-list'),
    document.querySelectorAll('.et-contact-form'),
    document.querySelectorAll('.et-cta-band h2, .et-cta-band p, .et-cta-band .btn')
  ];

  groups.forEach(nodeList => {
    nodeList.forEach((el, i) => {
      el.classList.add('et-reveal');
      el.style.transitionDelay = Math.min(i * 80, 320) + 'ms';
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('et-in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.et-reveal').forEach(el => observer.observe(el));
}

/* ---------- Skill bar animation on scroll ---------- */
function initSkillBars() {
  const bars = document.querySelectorAll('.et-skill-bar');
  bars.forEach((bar, index) => {
    const level = bar.getAttribute('data-level');
    bar.style.setProperty('--fill', level);
    bar.style.setProperty('--stagger', index.toString());
  });

  function animateCountUp(el, targetStr, isPercent) {
    const duration = 1200;
    const start = performance.now();
    const end = parseInt(targetStr, 10);
    if (isNaN(end)) return; // skip non-numeric like B1, A2
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.round(end * eased);
      el.textContent = isPercent ? current + '%' : current;
      if (progress < 1) requestAnimationFrame(step);
    }
    el.textContent = '0%';
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const bar = entry.target;
      if (entry.isIntersecting) {
        const stagger = parseInt(bar.style.getPropertyValue('--stagger'), 10) || 0;
        setTimeout(() => {
          bar.classList.add('et-in-view');
          const pctEl = bar.querySelector('.et-skill-pct');
          if (pctEl) {
            const target = bar.getAttribute('data-level');
            const customText = bar.getAttribute('data-text');
            if (customText) {
              pctEl.textContent = customText;
            } else {
              animateCountUp(pctEl, target, true);
            }
          }
        }, stagger * 120);
      } else {
        bar.classList.remove('et-in-view');
        const pctEl = bar.querySelector('.et-skill-pct');
        const target = bar.getAttribute('data-level');
        if (pctEl && !isNaN(parseInt(target, 10))) {
          pctEl.textContent = '0%';
        }
      }
    });
  }, { threshold: 0.1 });
  bars.forEach(bar => observer.observe(bar));
}

/* ---------- Search ---------- */
function buildSearchIndex() {
  const sections = document.querySelectorAll('main section[id], header[id]');
  const index = [];
  sections.forEach(sec => {
    const titleEl = sec.querySelector('h1, h2, h3');
    index.push({
      id: sec.id,
      title: titleEl ? titleEl.textContent.trim() : sec.id,
      text: sec.textContent.toLowerCase()
    });
  });
  return index;
}

function runSearch(query) {
  const resultsBox = document.getElementById('searchResults');
  resultsBox.innerHTML = '';
  const q = query.trim().toLowerCase();
  if (!q) { resultsBox.classList.remove('show'); return; }

  const index = buildSearchIndex();
  const matches = index.filter(item => item.text.includes(q));

  if (matches.length === 0) {
    resultsBox.innerHTML = `<div class="et-no-result">${currentLang === 'tr' ? 'Sonuç bulunamadı' : 'No results found'}</div>`;
  } else {
    matches.forEach(m => {
      const a = document.createElement('a');
      a.href = `#${m.id}`;
      a.textContent = m.title;
      a.addEventListener('click', () => {
        resultsBox.classList.remove('show');
        document.getElementById('siteSearchInput').value = '';
        Logger.log('search_result_click', { section: m.id, query: q });
        setTimeout(() => {
          const target = document.getElementById(m.id);
          target.classList.add('et-search-highlight');
          setTimeout(() => target.classList.remove('et-search-highlight'), 2000);
        }, 400);
      });
      resultsBox.appendChild(a);
    });
  }
  resultsBox.classList.add('show');
  Logger.log('search', { query: q, resultCount: matches.length });
}

/* ---------- Navbar scroll state + active link + scroll progress ---------- */
function initNavScrollSpy() {
  const navLinks = document.querySelectorAll('.et-nav-links .nav-link');
  const sections = Array.from(navLinks).map(l => document.querySelector(l.getAttribute('href')));
  const progressBar = document.getElementById('progressBar');

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('mainNav');
    navbar.style.boxShadow = window.scrollY > 20 ? '0 6px 24px rgba(0,0,0,.35)' : 'none';

    let currentIndex = 0;
    sections.forEach((sec, i) => {
      if (sec && window.scrollY >= sec.offsetTop - 140) currentIndex = i;
    });
    navLinks.forEach((l, i) => l.classList.toggle('active', i === currentIndex));

    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
    }
  }, { passive: true });
}

/* ---------- Hero 3D Particle Field (Three.js) ---------- */
function initHeroCanvas() {
  if (window.innerWidth <= 1024) return;
  const container = document.querySelector('.et-hero-bg');
  const oldCanvas = document.getElementById('heroCanvas');
  if (oldCanvas) oldCanvas.remove();
  
  if (typeof THREE === 'undefined' || !container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.inset = '0';
  renderer.domElement.style.zIndex = '0';
  container.insertBefore(renderer.domElement, container.firstChild);
  
  const geometry = new THREE.BufferGeometry();
  const particlesCount = window.innerWidth < 768 ? 400 : 1200;
  const posArray = new Float32Array(particlesCount * 3);
  
  for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 12;
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  // Custom glowing material matching the original Teal/Blue vibe
  const material = new THREE.PointsMaterial({
    size: 0.04,
    color: 0x2DD4BF,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });
  
  const particlesMesh = new THREE.Points(geometry, material);
  scene.add(particlesMesh);
  camera.position.z = 4;
  
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;
  
  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
  });
  
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();
    
    particlesMesh.rotation.y = elapsedTime * 0.04;
    particlesMesh.rotation.x = elapsedTime * 0.02;
    
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;
    particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
    particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);
    
    renderer.render(scene, camera);
  }
  animate();
  
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}


/* ---------- VanillaTilt 3D Cards ---------- */
function initVanillaTilt() {
  if (window.innerWidth <= 1024) return;
  if (typeof VanillaTilt === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cards = document.querySelectorAll('.et-card, .et-cert-card');
  VanillaTilt.init(cards, {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.15,
    scale: 1.02
  });

  // 3D tilt on quote panel and hero photo
  const heroItems = document.querySelectorAll('.et-quote-panel, .et-hero-photo img');
  VanillaTilt.init(heroItems, {
    max: 15,
    speed: 300,
    glare: true,
    "max-glare": 0.2,
    scale: 1.05,
    perspective: 800
  });
}

/* ---------- Hero parallax on mouse move (subtle depth) ---------- */
function initHeroParallax() {
  if (window.innerWidth <= 1024) return;
  const hero = document.getElementById('home');
  const heroContent = document.querySelector('.et-hero-content');
  const parallaxLayers = document.querySelectorAll('.et-bg-parallax, .et-bg-parallax-alt');
  if (!hero || parallaxLayers.length === 0 || window.matchMedia('(hover: none)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  hero.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / hero.offsetHeight - 0.5) * 2;
    parallaxLayers.forEach((layer, idx) => {
       const speed = idx === 0 ? 12 : 24; 
       layer.style.transform = `translate(${x * speed}px, ${y * speed * 0.8}px)`;
    });
  }, { passive: true });
}

/* Removed redundant 3D photo init since VanillaTilt now handles it */

/* ---------- Dark / light theme toggle ---------- */
let currentTheme = 'dark';

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem('et_theme', theme); } catch (e) { /* storage unavailable */ }
  const icon = document.querySelector('#themeToggle i');
  if (icon) icon.className = theme === 'light' ? 'bi bi-moon-stars' : 'bi bi-sun';
  Logger.log('theme_switch', { theme });
}

function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  let saved = null;
  try { saved = localStorage.getItem('et_theme'); } catch (e) { /* ignore */ }
  const initial = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  currentTheme = initial;
  document.documentElement.setAttribute('data-theme', initial);
  const icon = document.querySelector('#themeToggle i');
  if (icon) icon.className = initial === 'light' ? 'bi bi-moon-stars' : 'bi bi-sun';

  if (btn) btn.addEventListener('click', (e) => {
    e.preventDefault();
    const next = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(next);
  });
}

/* ---------- FAQ accordion logging ---------- */
function initFaqLogging() {
  document.querySelectorAll('#faqAccordion .accordion-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const question = btn.textContent.trim();
      Logger.log('faq_toggle', { question });
    });
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  Logger.log('page_view');

  initThemeToggle();
  document.getElementById('year').textContent = new Date().getFullYear();

  applyLanguage('tr');
  const langToggleBtn = document.getElementById('langToggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      applyLanguage(currentLang === 'tr' ? 'en' : 'tr');
    });
  }

  const searchForm = document.getElementById('siteSearchForm');
  const searchInput = document.getElementById('siteSearchInput');
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      runSearch(searchInput.value);
    });
    searchInput.addEventListener('input', () => runSearch(searchInput.value));
  }
  document.addEventListener('click', e => {
    if (!e.target.closest('.et-search') && !e.target.closest('.et-search-results')) {
      const res = document.getElementById('searchResults');
      if (res) res.classList.remove('show');
    }
  });

  initNavScrollSpy();
  
  // Defer heavy non-critical initializations to unblock main thread
  setTimeout(() => {
    try { initHeroCanvas(); } catch(e){}
    try { initHeroParallax(); } catch(e){}
    try { initFaqLogging(); } catch(e){}
    try { initScrollReveal(); } catch(e){}
    try { initSkillBars(); } catch(e){}
    try { initVanillaTilt(); } catch(e){}
  }, 500);
  try { typeWriter(); } catch(e){}
  try { initProjectFilters(); } catch(e){}

  function initProjectFilters() {
    const btns = document.querySelectorAll('.et-filter-btn');
    const items = document.querySelectorAll('.et-project-item');
    if(!btns.length) return;
    
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        items.forEach(item => {
          if(filter === 'all' || item.getAttribute('data-category') === filter) {
            item.classList.remove('hidden');
            setTimeout(() => item.style.opacity = '1', 50);
          } else {
            item.style.opacity = '0';
            setTimeout(() => item.classList.add('hidden'), 400); // match transition
          }
        });
      });
    });
  }

  // Close mobile menu after clicking a link
  document.querySelectorAll('.et-nav-links .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      Logger.log('nav_click', { target: link.getAttribute('href') });
      const collapse = document.getElementById('navContent');
      if (collapse && collapse.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(collapse).hide();
      }
    });
  });

  // WhatsApp click logging
  const whatsappBtn = document.querySelector('.et-whatsapp-btn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      Logger.log('whatsapp_click');
    });
  }

  // Contact form handling with Formspree AJAX
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        Logger.log('contact_form_invalid');
        return;
      }

      if (status) status.textContent = currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...';

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          Logger.log('contact_form_success');
          if (status) status.textContent = currentLang === 'tr' ? 'Mesajınız başarıyla gönderildi, teşekkürler!' : 'Message sent successfully, thank you!';
          form.reset();
        } else {
          Logger.log('contact_form_error', { status: response.status });
          if (status) status.textContent = currentLang === 'tr' ? 'Form gönderilemedi (Formspree ID\'nizi kontrol edin).' : 'Failed to send (Check your Formspree ID).';
        }
      } catch (error) {
        Logger.log('contact_form_network_error', { error: error.message });
        if (status) status.textContent = currentLang === 'tr' ? 'Ağ hatası oluştu. Lütfen tekrar deneyin.' : 'Network error occurred. Please try again.';
      }

      setTimeout(() => { if (status) status.textContent = ''; }, 6000);
    });
  }
});

// 1. Preloader
window.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('et-preloader');
  if (preloader) {
    // Keep delay short (500ms) to ensure FCP passes for Lighthouse but human sees it
    setTimeout(() => {
      preloader.classList.add('hidden');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500); 
    }, 500); 
  }
});

// 2. Scroll Progress & 3. Back To Top
window.addEventListener('scroll', () => {
  // Progress Bar
  const scrollProgress = document.getElementById('et-scroll-progress');
  if (scrollProgress) {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercentage + '%';
  }

  // Back To Top Button
  const bttBtn = document.getElementById('et-btt');
  if (bttBtn) {
    if (window.scrollY > 500) {
      bttBtn.classList.add('show');
    } else {
      bttBtn.classList.remove('show');
    }
  }
});

const bttBtnElement = document.getElementById('et-btt');
if (bttBtnElement) {
  bttBtnElement.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============ INTERACTIVE TERMINAL ============ */
const termInput = document.getElementById('etTerminalInput');
const termBody = document.getElementById('etTerminalBody');
if (termInput && termBody) {
  termInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const val = this.value.trim().toLowerCase();
      this.value = '';
      
      const cmdLine = document.createElement('div');
      cmdLine.innerHTML = `<span class="et-term-prompt">visitor:~$</span> ${val}`;
      cmdLine.style.marginBottom = '5px';
      
      const response = document.createElement('p');
      response.className = 'et-term-line';
      
      if (val === 'help') {
        response.innerHTML = 'Available commands: <span class="et-term-cmd">whoami</span>, <span class="et-term-cmd">skills</span>, <span class="et-term-cmd">contact</span>, <span class="et-term-cmd">play snake</span>, <span class="et-term-cmd">clear</span>';
      } else if (val === 'whoami') {
        response.innerHTML = currentLang === 'tr' ? 'Erkan Taş. Siyaset Bilimi ile Yazılımı birleştiren vizyoner geliştirici.' : 'Erkan Taş. A visionary developer merging Politics with Code.';
      } else if (val === 'skills') {
        response.innerHTML = 'Python, React Native, SQL, HTML/CSS, Diplomacy, Analytical Thinking.';
      } else if (val === 'contact') {
        response.innerHTML = 'Email: <a href="mailto:erkan.tas.dev@gmail.com" style="color:var(--et-amber)">erkan.tas.dev@gmail.com</a>';
      } else if (val === 'clear') {
        termBody.innerHTML = '';
        termBody.appendChild(this.parentElement);
        this.focus();
        return;
      } else if (val === 'play snake') {
        startSnakeGame(this.parentElement);
        return;
      } else if (val !== '') {
        response.innerHTML = `command not found: ${val}`;
      }
      
      this.parentElement.before(cmdLine);
      if(val !== '') this.parentElement.before(response);
      termBody.scrollTop = termBody.scrollHeight;
    }
  });
}

function startSnakeGame(inputLine) {
  inputLine.style.display = 'none'; // hide input
  const termBody = document.getElementById('etTerminalBody');
  const canvas = document.createElement('canvas');
  canvas.width = 300; canvas.height = 150;
  canvas.style.display = 'block';
  canvas.style.margin = '10px auto';
  canvas.style.background = '#000';
  canvas.style.border = '1px solid var(--et-teal)';
  termBody.appendChild(canvas);
  termBody.scrollTop = termBody.scrollHeight;

  const ctx = canvas.getContext('2d');
  let snake = [{x: 10, y: 10}];
  let food = {x: 15, y: 5};
  let dx = 1; let dy = 0;
  let score = 0;
  let gameLoop;

  const helpText = document.createElement('p');
  helpText.className = 'et-term-line';
  helpText.style.textAlign = 'center';
  helpText.style.fontSize = '11px';
  helpText.innerHTML = 'Use Arrow Keys. Press <span class="et-term-cmd">ESC</span> to exit.';
  termBody.appendChild(helpText);

  function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // snake
    ctx.fillStyle = 'var(--et-teal)';
    snake.forEach(part => ctx.fillRect(part.x*10, part.y*10, 9, 9));
    
    // food
    ctx.fillStyle = 'var(--et-amber)';
    ctx.fillRect(food.x*10, food.y*10, 9, 9);
    
    // score
    ctx.fillStyle = '#fff';
    ctx.font = '10px monospace';
    ctx.fillText('Score: ' + score, 5, 12);
  }

  function update() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    
    // wall collision
    if(head.x < 0 || head.x >= 30 || head.y < 0 || head.y >= 15 || snake.some(p => p.x === head.x && p.y === head.y)) {
      clearInterval(gameLoop);
      ctx.fillStyle = 'red';
      ctx.fillText('GAME OVER!', 120, 75);
      setTimeout(exitGame, 2000);
      return;
    }
    
    snake.unshift(head);
    if(head.x === food.x && head.y === food.y) {
      score += 10;
      food = {x: Math.floor(Math.random()*29), y: Math.floor(Math.random()*14)};
    } else {
      snake.pop();
    }
    draw();
  }

  function handleKey(e) {
    if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Escape'].includes(e.key)) {
      e.preventDefault();
      if(e.key === 'ArrowLeft' && dx !== 1) { dx = -1; dy = 0; }
      else if(e.key === 'ArrowUp' && dy !== 1) { dx = 0; dy = -1; }
      else if(e.key === 'ArrowRight' && dx !== -1) { dx = 1; dy = 0; }
      else if(e.key === 'ArrowDown' && dy !== -1) { dx = 0; dy = 1; }
      else if(e.key === 'Escape') exitGame();
    }
  }
  
  window.addEventListener('keydown', handleKey);

  function exitGame() {
    clearInterval(gameLoop);
    window.removeEventListener('keydown', handleKey);
    canvas.remove();
    helpText.remove();
    inputLine.style.display = 'flex';
    document.getElementById('etTerminalInput').focus();
    
    const exitMsg = document.createElement('p');
    exitMsg.className = 'et-term-line';
    exitMsg.innerHTML = `Game exited. Score: ${score}`;
    inputLine.before(exitMsg);
  }

  gameLoop = setInterval(update, 100);
}



/* ============ LIVE STATUS CLOCK ============ */
const clockEl = document.getElementById('liveClock');
if (clockEl) {
  setInterval(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('tr-TR', { timeZone: 'Europe/Istanbul', hour: '2-digit', minute: '2-digit' });
    clockEl.textContent = timeString;
  }, 1000);
}

/* ============ COMMAND PALETTE ============ */
const cmdOverlay = document.getElementById('cmdPaletteOverlay');
const cmdInput = document.getElementById('cmdPaletteInput');
const cmdResults = document.getElementById('cmdPaletteResults');
const pages = [
  { name: 'Home / Ana Sayfa', icon: 'bi-house', link: '#home' },
  { name: 'About / Hakkımda', icon: 'bi-person', link: '#about' },
  { name: 'Projects / Projeler', icon: 'bi-code-slash', link: '#projects' },
  { name: 'Skills / Yetenekler', icon: 'bi-lightning', link: '#skills' },
  { name: 'Blog / Yazılar', icon: 'bi-journal-text', link: '#blog' },
  { name: 'Contact / İletişim', icon: 'bi-envelope', link: '#contact' },
  { name: 'Download CV', icon: 'bi-file-earmark-pdf', link: 'assets/ErkanTas_CV.html', target: '_blank' }
];

function renderCmdResults(query = '') {
  if (!cmdResults) return;
  cmdResults.innerHTML = '';
  const filtered = pages.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  filtered.forEach(p => {
    const div = document.createElement('div');
    div.className = 'et-cmd-item';
    div.innerHTML = `<i class="bi ${p.icon}"></i> <span>${p.name}</span>`;
    div.onclick = () => {
      cmdOverlay.classList.remove('active');
      if (p.target) window.open(p.link, '_blank');
      else window.location.href = p.link;
    };
    cmdResults.appendChild(div);
  });
}

window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
    e.preventDefault();
    if (cmdOverlay) {
      cmdOverlay.classList.toggle('active');
      if (cmdOverlay.classList.contains('active')) {
        renderCmdResults();
        setTimeout(() => cmdInput.focus(), 100);
      }
    }
  }
  if (e.key === 'Escape' && cmdOverlay && cmdOverlay.classList.contains('active')) {
    cmdOverlay.classList.remove('active');
  }
});

if (cmdInput) {
  cmdInput.addEventListener('input', (e) => renderCmdResults(e.target.value));
}
if (cmdOverlay) {
  cmdOverlay.addEventListener('click', (e) => {
    if (e.target === cmdOverlay) cmdOverlay.classList.remove('active');
  });
}

/* ============ MATRIX EASTER EGG ============ */
let konamiCode = '';
const secretWord = 'python';
window.addEventListener('keydown', (e) => {
  if (e.key.length === 1) { // Only track printable characters
    konamiCode += e.key.toLowerCase();
    if (konamiCode.length > secretWord.length) {
      konamiCode = konamiCode.substring(1);
    }
    if (konamiCode === secretWord) {
      startMatrix();
      konamiCode = ''; 
    }
  }
});

function startMatrix() {
  if (window.innerWidth <= 1024) return;
  const canvas = document.getElementById('matrixCanvas');
  if (!canvas) return;
  canvas.classList.add('active');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const drops = [];
  for (let x = 0; x < columns; x++) drops[x] = 1;

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#2DD4BF';
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  
  const interval = setInterval(draw, 33);
  
  setTimeout(() => {
    clearInterval(interval);
    canvas.style.opacity = '0';
    setTimeout(() => {
      canvas.classList.remove('active');
      canvas.style.opacity = '';
    }, 2000);
  }, 8000);
}
