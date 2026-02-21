document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('[data-lessons]');
  if (!container) return;

  const classNumber = container.getAttribute('data-class');
  const lessonCount = Number(container.getAttribute('data-lessons'));

  for (let i = 1; i <= lessonCount; i += 1) {
    const card = document.createElement('article');
    card.className = 'lesson-card';

    const title = document.createElement('h3');
    title.textContent = `Тема уроку ${i} (шаблон)`;

    const description = document.createElement('p');
    description.textContent = `Короткий опис для уроку ${i}.`;

    const link = document.createElement('a');
    link.className = 'button';
    link.href = `lesson.html?class=${classNumber}&lesson=${i}`;
    link.textContent = 'Перейти до уроку';

    card.append(title, description, link);
    container.appendChild(card);
  }
});
