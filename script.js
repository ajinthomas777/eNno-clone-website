$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000, // Change the time as per your need
        responsive: {
            0: {
                items: 1 // Show 1 item on small screens
            },
            768: {
                items: 2 // Show 2 items on medium screens
            },
            992: {
                items: 3 // Show 3 items on large screens
            }
        }
    });
});
  
  
  /*-----for nav bar shadow--------*/
  const navbar = document.querySelector('nav.fixed-top');
  
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });
  
  
  
  
  /*portflio filtering when links are clicked*/
  // Filtering Functionality
  document.querySelectorAll('.portfolio-filter').forEach(filterBtn => {
      filterBtn.addEventListener('click', function() {
          const filter = this.getAttribute('data-filter');
          
          // Show all items if 'all' is selected
          if (filter === 'all') {
              document.querySelectorAll('.portfolio-item').forEach(item => {
                  item.style.display = 'block';
              });
          } else {
              // Show only items of selected category
              document.querySelectorAll('.portfolio-item').forEach(item => {
                  if (item.getAttribute('data-category') === filter) {
                      item.style.display = 'block';
                  } else {
                      item.style.display = 'none';
                  }
              });
          }
      });
  });
  
  // Initially show all portfolio items
  document.querySelectorAll('.portfolio-item').forEach(item => {
      item.style.display = 'block';
  });



/* portfolio grid image filter*/
  
  document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to the filter buttons
    const filterButtons = document.querySelectorAll('.nav-item');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');
        
        // Show or hide portfolio items based on the filter
        portfolioItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block'; // Show item
          } else {
            item.style.display = 'none'; // Hide item
          }
        });
      });
    });
  });

  // Show the button when the user scrolls down 100px from the top of the document
window.onscroll = function() {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.style.display = "block";  // Show button
    } else {
      scrollToTopBtn.style.display = "none";  // Hide button
    }
  };
  
  // Scroll to the top when the button is clicked
  document.getElementById("scrollToTopBtn").addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
  });