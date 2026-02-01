const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const grid = document.getElementById('grid');
window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20; // 20 is the intensity
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    grid.style.transform = `translate(${-x}px, ${-y}px)`;
});