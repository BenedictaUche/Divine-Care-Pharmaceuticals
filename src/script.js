
const testimonials = document.querySelectorAll('.testimonial-card');
  testimonials.forEach((testimonial, index) => {
    testimonial.addEventListener('mouseenter', () => {
      testimonial.classList.add(`testimonial-${index}-hover`);
    });
    testimonial.addEventListener('mouseleave', () => {
      testimonial.classList.remove(`testimonial-${index}-hover`);
    });
  });