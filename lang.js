let translations = {};
let currentLanguage = localStorage.getItem("lang") ?? "pl"; // Domyślny język (polski)

function setLanguage(lang) {
  fetch(`${lang}.json`)  // Ładuje plik pl.json lub en.json
    .then(res => res.json())
    .then(data => {
      translations = data;
      currentLanguage = lang;
      localStorage.setItem("lang", currentLanguage);
      updateText();
      setActiveFlag(lang);
    })
    .catch(err => console.error("Błąd tłumaczenia:", err));
}

function updateText() {
  // ——— INDEX.HTML ———
  const welcomeEl = document.getElementById("welcomeText");
  if (welcomeEl) {
    welcomeEl.innerHTML = `<p><strong>${translations.welcome}</strong></p>`;
  }

  const travelTextEl = document.getElementById("travelText");
  if (travelTextEl) travelTextEl.textContent = translations.travelText;

  const travelDescEl = document.getElementById("travelDesc");
  if (travelDescEl) travelDescEl.textContent = translations.travelDesc;

  const serviceTextEl = document.getElementById("serviceText");
  if (serviceTextEl) serviceTextEl.textContent = translations.serviceText;

  const serviceDescEl = document.getElementById("serviceDesc");
  if (serviceDescEl) serviceDescEl.textContent = translations.serviceDesc;

  // ——— MENU ———
  const moreButtons = document.querySelectorAll('.btn-more');
  moreButtons.forEach(button => {
    button.textContent = translations.btnMore;
  });

  const navHomeEl = document.getElementById("navHome");
  if (navHomeEl) navHomeEl.textContent = translations.navHome;

  const navAboutEl = document.getElementById("navAbout");
  if (navAboutEl) navAboutEl.textContent = translations.navAbout;

  const navOfferEl = document.getElementById("navOffer");
  if (navOfferEl) navOfferEl.textContent = translations.navOffer;

  const navContactEl = document.getElementById("navContact");
  if (navContactEl) navContactEl.textContent = translations.navContact;

  // ——— ABOUT.HTML ———
  const aboutTitleEl = document.getElementById("aboutTitle");
  if (aboutTitleEl) aboutTitleEl.textContent = translations.aboutTitle;

  const aboutTextEl = document.getElementById("aboutText");
  if (aboutTextEl) aboutTextEl.innerHTML = translations.aboutText;

  const aboutTitle2El = document.getElementById("aboutTitle2");
  if (aboutTitle2El) aboutTitle2El.textContent = translations.aboutTitle2;

  const aboutText2El = document.getElementById("aboutText2");
  if (aboutText2El) aboutText2El.innerHTML = translations.aboutText2;

  const firstBusCaptionEl = document.getElementById("firstBusCaption");
  if (firstBusCaptionEl) firstBusCaptionEl.textContent = translations.firstBusCaption;

  const iconEmissionEl = document.getElementById("iconEmission");
  if (iconEmissionEl) iconEmissionEl.textContent = translations.iconEmission;

  const iconACEl = document.getElementById("iconAC");
  if (iconACEl) iconACEl.textContent = translations.iconAC;

  const iconDVDEl = document.getElementById("iconDVD");
  if (iconDVDEl) iconDVDEl.textContent = translations.iconDVD;

  const iconWiFiEl = document.getElementById("iconWiFi");
  if (iconWiFiEl) iconWiFiEl.textContent = translations.iconWiFi;

  const iconWCEl = document.getElementById("iconWC");
  if (iconWCEl) iconWCEl.textContent = translations.iconWC;

  const offerIntroEl = document.getElementById("offerIntro");
  if (offerIntroEl) offerIntroEl.textContent = translations.offerIntro;

  const offer1El = document.getElementById("offer1Title");
  if (offer1El) offer1El.textContent = translations.offer1Title;

  const offer2El = document.getElementById("offer2Title");
  if (offer2El) offer2El.textContent = translations.offer2Title;

  const offer3El = document.getElementById("offer3Title");
  if (offer3El) offer3El.textContent = translations.offer3Title;

  const offer4El = document.getElementById("offer4Title");
  if (offer4El) offer4El.textContent = translations.offer4Title;

  const offer5El = document.getElementById("offer5Title");
  if (offer5El) offer5El.textContent = translations.offer5Title;

  const offer6El = document.getElementById("offer6Title");
  if (offer6El) offer6El.textContent = translations.offer6Title;

  // ——— STOPKA ———
  const footerTextEl = document.getElementById("footerText");
  if (footerTextEl) footerTextEl.textContent = translations.footerText;

  // ——— OFERTA: offer.html ———
  const offerKeys = {
    offerHeader: "offerHeader",
    offerText1: "offerText1",
    offerText2: "offerText2",
    offerText3: "offerText3",
    offerText4: "offerText4",
    offerText5: "offerText5",
    offerList1: "offerList1",
    offerList2: "offerList2",
    offerList3: "offerList3",
    offerList4: "offerList4",
    offerList5: "offerList5",
    offerList6: "offerList6",
    offerList7: "offerList7",
    offerList8: "offerList8",
    offerList9: "offerList9"
  };

  for (const [id, key] of Object.entries(offerKeys)) {
    const el = document.getElementById(id);
    if (el && translations[key]) {
      el.innerHTML = translations[key];
    }
  }

  // ——— KONTAKT: contact.html ———
  const contactHeaderEl = document.getElementById("contactHeader");
  if (contactHeaderEl) contactHeaderEl.textContent = translations.contactHeader;

  const contactNameEl = document.getElementById("contactName");
  if (contactNameEl) contactNameEl.textContent = translations.contactName;

  const nipLabelEl = document.getElementById("nipLabel");
  if (nipLabelEl) nipLabelEl.textContent = translations.nipLabel;

  const regonLabelEl = document.getElementById("regonLabel");
  if (regonLabelEl) regonLabelEl.textContent = translations.regonLabel;

  const contactAddressLabelEl = document.getElementById("contactAddressLabel");
  if (contactAddressLabelEl) contactAddressLabelEl.textContent = translations.contactAddressLabel;

  const contactAddressEl = document.getElementById("contactAddress");
  if (contactAddressEl) contactAddressEl.textContent = translations.contactAddress;

  const contactPhoneLabelEl = document.getElementById("contactPhoneLabel");
  if (contactPhoneLabelEl) contactPhoneLabelEl.textContent = translations.contactPhoneLabel;

  const contactPhoneEl = document.getElementById("contactPhone");
  if (contactPhoneEl) contactPhoneEl.textContent = translations.contactPhone;

  const contactEmailLabelEl = document.getElementById("contactEmailLabel");
  if (contactEmailLabelEl) contactEmailLabelEl.textContent = translations.contactEmailLabel;

  const contactEmailEl = document.getElementById("contactEmail");
  if (contactEmailEl) contactEmailEl.textContent = translations.contactEmail;
}

function setActiveFlag(lang) {
  const plFlagEl = document.getElementById("plFlag");
  const enFlagEl = document.getElementById("enFlag");

  if (plFlagEl && enFlagEl) {
    plFlagEl.style.opacity = lang === 'pl' ? '1' : '0.4';
    enFlagEl.style.opacity = lang === 'en' ? '1' : '0.4';
  }
}

// Uruchom tłumaczenie po załadowaniu DOM
document.addEventListener("DOMContentLoaded", () => setLanguage(currentLanguage));