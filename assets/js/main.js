// =====================================================================
//  SMALL SCRIPTS: mobile menu button and countdown.
//  You do NOT need to edit this file. The countdown date is in _config.yml
// =====================================================================

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

// Countdown — the start date is set in _config.yml (conference: start:)
const box = document.getElementById("countdown");
if (box && box.dataset.start) {
  const target = new Date(box.dataset.start + ":00+08:00");
  const set = (k, v) => { box.querySelector('[data-cd="' + k + '"]').textContent = v; };
  const tick = () => {
    const diff = target - new Date();
    if (isNaN(diff) || diff <= 0) { box.hidden = true; return; }
    box.hidden = false;
    set("days", Math.floor(diff / 86400000));
    set("hours", Math.floor(diff / 3600000) % 24);
    set("mins", Math.floor(diff / 60000) % 60);
  };
  tick();
  setInterval(tick, 30000);
}
