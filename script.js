// A visszaszámlálás a meghívón szereplő esküvői nap kezdetéig (14:30) számol.
const weddingDate = new Date(2027, 4, 22, 14, 30, 0);

function updateCountdown() {
  const remaining = weddingDate.getTime() - Date.now();
  const ids = ["days", "hours", "minutes", "seconds"];
  if (remaining <= 0) {
    ids.forEach(id => document.getElementById(id).textContent = "0");
    return;
  }
  const values = [
    Math.floor(remaining / 86400000),
    Math.floor((remaining % 86400000) / 3600000),
    Math.floor((remaining % 3600000) / 60000),
    Math.floor((remaining % 60000) / 1000)
  ];
  ids.forEach((id, index) => {
    document.getElementById(id).textContent = String(values[index]).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

const translations = {
  hu: {
    titlesz: "Krisztina & Krisztián | 2027. május 22.",
    nav_home: "Kezdőlap",
    nav_about: "Rólunk",
    datum: "2027. május 22.",
    nagy_nap_gomb: "A NAGY NAP RÉSZLETEI",
    visszajel: "VISSZAJELZÉS",
    rszv: "Részvételi szándékotokat, szállásigényeteket és esetleges ételintoleranciátokat kérjük, 2027. február 20-ig jelezzétek az alábbi űrlapon. (Meghívónként elég, ha egy személy tölti ki.)",
    kitoltom: "KITÖLTÖM A KÉRDŐÍVET",
    kedves: "KEDVES CSALÁDUNK ÉS BARÁTAINK!",
    soksz: "Sok szeretettel meghívunk Benneteket esküvőnkre, hogy azok előtt mondhassuk ki a boldogító igent, akik a legfontosabbak számunkra.",
    idohelysz: "IDŐPONT ÉS HELYSZÍN",
    map: "HELYSZÍN MEGNYITÁSA A TÉRKÉPEN ↗",
    leir: "Az egyházi szertartás a klubháztól 5 perc sétára található Cseres-tó partján lesz, a lagzi pedig a klubház másik oldalán lévő sátorban.",
    menet: "A NAP MENETE",
    tl_1: "Szobák elfoglalása",
    tl_2: "Vendégvárás",
    tl_3: "Egyházi szertartás",
    tl_4: "Gratulációk, fotózkodás",
    tl_5: "Vacsora",
    tl_6: "Torta",
    tl_7: "Éjféli büfé",
    tl_8: "Reggeli",
    countercim: "MÁR CSAK ENNYI VAN HÁTRA A NAGY NAPIG:",
    cd_days: "NAP",
    cd_hours: "ÓRA",
    cd_minutes: "PERC",
    cd_seconds: "MÁSODPERC",
    aji: "Tárgyi dologra nincs szükségünk, hisz megvan már mindenünk, de ha gondolsz ránk, egy kis borítékot hálásan köszönünk.",
    elerhet: "ELÉRHETŐSÉGÜNK:",
    menya: "Menyasszony",
    voleg: "Vőlegény",
    bucsu: "Mi már nagyon várjuk a közös ünneplést Veletek!"
    
  },
  en: {
    titlesz: "Krisztina & Krisztián | 22 May 2027.",
    nav_home: "Home",
    nav_about: "About Us",
    datum: "22 May 2027.",
    nagy_nap_gomb: "DETAILS",
    visszajel: "RSVP",
    rszv: "Please indicate your intention to participate, your accommodation requirements and any food intolerances by February 20, 2027.",
    kitoltom: "FILL OUT THE FORM",
    kedves: "DEAR FAMILY AND FRIENDS!",
    soksz: "We warmly invite you to our wedding, to say 'I do' surrounded by those who mean the most to us.",
    idohelysz: "TIME AND PLACE",
    map: "LOCATION ON GOOGLE MAPS ↗",
    leir: "The church ceremony will take place on the shores of Lake Cseres, a 5-minute walk from the clubhouse, and the wedding reception will be held in a tent on the other side of the clubhouse.",
    menet: "AGENDA",
    tl_1: "Room Check-in",
    tl_2: "Welcome Drinks",
    tl_3: "Church Ceremony",
    tl_4: "Congratulations & Photos",
    tl_5: "Dinner",
    tl_6: "Wedding Cake",
    tl_7: "Midnight Buffet",
    tl_8: "Breakfast",
    countercim: "COUNTDOWN TO THE BIG DAY:",
    cd_days: "DAYS",
    cd_hours: "HOURS",
    cd_minutes: "MINUTES",
    cd_seconds: "SECONDS",
    aji: "We already have everything we need, so no physical gifts, please. If you’d like to give us something, a little envelope would put our minds at ease!",
    elerhet: "CONTACTS:",
    menya: "Bride",
    voleg: "Fiancé",
    bucsu: "We are looking forward to celebrating with you!"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key];
  });
  localStorage.setItem('selectedLang', lang);
}

// Oldal betöltésekor a mentett vagy alapértelmezett nyelv beállítása
const savedLang = localStorage.getItem('selectedLang') || 'hu';
setLanguage(savedLang);


const showFormButton = document.getElementById("show-form");
const rsvpForm = document.getElementById("rsvp-form");
const rsvpIframe = rsvpForm.querySelector("iframe");

showFormButton.addEventListener("click", function () {
  rsvpForm.hidden = false;

  if (!rsvpIframe.src) {
    rsvpIframe.src = rsvpIframe.dataset.src;
  }

  showFormButton.style.display = "none";

const formPosition = rsvpForm.getBoundingClientRect().top + window.scrollY;

const isMobile = window.matchMedia("(max-width: 650px)").matches;

window.scrollTo({
  top: formPosition - (isMobile ? -50 : 350),
  behavior: "smooth"
});
});

