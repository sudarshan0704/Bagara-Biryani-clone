const swiper = new Swiper('.mySwiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 25000000,
  },
  slidesPerView: 1, // Default to 1 slide on very small screens
  spaceBetween: 20, // Add some space between slides
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // When window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // When window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const closeBtn = document.querySelector(".mobile-menu-close");
    const navbarCollapse = document.querySelector("#navbarNav");
    const toggler = document.querySelector(".navbar-toggler");
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    // Open menu → hide hamburger
    toggler.addEventListener("click", () => {
        if (!navbarCollapse.classList.contains("show")) {
            toggler.classList.add("d-none");
        }
    });

    // Close menu when nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 991.98) {
                bsCollapse.hide();
                toggler.classList.remove("d-none"); // show hamburger again
            }
        });
    });

    // Close menu when custom close button is clicked
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            bsCollapse.hide();
            toggler.classList.remove("d-none"); // show hamburger again
        });
    }
});


