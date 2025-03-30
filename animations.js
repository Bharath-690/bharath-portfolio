// Scroll Animation Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

// Observe all elements with these animation classes
const animatedElements = document.querySelectorAll(
  '.animate-up, .animate-left, .animate-right'
);

animatedElements.forEach(el => observer.observe(el));
