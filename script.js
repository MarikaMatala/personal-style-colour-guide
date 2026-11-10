// Bilingual content and labels for the Finnish and English versions.
const translations = {
  fi: {
    navAbout: "Projektista", navGuide: "Väriopas", navAI: "Tekoäly ja oppiminen",
    eyebrow: "Henkilökohtainen väri- ja tyyliopas",
    heroTitle: "Omat värisi.<br><em>Oma tyylisi.</em>",
    heroLead: "Tutki värien ominaisuuksia, kokeile erilaisia yhdistelmiä ja kokoa inspiraatiota omaan tyyliisi. Ei tiukkoja sääntöjä — vain vaihtoehtoja, oivalluksia ja luovuutta.",
    heroCta: 'Kokeile väriopasta <span aria-hidden="true">↘</span>',
    aboutEyebrow: "Projektista", aboutTitle: "Lähtökohtana olet sinä.",
    aboutText: "Tämä kaksikielinen demo auttaa tutkimaan ihon, silmien ja hiusten värien sekä kokonaiskontrastin vaikutusta henkilökohtaiseen väripalettiin. Tulokset ovat suuntaa-antavia inspiraatiota — eivät diagnooseja tai pukeutumissääntöjä.",
    principle1Title: "Yksilöllisyys", principle1Text: "Kaikkia ei tarvitse sovittaa neljään vuodenaikaan. Piirteet ja niiden yhdistelmät ovat yksilöllisiä.",
    principle2Title: "Monimuotoisuus", principle2Text: "Huomioimme erilaiset ihonsävyt, silmien ja hiusten värit sekä niiden vaihtelun.",
    principle3Title: "Vapaus kokeilla", principle3Text: "Värit ovat inspiraatiota. Käytä niitä, joista itse pidät ja joissa viihdyt.",
    guideEyebrow: "Interaktiivinen demo", guideTitle: "Rakenna oma väriprofiilisi.",
    guideText: "Valitse lähimmät vaihtoehdot. Voit ohittaa kohdan, jos et ole varma. Jokainen valinta vaikuttaa paletin sävyihin tai korostusväreihin.",
    skinLegend: "Ihon pohjasävy", warm: "Lämmin", cool: "Viileä", neutral: "Neutraali", unsure: "En ole varma",
    depthLegend: "Ihon sävyn syvyys", light: "Vaalea", medium: "Keskisyvä", deep: "Tumma / syvä", varied: "Vaihtelee",
    eyesLegend: "Silmien väri", blue: "Sininen / harmaa", green: "Vihreä", hazel: "Pähkinänruskea / sekoittunut", brown: "Ruskea / hyvin tumma", other: "Muu / monivärinen",
    hairLegend: "Hiusten väri", blonde: "Vaalea / blondi", red: "Punainen / kupari", brownHair: "Ruskea", black: "Musta", grey: "Harmaa / valkoinen", dyed: "Värjätty / monivärinen",
    contrastLegend: "Piirteiden kokonaiskontrasti", soft: "Pehmeä / matala", midContrast: "Keskitasoinen", high: "Voimakas / korkea",
    makePalette: "Luo suuntaa-antava paletti", resultEyebrow: "Sinun kokeilupalettisi",
    resultNote: "Tämä on yksinkertaistettu demo, ei ammattilaisen tekemä värianalyysi. Valaistus, näytön asetukset ja omat mieltymyksesi vaikuttavat värien kokemiseen.",
    reset: "Muokkaa valintoja", aiEyebrow: "Oppiminen ja kehittäminen", aiTitle: "Tekoäly työskentelyn tukena.",
    aiText: "Projektissa on hyödynnetty ChatGPT:tä, OpenAI Codexia, Google Geminiä ja Claudea ideointiin, suunnitteluun, tiedonhakuun, tekniseen ohjaukseen ja oppimiseen. Tavoitteena on oppia käyttämään tekoälypohjaisia työkaluja vastuullisesti ja arvioida niiden ehdotuksia kriittisesti. Oma oppiminen ja osaamisen kehittäminen ovat projektin keskiössä.",
    footerText: "Oppimisprojekti ja työnäyte · Suunnittelu ja kehitys etenevät vaiheittain.",
    repoLink: "GitHub-repositorio ↗", portfolioLink: "Portfolio ↗",
    resultWarm: "Lämmin värisuunta", resultCool: "Viileä värisuunta", resultNeutral: "Neutraali värisuunta", resultFlexible: "Useita värisuuntia tutkittavaksi",
    depthLight: "Paletissa painottuvat vaaleammat sävyt.", depthMedium: "Paletissa on keskitummia ja tasapainoisia sävyjä.", depthDeep: "Paletissa painottuvat syvät ja tummemmat sävyt.", depthVaried: "Mukana on sekä vaaleita että syviä vaihtoehtoja.",
    contrastSoft: "Korostusvärit ovat pehmeitä ja hillittyjä.", contrastMedium: "Korostusväreissä on maltillista erottuvuutta.", contrastHigh: "Korostusvärit ovat selkeämpiä ja voimakkaampia.",
    eyeAccent: "Silmien väristä valittu korostussävy", hairAccent: "Hiusten väristä valittu korostussävy",
    resultWarmText: "Kokeile esimerkiksi terrakottaa, lämmintä ruskeaa, oliivinvihreää ja pehmeää kultaa.",
    resultCoolText: "Kokeile esimerkiksi luumua, marjaisia sävyjä, savunsinistä ja viileitä vihreitä.",
    resultNeutralText: "Vertaile lämpimiä ja viileitä sävyjä rinnakkain, esimerkiksi taupea, ruusua, metsänvihreää ja savunsinistä.",
    resultFlexibleText: "Pohjasävyä ei ole määritelty, joten kokeile lämpimiä, viileitä ja neutraaleja vaihtoehtoja rinnakkain."
  },
  en: {
    navAbout: "About", navGuide: "Colour guide", navAI: "AI & learning",
    eyebrow: "Personal colour and style guide",
    heroTitle: "Your colours.<br><em>Your style.</em>",
    heroLead: "Explore colour characteristics, experiment with combinations and collect inspiration for your own style. No strict rules — just options, discoveries and creativity.",
    heroCta: 'Explore the colour guide <span aria-hidden="true">↘</span>',
    aboutEyebrow: "About the project", aboutTitle: "You are the starting point.",
    aboutText: "This bilingual demo explores how skin, eye and hair colours, together with overall contrast, can inform a personal colour palette. Results are indicative inspiration — not diagnoses or clothing rules.",
    principle1Title: "Individuality", principle1Text: "Not everyone needs to fit into four seasons. Features and their combinations are individual.",
    principle2Title: "Inclusivity", principle2Text: "The guide considers a wide range of skin tones, eye and hair colours, and variations.",
    principle3Title: "Freedom to explore", principle3Text: "Colours are inspiration. Wear the colours you enjoy and feel comfortable in.",
    guideEyebrow: "Interactive demo", guideTitle: "Build your colour profile.",
    guideText: "Choose the closest options. You can skip a question if you are unsure. Each selection influences the palette or its accent colours.",
    skinLegend: "Skin undertone", warm: "Warm", cool: "Cool", neutral: "Neutral", unsure: "Not sure",
    depthLegend: "Skin depth", light: "Light", medium: "Medium", deep: "Deep", varied: "Varies",
    eyesLegend: "Eye colour", blue: "Blue / grey", green: "Green", hazel: "Hazel / mixed", brown: "Brown / very dark", other: "Other / multicoloured",
    hairLegend: "Hair colour", blonde: "Blonde / light", red: "Red / copper", brownHair: "Brown", black: "Black", grey: "Grey / white", dyed: "Dyed / multicoloured",
    contrastLegend: "Overall feature contrast", soft: "Soft / low", midContrast: "Medium", high: "Strong / high",
    makePalette: "Generate an indicative palette", resultEyebrow: "Your exploration palette",
    resultNote: "This is a simplified demo, not a professional colour analysis. Lighting, display settings and personal preferences all affect how colours appear.",
    reset: "Edit your choices", aiEyebrow: "Learning and development", aiTitle: "AI as a learning companion.",
    aiText: "ChatGPT, OpenAI Codex, Google Gemini and Claude have supported brainstorming, planning, research, technical guidance and learning throughout this project. The goal is to learn how to use AI-powered tools responsibly and evaluate their suggestions critically. Personal learning and skills development remain central.",
    footerText: "Learning project and portfolio sample · Design and development are ongoing.",
    repoLink: "GitHub repository ↗", portfolioLink: "Portfolio ↗",
    resultWarm: "Warm colour direction", resultCool: "Cool colour direction", resultNeutral: "Neutral colour direction", resultFlexible: "Several colour directions to explore",
    depthLight: "The palette emphasises lighter shades.", depthMedium: "The palette uses balanced, medium-depth shades.", depthDeep: "The palette emphasises deeper and darker shades.", depthVaried: "The palette includes both lighter and deeper options.",
    contrastSoft: "Accent colours are soft and muted.", contrastMedium: "Accent colours have moderate definition.", contrastHigh: "Accent colours are clearer and more vivid.",
    eyeAccent: "Accent shade selected from your eye-colour choice", hairAccent: "Accent shade selected from your hair-colour choice",
    resultWarmText: "Try terracotta, warm brown, olive green and soft gold.",
    resultCoolText: "Try plum, berry shades, smoky blue and cool greens.",
    resultNeutralText: "Compare warm and cool shades side by side, such as taupe, rose, forest green and smoky blue.",
    resultFlexibleText: "No undertone has been selected, so compare warm, cool and neutral options side by side."
  }
};

// Keep the current language in one place so results follow the selected interface language.
let language = "fi";
const languageButton = document.getElementById("language-toggle");

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = nextLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translatedText = translations[nextLanguage][element.dataset.i18n];
    if (translatedText !== undefined) element.innerHTML = translatedText;
  });

  languageButton.textContent = nextLanguage === "fi" ? "EN" : "FI";
  languageButton.setAttribute(
    "aria-label",
    nextLanguage === "fi" ? "Switch language to English" : "Vaihda kieleksi suomi"
  );
  document.title = "Personal Style & Colour Guide";
}

// Palette foundations are separated by temperature, skin depth and contrast.
const temperaturePalettes = {
  warm: ["#A85E45", "#C58A55", "#D6B77A", "#687D58"],
  cool: ["#6B4B5A", "#8A6079", "#7E8993", "#526D78"],
  neutral: ["#9B806F", "#7D8977", "#9C7880", "#71818A"],
  flexible: ["#B86F55", "#6B4B5A", "#82917D", "#7E8993"]
};

const depthAccents = {
  light: ["#E5C9A8", "#D7DCE0"],
  medium: ["#C4AD8E", "#B58A9C"],
  deep: ["#76513F", "#443B48"],
  varied: ["#E5C9A8", "#443B48"]
};

const contrastAccents = {
  soft: ["#B9A99B", "#A6B0A0"],
  medium: ["#C6A36A", "#A78A91"],
  high: ["#D16A45", "#345A70"]
};

// Eye and hair selections add personal accent colours without assuming their undertone.
const eyeAccents = {
  blue: "#718FA5",
  green: "#71845B",
  hazel: "#A18A55",
  brown: "#76513F",
  other: "#8A7899"
};

const hairAccents = {
  blonde: "#D6B77A",
  red: "#B86F55",
  brown: "#76513F",
  black: "#38343A",
  grey: "#AEB4B8",
  dyed: "#9273A6",
  unsure: "#A78A91"
};

// Convert the selected profile into a palette and a short explanation.
function createPalette(profile) {
  const temperature = ["warm", "cool", "neutral"].includes(profile.undertone)
    ? profile.undertone
    : "flexible";

  const depth = profile.depth || "medium";
  const contrast = ["soft", "medium", "high"].includes(profile.contrast)
    ? profile.contrast
    : "medium";

  const colours = [
    ...temperaturePalettes[temperature],
    ...depthAccents[depth],
    ...contrastAccents[contrast],
    eyeAccents[profile.eyes] || eyeAccents.other,
    hairAccents[profile.hair] || hairAccents.unsure
  ];

  // Keep the palette compact and remove duplicate hex values.
  return {
    temperature,
    depth,
    contrast,
    colours: [...new Set(colours)].slice(0, 10)
  };
}

// Render the palette with text labels so colour is not communicated by colour alone.
function renderPalette(colours) {
  const paletteElement = document.getElementById("palette");
  paletteElement.replaceChildren();

  colours.forEach((colour) => {
    const swatch = document.createElement("div");
    swatch.className = "palette-swatch";
    swatch.style.backgroundColor = colour;
    swatch.textContent = colour;
    paletteElement.append(swatch);
  });
}

// Apply the initial Finnish interface and handle the language toggle.
setLanguage("fi");

languageButton.addEventListener("click", () => {
  setLanguage(language === "fi" ? "en" : "fi");
});

// Read the form, generate the palette and explain which dimensions influenced it.
document.getElementById("colour-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const profile = {
    undertone: formData.get("undertone"),
    depth: formData.get("depth"),
    eyes: formData.get("eyes"),
    hair: formData.get("hair"),
    contrast: formData.get("contrast")
  };

  const result = createPalette(profile);
  const copy = translations[language];
  const titleKey = {
    warm: "resultWarm",
    cool: "resultCool",
    neutral: "resultNeutral",
    flexible: "resultFlexible"
  }[result.temperature];

  const depthKey = {
    light: "depthLight",
    medium: "depthMedium",
    deep: "depthDeep",
    varied: "depthVaried"
  }[result.depth];

  const contrastKey = {
    soft: "contrastSoft",
    medium: "contrastMedium",
    high: "contrastHigh"
  }[result.contrast];

  document.getElementById("result-title").textContent = copy[titleKey];
  document.getElementById("result-description").textContent = [
    copy[result.temperature === "warm" ? "resultWarmText"
      : result.temperature === "cool" ? "resultCoolText"
      : result.temperature === "neutral" ? "resultNeutralText" : "resultFlexibleText"],
    copy[depthKey],
    copy[contrastKey]
  ].join(" ");

  renderPalette(result.colours);

  const resultPanel = document.getElementById("result");
  resultPanel.hidden = false;
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Let visitors return to the form and adjust their selections.
document.getElementById("reset-button").addEventListener("click", () => {
  document.getElementById("result").hidden = true;
  document.getElementById("colour-form").scrollIntoView({ behavior: "smooth", block: "start" });
});
