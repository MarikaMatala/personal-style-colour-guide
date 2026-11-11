
// Expanded bilingual labels for the additional profile options and navigation.
Object.assign(translations.fi, {
  navFamilies:"Väriperheet", familiesCta:"Selaa väriperheitä", footerFamilies:"Väriperheet ↗",
  olive:"Oliivinen", neutralWarm:"Neutraali-lämmin", neutralCool:"Neutraali-viileä",
  veryLight:"Erittäin vaalea", veryDeep:"Erittäin tumma", darkBlue:"Tummansininen", turquoise:"Turkoosi",
  oliveGreen:"Oliivinvihreä", centralHeterochromia:"Keskusheterokromia / eri värinen keskusta",
  faceInvertedTriangle:"Käänteinen kolmio", faceLong:"Pitkulaiset"
});
Object.assign(translations.en, {
  navFamilies:"Colour families", familiesCta:"Browse colour families", footerFamilies:"Colour families ↗",
  olive:"Olive", neutralWarm:"Neutral-warm", neutralCool:"Neutral-cool",
  veryLight:"Very light", veryDeep:"Very deep", darkBlue:"Dark blue", turquoise:"Turquoise",
  oliveGreen:"Olive green", centralHeterochromia:"Central heterochromia / different-coloured centre",
  faceInvertedTriangle:"Inverted triangle", faceLong:"Oblong"
});

// Add nuanced temperature options to the existing demo without treating them as diagnoses.
const originalCreatePalette = createPalette;
createPalette = function(profile) {
  if (profile.undertone === "olive" || profile.undertone === "neutralWarm") profile.undertone = "warm";
  if (profile.undertone === "neutralCool") profile.undertone = "cool";
  if (profile.undertone === "olive") profile.undertone = "neutral";
  if (profile.depth === "veryLight") profile.depth = "light";
  if (profile.depth === "veryDeep") profile.depth = "deep";
  if (profile.eyes === "darkBlue") profile.eyes = "blue";
  if (profile.eyes === "turquoise") profile.eyes = "blue";
  if (profile.eyes === "oliveGreen") profile.eyes = "green";
  if (profile.eyes === "centralHeterochromia") profile.eyes = "heterochromia";
  return originalCreatePalette(profile);
};
