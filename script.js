document.addEventListener("DOMContentLoaded", () => {

  /* ─────────────────────────────────────────────
   * 1. NAVBAR — Scroll Background & Active Link
   * ───────────────────────────────────────────── */
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");

  const handleNavScroll = () => {
    // Add scrolled class for backdrop blur
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Highlight active nav link based on scroll position
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleNavScroll, { passive: true });
  handleNavScroll(); // run once on load


  /* ─────────────────────────────────────────────
   * 2. MOBILE MENU — Hamburger Toggle
   * ───────────────────────────────────────────── */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMobileMenu = () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "";
  };

  hamburger.addEventListener("click", toggleMobileMenu);

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });


  /* ─────────────────────────────────────────────
   * 3. SMOOTH SCROLL — For anchor links
   * ───────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });


  /* ─────────────────────────────────────────────
   * 4. SCROLL REVEAL — IntersectionObserver
   * ───────────────────────────────────────────── */
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          revealObserver.unobserve(entry.target); // only animate once
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));


  /* ─────────────────────────────────────────────
   * 5. STAT COUNTER — Animated number counting
   * ───────────────────────────────────────────── */
  const statNumbers = document.querySelectorAll(".stat-number[data-count]");

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const duration = 1500; // ms
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((el) => statObserver.observe(el));


  /* ─────────────────────────────────────────────
   * 6. SKILL CIRCLES — Animate conic-gradient
   * ───────────────────────────────────────────── */
  const skillCircles = document.querySelectorAll(".skill-circle");

  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const circle = entry.target;
          const targetPercent = parseInt(circle.style.getPropertyValue("--percent"), 10);
          let currentPercent = 0;
          const duration = 1200;
          const startTime = performance.now();

          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            currentPercent = Math.round(targetPercent * eased);
            circle.style.setProperty("--percent", currentPercent);
            circle.querySelector(".skill-value").textContent = currentPercent + "%";

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          // Start from 0
          circle.style.setProperty("--percent", 0);
          circle.querySelector(".skill-value").textContent = "0%";
          requestAnimationFrame(animate);

          skillObserver.unobserve(circle);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillCircles.forEach((el) => skillObserver.observe(el));


  /* ─────────────────────────────────────────────
   * 7. PORTFOLIO FILTER — Category filtering
   * ───────────────────────────────────────────── */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioCards = document.querySelectorAll(".portfolio-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      portfolioCards.forEach((card, index) => {
        const category = card.getAttribute("data-category");

        if (filterValue === "All" || category === filterValue) {
          card.classList.remove("hidden");
          card.classList.add("show");
          card.style.animationDelay = `${index * 0.08}s`;
        } else {
          card.classList.remove("show");
          card.classList.add("hidden");
        }
      });
    });
  });


  /* ─────────────────────────────────────────────
   * 8. CONTACT FORM — Submit via mailto
   * ───────────────────────────────────────────── */
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const service = formData.get("service");
      const timeline = formData.get("timeline");
      const details = formData.get("details");

      const subject = encodeURIComponent(`[Portfolio] ${service} — from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nTimeline: ${timeline}\n\nProject Details:\n${details}`
      );

      window.open(`mailto:atalla12ahsan@gmail.com?subject=${subject}&body=${body}`, "_blank");

      showToast("Email client opened!", "Please send the email from your email client to complete your message.");

      contactForm.reset();
    });
  }


  /* ─────────────────────────────────────────────
   * 9. TOAST NOTIFICATION
   * ───────────────────────────────────────────── */
  const toast = document.getElementById("toast");
  const toastTitle = document.getElementById("toast-title");
  const toastMessage = document.getElementById("toast-message");

  function showToast(title, message) {
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }


  /* ─────────────────────────────────────────────
   * 10. PARALLAX BLOBS — Subtle mouse movement
   * ───────────────────────────────────────────── */
  const heroBlobs = document.querySelectorAll(".hero-blob");

  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    heroBlobs.forEach((blob, i) => {
      const speed = (i + 1) * 8;
      blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  });


  /* ─────────────────────────────────────────────
   * 11. TYPING EFFECT — Hero greeting
   * ───────────────────────────────────────────── */
  const greetingEl = document.querySelector(".hero-greeting");
  if (greetingEl) {
    const originalText = greetingEl.textContent;
    greetingEl.textContent = "";
    greetingEl.classList.add("active"); // make visible immediately for typing

    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < originalText.length) {
        greetingEl.textContent += originalText.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);
  }

  /* ─────────────────────────────────────────────
     12. CV MODAL
     ───────────────────────────────────────────── */
  const cvModalOverlay = document.getElementById("cv-modal-overlay");
  const cvModalClose = document.getElementById("cv-modal-close");
  const btnViewCv = document.getElementById("btn-view-cv");
  const btnViewCvAbout = document.getElementById("btn-view-cv-about");

  function openCvModal() {
    cvModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeCvModal() {
    cvModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (btnViewCv) btnViewCv.addEventListener("click", openCvModal);
  if (btnViewCvAbout) btnViewCvAbout.addEventListener("click", openCvModal);
  if (cvModalClose) cvModalClose.addEventListener("click", closeCvModal);

  if (cvModalOverlay) {
    cvModalOverlay.addEventListener("click", (e) => {
      if (e.target === cvModalOverlay) closeCvModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cvModalOverlay.classList.contains("active")) {
      closeCvModal();
    }
  });

});
