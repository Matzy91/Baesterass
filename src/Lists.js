// För att filtrera mellan olika behandlingar
export const treatmentTypes = [
  "Massage",
  "Fotvård",
  "Hårvård",
  "Träning",
  "Meditation",
  "Hudvård",
  "För par",
];

// För att sortera mellan olika behandlingar
export const sortOptions = [
  "Alfabetiskt, A → Ö",
  "Alfabetiskt, Ö → A",
  "Pris, högt → lågt",
  "Pris, lågt → högt",
]

// För att välja olika behandlingar: visa typ + kostnad
export const treatmentList = [
  {
    name: "Massage",
    cost: "1000",
    type: ["Massage"],
  },
  {
    name: "Parmassage",
    cost: "2500",
    type: ["Massage", "För par"],
  },
  {
    name: "Yoga",
    cost: "1500",
    type: ["Träning", "Meditation"],
  },
  {
    name: "Pilates",
    cost: "1350",
    type: ["Träning"],
  },
  {
    name: "Meditation",
    cost: "200",
    type: ["Meditation"],
  },
  {
    name: "Parmeditation",
    cost: "400",
    type: ["Meditation", "För par"],
  },
  {
    name: "Lerbad",
    cost: "250",
    type: ["Hudvård"],
  },
  {
    name: "Lerbad för par",
    cost: "1000",
    type: ["Hudvård", "För par"],
  },
  {
    name: "Hårinpackning",
    cost: "350",
    type: ["Hårvård"],
  },
  {
    name: "Klippning",
    cost: "1350",
    type: ["Hårvård"],
  },
  {
    name: "Fotmassage",
    cost: "12",
    type: ["Fotvård"],
  },
  {
    name: "Amputation",
    cost: "10000",
    type: ["Fotvård"],
  },
  {
    name: "Fiskpedikyr",
    cost: "3500",
    type: ["Fotvård", "Massage", "Hudvård"],
  },
  {
    name: "Massage med varma stenar",
    cost: "345",
    type: ["Massage"],
  },
  {
    name: "Parmassage med varma stenar",
    cost: "2500",
    type: ["Massage", "För par"],
  },
  {
    name: "Svensk massage",
    cost: "1250",
    type: ["Massage"],
  },
];

// För personal, deras behandlingar och tillgängliga dagar
export const staffList = [
  {
    name: "Jonas",
    treatmentTypes: ["Hårvård", "Fotvård", "Massage"],
    availability: ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag"],
    information: "Jonas har jobbat längst här på WASHBEAR SPA utav alla våra specialister: han var med från början när kliniken öppnade våren 2010. Jonas specialiserar sig på hårdvård, fotvård och massage, men håller även på att ubilda sig inom hudvård.",
    imageLink:
    "https://ichef.bbci.co.uk/ace/standard/960/cpsprodpb/8842/live/eac34360-9847-11ef-9993-f7959d92ab33.jpg",
  },
  {
    name: "Craigory",
    treatmentTypes: ["Massage", "Hudvård"],
    availability: ["Onsdag"],
    information: "Craigory är den du söker för att friska upp kroppen! Han har över tio års erfarenhet av olika typer av massage, men är även otroligt kunnig inom hudvård.",
    imageLink:
    "https://i.natgeofe.com/n/8271db90-5c35-46bc-9429-588a9529e44a/raccoon_thumb_square.JPG?wp=1&w=357&h=357",
  },
  {
    name: "T.V. Ättbjörn",
    treatmentTypes: ["Träning", "Meditation", "Hudvård"],
    availability: ["Lördag", "Söndag"],
    information: "T.V. kan hjälpa dig med allt, oavsett om det gäller kropp, sinne eller hälsa! T.V. jobbar även i receptionen, och är oftast den som möter dig när du anländer till WASHBEAR SPA.",
    imageLink:
    "https://www.hoo-zoo.com/wp-content/uploads/2022/06/portrait-of-a-raccoon-1200x900.jpeg",
  },
  {
    name: "Vendela",
    treatmentTypes: ["Meditation", "Träning", "Massage"],
    availability: ["Tisdag", "Torsdag", "Fredag", "Lördag"],
    information: "Vendela är en av WASHBEAR SPA:s grundare och en specialist vi är stolta över att ha haft med i vårt team från dag ett. Vendela är specialiserad inom meditation och träning, och kan både få pulsen att stiga och lugna sig!",
    imageLink:
    "https://www.barkandwhiskers.com/content/images/2025/01/2023-08-03-nl-raccoons-as-pets.webp",
  },
  {
    name: "Houlaloula",
    treatmentTypes: ["Massage", "Meditation"],
    availability: ["Lördag", "Söndag"],
    information: "Houlaloula hjälper dig varva ner med helande händer och mediterande mindfullness. Houlaloula jobbar även på vår klinik utanför Göteborg, så hon är bara tillgänglig på helgerna på WASHBEAR SPA i Björnlunda.",
    imageLink:
    "https://media.istockphoto.com/photos/little-raccoon-on-tree-picture-id514622028?k=6&m=514622028&s=612x612&w=0&h=oa6bEuRd9EB_D72qJ5UD57dBfnLWz7onQDm6DFJSVLc=",
  },
  {
    name: "Zabrina",
    treatmentTypes: ["Fotvård", "Träning", "Massage"],
    availability: ["Tisdag", "Onsdag", "Torsdag"],
    information: "Zabrina är vår sportspecialist och hon ser efter dina fötter och din kropp för att säkerställa att allt är i synk för din träning.",
    imageLink:
    "https://www.turnerpest.com/wp-content/uploads/2025/04/Raccoon-Babies-in-Florida-300x300.png",
  },
  {
    name: "Gusten",
    treatmentTypes: [
      // "Hårvård",
      "Träning",
      // "Fotvård",
      // "Hudvård",
      "Massage",
      "Meditation",
    ],
    information: "Gusten är en av våra grundare, och även vår huvudsakliga specialist här på spa:t! Han kan det mesta om det mesta, så med Gusten är du i trygga, kunniga händer.",
    availability: ["Måndag", "Tisdag", "Onsdag"],
    imageLink:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzabpBH0X1F1QQ4XtN8mX8lpvevMn-0mj1vQ&s",
  },
  {
    name: "Frazi",
    treatmentTypes: ["Massage", "Hudvård"],
    availability: ["Måndag", "Onsdag", "Torsdag", "Fredag", "Söndag"],
    information: "Frazi kom till oss tidigare i år ifrån Frankrike där han har jobbat som massagespecialist i flera år, så nu har vi nöjet att få ta del av hans exotiska kunskap här på WASHBEAR SPA.",
    imageLink:
    "https://www.scenichudson.org/wp-content/uploads/2024/11/AdobeStock_173371622-1400x935.jpeg",
  },
];

export const reviews = [
  {
    name: "Rufus Rånarp",
    text: "Det här spat är helt magiskt! Tassarna känns som nya efter behandlingen.",
    rating: 5,
  },
  {
    name: "Molly Mjuknos",
    text: "Så avslappnande! Jag som brukar vara stressad hela dagen sov som en liten pungråtta.",
    rating: 4,
  },
  {
    name: "Gustav Grånos",
    text: "Lite dyrare än jag trodde, men värt varenda stjärna. Tassarna glänser!",
    rating: 5,
  },
  {
    name: "Selma Svanskrull",
    text: "Bubbelbadet var supermysigt, men jag önskar fler doftljus i rummet.",
    rating: 3,
  },
  {
    name: "Lotta Lurvnos",
    text: "Massage med de små tvättbjörnarna var underbar! Kommer definitivt tillbaka.",
    rating: 5,
  },
  {
    name: "Ragnar Rullsvans",
    text: "Fantastiskt spa! Jag kände mig som ny när jag gick därifrån.",
    rating: 5,
  },
  {
    name: "Tilda Tassar",
    text: "Allt var toppen, men jag önskar lite fler fruktiga dofter i bastun.",
    rating: 4,
  },
  {
    name: "Bosse Bäver",
    text: "Simhallen var perfekt! Jag simmade runt och kände mig som en riktig vattenråtta.",
    rating: 5,
  },
  {
    name: "Fiona Fjärtstjärta",
    text: "Pedikyr och manikyr med lilla svansen i topp – helt underbart!",
    rating: 4,
  },
  {
    name: "Nils Nospuff",
    text: "Mysig atmosfär och supervänlig personal. Tassarna luktar som nytvättade moln.",
    rating: 5,
  },
  {
    name: "Klara Klösnos",
    text: "Lite småkyligt i bastun, men bubbelbadet vägde upp allt. Mysigt spa för små tassar!",
    rating: 4,
  },
  {
    name: "Pelle Pälstuss",
    text: "Jag älskade det! Hela kroppen kändes som om jag låg på moln efter behandlingen.",
    rating: 5,
  },
  {
    name: "Signe Svansling",
    text: "Underbar service, men önskar fler doftljus och fluffigare handdukar.",
    rating: 3,
  },
  {
    name: "Leo Långnos",
    text: "Bubbelbadet med citrondoft var fantastiskt! Tassarna glänser fortfarande.",
    rating: 5,
  },
  {
    name: "Maja Mjuksvans",
    text: "Så mysigt! Kommer definitivt boka fler behandlingar nästa månad.",
    rating: 5,
  },
  {
    name: "Tobias Tassar",
    text: "Perfekt för en stressad liten räv som jag! Rekommenderas varmt.",
    rating: 5,
  },
  {
    name: "Wilma Viftnos",
    text: "Massage med lavendeldoft var underbar, men jag ville ha lite mer fluffiga handdukar.",
    rating: 4,
  },
  {
    name: "Egon Ekorrsvans",
    text: "Pedikyr och tassvård var super! Kändes som nya tassar efteråt.",
    rating: 5,
  },
  {
    name: "Tindra Tjocknos",
    text: "Lite högljudt i bubbelpoolen, men annars helt perfekt spa-upplevelse.",
    rating: 4,
  },
  {
    name: "Olle Oarv",
    text: "Spaet överträffade mina förväntningar! Kommer definitivt tillbaka.",
    rating: 5,
  },
  {
    name: "Saga Svanslinga",
    text: "Underbar service och mysig atmosfär. Tassarna känns mjuka som moln!",
    rating: 5,
  },
  {
    name: "Vera Viftstjärt",
    text: "Bastun var varm och skön, men bubbelbadet var höjdpunkten.",
    rating: 4,
  },
  {
    name: "Axel Ångsvans",
    text: "Jag har aldrig känt mig så avslappnad! Tassarna tackar för omtanken.",
    rating: 5,
  },
  {
    name: "Hilda Hoppnos",
    text: "Fantastisk massage! Lite trångt i rummet, men annars toppen.",
    rating: 4,
  },
  {
    name: "Nina Nospuff",
    text: "Bubbelbadet var magiskt! Kommer definitivt ta med hela flocken nästa gång.",
    rating: 5,
  },
  {
    name: "Leo Lurvnos",
    text: "Tassvården var perfekt, men jag önskar fler roliga dofter i spaet.",
    rating: 4,
  },
  {
    name: "Fanny Fjällnos",
    text: "Allt var supermysigt! Rekommenderas varmt för små tassar och stora hjärtan.",
    rating: 5,
  },
  {
    name: "Rasmus Rullnos",
    text: "Lite småstökigt vid entrén, men själva behandlingen var underbar.",
    rating: 4,
  },
  {
    name: "Sofie Svansprick",
    text: "Bubbelbad och massage med små tvättbjörnar – jag är helnöjd!",
    rating: 5,
  },
  {
    name: "Julius Jättnos",
    text: "Fantastiskt spa! Tassarna känns som silke och jag vill komma tillbaka.",
    rating: 5,
  },
  {
    name: "Elvira Ekfot",
    text: "Allt var toppen, men jag önskar fler mysiga filtar och doftljus.",
    rating: 4,
  },
];
