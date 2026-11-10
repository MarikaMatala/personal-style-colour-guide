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
    makeupHeading: "Meikkivinkit", hairColourHeading: "Hiusvärit ja sävyt", hairstyleHeading: "Hiustyyli-ideat", extrasHeading: "Asusteet, kynnet ja yhdistely",
    beautyAdvice: {
      warm: {
        makeup: "Kokeile persikkaista, aprikoosista tai lämmintä ruusuista poskipunaa. Huulille sopivat koralli, lämmin nude, tiilenpunainen ja tomaattinen punainen. Silmämeikissä voit testata pronssia, kuparia, oliivia ja lämmintä ruskeaa.",
        hair: "Lämpimään vaikutelmaan sopivia kokeiltavia sävyjä ovat hunajablondi, karamelli, kultainen ruskea, kupari ja lämmin kastanja. Hienovaraiset lämpimät raidat voivat tuoda moniulotteisuutta.",
        style: "Kokeile pehmeitä kerrostuksia, kasvoja kehystäviä suortuvia, laineita, lettejä tai rentoa nutturaa. Kiiltävä viimeistely ja lämpimät hiusasusteet voivat täydentää kokonaisuutta. Valitse leikkaus hiusten rakenteen, pituuden ja oman mieltymyksen mukaan.",
        extras: "Yhdistele lämpimiä metallisävyjä, kuten kultaa, pronssia, kuparia ja messinkiä. Kynsissä voit kokeilla terrakottaa, korallia, karamellia, oliivia tai lämmintä punaista. Toista yhtä paletin sävyä esimerkiksi huivissa, laukussa tai koruissa."
      },
      cool: {
        makeup: "Kokeile viileää roosaa, marjaista tai malvaan taittavaa poskipunaa. Huulille sopivat viileä pinkki, marjainen, luumu ja sinipohjainen punainen. Silmämeikissä testaa taupea, luumua, savunsinistä, grafiittia ja viileää ruskeaa.",
        hair: "Viileään vaikutelmaan sopivia sävyjä ovat tuhkanvaalea, viileä beige, sieniruskea, viileä suklaa, viininpunainen ja pehmeä musta. Hienovaraiset tuhkaiset raidat voivat lisätä syvyyttä.",
        style: "Kokeile selkeitä linjoja, sileää polkkaa, pitkiä kerroksia, pehmeitä laineita tai näyttävää lettiä. Viileäsävyiset hiuspinnit, metalliset klipsit ja huoliteltu kiilto voivat viimeistellä tyylin. Valitse malli hiusten rakenteen, pituuden ja oman mieltymyksen mukaan.",
        extras: "Kokeile hopeaa, platinaa, titaania tai viileän sävyisiä korumetalleja. Kynsissä toimivat esimerkiksi marjaiset, luumuiset, sinertävät, savuiset ja viileät nude-sävyt. Toista paletin viileää sävyä asusteissa."
      },
      neutral: {
        makeup: "Neutraalissa värisuunnassa voit vertailla sekä lämpimiä että viileitä vaihtoehtoja. Kokeile neutraalia roosaa, pehmeää persikkaa tai ruusupuuta poskilla; huulilla ruusua, pehmeää marjaa tai tasapainoista punaista. Silmiin sopivat taupe, pehmeä ruskea, oliivi ja harmaanruskea.",
        hair: "Kokeile tasapainoisia beigejä, neutraalia ruskeaa, pehmeää kastanjaa, ruusuruskeaa tai neutraalia tummanvaaleaa. Sävyjen rinnakkainen vertailu auttaa löytämään sopivan lämpöisyyden.",
        style: "Monipuoliset leikkaukset toimivat lähtökohtana: kerrostettu polkka, pitkät kerrokset, luonnolliset laineet, sileä poninhäntä tai rento nuttura. Kokeile sekä pehmeitä että selkeämpiä muotoja ja valitse omaan hiuslaatuun sopiva.",
        extras: "Voit yhdistää kultaa, hopeaa, ruusukultaa ja muita metalleja. Kynsissä kokeile ruusupuuta, taupea, pehmeää korallia, marjaa tai neutraalia punaista. Rakenna kokonaisuus yhdistelemällä kahta tai kolmea paletin sävyä."
      },
      flexible: {
        makeup: "Kun pohjasävy ei ole vielä selvillä, kokeile meikkisävyjä kasvoilla luonnonvalossa pieninä vertailuina. Aloita neutraalista roosasta, persikasta, pehmeästä ruskeasta ja marjaisista sävyistä. Huulilla voit testata neutraalia punaista tai omaa huulten sävyä korostavaa nudea.",
        hair: "Ennen suurta värimuutosta kokeile sävynsuuntaa väliaikaisilla sävyillä, sävyttävillä tuotteilla tai digitaalisella inspiraatiotaululla. Vertaa neutraalia beigeä, tuhkaista ruskeaa, karamellia ja pehmeää kastanjaa.",
        style: "Kokeile erilaisia muotoja: kerroksia, polkkaa, laineita, lettejä, poninhäntää ja nutturaa. Inspiraatiokuvia vertailemalla löydät, mistä pituuksista ja muodoista pidät. Kasvojen muotoa tai hiusten rakennetta ei ole vielä kartoitettu tässä demossa.",
        extras: "Kokeile metallien yhdistelmiä ja kynsissä esimerkiksi taupea, roosaa, persikkaa, marjaa tai klassista punaista. Testaa värejä pieninä yksityiskohtina ennen kuin rakennat niistä suuremman kokonaisuuden."
      }
    },
    depthAdvice: { light: "Vaaleampi värisyvyys: kokeile myös pehmeitä ja vaaleampia versioita ehdotetuista sävyistä.", medium: "Keskisyvä värimaailma: yhdistele keskisävyjä ja muutamaa vaaleampaa tai syvempää korostusta.", deep: "Syvempi värimaailma: testaa ehdotettujen sävyjen syvempiä, kylläisempiä versioita.", varied: "Vaihteleva värisyvyys: voit yhdistää vaaleita, keskisyviä ja tummia sävyjä." },
    contrastAdvice: { soft: "Pehmeä kontrasti: kokeile sävy sävyyn -yhdistelmiä ja häivytettyjä meikkirajoja.", medium: "Keskitasoinen kontrasti: yhdistä yksi selkeämpi korostusväri rauhallisiin perussävyihin.", high: "Voimakas kontrasti: kokeile selkeämpiä rajauksia, syviä huulisävyjä tai rohkeampia väriyhdistelmiä." },

    skinLegend: "Ihon pohjasävy", veinsLegend: "Verisuonten väri ranteessa", veinsBlue: "Sinertävä / violetti", veinsGreen: "Vihertävä", veinsMixed: "Sekä sinertävä että vihertävä", lightblue: "Vaaleansininen", eyeGrey: "Harmaa / siniharmaa", greyGreen: "Harmaanvihreä", amber: "Meripihkanvärinen / kullanruskea", lightBrown: "Vaaleanruskea", darkBrown: "Tummanruskea / lähes musta", heterochromia: "Keskenään eriväriset silmät", platinum: "Platinablondi / jäinen vaalea", ashBlonde: "Tuhkanvaalea", goldBlonde: "Kultablondi / hunaja", darkBlonde: "Tummanvaalea", strawberry: "Mansikkablondi", copperHair: "Kupari", auburn: "Auburn / punaruskea", lightBrownHair: "Vaaleanruskea", mediumBrownHair: "Keskiruskea", darkBrownHair: "Tummanruskea", whiteHair: "Valkoinen", warm: "Lämmin", cool: "Viileä", neutral: "Neutraali", unsure: "En ole varma",
    depthLegend: "Ihon sävyn syvyys", light: "Vaalea", medium: "Keskisyvä", deep: "Tumma / syvä", varied: "Vaihtelee",
    eyesLegend: "Silmien väri", blue: "Sininen / harmaa", green: "Vihreä", hazel: "Pähkinänruskea / sekoittunut", brown: "Ruskea / hyvin tumma", other: "Muu / monivärinen",
    hairLegend: "Hiusten väri", blonde: "Vaalea / blondi", red: "Punainen / kupari", brownHair: "Ruskea", black: "Musta", grey: "Harmaa / valkoinen", dyed: "Värjätty / monivärinen",
    sunLegend: "Miten ihosi reagoi aurinkoon?", sunBurns: "Palaa helposti, ei rusketu juuri lainkaan", sunBurnsThenTans: "Palaa ensin, mutta ruskettuu vähitellen", sunGradual: "Ruskettuu vähitellen, palaa joskus", sunEasyTan: "Ruskettuu helposti, palaa harvoin", frecklesLegend: "Saatko helposti pisamia?", frecklesOften: "Kyllä, helposti / paljon", frecklesSometimes: "Joskus / etenkin auringossa", frecklesRarely: "Harvoin tai en koskaan", metalLegend: "Minkä väriset korumetallit miellyttävät sinua? Voit valita useita.", metalGold: "Kulta", metalSilver: "Hopea", metalRose: "Ruusu-/punakulta", metalBronze: "Pronssi", metalCopper: "Kupari", metalBrass: "Messinki", metalTitanium: "Titaani", metalPlatinum: "Platina", metalSteel: "Ruostumaton teräs", metalMixed: "Sekalaiset / kaikki käy", metalUnsure: "En ole varma / ei mieltymystä", jewelleryLegend: "Millaisia koruja käytät? Voit valita useita.", jewelleryEarrings: "Korvakoruja", jewelleryNecklaces: "Kaulakoruja", jewelleryBracelets: "Rannekoruja", jewelleryRings: "Sormuksia", jewelleryBrooches: "Rintakoruja", jewelleryAnklets: "Nilkkakoruja", jewelleryHair: "Hiuskoristeita", jewelleryMixed: "Sekalaisesti / kaikenlaisia", jewelleryRarely: "Käytän koruja harvoin", contrastLegend: "Piirteiden kokonaiskontrasti", soft: "Pehmeä / matala", midContrast: "Keskitasoinen", high: "Voimakas / korkea",
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
    helpTitle: "Miten vastaan tähän?", helpSkin: "Tarkastele kasvojen ihoa päivänvalossa ilman voimakasta meikkiä. Pohjasävy tarkoittaa ihon yleistä lämpö- tai viileysvaikutelmaa, ei ihon vaaleutta tai tummuutta. Jos et osaa arvioida, valitse En ole varma.", helpVeins: "Katso ranteen sisäpuolen verisuonia luonnonvalossa. Sinertävät tai violetit suonet voivat viitata viileään vaikutelmaan, vihertävät lämpimään ja molempia sisältävä neutraaliin. Tämä on vain karkea vihje: ihon sävy, valaistus ja suonten näkyvyys vaikuttavat havaintoon. Älä päättele pohjasävyä pelkästään tästä.", helpDepth: "Arvioi ihon vaaleutta tai syvyyttä, älä pohjasävyä. Vertaa kasvojen ja kaulan luonnollista sävyä päivänvalossa. Valitse Vaihtelee, jos kasvojen, kaulan ja vartalon sävyt poikkeavat selvästi.", helpEyes: "Valitse silmien hallitseva sävy luonnonvalossa. Jos iiriksessä on useita värejä, valitse lähin sekoittunut vaihtoehto tai Muu / monivärinen. Jos silmät ovat keskenään eri väriset, valitse se vaihtoehto.", helpHair: "Valitse hiusten nykyinen näkyvä väri. Jos haluat arvioida luonnollista värimaailmaasi, valitse luonnollinen hiusväri; jos haluat vinkkejä nykyiseen tyyliin, valitse nykyinen värjätty sävy. Monivärisille hiuksille sopii Värjätty / monivärinen.", helpSun: "Mieti aiempia kokemuksiasi tavallisessa auringossa ilman tarkoituksellista rusketusta. Palaatko ensin, rusketutko vähitellen vai rusketutko helposti? Älä altista ihoa auringolle testataksesi tätä. Aiemmat kokemukset riittävät. UV-säteily voi vaurioittaa ihoa kaikilla ihotyypeillä.", helpFreckles: "Arvioi, ilmestyykö ihollesi pisamia helposti esimerkiksi kesällä tai auringossa. Huomioi myös luonnostaan ympäri vuoden näkyvät pisamat. Pisamien määrä ja näkyvyys vaihtelevat.", helpMetal: "Voit valita kaikki metallit, joista pidät tai joita käytät. Vaihtoehtoina ovat esimerkiksi kulta, hopea, ruusukulta, pronssi, kupari, messinki, titaani, platina ja ruostumaton teräs. Metalli on myös käytännön valinta: huomioi materiaalin sopivuus ja mahdolliset ihoherkkyydet.", helpJewellery: "Valitse kaikki korutyypit, joita käytät tai joista olet kiinnostunut. Voit valita esimerkiksi korvakoruja, kaulakoruja, rannekoruja, sormuksia, rintakoruja, nilkkakoruja ja hiuskoristeita.", helpContrast: "Vertaa hiusten, ihon ja silmien välistä eroa. Matala kontrasti näyttää pehmeältä ja sävyt ovat lähellä toisiaan; korkea kontrasti erottuu selvästi. Keskitaso on näiden väliltä. Arvioi päivänvalossa ilman filttereitä.",
    sunResult: { burns: "Aurinkoreaktiosi perusteella suojaa iho huolellisesti; tämä havainto ei yksin määritä pohjasävyä.", burnsThenTans: "Ihosi voi palaa ennen ruskettumista; tämä on erillinen ominaisuus pohjasävystä.", gradualTan: "Kuvaamasi asteittainen ruskettuminen on yksi ihon ominaisuus, ei yksinään pohjasävyn mittari.", tansEasily: "Helppo ruskettuminen ei yksin kerro ihon pohjasävyä." }, frecklesResult: { often: "Pisamat ovat yksi ihon näkyvä ominaisuus, eivät yksin pohjasävyn määrittäjä.", sometimes: "Pisamien ilmaantuminen voi vaihdella vuodenajan ja auringon mukaan.", rarely: "Pisamien vähäisyys tai puuttuminen ei määritä pohjasävyä." }, metalResult: { gold: "Valitsit kullan.", silver: "Valitsit hopean.", roseGold: "Valitsit ruusukullan.", bronze: "Valitsit pronssin.", copper: "Valitsit kuparin.", brass: "Valitsit messingin.", titanium: "Valitsit titaanin.", platinum: "Valitsit platinan.", steel: "Valitsit ruostumattoman teräksen.", mixed: "Pidät useiden metallien yhdistelmistä." },
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
    makeupHeading: "Makeup ideas", hairColourHeading: "Hair colours", hairstyleHeading: "Hairstyle ideas", extrasHeading: "Accessories, nails and styling",
    beautyAdvice: {
      warm: {
        makeup: "Try peach, apricot or warm rose blush. Lip colours to explore include coral, warm nude, brick and tomato red. For eyes, experiment with bronze, copper, olive and warm brown.",
        hair: "Shades to explore include honey blonde, caramel, golden brown, copper and warm chestnut. Subtle warm highlights can add dimension.",
        style: "Try soft layers, face-framing pieces, waves, braids or a relaxed bun. Glossy finishes and warm-toned hair accessories can complete the look. Choose a cut according to your hair texture, length and personal preference.",
        extras: "Explore warm metals such as gold, bronze, copper and brass. Nail colours could include terracotta, coral, caramel, olive or warm red. Repeat a palette shade in a scarf, bag or jewellery."
      },
      cool: {
        makeup: "Try cool rose, berry or mauve blush. Lip colours include cool pink, berry, plum and blue-based red. For eyes, explore taupe, plum, smoky blue, graphite and cool brown.",
        hair: "Shades to explore include ash blonde, cool beige, mushroom brown, cool chocolate, burgundy and soft black. Subtle ash-toned highlights can add depth.",
        style: "Try clean lines, a sleek bob, long layers, soft waves or a defined braid. Cool-toned pins, metallic clips and a polished finish can complete the look. Choose a cut according to your hair texture, length and personal preference.",
        extras: "Explore silver, platinum, titanium and other cool-toned metals. Nail colours could include berry, plum, blue-based, smoky and cool nude shades. Repeat a cool palette shade in your accessories."
      },
      neutral: {
        makeup: "A neutral direction lets you compare both warm and cool options. Try neutral rose, soft peach or rosewood blush; for lips, explore rose, soft berry or balanced red. Taupe, soft brown, olive and grey-brown work well as eye-colour experiments.",
        hair: "Explore balanced beige, neutral brown, soft chestnut, rose brown or neutral dark blonde. Comparing nearby shades can help you find your preferred temperature.",
        style: "Versatile starting points include a layered bob, long layers, natural waves, a sleek ponytail or a relaxed bun. Try both soft and defined shapes, choosing what suits your hair texture.",
        extras: "You can combine gold, silver, rose gold and other metals. Nail ideas include rosewood, taupe, soft coral, berry or neutral red. Build an outfit by combining two or three palette shades."
      },
      flexible: {
        makeup: "If your undertone is not clear yet, compare makeup shades on your face in natural light. Start with neutral rose, peach, soft brown and berry tones. For lips, try a balanced red or a nude close to your natural lip colour.",
        hair: "Before making a major colour change, test the direction with temporary colour, toning products or a digital inspiration board. Compare neutral beige, ash brown, caramel and soft chestnut.",
        style: "Experiment with different shapes: layers, a bob, waves, braids, ponytails and buns. Comparing inspiration images can help you identify lengths and shapes you enjoy. Face shape and hair texture are not assessed in this demo yet.",
        extras: "Try mixing metals and explore taupe, rose, peach, berry or classic red nail colours. Test colours in small details before building a larger look around them."
      }
    },
    depthAdvice: { light: "Lighter colour depth: also try softer and lighter versions of the suggested shades.", medium: "Medium colour depth: combine mid-tones with a few lighter or deeper accents.", deep: "Deeper colour depth: test richer and deeper versions of the suggested shades.", varied: "Variable colour depth: combine light, medium and dark shades." },
    contrastAdvice: { soft: "Soft contrast: experiment with tonal combinations and softly blended makeup.", medium: "Medium contrast: pair one defined accent colour with calm base shades.", high: "High contrast: try more defined eyeliner, deeper lip colours or bolder colour combinations." },

    skinLegend: "Skin undertone", veinsLegend: "Wrist vein colour", veinsBlue: "Blue / purple", veinsGreen: "Green", veinsMixed: "A mix of blue and green", lightblue: "Light blue", eyeGrey: "Grey / blue-grey", greyGreen: "Grey-green", amber: "Amber / golden brown", lightBrown: "Light brown", darkBrown: "Dark brown / almost black", heterochromia: "Different-coloured eyes", platinum: "Platinum / icy blonde", ashBlonde: "Ash blonde", goldBlonde: "Golden blonde / honey", darkBlonde: "Dark blonde", strawberry: "Strawberry blonde", copperHair: "Copper", auburn: "Auburn / reddish brown", lightBrownHair: "Light brown", mediumBrownHair: "Medium brown", darkBrownHair: "Dark brown", whiteHair: "White", warm: "Warm", cool: "Cool", neutral: "Neutral", unsure: "Not sure",
    depthLegend: "Skin depth", light: "Light", medium: "Medium", deep: "Deep", varied: "Varies",
    eyesLegend: "Eye colour", blue: "Blue / grey", green: "Green", hazel: "Hazel / mixed", brown: "Brown / very dark", other: "Other / multicoloured",
    hairLegend: "Hair colour", blonde: "Blonde / light", red: "Red / copper", brownHair: "Brown", black: "Black", grey: "Grey / white", dyed: "Dyed / multicoloured",
    sunLegend: "How does your skin react to the sun?", sunBurns: "Burns easily and barely tans", sunBurnsThenTans: "Burns first, then gradually tans", sunGradual: "Tans gradually and sometimes burns", sunEasyTan: "Tans easily and rarely burns", frecklesLegend: "Do you develop freckles easily?", frecklesOften: "Yes, easily / many freckles", frecklesSometimes: "Sometimes / especially in the sun", frecklesRarely: "Rarely or never", metalLegend: "Which jewellery metals do you like? Select all that apply.", metalGold: "Gold", metalSilver: "Silver", metalRose: "Rose gold", metalBronze: "Bronze", metalCopper: "Copper", metalBrass: "Brass", metalTitanium: "Titanium", metalPlatinum: "Platinum", metalSteel: "Stainless steel", metalMixed: "Mixed metals / anything goes", metalUnsure: "Not sure / no preference", jewelleryLegend: "Which types of jewellery do you wear? Select all that apply.", jewelleryEarrings: "Earrings", jewelleryNecklaces: "Necklaces", jewelleryBracelets: "Bracelets", jewelleryRings: "Rings", jewelleryBrooches: "Brooches", jewelleryAnklets: "Anklets", jewelleryHair: "Hair accessories", jewelleryMixed: "A mix / all kinds", jewelleryRarely: "I rarely wear jewellery", contrastLegend: "Overall feature contrast", soft: "Soft / low", midContrast: "Medium", high: "Strong / high",
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
    helpTitle: "How should I answer?", helpSkin: "Look at your skin in natural daylight without strong makeup. Undertone describes the overall warm or cool impression, not how light or deep your skin is. Choose Not sure if you cannot confidently tell.", helpVeins: "Look at the veins on the inside of your wrist in natural daylight. Blue or purple veins may suggest a cool impression, green veins a warm one, and a mix may suggest neutral. This is only a rough clue: skin tone, lighting and vein visibility affect what you see. Do not determine undertone from veins alone.", helpDepth: "Estimate how light or deep your skin appears, separately from undertone. Compare your face and neck in daylight. Choose Varies if the tones of your face, neck and body differ noticeably.", helpEyes: "Choose the dominant iris colour in natural light. If your iris contains several colours, choose the closest mixed option or Other / multicoloured. If your eyes are different colours, select that option.", helpHair: "Choose the hair colour currently visible. For your natural colour harmony, select your natural hair colour; for suggestions matching your current look, choose the colour you wear now. Choose Dyed / multicoloured for several colours.", helpSun: "Think about your usual past experience in the sun without deliberately trying to tan. Do you burn first, tan gradually, or tan easily? Never expose your skin to sunlight as a test. Your past experience is enough. UV radiation can damage every skin type.", helpFreckles: "Consider whether freckles appear easily, for example in summer or after sun exposure. You can also include freckles that are visible all year round. Freckles vary in number and visibility.", helpMetal: "Select every metal you like or wear. Options include gold, silver, rose gold, bronze, copper, brass, titanium, platinum and stainless steel. Metal choice is also practical: consider material suitability and any skin sensitivities.", helpJewellery: "Select all jewellery types you wear or are interested in, such as earrings, necklaces, bracelets, rings, brooches, anklets and hair accessories.", helpContrast: "Compare the difference between your hair, skin and eyes. Low contrast looks soft, with features close in depth; high contrast is clearly defined. Medium is between these. Assess in natural light without filters.",
    sunResult: { burns: "Your skin burns easily; protect it carefully. This does not determine your undertone.", burnsThenTans: "Your skin may burn before tanning; this is separate from undertone.", gradualTan: "Gradual tanning is one skin characteristic, not an undertone test.", tansEasily: "Tanning easily does not determine your undertone." }, frecklesResult: { often: "Freckles are a visible skin characteristic, not an undertone test.", sometimes: "Freckles may vary with season and sun exposure.", rarely: "Having few or no freckles does not determine your undertone." }, metalResult: { gold: "You selected gold.", silver: "You selected silver.", roseGold: "You selected rose gold.", bronze: "You selected bronze.", copper: "You selected copper.", brass: "You selected brass.", titanium: "You selected titanium.", platinum: "You selected platinum.", steel: "You selected stainless steel.", mixed: "You enjoy combining different metals." },
    resultWarmText: "Try terracotta, warm brown, olive green and soft gold.",
    resultCoolText: "Try plum, berry shades, smoky blue and cool greens.",
    resultNeutralText: "Compare warm and cool shades side by side, such as taupe, rose, forest green and smoky blue.",
    resultFlexibleText: "No undertone has been selected, so compare warm, cool and neutral options side by side."
  }
};

// Keep the current language and the latest generated profile so results can be translated again.
let language = "fi";
let lastGeneratedResult = null;
let lastGeneratedProfile = null;
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
  if (lastGeneratedResult && lastGeneratedProfile) {
    renderResultDescription(lastGeneratedResult, lastGeneratedProfile, translations[nextLanguage]);
    renderStyleRecommendations(lastGeneratedResult, lastGeneratedProfile, translations[nextLanguage]);
  }
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
  lightblue: "#A9C7DA", blue: "#718FA5", grey: "#9AA6B2", green: "#71845B", greyGreen: "#89977C", hazel: "#A18A55", amber: "#C18A3C", lightBrown: "#A77B54", brown: "#76513F", darkBrown: "#49362F", heterochromia: "#8A7899", other: "#8A7899"
};

const metalAccents = { gold: "#C6A36A", silver: "#BFC5CC", roseGold: "#C58F83", bronze: "#8C6239", copper: "#B8734F", brass: "#B5A05A", titanium: "#858B91", platinum: "#D5D7D8", steel: "#AEB6BC", mixed: "#A88D78", unsure: "#A78A91" };

const hairAccents = {
  platinum: "#DDE0DF", ashBlonde: "#B9B3A7", goldBlonde: "#D6B77A", darkBlonde: "#A98B61", strawberry: "#C58B72", copper: "#B86F55", red: "#B86F55", auburn: "#824C3D", lightBrown: "#A77B54", mediumBrown: "#76513F", darkBrown: "#49362F", brown: "#76513F", black: "#38343A", grey: "#AEB4B8", white: "#F0EEE8", dyed: "#9273A6", unsure: "#A78A91"
};

// Convert the selected profile into a palette and a short explanation.
function createPalette(profile) {
  const veinHint = profile.veins === "blue" ? "cool" : profile.veins === "green" ? "warm" : profile.veins === "mixed" ? "neutral" : "flexible";
  const temperature = ["warm", "cool", "neutral"].includes(profile.undertone) ? profile.undertone : veinHint;

  const depth = profile.depth || "medium";
  const contrast = ["soft", "medium", "high"].includes(profile.contrast)
    ? profile.contrast
    : "medium";

  const colours = [
    ...temperaturePalettes[temperature],
    ...depthAccents[depth],
    ...contrastAccents[contrast],
    eyeAccents[profile.eyes] || eyeAccents.other,
    hairAccents[profile.hair] || hairAccents.unsure,
    ...(profile.metal.length ? profile.metal.map((metal) => metalAccents[metal]).filter(Boolean) : [metalAccents.unsure])
  ];

  // Keep the palette compact and remove duplicate hex values.
  return {
    temperature,
    depth,
    contrast,
    colours: [...new Set(colours)].slice(0, 16)
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



// Keep the generated explanation in sync when the visitor changes language.
function renderResultDescription(result, profile, copy) {
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
    copy[contrastKey],
    profile.sun && profile.sun !== "unsure" ? copy.sunResult[profile.sun] : "",
    profile.freckles && profile.freckles !== "unsure" ? copy.frecklesResult[profile.freckles] : "",
    ...profile.metal.filter((metal) => copy.metalResult[metal]).map((metal) => copy.metalResult[metal])
  ].filter(Boolean).join(" ");
}

// Render practical beauty and styling suggestions in the active interface language.
function renderStyleRecommendations(result, profile, copy) {
  const advice = copy.beautyAdvice[result.temperature];
  const depthNote = copy.depthAdvice[result.depth];
  const contrastNote = copy.contrastAdvice[result.contrast];
  const content = {
    "makeup-advice": [advice.makeup, depthNote, contrastNote],
    "hair-colour-advice": [advice.hair, depthNote],
    "hairstyle-advice": [advice.style],
    "extras-advice": [advice.extras]
  };

  Object.entries(content).forEach(([elementId, paragraphs]) => {
    const container = document.getElementById(elementId);
    container.replaceChildren();
    paragraphs.filter(Boolean).forEach((paragraph) => {
      const text = document.createElement("p");
      text.textContent = paragraph;
      container.append(text);
    });
  });
}

// Apply the initial Finnish interface and handle the language toggle.
setLanguage("fi");

// Add accessible, expandable guidance to every profile question.
const helpKeys = { undertone: "helpSkin", veins: "helpVeins", depth: "helpDepth", eyes: "helpEyes", hair: "helpHair", sun: "helpSun", freckles: "helpFreckles", metal: "helpMetal", jewellery: "helpJewellery", contrast: "helpContrast" };
document.querySelectorAll("#colour-form fieldset").forEach((fieldset) => {
  const fieldName = fieldset.querySelector("input")?.name;
  const helpKey = helpKeys[fieldName];
  if (!helpKey) return;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "info-button";
  button.textContent = "i";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", `help-${fieldName}`);
  const panel = document.createElement("p");
  panel.className = "info-panel";
  panel.id = `help-${fieldName}`;
  panel.hidden = true;
  panel.textContent = translations.fi[helpKey];
  button.setAttribute("aria-label", translations.fi.helpTitle);
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    panel.hidden = open;
  });
  fieldset.append(button, panel);
});
const baseSetLanguage = setLanguage;
setLanguage = function(nextLanguage) {
  baseSetLanguage(nextLanguage);
  document.querySelectorAll("#colour-form fieldset").forEach((fieldset) => {
    const name = fieldset.querySelector("input")?.name;
    const panel = fieldset.querySelector(".info-panel");
    const button = fieldset.querySelector(".info-button");
    if (panel && helpKeys[name]) panel.textContent = translations[nextLanguage][helpKeys[name]];
    if (button) button.setAttribute("aria-label", translations[nextLanguage].helpTitle);
  });
};

languageButton.addEventListener("click", () => {
  setLanguage(language === "fi" ? "en" : "fi");
});

// Read the form, generate the palette and explain which dimensions influenced it.
document.getElementById("colour-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const profile = {
    undertone: formData.get("undertone"),
    veins: formData.get("veins"),
    depth: formData.get("depth"),
    eyes: formData.get("eyes"),
    hair: formData.get("hair"),
    sun: formData.get("sun"),
    freckles: formData.get("freckles"),
    metal: formData.getAll("metal").filter((value) => value !== "unsure" || formData.getAll("metal").length === 1),
    jewellery: formData.getAll("jewellery"),
    contrast: formData.get("contrast")
  };

  const result = createPalette(profile);
  const copy = translations[language];
  lastGeneratedResult = result;
  lastGeneratedProfile = profile;
  renderResultDescription(result, profile, copy);

  renderPalette(result.colours);
  renderStyleRecommendations(result, profile, copy);

  const resultPanel = document.getElementById("result");
  resultPanel.hidden = false;
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Let visitors return to the form and adjust their selections.
document.getElementById("reset-button").addEventListener("click", () => {
  document.getElementById("result").hidden = true;
  document.getElementById("colour-form").scrollIntoView({ behavior: "smooth", block: "start" });
});
