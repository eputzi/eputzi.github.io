document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

// NUS 2 ist standardmässig deaktiviert. In site-config.js einfach showNus2 auf true setzen.
if (typeof SITE_CONFIG !== 'undefined' && !SITE_CONFIG.showNus2) {
  document.querySelectorAll('#nus2-card').forEach(el => el.remove());
}

async function checkFileAvailability() {
  const links = document.querySelectorAll('[data-file]');
  await Promise.all([...links].map(async (link) => {
    const path = link.dataset.file;
    const status = link.querySelector('.file-status, .availability');
    try {
      const response = await fetch(path, { method: 'HEAD', cache: 'no-store' });
      const available = response.ok;
      link.classList.toggle('available', available);
      link.classList.toggle('unavailable', !available);
      if (status) status.textContent = available ? 'verfügbar' : 'noch nicht da';
      if (!available) link.removeAttribute('href');
    } catch (error) {
      link.classList.add('unavailable');
      if (status) status.textContent = 'noch nicht da';
      link.removeAttribute('href');
    }
  }));
}

if (document.querySelector('[data-file]')) checkFileAvailability();
