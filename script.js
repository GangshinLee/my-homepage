/**
 * Dohyun Kim Portfolio - Interactive Logic & UI Interactions
 * Pure Vanilla JavaScript (Modern ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. DOM Elements Selection
  // --------------------------------------------------------------------------
  const siteHeader = document.getElementById('site-header');
  const scrollProgressBar = document.getElementById('scroll-progress');
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('back-to-top');

  // Publications & BibTeX
  const filterButtons = document.querySelectorAll('.filter-btn');
  const pubCards = document.querySelectorAll('.pub-card');
  const abstractToggles = document.querySelectorAll('.toggle-abstract-btn');
  const bibtexButtons = document.querySelectorAll('.bibtex-btn');
  const bibtexModal = document.getElementById('bibtex-modal');
  const bibtexCodeContent = document.getElementById('bibtex-code-content');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalCloseActionBtn = document.getElementById('modal-close-action-btn');
  const modalCopyBtn = document.getElementById('modal-copy-btn');

  // Contact & Form Elements
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const charCountEl = document.getElementById('char-count');
  const messageInput = document.getElementById('inquiry-message');
  const copyEmailHeroBtn = document.getElementById('copy-email-hero-btn');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const cvDownloadBtn = document.getElementById('cv-download-btn');
  const toastContainer = document.getElementById('toast-container');

  let activeBibtex = '';

  // --------------------------------------------------------------------------
  // 2. Global Toast Notification Helper
  // --------------------------------------------------------------------------
  window.toast = function (message, type = 'success', duration = 3500) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconClass = 'fa-solid fa-circle-check';
    if (type === 'info') iconClass = 'fa-solid fa-circle-info';
    if (type === 'error') iconClass = 'fa-solid fa-triangle-exclamation';

    toast.innerHTML = `
      <i class="${iconClass} toast-icon"></i>
      <span class="toast-message">${message}</span>
      <button class="toast-close" aria-label="닫기">&times;</button>
    `;

    toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    const closeToast = () => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentElement) {
          toast.parentElement.removeChild(toast);
        }
      }, 400);
    };

    toast.querySelector('.toast-close').addEventListener('click', closeToast);
    setTimeout(closeToast, duration);
  };

  // --------------------------------------------------------------------------
  // 3. Scroll Progress & Header Scrolled State
  // --------------------------------------------------------------------------
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / (docHeight || 1)) * 100;

    // Progress bar
    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }

    // Header styling
    if (siteHeader) {
      if (scrollTop > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollTop > 450) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0.7';
      }
    }

    // Scrollspy for Navigation Highlighting
    let currentSectionId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --------------------------------------------------------------------------
  // 4. Mobile Drawer Navigation
  // --------------------------------------------------------------------------
  if (mobileToggleBtn && mobileNav) {
    const toggleMobileMenu = () => {
      const isOpen = mobileNav.classList.contains('open');
      if (isOpen) {
        mobileNav.classList.remove('open');
        mobileToggleBtn.classList.remove('active');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      } else {
        mobileNav.classList.add('open');
        mobileToggleBtn.classList.add('active');
        mobileToggleBtn.setAttribute('aria-expanded', 'true');
        mobileNav.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    };

    mobileToggleBtn.addEventListener('click', toggleMobileMenu);

    // Close mobile nav when clicking any link
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (mobileNav.classList.contains('open')) {
          toggleMobileMenu();
        }
      });
    });

    // Close on resize if expanding past mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && mobileNav.classList.contains('open')) {
        toggleMobileMenu();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. Back to Top Smooth Scroll
  // --------------------------------------------------------------------------
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. Publications Filter Tabs
  // --------------------------------------------------------------------------
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      pubCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 7. Publication Abstract Accordion
  // --------------------------------------------------------------------------
  abstractToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const targetId = toggle.getAttribute('data-target');
      const abstractEl = document.getElementById(targetId);
      const isOpen = toggle.classList.contains('open');

      if (isOpen) {
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        if (abstractEl) {
          abstractEl.classList.remove('open');
          abstractEl.setAttribute('aria-hidden', 'true');
        }
        toggle.querySelector('span').textContent = '초록(Abstract) 보기';
      } else {
        toggle.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        if (abstractEl) {
          abstractEl.classList.add('open');
          abstractEl.setAttribute('aria-hidden', 'false');
        }
        toggle.querySelector('span').textContent = '초록(Abstract) 접기';
      }
    });
  });

  // --------------------------------------------------------------------------
  // 8. BibTeX Modal & Copy Feature
  // --------------------------------------------------------------------------
  const openBibtexModal = (bibtexText) => {
    activeBibtex = bibtexText.trim();
    if (bibtexCodeContent) {
      bibtexCodeContent.textContent = activeBibtex;
    }
    if (bibtexModal) {
      bibtexModal.classList.add('open');
      bibtexModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeBibtexModal = () => {
    if (bibtexModal) {
      bibtexModal.classList.remove('open');
      bibtexModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  bibtexButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const bibtex = btn.getAttribute('data-bibtex');
      if (bibtex) {
        openBibtexModal(bibtex);
      }
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeBibtexModal);
  if (modalCloseActionBtn) modalCloseActionBtn.addEventListener('click', closeBibtexModal);

  // Close modal when clicking backdrop
  if (bibtexModal) {
    bibtexModal.addEventListener('click', (e) => {
      if (e.target === bibtexModal) {
        closeBibtexModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bibtexModal && bibtexModal.classList.contains('open')) {
      closeBibtexModal();
    }
  });

  // Copy BibTeX to clipboard
  const copyToClipboard = async (text, successMsg) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for non-https or older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      window.toast(successMsg, 'success');
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
      window.toast('클립보드 복사에 실패했습니다.', 'error');
    }
  };

  if (modalCopyBtn) {
    modalCopyBtn.addEventListener('click', () => {
      if (activeBibtex) {
        copyToClipboard(activeBibtex, 'BibTeX 인용 정보가 클립보드에 복사되었습니다!');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 9. Email Copy Buttons
  // --------------------------------------------------------------------------
  const emailAddress = 'dohyun.kim.research@example.com';

  if (copyEmailHeroBtn) {
    copyEmailHeroBtn.addEventListener('click', () => {
      copyToClipboard(emailAddress, `이메일 주소(${emailAddress})가 복사되었습니다.`);
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyToClipboard(emailAddress, `이메일 주소(${emailAddress})가 복사되었습니다.`);
    });
  }

  // --------------------------------------------------------------------------
  // 10. CV Download Simulation
  // --------------------------------------------------------------------------
  if (cvDownloadBtn) {
    cvDownloadBtn.addEventListener('click', () => {
      window.toast('최신 이력서(CV) PDF 다운로드가 준비 중입니다. 문의 폼으로 요청해 주시면 바로 송부드립니다.', 'info', 4500);
    });
  }

  // --------------------------------------------------------------------------
  // 11. Contact Form Real-time Validation & Interactive Submission
  // --------------------------------------------------------------------------
  if (messageInput && charCountEl) {
    messageInput.addEventListener('input', () => {
      const len = messageInput.value.length;
      charCountEl.textContent = len;
      if (len > 1000) {
        charCountEl.style.color = '#f43f5e';
      } else {
        charCountEl.style.color = '';
      }
    });
  }

  if (contactForm) {
    const validateField = (inputEl, errorId, condition) => {
      const parentGroup = inputEl.closest('.form-group') || inputEl.closest('.form-consent');
      if (!condition) {
        if (parentGroup) parentGroup.classList.add('has-error');
        return false;
      } else {
        if (parentGroup) parentGroup.classList.remove('has-error');
        return true;
      }
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Remove errors on input
    contactForm.querySelectorAll('.form-input, #consent-check').forEach((element) => {
      element.addEventListener('input', () => {
        const parentGroup = element.closest('.form-group') || element.closest('.form-consent');
        if (parentGroup) parentGroup.classList.remove('has-error');
      });
      element.addEventListener('change', () => {
        const parentGroup = element.closest('.form-group') || element.closest('.form-consent');
        if (parentGroup) parentGroup.classList.remove('has-error');
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('sender-name');
      const emailInput = document.getElementById('sender-email');
      const typeSelect = document.getElementById('inquiry-type');
      const subjectInput = document.getElementById('inquiry-subject');
      const consentCheck = document.getElementById('consent-check');

      let isValid = true;

      // Validate Name
      if (!validateField(nameInput, 'name-error', nameInput.value.trim().length >= 2)) {
        isValid = false;
      }

      // Validate Email
      if (!validateField(emailInput, 'email-error', emailRegex.test(emailInput.value.trim()))) {
        isValid = false;
      }

      // Validate Type
      if (!validateField(typeSelect, 'type-error', typeSelect.value !== '')) {
        isValid = false;
      }

      // Validate Subject
      if (!validateField(subjectInput, 'subject-error', subjectInput.value.trim().length >= 2)) {
        isValid = false;
      }

      // Validate Message
      if (!validateField(messageInput, 'message-error', messageInput.value.trim().length >= 10)) {
        isValid = false;
      }

      // Validate Consent
      if (!validateField(consentCheck, 'consent-error', consentCheck.checked)) {
        isValid = false;
      }

      if (!isValid) {
        window.toast('입력하신 내용 중 확인이 필요한 항목이 있습니다.', 'error');
        return;
      }

      // Simulate asynchronous form submission
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;

        // Reset Form
        contactForm.reset();
        if (charCountEl) charCountEl.textContent = '0';

        // Success Notification
        window.toast(`감사합니다, ${nameInput.value.trim()}님! 문의 메시지가 성공적으로 전송되었습니다. 24시간 내에 회신드리겠습니다.`, 'success', 5000);
      }, 1300);
    });
  }

  // --------------------------------------------------------------------------
  // 12. Reveal Elements on Scroll (Intersection Observer)
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll(
    '.timeline-item, .pub-card, .award-card, .about-card, .contact-info-card, .contact-form-wrapper'
  );

  revealElements.forEach((el) => el.classList.add('reveal-on-scroll'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach((el) => el.classList.add('revealed'));
  }
});
