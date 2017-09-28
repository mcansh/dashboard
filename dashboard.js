function rememberPreference() {
  const preference = {};
  const boxNodes = document.querySelectorAll('.filter-checkbox');
  const boxes = Array.from(boxNodes);
  // eslint-disable-next-line no-return-assign
  boxes.forEach(box => (preference[box.id] = box.checked));
  localStorage.setItem('dashboard:select', JSON.stringify(preference));
}

function applyPreference() {
  let preference = localStorage.getItem('dashboard:select');
  if (!preference) return;
  preference = JSON.parse(preference);
  const boxNodes = document.querySelectorAll('.filter-checkbox');
  const boxes = Array.from(boxNodes);
  // eslint-disable-next-line no-return-assign, no-param-reassign
  boxes.forEach(box => (box.checked = preference ? preference[box.id] : true));
}

function init() {
  const events = [
    'Stars',
    'Forks',
    'Comments',
    'Repositories',
    'Issues',
    'Org',
    'Wiki',
  ];

  const target = document.querySelector('.news .alert');

  events.forEach(event => {
    const input = document.createElement('input');
    const lowerCaseEvent = event.toLowerCase();
    input.type = 'checkbox';
    input.id = lowerCaseEvent;
    input.className = `filter-checkbox filtered-${lowerCaseEvent}`;

    const label = document.createElement('label');
    label.className = 'filter-label';
    label.setAttribute('for', lowerCaseEvent);
    label.innerText = event;

    target.parentElement.insertBefore(input, target);
    target.parentElement.insertBefore(label, target);
  });

  applyPreference();
}

init();

document.addEventListener('change', e => {
  if (e.target.className.match(/filter-checkbox/)) {
    rememberPreference();
  }
});
