document.addEventListener('DOMContentLoaded', function() {
  // Hero Slider Functionality
  const sliderItems = document.querySelectorAll('.slider-item');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    sliderItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    const nextIndex = (currentSlide + 1) % sliderItems.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
    showSlide(prevIndex);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stopAutoSlide();
      showSlide(i);
      startAutoSlide();
    });
  });

  showSlide(currentSlide);
  startAutoSlide();

  // Set up event listeners
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
  }
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });
  
  // Auto-slide every 5 seconds
  setInterval(nextSlide, 5000);
  
  // Custom Cursor
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  if (cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
      }, 100);
    });
  }
  
  // Navbar scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
  
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
  
  // Portfolio Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Scroll Animation
  const animatedElements = document.querySelectorAll('.animated');
  
  function checkScroll() {
    animatedElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        el.classList.add('fadeIn');
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
  // Run once on load to check for visible elements
  checkScroll();
  
  // Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Here you would typically add AJAX code to submit the form
      alert('Thank you for your message! We will get back to you shortly.');
      contactForm.reset();
    });
  }
  
  // AOS Library Initialization
  AOS.init({
    duration: 1200,   // Duration of the animation (in ms)
    easing: 'ease-in-out', // Easing function
    once: true,       // Run animation only once when the element comes into view
  });

  const swiper = new Swiper('.mySwiper', {
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    },
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Initialize Swiper for client logo slider
    const swiper = new Swiper('.swiper-container', {
      loop: true, // Enable looping for continuous scrolling
      slidesPerView: 4, // Display 4 logos at once
      spaceBetween: 20, // Space between logos
      autoplay: {
        delay: 0, // No delay between transitions
        disableOnInteraction: false, // Keep autoplay even if user interacts with slider
      },
      speed: 3000, // Adjust the speed of the swipe
      breakpoints: {
        1200: {
          slidesPerView: 4, // 4 logos on large screens
        },
        768: {
          slidesPerView: 3, // 3 logos on tablets
        },
        480: {
          slidesPerView: 2, // 2 logos on mobile devices
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Allow clicking on pagination dots
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
  

  function adjustTeamLayout() {
    const teamMembers = document.getElementById('team-members');
    const width = window.innerWidth;
  
    // If the screen size is small (<= 768px), stack team members vertically
    if (width <= 768) {
      teamMembers.style.flexDirection = 'column';
      teamMembers.style.alignItems = 'center';
    } else {
      teamMembers.style.flexDirection = 'row';
      teamMembers.style.justifyContent = 'space-between';
      teamMembers.style.alignItems = 'flex-start';
    }
  }
  
  // Apply layout adjustment when the page is loaded
  window.addEventListener('load', adjustTeamLayout);
  
  // Re-apply layout adjustment on window resize
  window.addEventListener('resize', adjustTeamLayout);
  
  // Hover effect for team members
  const teamMemberElements = document.querySelectorAll('.team-member');
  teamMemberElements.forEach(member => {
    member.addEventListener('mouseenter', () => {
      member.style.transform = 'scale(1.05)';
    });
  
    member.addEventListener('mouseleave', () => {
      member.style.transform = 'scale(1)';
    });
  });
});
