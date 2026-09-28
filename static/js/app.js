const sensorList = [
  { name: 'Vibration Sensor', state: 'online' },
  { name: 'Temperature Sensor', state: 'online' },
  { name: 'Load Cell', state: 'warning' },
  { name: 'Hall Sensor + Magnetic Joint Marker', state: 'online' },
  { name: 'Rotary Encoder', state: 'online' },
  { name: 'Belt Sway Sensor', state: 'warning' },
  { name: 'Camera', state: 'online' },
  { name: 'Motor Current Sensor', state: 'online' },
  { name: 'ESP32 / Raspberry Pi', state: 'online' },
  { name: 'PLC/SCADA Connection', state: 'online' }
];

const baseJoint = {
  id: 'J-03',
  healthIndex: 68,
  temperature: 82,
  vibration: 5.1,
  tension: 74,
  speed: 3.2,
  current: 41.5,
  alignment: 'Aligned',
  timestamp: '09:14:42',
  defect: 'Minor splice variation',
  state: 'warning',
  image: generateJointImage('#f5b942')
};

const joints = [
  { ...baseJoint, id: 'J-01', healthIndex: 68, temperature: 82, vibration: 5.1, tension: 74, speed: 3.2, current: 41.5, alignment: 'Aligned', defect: 'Minor splice variation', state: 'warning', history: { health: [72, 76, 73, 68, 64, 61, 68, 70], temperature: [75, 79, 82, 80, 84, 86, 83, 82], vibration: [4.2, 4.6, 5.0, 5.1, 5.5, 5.7, 5.2, 5.1], tension: [68, 71, 73, 74, 76, 79, 75, 74] }, previous: [generateJointImage('#57d2ff'), generateJointImage('#f5b942'), generateJointImage('#2ed573'), generateJointImage('#ff5a5f')] },
  { id: 'J-02', healthIndex: 84, temperature: 71, vibration: 3.8, tension: 61, speed: 3.1, current: 39.1, alignment: 'Aligned', timestamp: '09:13:18', defect: 'No visual anomaly', state: 'normal', image: generateJointImage('#2ed573'), history: { health: [86, 88, 90, 89, 85, 83, 84, 84], temperature: [72, 71, 69, 70, 73, 75, 72, 71], vibration: [2.8, 3.1, 3.6, 3.4, 3.7, 3.8, 3.7, 3.8], tension: [57, 58, 60, 62, 63, 61, 60, 61] }, previous: [generateJointImage('#2ed573'), generateJointImage('#57d2ff'), generateJointImage('#2ed573'), generateJointImage('#57d2ff')] },
  { id: 'J-03', healthIndex: 42, temperature: 95, vibration: 7.2, tension: 88, speed: 3.6, current: 44.8, alignment: 'Offset', timestamp: '09:12:52', defect: 'Splice anomaly + heat build-up', state: 'critical', image: generateJointImage('#ff5a5f'), history: { health: [52, 58, 64, 49, 43, 41, 40, 42], temperature: [89, 91, 93, 95, 96, 97, 96, 95], vibration: [6.0, 6.4, 6.8, 7.0, 7.3, 7.6, 7.5, 7.2], tension: [80, 82, 84, 86, 89, 90, 89, 88] }, previous: [generateJointImage('#ff5a5f'), generateJointImage('#f5b942'), generateJointImage('#ff5a5f'), generateJointImage('#ff5a5f')] },
  { id: 'J-04', healthIndex: 75, temperature: 78, vibration: 4.4, tension: 70, speed: 3.0, current: 38.2, alignment: 'Aligned', timestamp: '09:11:29', defect: 'Routine inspection complete', state: 'normal', image: generateJointImage('#2ed573'), history: { health: [78, 79, 77, 74, 72, 73, 75, 75], temperature: [75, 77, 76, 78, 79, 78, 77, 78], vibration: [3.9, 4.1, 4.3, 4.0, 4.2, 4.5, 4.3, 4.4], tension: [68, 69, 70, 72, 71, 70, 69, 70] }, previous: [generateJointImage('#2ed573'), generateJointImage('#57d2ff'), generateJointImage('#2ed573'), generateJointImage('#57d2ff')] },
  { id: 'J-05', healthIndex: 58, temperature: 88, vibration: 6.1, tension: 82, speed: 3.3, current: 42.9, alignment: 'Slight drift', timestamp: '09:10:44', defect: 'Thermal rise under high load', state: 'warning', image: generateJointImage('#f5b942'), history: { health: [64, 67, 70, 68, 62, 59, 58, 58], temperature: [80, 81, 83, 85, 86, 88, 87, 88], vibration: [5.3, 5.5, 5.7, 5.9, 6.1, 6.0, 6.2, 6.1], tension: [76, 78, 79, 81, 81, 83, 82, 82] }, previous: [generateJointImage('#f5b942'), generateJointImage('#57d2ff'), generateJointImage('#f5b942'), generateJointImage('#f5b942')] },
  { id: 'J-06', healthIndex: 91, temperature: 66, vibration: 2.7, tension: 55, speed: 3.0, current: 36.5, alignment: 'Aligned', timestamp: '09:09:07', defect: 'Healthy belt splice', state: 'normal', image: generateJointImage('#2ed573'), history: { health: [90, 92, 93, 92, 91, 90, 91, 91], temperature: [65, 66, 67, 66, 65, 64, 66, 66], vibration: [2.3, 2.6, 2.5, 2.8, 2.9, 2.7, 2.6, 2.7], tension: [53, 54, 55, 56, 55, 54, 55, 55] }, previous: [generateJointImage('#2ed573'), generateJointImage('#57d2ff'), generateJointImage('#2ed573'), generateJointImage('#2ed573')] },
  { id: 'J-07', healthIndex: 79, temperature: 76, vibration: 4.1, tension: 67, speed: 3.1, current: 40.4, alignment: 'Aligned', timestamp: '09:08:21', defect: 'Stable joint condition', state: 'normal', image: generateJointImage('#2ed573'), history: { health: [81, 80, 78, 79, 77, 76, 78, 79], temperature: [72, 74, 75, 77, 76, 75, 76, 76], vibration: [3.2, 3.5, 3.8, 4.0, 4.2, 4.1, 4.0, 4.1], tension: [62, 64, 65, 66, 68, 67, 66, 67] }, previous: [generateJointImage('#2ed573'), generateJointImage('#57d2ff'), generateJointImage('#2ed573'), generateJointImage('#57d2ff')] },
  { id: 'J-08', healthIndex: 63, temperature: 84, vibration: 5.7, tension: 77, speed: 3.4, current: 42.6, alignment: 'Slight drift', timestamp: '09:06:58', defect: 'Gradual heat accumulation', state: 'warning', image: generateJointImage('#f5b942'), history: { health: [69, 70, 71, 68, 66, 64, 63, 63], temperature: [79, 80, 82, 83, 84, 85, 84, 84], vibration: [4.8, 4.9, 5.1, 5.4, 5.6, 5.8, 5.7, 5.7], tension: [72, 74, 75, 76, 78, 79, 78, 77] }, previous: [generateJointImage('#f5b942'), generateJointImage('#57d2ff'), generateJointImage('#f5b942'), generateJointImage('#f5b942')] },
  { id: 'J-09', healthIndex: 45, temperature: 97, vibration: 7.8, tension: 91, speed: 3.7, current: 46.2, alignment: 'Offset', timestamp: '09:05:16', defect: 'Critical splice gap and hotspot', state: 'critical', image: generateJointImage('#ff5a5f'), history: { health: [53, 56, 52, 48, 47, 45, 46, 45], temperature: [90, 92, 94, 96, 98, 99, 97, 97], vibration: [6.4, 6.8, 7.1, 7.4, 7.6, 7.9, 7.8, 7.8], tension: [82, 84, 87, 89, 90, 92, 91, 91] }, previous: [generateJointImage('#ff5a5f'), generateJointImage('#f5b942'), generateJointImage('#ff5a5f'), generateJointImage('#ff5a5f')] },
  { id: 'J-10', healthIndex: 89, temperature: 68, vibration: 3.1, tension: 58, speed: 3.0, current: 37.4, alignment: 'Aligned', timestamp: '09:03:49', defect: 'Good alignment and low impact', state: 'normal', image: generateJointImage('#2ed573'), history: { health: [87, 88, 90, 91, 89, 88, 89, 89], temperature: [66, 67, 68, 69, 68, 67, 68, 68], vibration: [2.7, 2.8, 3.0, 3.1, 3.2, 3.1, 3.1, 3.1], tension: [54, 56, 57, 58, 59, 58, 57, 58] }, previous: [generateJointImage('#2ed573'), generateJointImage('#57d2ff'), generateJointImage('#2ed573'), generateJointImage('#57d2ff')] },
  { id: 'J-11', healthIndex: 71, temperature: 81, vibration: 5.3, tension: 73, speed: 3.2, current: 41.9, alignment: 'Aligned', timestamp: '09:02:37', defect: 'Elevated mid-span vibrations', state: 'warning', image: generateJointImage('#f5b942'), history: { health: [73, 72, 74, 73, 72, 71, 71, 71], temperature: [78, 79, 80, 81, 82, 81, 81, 81], vibration: [4.6, 4.8, 5.0, 5.2, 5.4, 5.3, 5.3, 5.3], tension: [70, 71, 72, 73, 74, 73, 73, 73] }, previous: [generateJointImage('#f5b942'), generateJointImage('#57d2ff'), generateJointImage('#f5b942'), generateJointImage('#2ed573')] },
  { id: 'J-12', healthIndex: 92, temperature: 64, vibration: 2.4, tension: 52, speed: 2.9, current: 35.7, alignment: 'Aligned', timestamp: '09:01:12', defect: 'Excellent belt condition', state: 'normal', image: generateJointImage('#2ed573'), history: { health: [90, 91, 92, 93, 92, 91, 92, 92], temperature: [63, 64, 65, 64, 63, 64, 64, 64], vibration: [2.1, 2.2, 2.4, 2.5, 2.4, 2.3, 2.4, 2.4], tension: [50, 51, 52, 53, 52, 51, 52, 52] }, previous: [generateJointImage('#2ed573'), generateJointImage('#57d2ff'), generateJointImage('#2ed573'), generateJointImage('#2ed573')] }
];

const systemState = {
  selectedJointId: 'J-01',
  overallHealth: 71,
  alertCount: 3,
  systemOnline: true,
  dateTime: new Date()
};

const chartState = {};

function generateJointImage(accent) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 420">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stop-color="#08131c"/>
          <stop offset="100%" stop-color="#15283b"/>
        </linearGradient>
      </defs>
      <rect width="700" height="420" fill="url(#g1)"/>
      <rect x="35" y="160" width="630" height="90" rx="16" fill="#1d2f45" stroke="#4d6785" stroke-width="4"/>
      <rect x="205" y="110" width="290" height="190" rx="24" fill="${accent}" opacity="0.23" stroke="${accent}" stroke-width="3"/>
      <path d="M180 160 L520 160" stroke="#c9d8ea" stroke-width="6" stroke-linecap="round" opacity="0.8"/>
      <path d="M180 250 L520 250" stroke="#c9d8ea" stroke-width="6" stroke-linecap="round" opacity="0.8"/>
      <circle cx="350" cy="205" r="46" fill="${accent}" opacity="0.38" stroke="#e9f1ff" stroke-width="4"/>
      <circle cx="350" cy="205" r="15" fill="#f0f7ff" opacity="0.9"/>
      <path d="M130 205 H250" stroke="#9bb2c8" stroke-width="6" stroke-linecap="round" opacity="0.7"/>
      <path d="M450 205 H570" stroke="#9bb2c8" stroke-width="6" stroke-linecap="round" opacity="0.7"/>
      <circle cx="110" cy="205" r="22" fill="${accent}" opacity="0.74"/>
      <circle cx="590" cy="205" r="22" fill="${accent}" opacity="0.74"/>
      <path d="M265 75 L435 75" stroke="#cce7ff" stroke-width="3" opacity="0.7"/>
      <path d="M265 335 L435 335" stroke="#cce7ff" stroke-width="3" opacity="0.7"/>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function getSelectedJoint() {
  return joints.find((joint) => joint.id === systemState.selectedJointId) || joints[0];
}

function formatDateTime(date) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(date);
}

function getHealthClass(value) {
  if (value >= 80) return 'normal';
  if (value >= 60) return 'warning';
  return 'critical';
}

function getCommonBaseline() {
  return {
    health: 80,
    temp: 75,
    vibration: 4.0,
    load: 70
  };
}

function getStatusLabel(state) {
  if (state === 'critical') return 'CRITICAL';
  if (state === 'warning') return 'WARNING';
  return 'NORMAL';
}

function getJointNumberDisplay(value) {
  const match = String(value).match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}

function renderKpis() {
  const total = joints.length;
  const normal = joints.filter((joint) => joint.state === 'normal').length;
  const warning = joints.filter((joint) => joint.state === 'warning').length;
  const critical = joints.filter((joint) => joint.state === 'critical').length;

  document.getElementById('totalJoints').textContent = total;
  document.getElementById('normalJoints').textContent = normal;
  document.getElementById('warningJoints').textContent = warning;
  document.getElementById('criticalJoints').textContent = critical;

  const liveJoint = getSelectedJoint();
  document.getElementById('beltSpeed').textContent = liveJoint.speed.toFixed(1);
  document.getElementById('conveyorLoad').textContent = (liveJoint.tension * 1.21).toFixed(1);
  document.getElementById('overallHealth').textContent = `${Math.round(joints.reduce((sum, joint) => sum + joint.healthIndex, 0) / total)}%`;
}

function renderLiveMonitoring() {
  const joint = getSelectedJoint();
  const stateClass = joint.state === 'critical' ? 'critical' : joint.state === 'warning' ? 'warning' : 'normal';

  const jointNumber = getJointNumberDisplay(joint.id);

  const fields = [
    ['liveJointImage', joint.image],
    ['liveJointId', String(jointNumber)],
    ['liveTemperature', `${joint.temperature.toFixed(0)}°C`],
    ['liveVibration', `${joint.vibration.toFixed(1)} mm/s`],
    ['liveTension', `${joint.tension.toFixed(0)} kN`],
    ['liveSpeed', `${joint.speed.toFixed(1)} m/s`],
    ['liveCurrent', `${joint.current.toFixed(1)} A`],
    ['liveAlignment', joint.alignment],
    ['liveTimestamp', joint.timestamp],
    ['liveHealthIndex', `${Math.round(joint.healthIndex)}%`],
    ['liveHealthBadge', getStatusLabel(joint.state)],
    ['liveStateTag', getStatusLabel(joint.state)],
    ['liveJointImageAlt', joint.image],
    ['liveJointIdAlt', String(jointNumber)],
    ['liveTemperatureAlt', `${joint.temperature.toFixed(0)}°C`],
    ['liveVibrationAlt', `${joint.vibration.toFixed(1)} mm/s`],
    ['liveTensionAlt', `${joint.tension.toFixed(0)} kN`],
    ['liveSpeedAlt', `${joint.speed.toFixed(1)} m/s`],
    ['liveCurrentAlt', `${joint.current.toFixed(1)} A`],
    ['liveAlignmentAlt', joint.alignment],
    ['liveHealthIndexAlt', `${Math.round(joint.healthIndex)}%`],
    ['liveStateTagAlt', getStatusLabel(joint.state)]
  ];

  fields.forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.tagName === 'IMG') {
      el.src = value;
    } else {
      el.textContent = value;
    }
  });

  const badge = document.getElementById('liveHealthBadge');
  if (badge) {
    badge.classList.remove('warning', 'critical');
    if (stateClass === 'warning') badge.classList.add('warning');
    if (stateClass === 'critical') badge.classList.add('critical');
  }

  const headerTag = document.getElementById('liveStateTag');
  if (headerTag) {
    headerTag.style.background = stateClass === 'critical' ? 'rgba(255, 90, 95, 0.08)' : stateClass === 'warning' ? 'rgba(245, 185, 66, 0.1)' : 'rgba(46, 213, 115, 0.08)';
    headerTag.style.borderColor = stateClass === 'critical' ? 'rgba(255, 90, 95, 0.25)' : stateClass === 'warning' ? 'rgba(245, 185, 66, 0.22)' : 'rgba(46, 213, 115, 0.25)';
    headerTag.style.color = stateClass === 'critical' ? '#ffd8d9' : stateClass === 'warning' ? '#ffe7b2' : '#dfffe9';
  }

  const headerTagAlt = document.getElementById('liveStateTagAlt');
  if (headerTagAlt) {
    headerTagAlt.style.background = stateClass === 'critical' ? 'rgba(255, 90, 95, 0.08)' : stateClass === 'warning' ? 'rgba(245, 185, 66, 0.1)' : 'rgba(46, 213, 115, 0.08)';
    headerTagAlt.style.borderColor = stateClass === 'critical' ? 'rgba(255, 90, 95, 0.25)' : stateClass === 'warning' ? 'rgba(245, 185, 66, 0.22)' : 'rgba(46, 213, 115, 0.25)';
    headerTagAlt.style.color = stateClass === 'critical' ? '#ffd8d9' : stateClass === 'warning' ? '#ffe7b2' : '#dfffe9';
  }
}

function renderBeltMap() {
  const container = document.getElementById('beltMap');
  if (!container) return;

  const sortedJoints = [...joints].sort((a, b) => {
    const aNum = Number(a.id.replace('J-', ''));
    const bNum = Number(b.id.replace('J-', ''));
    return aNum - bNum;
  });

  const markers = sortedJoints.map((joint, index) => {
    const stateClass = joint.state || 'normal';
    const isSelected = joint.id === systemState.selectedJointId ? 'selected' : '';
    const label = getJointNumberDisplay(joint.id);
    const left = sortedJoints.length === 1 ? 50 : (index / (sortedJoints.length - 1)) * 100;

    return `
      <div class="belt-joint ${stateClass} ${isSelected}" style="left: ${left}%" title="Joint ${label} — ${getStatusLabel(joint.state)}">
        <span class="belt-joint-label">${label}</span>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="belt-track">
      ${markers}
    </div>
  `;
}

function renderJointCards() {
  const cards = document.getElementById('jointCards');
  const cardsHealth = document.getElementById('jointCardsHealth');
  const baseline = getCommonBaseline();

  const markup = joints.map((joint) => {
    const stateClass = getHealthClass(joint.healthIndex);
    const selected = joint.id === systemState.selectedJointId ? 'selected' : '';
    const displayId = getJointNumberDisplay(joint.id);
    return `
      <button class="joint-card ${selected}" data-id="${joint.id}">
        <div class="joint-top">
          <div class="joint-id">${displayId}</div>
          <span class="health-dot ${stateClass}"></span>
        </div>
        <div class="baseline-strip">
          <div class="baseline-item">
            <span>Health</span>
            <strong>${baseline.health}%</strong>
          </div>
          <div class="baseline-item">
            <span>Temp</span>
            <strong>${baseline.temp}°C</strong>
          </div>
          <div class="baseline-item">
            <span>Vib</span>
            <strong>${baseline.vibration.toFixed(1)}</strong>
          </div>
          <div class="baseline-item">
            <span>Load</span>
            <strong>${baseline.load}</strong>
          </div>
        </div>
        <div class="joint-stats">
          <div>
            Health
            <strong>${baseline.health}%</strong>
          </div>
          <div>
            Temp
            <strong>${baseline.temp}°C</strong>
          </div>
          <div>
            Vibration
            <strong>${baseline.vibration.toFixed(1)}</strong>
          </div>
          <div>
            Tension
            <strong>${baseline.load}</strong>
          </div>
        </div>
      </button>
    `;
  }).join('');

  if (cards) {
    cards.innerHTML = markup;
    cards.querySelectorAll('.joint-card').forEach((card) => {
      card.addEventListener('click', () => {
        systemState.selectedJointId = card.dataset.id;
        renderAll();
      });
    });
  }

  if (cardsHealth) {
    cardsHealth.innerHTML = markup;
    cardsHealth.querySelectorAll('.joint-card').forEach((card) => {
      card.addEventListener('click', () => {
        systemState.selectedJointId = card.dataset.id;
        renderAll();
      });
    });
  }
}

function renderAlerts() {
  const alertData = [
    {
      id: 'J-03',
      level: 'warning',
      title: 'Joint #03 — WARNING',
      body: 'Abnormal vibration + increased temperature + visual splice anomaly detected across the last two passes.',
      action: 'inspect'
    },
    {
      id: 'J-12',
      level: 'critical',
      title: 'Joint #12 — CRITICAL',
      body: 'Critical splice integrity loss with elevated impact, offset alignment, and rising thermal conditions.',
      action: 'maintenance'
    },
    {
      id: 'J-21',
      level: 'warning',
      title: 'Joint #21 — WARNING',
      body: 'Load is elevated while belt drift and motor current indicate early-stage mechanical stress.',
      action: 'monitor'
    }
  ];

  const markup = alertData.map((alert) => {
    const alertNumber = getJointNumberDisplay(alert.id);
    const title = `Joint #${alertNumber} — ${getStatusLabel(alert.level)}`;
    return `
      <div class="alert-item ${alert.level}">
        <div class="title">
          <span>${title}</span>
          <span>${getStatusLabel(alert.level)}</span>
        </div>
        <p>${alert.body}</p>
        <span class="action-tag ${alert.action}">${alert.action}</span>
      </div>
    `;
  }).join('');

  const list = document.getElementById('alertsList');
  const listAlt = document.getElementById('alertsListAlt');

  if (list) list.innerHTML = markup;
  if (listAlt) listAlt.innerHTML = markup;

  document.getElementById('alertCount').textContent = alertData.length;
}

function renderSensorStatus() {
  const markup = sensorList.map((sensor) => {
    const stateClass = sensor.state === 'warning' ? 'warning' : sensor.state === 'critical' ? 'critical' : '';
    return `
      <div class="sensor-row">
        <span class="sensor-name">${sensor.name}</span>
        <span class="sensor-state ${stateClass}">${sensor.state === 'online' ? 'Online' : sensor.state === 'warning' ? 'Warning' : 'Critical'}</span>
      </div>
    `;
  }).join('');

  const container = document.getElementById('sensorStatus');
  const containerAlt = document.getElementById('sensorStatusAlt');

  if (container) container.innerHTML = markup;
  if (containerAlt) containerAlt.innerHTML = markup;
}

function buildLineChart(ctx, labels, values, label, borderColor, bgColor) {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label,
        data: values,
        borderColor,
        backgroundColor: bgColor,
        borderWidth: 2,
        fill: false,
        tension: 0.35,
        pointRadius: 2,
        pointHoverRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          ticks: { color: '#9ab0cb' },
          grid: { color: 'rgba(154,176,203,0.12)' }
        },
        y: {
          ticks: { color: '#9ab0cb' },
          grid: { color: 'rgba(154,176,203,0.12)' }
        }
      }
    }
  });
}

function renderHistoryCharts() {
  const joint = getSelectedJoint();
  const labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8'];

  const charts = [
    ['healthChart', 'healthChartAlt', joint.history.health, 'Health Index', '#8f7cf7'],
    ['temperatureChart', 'temperatureChartAlt', joint.history.temperature, 'Temperature °C', '#57d2ff'],
    ['vibrationChart', 'vibrationChartAlt', joint.history.vibration, 'Vibration', '#f5b942'],
    ['loadChart', 'loadChartAlt', joint.history.tension, 'Tension / Load', '#2ed573']
  ];

  charts.forEach(([primaryId, altId, values, label, color]) => {
    const primaryEl = document.getElementById(primaryId);
    const altEl = document.getElementById(altId);

    if (chartState[primaryId]) chartState[primaryId].destroy();
    if (chartState[altId]) chartState[altId].destroy();

    if (primaryEl) {
      chartState[primaryId] = buildLineChart(primaryEl, labels, values, label, color, `${color}22`);
    }

    if (altEl) {
      chartState[altId] = buildLineChart(altEl, labels, values, label, color, `${color}22`);
    }
  });

  const previousEl = document.getElementById('previousImages');
  if (previousEl) {
    previousEl.innerHTML = joint.previous.map((image) => `
      <div class="image-tile" style="background-image: url('${image}')"></div>
    `).join('');
  }
}

function updateDashboardData() {
  joints.forEach((joint) => {
    const swing = (Math.random() - 0.5) * 8;
    joint.temperature = Math.max(55, Math.min(110, joint.temperature + swing * 0.6));
    joint.vibration = Math.max(1.5, Math.min(9.5, joint.vibration + (Math.random() - 0.5) * 0.7));
    joint.tension = Math.max(40, Math.min(100, joint.tension + (Math.random() - 0.5) * 10));
    joint.healthIndex = Math.max(20, Math.min(98, joint.healthIndex + (Math.random() - 0.5) * 9));
    joint.current = Math.max(30, Math.min(55, joint.current + (Math.random() - 0.5) * 3));
    joint.speed = 3 + (Math.random() - 0.5) * 0.8;

    if (joint.healthIndex >= 80) joint.state = 'normal';
    else if (joint.healthIndex >= 60) joint.state = 'warning';
    else joint.state = 'critical';

    joint.history.health.push(Math.round(joint.healthIndex));
    joint.history.temperature.push(Math.round(joint.temperature));
    joint.history.vibration.push(Number(joint.vibration.toFixed(1)));
    joint.history.tension.push(Math.round(joint.tension));

    if (joint.history.health.length > 8) {
      joint.history.health.shift();
      joint.history.temperature.shift();
      joint.history.vibration.shift();
      joint.history.tension.shift();
    }
  });

  const selected = getSelectedJoint();
  selected.timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
  selected.image = generateJointImage(selected.state === 'critical' ? '#ff5a5f' : selected.state === 'warning' ? '#f5b942' : '#2ed573');
}

function updateClock() {
  document.getElementById('currentDateTime').textContent = formatDateTime(new Date());
}

function downloadOperationalReport() {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    window.alert('PDF export is not available right now.');
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const margin = 14;
  const pageWidth = 210;
  const rows = Array.from(document.querySelectorAll('#reports-view .report-table tbody tr')).map((row) =>
    Array.from(row.children).map((cell) => cell.textContent.trim())
  );

  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, pageWidth, 297, 'F');

  doc.setFillColor(10, 20, 29);
  doc.rect(0, 0, pageWidth, 24, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('JointPulse', margin, 15);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Operational Report', margin + 34, 15);
  doc.setTextColor(190, 200, 214);
  doc.text(`Generated: ${new Date().toLocaleString()}`, margin, 21);

  const summary = [
    ['Shift Summary', '88.2%'],
    ['Inspection Coverage', '96.4%'],
    ['Maintenance Window', '12:30']
  ];

  let summaryY = 34;
  summary.forEach(([label, value], index) => {
    const x = margin + index * 62;
    doc.setFillColor(245, 248, 252);
    doc.roundedRect(x, summaryY, 58, 18, 2.5, 2.5, 'F');
    doc.setDrawColor(87, 210, 255);
    doc.roundedRect(x, summaryY, 58, 18, 2.5, 2.5, 'S');

    doc.setTextColor(82, 96, 110);
    doc.setFontSize(7.5);
    doc.text(label.toUpperCase(), x + 4, summaryY + 6);

    doc.setTextColor(15, 23, 32);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(value, x + 4, summaryY + 14);
  });

  let y = 64;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 32);
  doc.setFontSize(12);
  doc.text('Inspection Log', margin, y);

  y += 5;
  doc.setDrawColor(122, 145, 168);
  doc.line(margin, y, pageWidth - margin, y);

  const colX = [margin, 48, 84, 142];
  const colWidths = [24, 24, 46, 54];
  const headers = ['Joint', 'Health', 'Condition', 'Owner'];

  y += 5;
  doc.setFontSize(9);
  headers.forEach((header, index) => {
    doc.text(header, colX[index], y + 4);
  });

  y += 7;
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(35, 48, 62);

  rows.forEach((row) => {
    const ownerLines = doc.splitTextToSize(String(row[3] || ''), colWidths[3]);
    const cellHeight = Math.max(1, ownerLines.length) * 6;

    if (y + cellHeight + 5 > 280) {
      doc.addPage();
      y = 20;
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 23, 32);
      doc.setFontSize(12);
      doc.text('Inspection Log (cont.)', margin, y);
      y += 6;
      doc.setDrawColor(122, 145, 168);
      doc.line(margin, y, pageWidth - margin, y);
      y += 6;
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(35, 48, 62);
    }

    doc.setDrawColor(200, 210, 220);
    doc.line(margin, y, pageWidth - margin, y);
    doc.text(String(row[0] || ''), colX[0], y + 5);
    doc.text(String(row[1] || ''), colX[1], y + 5);
    doc.text(String(row[2] || ''), colX[2], y + 5);
    doc.text(ownerLines, colX[3], y + 5);
    y += cellHeight + 5;
  });

  doc.save('jointpulse-operational-report.pdf');
}

function renderAll() {
  renderKpis();
  renderLiveMonitoring();
  renderBeltMap();
  renderJointCards();
  renderAlerts();
  renderSensorStatus();
  renderHistoryCharts();
}

function setActiveNav(viewId) {
  const buttons = document.querySelectorAll('.nav-item');
  buttons.forEach((button) => {
    const isActive = button.dataset.view === viewId;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  document.querySelectorAll('.tab-view').forEach((view) => {
    view.classList.toggle('active', view.id === viewId);
  });
}

function handleSidebarNavigation(event) {
  const button = event.currentTarget;
  const viewId = button.dataset.view;
  setActiveNav(viewId);
}

document.querySelectorAll('.nav-item').forEach((button) => {
  button.type = 'button';
  button.addEventListener('click', handleSidebarNavigation);
});

const reportButton = document.getElementById('downloadReportBtn');
if (reportButton) {
  reportButton.addEventListener('click', downloadOperationalReport);
}

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  updateClock();

  setInterval(() => {
    updateDashboardData();
    renderAll();
    updateClock();
  }, 3000);
});
