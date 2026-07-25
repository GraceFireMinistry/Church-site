/* ==========================================================================
   Countdown to the 9th Church Anniversary
   -----------------------------------------------------------------------
   ⚠️ BEGINNER: CHANGE THE DATE BELOW to your real anniversary date & time.
   Format: 'YYYY-MM-DDTHH:MM:SS'  (24-hour time, your local Lagos time)
   Example: the 9th anniversary programme starts 9:00am on 8 November 2026
   ========================================================================== */
const ANNIVERSARY_DATE = '2026-09-30T09:00:00';

document.addEventListener('DOMContentLoaded', () => {
  const el = {
    days: document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    mins: document.getElementById('cd-mins'),
    secs: document.getElementById('cd-secs'),
  };
  if (!el.days) return; // countdown block not on this page

  const target = new Date(ANNIVERSARY_DATE).getTime();

  function tick() {
    const now = Date.now();
    let diff = target - now;

    if (diff <= 0) {
      el.days.textContent = '00';
      el.hours.textContent = '00';
      el.mins.textContent = '00';
      el.secs.textContent = '00';
      const label = document.getElementById('cd-label');
      if (label) label.textContent = "It's anniversary time — happening now! 🎉";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    el.days.textContent = String(days).padStart(2, '0');
    el.hours.textContent = String(hours).padStart(2, '0');
    el.mins.textContent = String(mins).padStart(2, '0');
    el.secs.textContent = String(secs).padStart(2, '0');
  }

  tick();
  const timer = setInterval(tick, 1000);
});
