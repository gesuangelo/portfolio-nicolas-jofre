const sessions = {
  retrato: {
    title: 'Retrato profesional',
    subtitle: 'Ideal para perfil profesional, marca personal y piezas editoriales limpias.',
    price: '$75.000 CLP',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1600&q=80'
  },
  pareja: {
    title: 'Sesión pareja',
    subtitle: 'Dirección visual para retratos íntimos y narrativos en estudio o exterior.',
    price: '$90.000 CLP',
    duration: '90 min',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1600&q=80'
  },
  familiar: {
    title: 'Sesión familiar',
    subtitle: 'Composición y dinámica para retratos familiares con enfoque natural.',
    price: '$110.000 CLP',
    duration: '90 min',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&q=80'
  },
  embarazo: {
    title: 'Sesión embarazo',
    subtitle: 'Producción cuidada con dirección artística y estética editorial.',
    price: '$120.000 CLP',
    duration: '120 min',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80'
  },
  infantil: {
    title: 'Sesión infantil',
    subtitle: 'Sesión dinámica para niños con luz suave y ritmo de trabajo flexible.',
    price: '$85.000 CLP',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=80'
  },
  branding: {
    title: 'Branding personal',
    subtitle: 'Contenido visual para redes, web y posicionamiento de marca personal.',
    price: '$130.000 CLP',
    duration: '90 min',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=1600&q=80'
  },
  book: {
    title: 'Book creativo',
    subtitle: 'Enfoque editorial con styling visual y estética de campaña.',
    price: '$125.000 CLP',
    duration: '90 min',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1600&q=80'
  },
  express: {
    title: 'Sesión express',
    subtitle: 'Formato breve para necesidades puntuales y entregas rápidas.',
    price: '$55.000 CLP',
    duration: '30 min',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1600&q=80'
  },
  extras: {
    title: 'Extras de sesión',
    subtitle: 'Maquillaje, vestuario, retoque avanzado y servicios complementarios.',
    price: '$15.000+ CLP',
    duration: 'Opcional',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=1600&q=80'
  }
};

const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const dayNames = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

let currentDate = new Date();
let selectedDate = null;
let selectedTime = null;

function qs(id) { return document.getElementById(id); }

function initSession() {
  const params = new URLSearchParams(window.location.search);
  const key = params.get('session') || 'pareja';
  const data = sessions[key] || sessions.pareja;

  qs('session-title').textContent = data.title;
  qs('session-subtitle').textContent = data.subtitle;
  qs('session-price').textContent = data.price;
  qs('session-duration').textContent = data.duration;
  qs('session-image').src = data.image;
  qs('session-image').alt = data.title;
  document.title = `${data.title} | Reservar sesión`;
}

function renderDayNames() {
  qs('day-names').innerHTML = dayNames.map(day => `<div class="day-name">${day}</div>`).join('');
}

function getMonthMatrix(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);

  const startOffset = (first.getDay() + 6) % 7;
  const daysInMonth = last.getDate();

  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push({ muted: true, label: '' });

  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, muted: false });
  }

  while (cells.length % 7 !== 0) cells.push({ muted: true, label: '' });
  return cells;
}

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  qs('month-label').textContent = `${monthNames[month]} ${year}`;

  const cells = getMonthMatrix(currentDate);
  qs('calendar-days').innerHTML = '';

  cells.forEach(cell => {
    const btn = document.createElement('button');
    btn.className = 'day-cell';

    if (cell.muted) {
      btn.classList.add('muted');
      btn.textContent = '';
    } else {
      btn.textContent = String(cell.day);
      const thisDate = new Date(year, month, cell.day);
      const iso = thisDate.toISOString().slice(0, 10);
      btn.dataset.iso = iso;

      if (selectedDate === iso) btn.classList.add('selected');

      btn.addEventListener('click', () => {
        selectedDate = iso;
        selectedTime = null;
        renderCalendar();
        renderTimeSlots();
        updateContinue();
      });
    }

    qs('calendar-days').appendChild(btn);
  });
}

function renderTimeSlots() {
  const container = qs('time-slots');
  container.innerHTML = '';

  if (!selectedDate) {
    qs('selected-date-label').textContent = 'Seleccione una fecha para ver horarios.';
    return;
  }

  const d = new Date(`${selectedDate}T00:00:00`);
  qs('selected-date-label').textContent = `Horarios disponibles para ${d.toLocaleDateString('es-CL', { weekday: 'long', day: '2-digit', month: 'long' })}`;

  const slots = ['10:00', '10:30', '11:00', '11:30', '16:00', '16:30', '17:00', '17:30'];
  slots.forEach(time => {
    const chip = document.createElement('button');
    chip.className = 'time-chip';
    chip.textContent = time;
    if (selectedTime === time) chip.classList.add('selected');

    chip.addEventListener('click', () => {
      selectedTime = time;
      renderTimeSlots();
      updateContinue();
    });

    container.appendChild(chip);
  });
}

function updateContinue() {
  qs('continue-btn').disabled = !(selectedDate && selectedTime);
}

function bindNav() {
  qs('prev-month').addEventListener('click', () => {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    renderCalendar();
  });

  qs('next-month').addEventListener('click', () => {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    renderCalendar();
  });

  qs('continue-btn').addEventListener('click', () => {
    alert('Demo visual: en la siguiente fase conectamos agenda real + pago con Mercado Pago Chile.');
  });
}

(function init() {
  initSession();
  renderDayNames();
  renderCalendar();
  renderTimeSlots();
  bindNav();
  updateContinue();
})();
