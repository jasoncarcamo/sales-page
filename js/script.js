document.addEventListener("DOMContentLoaded", () => {

    // Dynamic year
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  
    // Sticky header shadow
    const header = document.querySelector(".header");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  
  });
  