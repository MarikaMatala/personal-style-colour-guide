// Bilingual colour-family library. HEX values are illustrative digital swatches.
const copy = {
 fi:{home:"Etusivu",analysis:"Värianalyysi",browse:"Väriperheet",compareNav:"Palettivertailu",compareEyebrow:"Väripalettien vertailu",compareTitle:"Aseta kaksi värimaailmaa <em>rinnakkain.</em>",compareIntro:"Valitse kaksi väriperhettä ja tutki niiden sävyjä vierekkäin. Voit vaihtaa valintoja milloin tahansa.",firstPalette:"Ensimmäinen väriperhe",secondPalette:"Toinen väriperhe",compareNote:"Vertailu näyttää värien digitaaliset sävyt rinnakkain. Se ei määritä, kumpi paletti sopii henkilölle paremmin.",eyebrow:"Värien inspiraatiokirjasto",title:"Tutustu <em>väriperheisiin.</em>",intro:"Selaa väriperheitä ilman värianalyysikyselyä. Tutki sävyjä, vertaile värimaailmoja ja kopioi haluamasi HEX-koodit. Vertaa myös kahta palettia rinnakkain.",browseCta:"Selaa värikarttoja ↓",catalogue:"Väriperhekatalogi",catalogueTitle:"Löydä kiinnostava värimaailma.",filterIntro:"Suodata väriperheitä vuodenajan, lämpötilan, vaaleuden ja värien voimakkuuden mukaan.",searchLabel:"Hae väriperhettä tai sävyä",searchPlaceholder:"Esim. oliivi, burgundi, soft summer",seasonLabel:"Vuodenaika",temperatureLabel:"Lämpötila",qualityLabel:"Värien ominaisuus",all:"Kaikki",noResults:"Näillä suodattimilla ei löytynyt väriperheitä. Kokeile muuttaa hakua.",disclaimer:"Väriperheiden nimet ja rajaukset vaihtelevat eri värianalyysijärjestelmissä. Paletit ovat inspiraatiota, eivät ehdottomia sääntöjä. Näytön asetukset ja valaistus vaikuttavat värien ulkonäköön.",footer:"Oppimisprojekti ja työnäyte · Suunnittelu ja kehitys etenevät vaiheittain.",back:"Takaisin värioppaaseen ↗",copy:"Kopioi HEX",copied:"Kopioitu",warm:"Lämmin",cool:"Viileä",neutral:"Neutraali",light:"Vaalea",deep:"Syvä",soft:"Murrettu",bright:"Kirkas",springOpt:"Kevät",summerOpt:"Kesä",autumnOpt:"Syksy",winterOpt:"Talvi",otherOpt:"Muut väriperheet"},
 en:{home:"Home",analysis:"Colour analysis",browse:"Colour families",compareNav:"Palette comparison",compareEyebrow:"Palette comparison",compareTitle:"Put two colour worlds <em>side by side.</em>",compareIntro:"Choose two colour families and explore their shades side by side. You can change either selection at any time.",firstPalette:"First colour family",secondPalette:"Second colour family",compareNote:"This comparison displays digital colour swatches side by side. It does not determine which palette suits a person better.",eyebrow:"Colour inspiration library",title:"Explore <em>colour families.</em>",intro:"Browse colour families without completing an analysis. Explore shades, compare palettes, copy HEX codes and compare two palettes side by side.",browseCta:"Browse palettes ↓",catalogue:"Colour family catalogue",catalogueTitle:"Find a colour world to explore.",filterIntro:"Filter colour families by season, temperature, depth and clarity.",searchLabel:"Search families or shades",searchPlaceholder:"E.g. olive, burgundy, soft summer",seasonLabel:"Season",temperatureLabel:"Temperature",qualityLabel:"Colour quality",all:"All",noResults:"No colour families match these filters. Try changing your search.",disclaimer:"Colour-family names and boundaries vary between colour-analysis systems. Palettes are inspiration, not strict rules. Display settings and lighting affect how colours appear.",footer:"Learning project and portfolio sample · Design and development are ongoing.",back:"Back to the colour guide ↗",copy:"Copy HEX",copied:"Copied",warm:"Warm",cool:"Cool",neutral:"Neutral",light:"Light",deep:"Deep",soft:"Soft",bright:"Bright",springOpt:"Spring",summerOpt:"Summer",autumnOpt:"Autumn",winterOpt:"Winter",otherOpt:"Other colour families"}
};
const families = [
 {season:"spring",name:"Light Spring",fi:"Vaalea kevät",temp:"warm",quality:["light","bright"],descFi:"Vaalea, lämmin ja raikas kokonaisuus. Kokeile kirkkaita mutta kevyitä sävyjä.",descEn:"A light, warm and fresh palette. Explore clear yet delicate shades.",colors:[["Vanilla","Vanilja","#F4E6B8"],["Peach","Persikka","#F4B995"],["Apricot","Aprikoosi","#EFA477"],["Light Coral","Vaalea koralli","#EF8F7B"],["Aqua","Akvamariini","#83C9C2"],["Mint","Minttu","#A8D5B5"],["Warm Sky","Lämmin taivaansininen","#8FC4D6"],["Butter Yellow","Voinkeltainen","#F2D56B"],["Light Camel","Vaalea kameli","#C9A477"],["Warm Pink","Lämmin pinkki","#E99A9B"]]},
 {season:"spring",name:"Warm Spring",fi:"Lämmin kevät",temp:"warm",quality:["warm","bright"],descFi:"Kultainen ja eloisa paletti, jossa on lämpimiä koralli-, vihreä- ja keltaisia sävyjä.",descEn:"A golden, lively palette with warm coral, green and yellow shades.",colors:[["Coral","Koralli","#F07859"],["Tomato Red","Tomaattipunainen","#E65B45"],["Marigold","Kehäkukka","#E8B83F"],["Golden Yellow","Kultakeltainen","#E9C34A"],["Leaf Green","Lehdenvihreä","#6FAD65"],["Grass Green","Ruohonvihreä","#4D9B62"],["Turquoise","Turkoosi","#36AFA8"],["Warm Teal","Lämmin petrooli","#267F79"],["Camel","Kameli","#BD8B54"],["Ivory","Norsunluu","#F4E8CE"]]},
 {season:"spring",name:"True Spring",fi:"Puhdas kevät",temp:"warm",quality:["warm","bright"],descFi:"Selvästi lämmin, keskivaalea ja kirkas värimaailma.",descEn:"Clearly warm, medium-light and vivid colour direction.",colors:[["Poppy","Unikko","#E94F45"],["Salmon","Lohi","#EF8F78"],["Warm Pink","Lämmin pinkki","#E98291"],["Goldenrod","Kultakeltainen","#D8A62E"],["Apple Green","Omenanvihreä","#83B94E"],["Jade","Jade","#3EAA83"],["Clear Turquoise","Kirkas turkoosi","#26AEB0"],["Warm Blue","Lämmin sininen","#438EB4"],["Cream","Kerma","#F1E2C3"],["Honey","Hunaja","#C99037"]]},
 {season:"spring",name:"Bright Spring",fi:"Kirkas kevät",temp:"warm",quality:["bright"],descFi:"Kirkas, energinen ja suhteellisen lämmin paletti, jossa on myös voimakkaita kontrasteja.",descEn:"A clear, energetic and relatively warm palette with stronger contrasts.",colors:[["Clear Red","Kirkas punainen","#E83242"],["Fuchsia","Fuksia","#D92C85"],["Cobalt","Koboltti","#2456B8"],["Bright Turquoise","Kirkas turkoosi","#00AEB2"],["Emerald","Smaragdi","#15966C"],["Lemon","Sitruuna","#E9DB35"],["Tangerine","Mandariini","#F07832"],["Icy Pink","Jäinen pinkki","#F3B4D0"],["Bright Navy","Kirkas laivastonsininen","#183C70"],["White","Valkoinen","#FFFFFF"]]},
 {season:"summer",name:"Light Summer",fi:"Vaalea kesä",temp:"cool",quality:["light","soft"],descFi:"Vaalea, viileä ja ilmava paletti, jossa on utuisia pastelleja.",descEn:"A light, cool and airy palette with misty pastels.",colors:[["Powder Blue","Puuterinsininen","#B5CDE0"],["Periwinkle","Periwinkle","#A7AED2"],["Lavender","Laventeli","#C1B1D5"],["Rose","Roosa","#DCAAB5"],["Soft Pink","Pehmeä pinkki","#E9C4CC"],["Mint","Minttu","#B8D3C8"],["Seafoam","Merivaahto","#A7CDC5"],["Cool Beige","Viileä beige","#C9BFB5"],["Pearl Grey","Helmenharmaa","#C9CDD0"],["Soft Navy","Pehmeä laivastonsininen","#52677E"]]},
 {season:"summer",name:"Cool Summer",fi:"Viileä kesä",temp:"cool",quality:["cool","soft"],descFi:"Viileä, rauhallinen ja tasapainoinen paletti: roosaa, sinistä, marjaa ja harmaata.",descEn:"A cool, calm and balanced palette of rose, blue, berry and grey.",colors:[["Rose Pink","Ruusupinkki","#C9879B"],["Raspberry","Vadelma","#A84F70"],["Mauve","Malva","#A77F98"],["Plum","Luumu","#76516F"],["Slate Blue","Liuskekivensininen","#667F9B"],["Denim","Denim","#52769B"],["Pine","Mänty","#55796E"],["Cool Teal","Viileä petrooli","#3D7777"],["Charcoal","Hiilenharmaa","#50545B"],["Soft White","Pehmeä valkoinen","#E9E7E3"]]},
 {season:"summer",name:"True Summer",fi:"Puhdas kesä",temp:"cool",quality:["cool","soft"],descFi:"Viileä ja keskisävyinen paletti, jossa on hillittyä värikylläisyyttä.",descEn:"A cool, medium-value palette with restrained saturation.",colors:[["Dusty Rose","Pölyinen roosa","#B77C8A"],["Berry","Marja","#934B67"],["Raspberry Pink","Vadelmapinkki","#B65C82"],["Heather","Kanerva","#927D9D"],["Cornflower","Ruiskaunokki","#6F91B8"],["Steel Blue","Teräksensininen","#607D95"],["Eucalyptus","Eukalyptus","#78958A"],["Pine Green","Männynvihreä","#4F7269"],["Taupe","Taupe","#8A7D79"],["Soft Charcoal","Pehmeä hiilenharmaa","#55565A"]]},
 {season:"summer",name:"Soft Summer",fi:"Pehmeä kesä",temp:"cool",quality:["soft"],descFi:"Murrettu, pehmeä ja usein neutraali-viileä värimaailma.",descEn:"A muted, soft and often neutral-cool colour direction.",colors:[["Dusty Pink","Pölyinen pinkki","#C08E9A"],["Mauve","Malva","#A88A9E"],["Muted Plum","Murrettu luumu","#80677E"],["Sage","Salvia","#9BA995"],["Eucalyptus","Eukalyptus","#829B91"],["Muted Teal","Murrettu petrooli","#638A88"],["Blue Grey","Sinertävänharmaa","#8799A8"],["Mushroom","Sienibeige","#A69A8D"],["Soft Cocoa","Pehmeä kaakao","#8A746B"],["Rose Taupe","Roosataup","#A58C8C"]]},
 {season:"summer",name:"Muted Summer",fi:"Murrettu kesä",temp:"cool",quality:["soft"],descFi:"Matalan kontrastin utuinen paletti, jossa sävyt sulautuvat toisiinsa.",descEn:"A misty, low-contrast palette with softly blended shades.",colors:[["Misty Blue","Utuinen sininen","#A5B7C3"],["Smoke","Savunharmaa","#A3A5A6"],["Heather Rose","Kanervaroosa","#B28E9C"],["Lilac Grey","Liilanharmaa","#A59BAB"],["Soft Olive","Pehmeä oliivi","#92977C"],["Moss","Sammal","#7F896F"],["Stone","Kivi","#A69F96"],["Cocoa","Kaakao","#927B70"],["Muted Berry","Murrettu marja","#986F7E"],["Soft Navy","Pehmeä laivastonsininen","#5D6D7D"]]},
 {season:"autumn",name:"Warm Autumn",fi:"Lämmin syksy",temp:"warm",quality:["warm","deep"],descFi:"Lämmin, maanläheinen ja kultainen paletti.",descEn:"A warm, earthy and golden palette.",colors:[["Rust","Ruoste","#B65F3B"],["Terracotta","Terrakotta","#C46D52"],["Burnt Orange","Poltettu oranssi","#C65B2E"],["Mustard","Sinappi","#C49A35"],["Ochre","Okra","#B8872D"],["Olive","Oliivi","#777442"],["Moss","Sammal","#68734A"],["Forest Green","Metsänvihreä","#355C43"],["Camel","Kameli","#B58250"],["Warm Chocolate","Lämmin suklaa","#654332"],["Copper","Kupari","#B66B45"],["Cream","Kerma","#E9D9B9"]]},
 {season:"autumn",name:"True Autumn",fi:"Puhdas syksy",temp:"warm",quality:["warm","deep"],descFi:"Täyteläinen, selvästi lämmin ja luonnon sävyistä inspiroitunut paletti.",descEn:"A rich, distinctly warm palette inspired by natural earth tones.",colors:[["Pumpkin","Kurpitsa","#D87532"],["Paprika","Paprika","#B84B35"],["Brick","Tiilenpunainen","#A94F3D"],["Cinnamon","Kaneli","#A66A43"],["Saffron","Sahrami","#D29B2E"],["Avocado","Avokado","#788447"],["Fern","Saniainen","#55734D"],["Teal","Petrooli","#347A73"],["Mahogany","Mahogany","#704334"],["Caramel","Karamelli","#B77D48"],["Bronze","Pronssi","#8A633D"],["Ivory","Norsunluu","#E9DFC8"]]},
 {season:"autumn",name:"Soft Autumn",fi:"Pehmeä syksy",temp:"warm",quality:["soft"],descFi:"Pehmeä, murrettu ja usein neutraali-lämmin paletti.",descEn:"A soft, muted and often neutral-warm palette.",colors:[["Warm Taupe","Lämmin taupe","#A18C7A"],["Mushroom","Sienibeige","#AA9986"],["Dusty Peach","Pölyinen persikka","#D5A18B"],["Muted Coral","Murrettu koralli","#C7836D"],["Clay","Savi","#B8755D"],["Sage","Salvia","#9A9B7C"],["Olive","Oliivi","#85835D"],["Moss","Sammal","#73795A"],["Muted Teal","Murrettu petrooli","#668A82"],["Cocoa","Kaakao","#8C7565"],["Rosewood","Ruusupuu","#9B6D68"]]},
 {season:"autumn",name:"Deep Autumn",fi:"Syvä syksy",temp:"warm",quality:["deep"],descFi:"Syvä, lämmin ja runsas paletti, jossa on tummaa vihreää, punaista ja ruskeaa.",descEn:"A deep, warm and rich palette of dark greens, reds and browns.",colors:[["Oxblood","Häränveri","#542E32"],["Burgundy","Burgundi","#713B46"],["Deep Rust","Syvä ruoste","#91472F"],["Chocolate","Suklaa","#4B3028"],["Espresso","Espresso","#382923"],["Dark Olive","Tumma oliivi","#4B5033"],["Pine","Mänty","#234A3B"],["Petrol","Petrooli","#245C5B"],["Deep Teal","Syvä petrooli","#174F50"],["Bronze","Pronssi","#87613B"],["Mustard","Sinappi","#A17A2C"],["Cream","Kerma","#DCCBAA"]]},
 {season:"autumn",name:"Dark Autumn",fi:"Tumma syksy",temp:"warm",quality:["deep"],descFi:"Tumma, lämmin ja voimakas värimaailma, jossa on syviä jalokivi- ja maanläheisiä sävyjä.",descEn:"A dark, warm and strong palette of deep jewel and earthy shades.",colors:[["Black Coffee","Musta kahvi","#302522"],["Dark Chocolate","Tumma suklaa","#3D2924"],["Mahogany","Mahogany","#633A32"],["Wine","Viini","#5A2638"],["Deep Teal","Syvä petrooli","#174F55"],["Pine Green","Männynvihreä","#1F493B"],["Dark Olive","Tumma oliivi","#41472D"],["Rust","Ruoste","#9A4D31"],["Burnt Sienna","Poltettu sienna","#A45135"],["Antique Gold","Antiikkikulta","#A17B3F"]]},
 {season:"winter",name:"Cool Winter",fi:"Viileä talvi",temp:"cool",quality:["cool","bright"],descFi:"Viileä ja selkeä paletti, jossa on teräviä jalokivisävyjä.",descEn:"A cool and clear palette with crisp jewel tones.",colors:[["True Red","Puhdas punainen","#C9233B"],["Fuchsia","Fuksia","#C21878"],["Royal Blue","Kuninkaansininen","#254B9B"],["Sapphire","Safiiri","#2455A4"],["Emerald","Smaragdi","#087A59"],["Icy Pink","Jäinen pinkki","#E9B8D0"],["Icy Blue","Jäänsininen","#B8D6E9"],["Amethyst","Ametisti","#76519A"],["Black","Musta","#17191D"],["Optic White","Optinen valkoinen","#FFFFFF"]]},
 {season:"winter",name:"True Winter",fi:"Puhdas talvi",temp:"cool",quality:["cool","bright"],descFi:"Kylmä, kirkas ja kontrastinen värimaailma.",descEn:"A cool, clear and high-contrast colour direction.",colors:[["Black","Musta","#151515"],["White","Valkoinen","#FFFFFF"],["Crimson","Karmiini","#B21F3A"],["Ruby","Rubiini","#A51D45"],["Magenta","Magenta","#C00078"],["Cobalt","Koboltti","#214EAD"],["Ice Blue","Jääsininen","#B6D7EB"],["Emerald","Smaragdi","#087A59"],["Pine","Mänty","#15513E"],["Violet","Violetti","#673B91"],["Silver","Hopea","#BFC4CC"]]},
 {season:"winter",name:"Deep Winter",fi:"Syvä talvi",temp:"cool",quality:["deep"],descFi:"Syvä ja viileä paletti, jossa on tummia neutraaleja ja voimakkaita jalokivisävyjä.",descEn:"A deep, cool palette with dark neutrals and rich jewel tones.",colors:[["Ink Navy","Musteensininen","#17263F"],["Black","Musta","#171719"],["Charcoal","Hiilenharmaa","#373B42"],["Deep Berry","Syvä marja","#652B49"],["Plum","Luumu","#56345F"],["Deep Emerald","Syvä smaragdi","#07553F"],["Pine","Mänty","#174638"],["Sapphire","Safiiri","#214B8B"],["Burgundy","Burgundi","#652B3D"],["Silver","Hopea","#BFC4CC"]]},
 {season:"winter",name:"Dark Winter",fi:"Tumma talvi",temp:"cool",quality:["deep"],descFi:"Tumma ja viileä värimaailma, jossa on voimakasta syvyyttä ja kontrastia.",descEn:"A dark, cool colour direction with depth and contrast.",colors:[["Near Black","Lähes musta","#19191E"],["Black Cherry","Mustakirsikka","#3F1E30"],["Oxblood","Häränveri","#522638"],["Midnight Blue","Keskiyönsininen","#172A4A"],["Dark Teal","Tumma petrooli","#174E52"],["Pine","Mänty","#1C453C"],["Aubergine","Munakoiso","#492B4C"],["Wine","Viini","#5D2940"],["Cool Espresso","Viileä espresso","#382D30"],["Icy Rose","Jäinen roosa","#D8B9C6"]]},
 {season:"winter",name:"Bright Winter",fi:"Kirkas talvi",temp:"cool",quality:["bright"],descFi:"Erittäin kirkas ja kontrastinen paletti, jossa värit ovat puhtaita ja voimakkaita.",descEn:"A very clear and high-contrast palette with pure, vivid colours.",colors:[["Electric Blue","Sähkönsininen","#175BCE"],["Fuchsia","Fuksia","#D0008F"],["Cherry Red","Kirsikanpunainen","#D51E3D"],["Emerald","Smaragdi","#00845A"],["Icy Cyan","Jäinen syaani","#A8E1E8"],["Violet","Violetti","#7136A5"],["Lemon","Sitruuna","#E7E63D"],["Black","Musta","#151515"],["White","Valkoinen","#FFFFFF"],["Magenta","Magenta","#C00088"]]},
 {season:"other",name:"Warm Neutrals",fi:"Lämpimät neutraalit",temp:"warm",quality:["soft"],descFi:"Ajattomat lämpimät perussävyt vaatteisiin, asusteisiin ja sisäisiin väriyhdistelmiin.",descEn:"Timeless warm basics for clothing, accessories and versatile combinations.",colors:[["Ivory","Norsunluu","#F1E6D0"],["Oatmeal","Kauranbeige","#D8C8AE"],["Sand","Hiekka","#CBB394"],["Camel","Kameli","#B88B5A"],["Caramel","Karamelli","#A96F3E"],["Cognac","Konjakki","#8D542F"],["Mushroom","Sienibeige","#A99A88"],["Warm Grey","Lämmin harmaa","#8E8981"],["Chocolate","Suklaa","#563B2D"],["Coffee","Kahvi","#6A4937"]]},
 {season:"other",name:"Cool Neutrals",fi:"Viileät neutraalit",temp:"cool",quality:["soft"],descFi:"Viileät perussävyt harmaan, taupen, laivastonsinisen ja pehmeän valkoisen ympärillä.",descEn:"Cool basics built around grey, taupe, navy and soft white.",colors:[["Soft White","Pehmeä valkoinen","#F0F0ED"],["Pearl","Helmiäinen","#D9D9D5"],["Silver Grey","Hopeanharmaa","#B8BDC2"],["Dove Grey","Kyyhkynharmaa","#A7ADB3"],["Cool Taupe","Viileä taupe","#928B8A"],["Slate","Liuske","#707B85"],["Graphite","Grafiitti","#4C5158"],["Charcoal","Hiilenharmaa","#34383D"],["Navy","Laivastonsininen","#26384F"],["Ink","Muste","#222832"]]},
 {season:"other",name:"Earth & Botanical",fi:"Maa- ja kasvisävyt",temp:"neutral",quality:["soft","deep"],descFi:"Luonnosta inspiroituneet vihreät, ruskeat, saviset ja mineraaliset sävyt.",descEn:"Nature-inspired greens, browns, clay and mineral shades.",colors:[["Sage","Salvia","#9AA58B"],["Olive","Oliivi","#777B45"],["Moss","Sammal","#68764B"],["Fern","Saniainen","#54724B"],["Forest","Metsä","#315B42"],["Pine","Mänty","#264B3B"],["Clay","Savi","#B8785F"],["Terracotta","Terrakotta","#BD6F53"],["Stone","Kivi","#9C958B"],["Bark","Kaarnanruskea","#695143"],["Lichen","Jäkälä","#A6A27A"],["Mushroom","Sienibeige","#A99A88"]]},
 {season:"other",name:"Jewel Tones",fi:"Jalokivisävyt",temp:"neutral",quality:["bright","deep"],descFi:"Kylläiset ja näyttävät jalokivien inspiroimat sävyt.",descEn:"Saturated, expressive shades inspired by gemstones.",colors:[["Ruby","Rubiini","#A7193F"],["Garnet","Granaatti","#742A3A"],["Amethyst","Ametisti","#7650A1"],["Sapphire","Safiiri","#214E9B"],["Emerald","Smaragdi","#087A59"],["Topaz","Topaasi","#D29A36"],["Aquamarine","Akvamariini","#54B8B0"],["Turquoise","Turkoosi","#159B9A"],["Onyx","Onyksi","#25252A"],["Opal","Opaali","#C8C8D0"]]},
 {season:"other",name:"Red, Rose & Berry",fi:"Punaiset, roosat ja marjat",temp:"neutral",quality:["bright","deep"],descFi:"Punaisen laaja kirjo pehmeästä ruusupuusta syvään viiniin ja kirkkaaseen fuksiaan.",descEn:"A broad red spectrum, from soft rosewood to deep wine and vivid fuchsia.",colors:[["Rosewood","Ruusupuu","#98645F"],["Dusty Rose","Pölyinen roosa","#C18A91"],["Coral","Koralli","#E77D70"],["Brick","Tiilenpunainen","#A64E42"],["Tomato","Tomaatti","#D94A3A"],["Ruby","Rubiini","#AA2442"],["Burgundy","Burgundi","#702C43"],["Wine","Viini","#59283D"],["Plum","Luumu","#713D68"],["Fuchsia","Fuksia","#CF2585"],["Raspberry","Vadelma","#A83E67"],["Blush","Hento roosa","#E5B8B9"]]},
 {season:"other",name:"Blue & Teal",fi:"Siniset ja petroolit",temp:"cool",quality:["bright","deep"],descFi:"Sinisen ja sinivihreän sävyjä jääsinisestä syvään petrooliin.",descEn:"Blue and blue-green shades from icy blue to deep teal.",colors:[["Ice Blue","Jäänsininen","#B9D7E8"],["Sky","Taivaansininen","#78B4D1"],["Denim","Denim","#4D7195"],["Cornflower","Ruiskaunokki","#648EC2"],["Cobalt","Koboltti","#2454A6"],["Navy","Laivastonsininen","#243B5A"],["Midnight","Keskiyö","#192A43"],["Aqua","Aqua","#59C6C0"],["Teal","Petrooli","#267C7A"],["Deep Teal","Syvä petrooli","#17585A"],["Turquoise","Turkoosi","#25A6A3"]]},
 {season:"other",name:"Golden, Yellow & Orange",fi:"Keltaiset ja oranssit",temp:"warm",quality:["warm","bright"],descFi:"Keltaisen, kullan, aprikoosin ja oranssin lämpimät vivahteet.",descEn:"Warm nuances of yellow, gold, apricot and orange.",colors:[["Butter","Voi","#F0D88A"],["Lemon","Sitruuna","#E7DB4A"],["Honey","Hunaja","#D7A343"],["Mustard","Sinappi","#B98C2D"],["Ochre","Okra","#B7832D"],["Gold","Kulta","#C89B3C"],["Apricot","Aprikoosi","#EAA276"],["Peach","Persikka","#F0B092"],["Tangerine","Mandariini","#E97832"],["Burnt Orange","Poltettu oranssi","#B9572D"],["Rust","Ruoste","#A64E32"],["Copper","Kupari","#B56B45"]]},
 {season:"other",name:"Green Garden",fi:"Vihreä puutarha",temp:"neutral",quality:["soft","bright"],descFi:"Vihreän koko kirjo mintusta ja salviasta smaragdiin ja metsänvihreään.",descEn:"A wide green spectrum from mint and sage to emerald and forest green.",colors:[["Mint","Minttu","#A8D2BE"],["Seafoam","Merivaahto","#9CCFC3"],["Sage","Salvia","#A0AA8C"],["Eucalyptus","Eukalyptus","#78978A"],["Pistachio","Pistaasi","#A8B66D"],["Olive","Oliivi","#7D8047"],["Moss","Sammal","#68774B"],["Fern","Saniainen","#4E754B"],["Jade","Jade","#279477"],["Emerald","Smaragdi","#087A59"],["Forest","Metsänvihreä","#28553C"],["Pine","Mänty","#214638"]]},
 {season:"other",name:"Purple & Lavender",fi:"Violetit ja laventelit",temp:"cool",quality:["soft","bright"],descFi:"Laventelin, lilan, ametistin, luumun ja munakoison sävyjä.",descEn:"Lavender, lilac, amethyst, plum and aubergine shades.",colors:[["Pale Lilac","Vaalea liila","#D5C5E2"],["Lavender","Laventeli","#B9A3D0"],["Periwinkle","Periwinkle","#A4A9D0"],["Mauve","Malva","#A27F9C"],["Orchid","Orkidea","#B36DA9"],["Amethyst","Ametisti","#8053A2"],["Violet","Violetti","#6E4695"],["Plum","Luumu","#70405F"],["Aubergine","Munakoiso","#4B304A"],["Grape","Viinirypäle","#593C75"]]}
];
const grid=document.getElementById("family-grid");
let currentLanguage="fi";
function renderFamilies(){
 const query=document.getElementById("family-search").value.trim().toLocaleLowerCase();
 const season=document.getElementById("season-filter").value;
 const temperature=document.getElementById("temperature-filter").value;
 const quality=document.getElementById("quality-filter").value;
 grid.replaceChildren();
 const filtered=families.filter(f=>{
  const text=[f.name,f.fi,f.descFi,f.descEn,...f.colors.flat()].join(" ").toLocaleLowerCase();
  return (season==="all"||f.season===season)&&(temperature==="all"||f.temp===temperature)&&(quality==="all"||f.quality.includes(quality))&&text.includes(query);
 });
 filtered.forEach(f=>{
  const card=document.createElement("article");card.className="family-card";
  const title=document.createElement("h2");title.textContent=currentLanguage==="fi"?f.fi+" · "+f.name:f.name;
  const desc=document.createElement("p");desc.textContent=currentLanguage==="fi"?f.descFi:f.descEn;
  const tags=document.createElement("div");tags.className="family-tags";
  [currentLanguage==="fi"?({spring:"Kevät",summer:"Kesä",autumn:"Syksy",winter:"Talvi",other:"Muut"})[f.season]:({spring:"Spring",summer:"Summer",autumn:"Autumn",winter:"Winter",other:"Other"})[f.season],currentLanguage==="fi"?({warm:"Lämmin",cool:"Viileä",neutral:"Neutraali"})[f.temp]:f.temp,...f.quality.map(q=>currentLanguage==="fi"?({light:"Vaalea",deep:"Syvä",soft:"Murrettu",bright:"Kirkas"})[q]:q)].forEach(t=>{const s=document.createElement("span");s.textContent=t;tags.append(s)});
  const swatches=document.createElement("div");swatches.className="family-swatches";
  f.colors.forEach(([en,fi,hex])=>{
   const item=document.createElement("div");item.className="family-swatch";
   const btn=document.createElement("button");btn.type="button";btn.style.backgroundColor=hex;btn.setAttribute("aria-label",`${currentLanguage==="fi"?fi:en}, HEX ${hex}. ${copy[currentLanguage].copy}`);
   btn.title=`${currentLanguage==="fi"?fi:en} — ${hex}`;
   btn.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(hex);document.getElementById("copy-status").textContent=`${currentLanguage==="fi"?fi:en}: ${hex} — ${copy[currentLanguage].copied}`}catch{document.getElementById("copy-status").textContent=`${currentLanguage==="fi"?fi:en}: ${hex}`}});
   const label=document.createElement("small");label.textContent=`${currentLanguage==="fi"?fi:en} · ${hex}`;
   item.append(btn,label);swatches.append(item);
  });
  card.append(title,desc,tags,swatches);grid.append(card);
 });
 document.getElementById("no-results").hidden=filtered.length>0;
}
function setFamilyLanguage(lang){
 currentLanguage=lang;document.documentElement.lang=lang;
 document.querySelectorAll("[data-copy]").forEach(el=>{const key=el.dataset.copy;if(copy[lang][key])el.innerHTML=copy[lang][key]});
 document.querySelectorAll("[data-placeholder]").forEach(el=>el.placeholder=copy[lang][el.dataset.placeholder]);
 document.getElementById("family-language").textContent=lang==="fi"?"EN":"FI";
 document.getElementById("family-language").setAttribute("aria-label",lang==="fi"?"Switch language to English":"Vaihda kieleksi suomi");
 document.title=lang==="fi"?"Väriperheet — Personal Style & Colour Guide":"Colour Families — Personal Style & Colour Guide";
 renderFamilies();
 if(document.getElementById("compare-first"))setupComparison();
}
["family-search","season-filter","temperature-filter","quality-filter"].forEach(id=>document.getElementById(id).addEventListener("input",renderFamilies));
document.getElementById("family-language").addEventListener("click",()=>setFamilyLanguage(currentLanguage==="fi"?"en":"fi"));

// Side-by-side palette comparison. Both selectors use the same colour-family catalogue.
const comparisonCopy = {
 fi:{select:"Valitse väriperhe",swatches:"värisävyä",season:"Vuodenaika",temperature:"Lämpötila",quality:"Ominaisuudet",warm:"Lämmin",cool:"Viileä",neutral:"Neutraali",light:"Vaalea",deep:"Syvä",soft:"Murrettu",bright:"Kirkas",spring:"Kevät",summer:"Kesä",autumn:"Syksy",winter:"Talvi",other:"Muut",copy:"Kopioi HEX",copied:"Kopioitu"},
 en:{select:"Choose a colour family",swatches:"shades",season:"Season",temperature:"Temperature",quality:"Qualities",warm:"Warm",cool:"Cool",neutral:"Neutral",light:"Light",deep:"Deep",soft:"Soft",bright:"Bright",spring:"Spring",summer:"Summer",autumn:"Autumn",winter:"Winter",other:"Other",copy:"Copy HEX",copied:"Copied"}
};
function comparisonFamilyLabel(f){return currentLanguage==="fi"?f.fi+" · "+f.name:f.name;}
function setupComparison(){
 const first=document.getElementById("compare-first");
 const second=document.getElementById("compare-second");
 if(!first||!second)return;
 const isInitial=first.options.length===0;
 const firstValue=first.value;
 const secondValue=second.value;
 [first,second].forEach(select=>{
  select.replaceChildren();
  const placeholder=document.createElement("option");
  placeholder.value="";placeholder.textContent=comparisonCopy[currentLanguage].select;
  select.append(placeholder);
  families.forEach((family,index)=>{
   const option=document.createElement("option");
   option.value=String(index);option.textContent=comparisonFamilyLabel(family);select.append(option);
  });
 });
 first.value=isInitial?"0":firstValue;
 second.value=isInitial?String(Math.min(15,families.length-1)):secondValue;
 if(isInitial){
  first.addEventListener("change",renderComparison);
  second.addEventListener("change",renderComparison);
 }
 renderComparison();
}
function renderComparison(){
 const first=document.getElementById("compare-first");
 const second=document.getElementById("compare-second");
 const result=document.getElementById("comparison-result");
 if(!first||!second||!result)return;
 const lang=comparisonCopy[currentLanguage];
 result.replaceChildren();
 [Number(first.value),Number(second.value)].forEach(index=>{
  const family=families[index];
  if(!family)return;
  const card=document.createElement("article");card.className="comparison-card";
  const title=document.createElement("h3");title.textContent=comparisonFamilyLabel(family);
  const description=document.createElement("p");description.textContent=currentLanguage==="fi"?family.descFi:family.descEn;
  const metadata=document.createElement("div");metadata.className="comparison-meta";
  const season=document.createElement("span");season.textContent=lang[family.season];
  const temperature=document.createElement("span");temperature.textContent=lang[family.temp];
  metadata.append(season,temperature);
  family.quality.forEach(q=>{const tag=document.createElement("span");tag.textContent=lang[q];metadata.append(tag)});
  const count=document.createElement("p");count.className="comparison-count";count.textContent=family.colors.length+" "+lang.swatches;
  const swatches=document.createElement("div");swatches.className="comparison-swatches";
  family.colors.forEach(([en,fi,hex])=>{
   const item=document.createElement("div");item.className="comparison-swatch";
   const colour=document.createElement("div");colour.className="comparison-colour";colour.style.backgroundColor=hex;
   const name=document.createElement("strong");name.textContent=currentLanguage==="fi"?fi:en;
   const code=document.createElement("button");code.type="button";code.className="hex-copy";code.textContent=hex;
   code.setAttribute("aria-label",lang.copy+" "+hex);
   code.addEventListener("click",async()=>{
    try{await navigator.clipboard.writeText(hex);code.textContent=lang.copied;setTimeout(()=>{code.textContent=hex},1300)}
    catch{code.textContent=hex}
   });
   item.append(colour,name,code);swatches.append(item);
  });
  card.append(title,description,metadata,count,swatches);result.append(card);
 });
}

setFamilyLanguage("fi");
