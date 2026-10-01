document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('siteSearch');
  const tabButtons = document.querySelectorAll('.tab');
  const courseCards = document.querySelectorAll('.course-card');
  const complaintForm = document.getElementById('complaintForm');

  const filterCourses = (query = '', category = 'all') => {
    courseCards.forEach((card) => {
      const matchesCategory = category === 'all' || card.dataset.category === category;
      const text = card.textContent.toLowerCase();
      const matchesQuery = !query || text.includes(query.toLowerCase());
      card.classList.toggle('hidden', !(matchesCategory && matchesQuery));
    });
  };

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      const categoryEl = document.querySelector('.tab.active');
      const activeCategory = categoryEl ? categoryEl.dataset.filter : 'all';
      filterCourses(event.target.value, activeCategory);
    });
  }

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      tabButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
      const category = button.dataset.filter || 'all';
      const query = searchInput ? searchInput.value : '';
      filterCourses(query, category);
    });
  });

  if (complaintForm) {
    complaintForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(complaintForm);
      const name = formData.get('name');
      alert(`تم استلام الشكوى بنجاح، ${name}. شكرًا لك على ملاحظاتك.`);
      complaintForm.reset();
    });
  }
});



































































