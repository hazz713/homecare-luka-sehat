const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
  }
);

revealItems.forEach((item) => observer.observe(item));
