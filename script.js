const regions = [
  { name: "Yangiyo‘l shahar", count: 2 },
  { name: "Yangiyo‘l tumani", count: 6 },
  { name: "Chinoz tumani", count: 2 },
  { name: "Quyichirchiq", count: 4 },
  { name: "Oqqo‘rg‘on", count: 1 },
];

const branches = [
  { id: 1, name: "Kasblar", region: "Yangiyo‘l shahar", leader: "Ortiqova Nigora", phone: "+998 93 470 13 32", phoneHref: "+998934701332", photo: "leader-kasblar.png" },
  { id: 2, name: "Navruz", region: "Yangiyo‘l shahar", leader: "Xudoyberganova Iroda", phone: "+998 99 408 49 94", phoneHref: "+998994084994", photo: "leader-kids2.png" },
  { id: 3, name: "Niyozbosh", region: "Yangiyo‘l tumani", leader: "Shermaxamatov Anvar", phone: "+998 88 545 04 11", phoneHref: "+998885450411", photo: "leader-niyozbosh.png" },
  { id: 4, name: "Gulbahor", region: "Yangiyo‘l tumani", leader: "Davlatov Doston", phone: "+998 20 004 91 04", phoneHref: "+998200049104", photo: "leader-gulbahor.png" },
  { id: 5, name: "Qo‘shyog‘och", region: "Yangiyo‘l tumani", leader: "Xamidova Shaxlo", phone: "+998 88 112 33 77", phoneHref: "+998881123377", photo: "leader-qoshyogoch.png" },
  { id: 6, name: "Navbahor", region: "Yangiyo‘l tumani", leader: "Davlatshayeva Mohira", phone: "+998 99 407 47 69", phoneHref: "+998994074769", photo: "leader-kids3.png" },
  { id: 7, name: "Farovon", region: "Yangiyo‘l tumani", leader: "Faxruddinova Lobar", phone: "+998 99 483 38 39", phoneHref: "+998994833839", photo: "leader-kids1.png" },
  { id: 8, name: "Xalqabod", region: "Yangiyo‘l tumani", leader: "Sheraliyeva Nilufar", phone: "+998 97 016 97 98", phoneHref: "+998970169798", photo: "leader-xalqobod.png" },
  { id: 9, name: "Chinoz", region: "Chinoz tumani", leader: "Xolmatov Xudoybergan", phone: "+998 97 598 08 19", phoneHref: "+998975980819", photo: "leader-chinoz.png" },
  { id: 10, name: "Olmazor", region: "Chinoz tumani", leader: "Xasanov Suxrob", phone: "+998 93 609 55 95", phoneHref: "+998936095595", photo: "leader-olmazor.png" },
  { id: 11, name: "Dostobod", region: "Quyichirchiq", leader: "Turayev Shoxriddin", phone: "+998 97 763 62 98", phoneHref: "+998977636298", photo: "leader-shoxriddin.png" },
  { id: 12, name: "Paxtazor", region: "Quyichirchiq", leader: "Turayev Saidjahonxo‘ja", phone: "+998 20 004 91 04", phoneHref: "+998200049104", photo: "leader-paxtazor.png" },
  { id: 13, name: "Mevazor", region: "Quyichirchiq", leader: "Abdullayeva Dinara", phone: "+998 50 570 76 50", phoneHref: "+998505707650", photo: "leader-krasin.png" },
  { id: 14, name: "Archazor", region: "Quyichirchiq", leader: "Turayev Shoxriddin", phone: "+998 97 763 62 98", phoneHref: "+998977636298", photo: "leader-shoxriddin.png" },
  { id: 15, name: "Oqqo‘rg‘on", region: "Oqqo‘rg‘on", leader: "Turayev Shoxriddin", phone: "+998 97 763 62 98", phoneHref: "+998977636298", photo: "leader-shoxriddin.png" },
];

const icons = {
  arrow: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
  back: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/><path d="M9 12h10"/></svg>',
  close: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  phone: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.63a2 2 0 0 1-.45 2.11L8.04 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.31 1.73.53 2.63.65A2 2 0 0 1 22 16.9Z"/></svg>'
};

const selector = document.querySelector("#selector");
const modalRoot = document.querySelector("#modal-root");
let activeRegion = null;

const cacheVersion = window.AL_AZIZ_VERSION || Date.now();
const freshImage = path => `${path}?v=${cacheVersion}`;
document.querySelector(".background").style.backgroundImage = `url('${freshImage("hero-academy.png")}')`;

function renderRegions() {
  activeRegion = null;
  selector.innerHTML = `<div class="regions-view">
    <div class="selector-head">
      <img class="academy-logo" src="${freshImage("al-aziz-logo.jpg")}" alt="AL-AZIZ ACADEMY logosi">
      <p>HUDUDNI TANLANG</p><h2>Filiallarimiz</h2><span>Kerakli hududni bosing</span>
    </div>
    <div class="region-list">${regions.map((region, index) => `<button data-region="${region.name}">
      <span class="region-index">0${index + 1}</span>
      <span class="region-name"><b>${region.name}</b><small>${region.count} ta filial</small></span>
      <span class="round-arrow">${icons.arrow}</span>
    </button>`).join("")}</div>
  </div>`;
  selector.querySelectorAll("[data-region]").forEach(button => button.addEventListener("click", () => renderBranches(button.dataset.region)));
}

function renderBranches(region) {
  activeRegion = region;
  const items = branches.filter(branch => branch.region === region);
  selector.innerHTML = `<div class="branches-view">
    <div class="branches-head">
      <button id="back" aria-label="Hududlarga qaytish">${icons.back}</button>
      <div><p>TANLANGAN HUDUD</p><h2>${region}</h2></div><span>${items.length} ta</span>
    </div>
    <div class="branch-list">${items.map(branch => `<button data-branch="${branch.id}">
      <span class="branch-index">${String(branch.id).padStart(2, "0")}</span><span><b>${branch.name}</b></span>${icons.arrow}
    </button>`).join("")}</div>
    <button class="change-region" id="change-region">${icons.back} Boshqa hududni tanlash</button>
  </div>`;
  selector.querySelector("#back").addEventListener("click", renderRegions);
  selector.querySelector("#change-region").addEventListener("click", renderRegions);
  selector.querySelectorAll("[data-branch]").forEach(button => button.addEventListener("click", () => openBranch(Number(button.dataset.branch))));
}

function openBranch(id) {
  const branch = branches.find(item => item.id === id);
  modalRoot.innerHTML = `<div class="modal-backdrop">
    <section class="branch-modal" role="dialog" aria-modal="true" aria-labelledby="branch-name">
      <button class="modal-close" aria-label="Yopish">${icons.close}</button>
      <div class="leader-photo" style="background-image:linear-gradient(0deg,rgba(3,20,36,.96),rgba(3,20,36,.08) 65%),url('${freshImage(branch.photo)}')">
        <span class="branch-badge">${branch.name} filiali</span>
        <div class="leader-name"><small>FILIAL RAHBARI</small><h2>${branch.leader}</h2></div>
      </div>
      <div class="branch-details">
        <p class="detail-kicker"><span>${String(branch.id).padStart(2, "0")}</span> AL-AZIZ ACADEMY</p>
        <h2 id="branch-name">${branch.name}<br><em>filiali</em></h2>
        <div class="contact-buttons single">
          <a href="tel:${branch.phoneHref}"><span>${icons.phone}</span><div><small>Rahbar telefoni</small><b>${branch.phone}</b></div>${icons.arrow}</a>
        </div>
      </div>
    </section>
  </div>`;
  const backdrop = modalRoot.querySelector(".modal-backdrop");
  backdrop.querySelector(".modal-close").addEventListener("click", closeModal);
  backdrop.addEventListener("mousedown", event => { if (event.target === backdrop) closeModal(); });
}

function closeModal() { modalRoot.innerHTML = ""; }

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (modalRoot.innerHTML) closeModal();
  else if (activeRegion) renderRegions();
});

renderRegions();
