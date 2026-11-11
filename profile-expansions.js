
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
  if (profile.undertone === "neutralWarm") profile.undertone = "warm";
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


// Broader result palettes: each direction now includes a richer range of colour families.
Object.assign(temperaturePalettes, {
  warm: ["#F1E2C3","#D8B77A","#C99A45","#C67B45","#B65F3B","#A94F3D","#9B6A45","#7D7948","#68764B","#47705A","#347A73","#704638"],
  cool: ["#F0E8E8","#D8B9C6","#C9879B","#A84F70","#76516F","#6F91B8","#526D8D","#7E8993","#526D78","#55796E","#3D7777","#343B4B"],
  neutral: ["#F0E6D8","#D5C6B5","#B8A18D","#9B806F","#8A7D79","#7D8977","#9C7880","#71818A","#777B66","#6D625D","#5C5B61","#4C5158"],
  flexible: ["#F1E6D0","#D5A06E","#B86F55","#6B4B5A","#82917D","#7E8993","#A88A9E","#6F91B8","#777442","#355C43","#245C5B","#654332"]
});
const paletteNames = {
 "#F1E2C3":["Warm ivory","Lämmin norsunluu"],"#D8B77A":["Honey gold","Hunajakulta"],"#C99A45":["Golden ochre","Kultainen okra"],"#C67B45":["Apricot","Aprikoosi"],"#B65F3B":["Rust","Ruoste"],"#A94F3D":["Brick red","Tiilenpunainen"],"#9B6A45":["Caramel","Karamelli"],"#7D7948":["Olive","Oliivi"],"#68764B":["Moss green","Sammal"],"#47705A":["Forest green","Metsänvihreä"],"#347A73":["Teal","Petrooli"],"#704638":["Chocolate","Suklaa"],
 "#F0E8E8":["Soft white","Pehmeä valkoinen"],"#D8B9C6":["Icy rose","Jäinen roosa"],"#C9879B":["Rose pink","Roosapinkki"],"#A84F70":["Berry","Marja"],"#76516F":["Plum","Luumu"],"#6F91B8":["Cornflower blue","Ruiskaunokinsininen"],"#526D8D":["Slate blue","Liuskekivensininen"],"#7E8993":["Smoke grey","Savunharmaa"],"#526D78":["Blue grey","Sinertävänharmaa"],"#55796E":["Pine green","Männynvihreä"],"#3D7777":["Cool teal","Viileä petrooli"],"#343B4B":["Charcoal navy","Hiilenharmaa laivastonsininen"],
 "#F0E6D8":["Cream","Kerma"],"#D5C6B5":["Oat beige","Kauranbeige"],"#B8A18D":["Taupe","Taupe"],"#9B806F":["Mushroom","Sienibeige"],"#8A7D79":["Rose taupe","Roosataupe"],"#7D8977":["Sage","Salvia"],"#9C7880":["Dusty rose","Pölyinen roosa"],"#71818A":["Blue grey","Sinertävänharmaa"],"#777B66":["Soft olive","Pehmeä oliivi"],"#6D625D":["Cocoa","Kaakao"],"#5C5B61":["Graphite","Grafiitti"],"#4C5158":["Charcoal","Hiilenharmaa"],
 "#F1E6D0":["Ivory","Norsunluu"],"#D5A06E":["Sand","Hiekka"],"#B86F55":["Copper","Kupari"],"#6B4B5A":["Plum","Luumu"],"#82917D":["Sage","Salvia"],"#7E8993":["Slate","Liuske"],"#A88A9E":["Mauve","Malva"],"#6F91B8":["Blue","Sininen"],"#777442":["Olive","Oliivi"],"#355C43":["Forest","Metsä"],"#245C5B":["Deep teal","Syvä petrooli"],"#654332":["Chocolate","Suklaa"]
};
const baseRenderPalette = renderPalette;
renderPalette = function(colours) {
 const paletteElement=document.getElementById("palette");
 paletteElement.replaceChildren();
 colours.forEach((colour)=>{
  const swatch=document.createElement("div");swatch.className="palette-swatch";swatch.style.backgroundColor=colour;
  const names=paletteNames[colour]||[colour,colour];
  const name=document.createElement("span");name.className="swatch-name";name.textContent=names[language==="fi"?1:0];
  const hex=document.createElement("span");hex.className="swatch-hex";hex.textContent=colour;
  swatch.append(name,hex);paletteElement.append(swatch);
 });
};
