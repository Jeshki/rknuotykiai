// src/data/busimiZygiaiData.js

// Importuokite nuotraukas (pakeiskite į tikrus failų pavadinimus ir kelius)
import zygisKaledorius1 from '../assets/img/kauno-marios.jpg'; // Pavyzdys
import zygisKaledorius2 from '../assets/img/aukstaitijos-np.jpg'; // Pavyzdys
import zygisKaledorius3 from '../assets/img/dzukija.png'; // Pavyzdys
import zygisKaledorius4 from '../assets/img/veisiejai.jpg'; // Pavyzdys


const busimiZygiai = [
  {
    id: 1,
    pavadinimas: "Pavasario pabudimas: Žygis Kauno marių regioniniame parke",
    cardPhoto: zygisKaledorius1, // <<-- PRIDĖTA: Pagrindinė nuotrauka kortelei
    data: "2025-05-24", // YYYY-MM-DD formatas
    laikas: "10:00", // HH:MM formatas
    susitikimoVieta: "Kauno marių regioninio parko direkcija",
    koordinates: "54.8475, 24.1205", // Pavyzdys: platuma, ilguma
    kaina: 15, // Eurais
    aprasymas: "Lengvas, bet vaizdingas žygis aplink Kauno marias, skirtas pasitikti pavasarį ir pasigrožėti atsiveriančiais vaizdais. Tinka visai šeimai.",
    statusas: "aktyvus", // galimi: 'aktyvus', 'atšauktas', 'pilna'
  },
  {
    id: 2,
    pavadinimas: "Naktinis žygis Aukštaitijos nacionaliniame parke",
    cardPhoto: zygisKaledorius2, // <<-- PRIDĖTA
    data: "2025-06-14",
    laikas: "21:00",
    susitikimoVieta: "Palūšės kaimas, Ignalinos r.",
    koordinates: "55.3268, 26.0963",
    kaina: 25,
    aprasymas: "Išbandykite save naktiniame žygyje, stebėdami žvaigždes ir klausydamiesi miško garsų. Būtinas prožektorius ir geras nuotaika!",
    statusas: "aktyvus",
  },
  {
    id: 3,
    pavadinimas: "Vasaros saulėgrįžos žygis Dzūkijos miškuose",
    cardPhoto: zygisKaledorius3, // <<-- PRIDĖTA
    data: "2025-06-21",
    laikas: "15:00",
    susitikimoVieta: "Marcinkonių lankytojų centras, Varėnos r.",
    koordinates: "54.0450, 24.4090",
    kaina: 20,
    aprasymas: "Praleiskite ilgiausią dieną gražiausiose Dzūkijos vietose, pažinkite vietinę florą ir fauną, išmoksite apie tradicijas.",
    statusas: "aktyvus",
  },
  {
    id: 4,
    pavadinimas: "Rudens spalvos: Žygis Veisiejų regioniniame parke",
    cardPhoto: zygisKaledorius4, // <<-- PRIDĖTA
    data: "2025-09-27",
    laikas: "11:00",
    susitikimoVieta: "Veisiejų dvaro parkas, Lazdijų r.",
    koordinates: "54.0988, 23.6931",
    kaina: 18,
    aprasymas: "Pasigrožėkite rudens spalvomis vaizdingame Veisiejų parke ir ežerų pakrantėse. Puikiai tinka fotografijos entuziastams.",
    statusas: "aktyvus",
  },
];

export default busimiZygiai;