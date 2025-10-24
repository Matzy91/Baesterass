// För att filtrera mellan olika behandlingar 
const treatmentTypes = ["Massage", "Fotvård", "Hårvård", "Träning", "Meditation", "Hudvård", "För par"]

// För att välja olika behandlingar: visa typ + kostnad
const treatmentList = [
    {
        name: "Massage",
        cost: "1000",
        type: "Massage",
    },
    {
        name: "Parmassage",
        cost: "2500",
        type: ["Massage", "För par"]
    },
    {
        name: "Yoga",
        cost: "1500",
        type: ["Träning", "Meditation"],
    },
    {
        name: "Pilates",
        cost: "1350",
        type: "Träning",
    },
    {
        name: "Meditation",
        cost: "200",
        type: "Meditation",
    },
    {
        name: "Parmeditation",
        cost: "400",
        type: "Meditation",
    },
    {
        name: "Lerbad",
        cost: "250",
        type: "Hudvård",
    },
    {
        name: "Lerbad för par",
        cost: "1000",
        type: ["Hudvård", "För par"],
    },
    {
        name: "Hårinpackning",
        cost: "350",
        type: "Hårvård",
    },
    {
        name: "Klippning",
        cost: "1350",
        type: "Hårvård",
    },
    {
        name: "Fotmassage",
        cost: "12",
        type: "Fotvård",
    },
    {
        name: "Amputation",
        cost: "10000",
        type: "Fotvård",
    },
]

// För personal, deras behandlingar och tillgängliga dagar
const staffList = [
    {
        name: "Jonas",
        treatmentTypes: ["Hårvård", "Fotvård", "Massage"],
        availability: ["Måndag", "Tisdag"],
        imageLink: "https://ichef.bbci.co.uk/ace/standard/960/cpsprodpb/8842/live/eac34360-9847-11ef-9993-f7959d92ab33.jpg"
    },
    {
        name: "Craigory",
        treatmentTypes: ["Massage", "Hudvård"],
        availability: ["Onsdag"],
        imageLink: "https://crittercontroloftampa.com/wp-content/uploads/florida-angry-raccoon.jpg"
    },
    {
        name: "T.V. Ättbjörn",
        treatmentTypes: ["Träning", "Meditation", "Hudvård"],
        availability: ["Lördag", "Söndag"],
        imageLink: "https://www.hoo-zoo.com/wp-content/uploads/2022/06/portrait-of-a-raccoon-1200x900.jpeg"
    },
    {
        name: "Vendela",
        treatmentTypes: ["Meditation", "Träning", "Massage"],
        availability: ["Tisdag", "Torsdag", "Fredag", "Lördag"],
        imageLink: "https://www.barkandwhiskers.com/content/images/2025/01/2023-08-03-nl-raccoons-as-pets.webp"
    },
    {
        name: "Houlaloula",
        treatmentTypes: ["Massage", "Meditation"],
        availability: ["Lördag", "Söndag"],
        imageLink: "https://media.istockphoto.com/photos/little-raccoon-on-tree-picture-id514622028?k=6&m=514622028&s=612x612&w=0&h=oa6bEuRd9EB_D72qJ5UD57dBfnLWz7onQDm6DFJSVLc="
    },
    {
        name: "Zabrina",
        treatmentTypes: ["Fotvård", "Träning", "Massage"],
        availability: ["Tisdag", "Torsdag"],
        imageLink: "https://www.turnerpest.com/wp-content/uploads/2025/04/Raccoon-Babies-in-Florida-300x300.png"
    },
    {
        name: "Gusten",
        treatmentTypes: ["Hårvård", "Träning", "Fotvård", "Hudvård", "Massage", "Meditation"],
        availability: ["Måndag", "Tisdag"],
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzabpBH0X1F1QQ4XtN8mX8lpvevMn-0mj1vQ&s"
    },
    {
        name: "Frazi",
        treatmentTypes: ["Massage", "Hudvård"],
        availability: ["Fredag", "Söndag"],
        imageLink: "https://www.scenichudson.org/wp-content/uploads/2024/11/AdobeStock_173371622-1400x935.jpeg"
    },
];



export const reviews = [
  {
    name: "Rufus Rånarp",
    text: "Det här spat är helt magiskt! Tassarna känns som nya efter behandlingen.",
    rating: 5
  },
  {
    name: "Molly Mjuknos",
    text: "Så avslappnande! Jag som brukar vara stressad hela dagen sov som en liten pungråtta.",
    rating: 4
  },
  {
    name: "Gustav Grånos",
    text: "Lite dyrare än jag trodde, men värt varenda stjärna. Tassarna glänser!",
    rating: 5
  },
  {
    name: "Selma Svanskrull",
    text: "Bubbelbadet var supermysigt, men jag önskar fler doftljus i rummet.",
    rating: 3
  },
  {
    name: "Lotta Lurvnos",
    text: "Massage med de små tvättbjörnarna var underbar! Kommer definitivt tillbaka.",
    rating: 5
  },
  {
    name: "Ragnar Rullsvans",
    text: "Fantastiskt spa! Jag kände mig som ny när jag gick därifrån.",
    rating: 5
  },
  {
    name: "Tilda Tassar",
    text: "Allt var toppen, men jag önskar lite fler fruktiga dofter i bastun.",
    rating: 4
  }
];
