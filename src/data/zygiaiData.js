import zygis1foto1 from '../assets/img/europos-sostines.jpg'; // Pakeiskite į tikrą nuotraukų kelią
import zygis1foto2 from '../assets/img/europos-sostines-2.jpg'; 
import zygis1foto3 from '../assets/img/europos-sostines-3.jpg'; 
import zygis1foto4 from '../assets/img/europos-sostines-4.jpg'; 
import zygis2foto1 from '../assets/img/namo.jpg'; 
import zygis2foto2 from '../assets/img/namo-2.jpg'; 
import zygis2foto3 from '../assets/img/namo-3.jpg'; 
import zygis2foto4 from '../assets/img/namo-4.jpg'; 
import zygis3foto1 from '../assets/img/zasliai.jpg'; 
import zygis3foto2 from '../assets/img/zasliai-2.jpg'; 
import zygis3foto3 from '../assets/img/zasliai-3.jpg'; 
import zygis3foto4 from '../assets/img/zasliai-4.jpg'; 


const zygiai = [
  {
    id: 1,
    pavadinimas: "RK nuotykiai Europoje",
    vieta: " Šveicarijos kultūros namai. Pergalės g. 17, Šveicarija, 55302 Jonavos r. sav.",
    aprasymas: "Nuostabus pavasario žygis palei Dubysos upę, atrasti gamtos grožį.",
    nuotraukos: [
      zygis1foto1, // Naudojame importuotas nuotraukas
      zygis1foto2,
      zygis1foto3,
      zygis1foto4,
    ],
    aplankytosVietos: [" Europos valstybių sostines", "Apleisti objektai", "Partizanų bunkeris"],
    nueitiKm: 21,
    aplankytiObjektai: [" Kaišiadorių krašto lankytin objektai", "Istorinis malūnas", "Apžvalgos aikštelė"],
  },
  {
    id: 2,
    pavadinimas: "Namo vėl reikės pareiti",
    vieta: " Kaišiadorių rajono pusės",
    aprasymas: "Vasara prie Ventos upės, tyrinėjant geologinius atodangas ir istorinius paminklus.",
    nuotraukos: [
      zygis2foto1,
      zygis2foto2,
      zygis2foto3,
      zygis2foto4,
    ],
    aplankytosVietos: ["Papilės atodanga", "Šarkos kalnas", "Ventos atodanga"],
    nueitiKm: 25,
    aplankytiObjektai: ["Dinozaurų pėdsakai", "Papilės piliakalnis", "Muziejaus ekspozicija po atviru dangumi"],
  },
  {
    id: 3,
    pavadinimas: "Žasliai – mažieji Trakai",
    vieta: "Žasliai, Kaišiadorių r. sav.",
    aprasymas: "Gaivinantis žygis Žaslių ežerų pakrante.",
    nuotraukos: [
      zygis3foto1,
      zygis3foto2,
      zygis3foto3,
      zygis3foto4,
    ],
    aplankytosVietos: ["Žaslių ežeru", "Žaslių karštovaidžiai", "Žaslių piliakalnis"],
    nueitiKm: 10.0,
    aplankytiObjektai: ["Žaslių muziejus", "Žaslių skulptūra"]
  }, // Jei bus daugiau žygių, čia palikite kablelį, kitu atveju - ištrinkite.
]; 

export default zygiai;