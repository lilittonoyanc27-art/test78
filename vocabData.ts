export interface Challenge {
  problem: string;
  solution: string;
  translation: string;
  options: string[];
  correctAnswer: string;
  context?: string;
}

export const PREPOSITION_CHALLENGES: Challenge[] = [
  { problem: "Sueño ___ mis vacaciones.", translation: "Ես երազում եմ իմ արձակուրդների մասին:", solution: "con", options: ["con", "de", "en"], correctAnswer: "con" },
  { problem: "Depende ___ el tiempo.", translation: "Դա կախված է եղանակից:", solution: "de", options: ["de", "con", "a"], correctAnswer: "de" },
  { problem: "Pienso ___ ti.", translation: "Ես մտածում եմ քո մասին:", solution: "en", options: ["en", "de", "con"], correctAnswer: "en" },
  { problem: "Voy ___ la playa.", translation: "Ես գնում եմ լողափ:", solution: "a", options: ["a", "en", "por"], correctAnswer: "a" },
  { problem: "Me enamoro ___ ella.", translation: "Ես սիրահարվում եմ նրան:", solution: "de", options: ["de", "con", "a"], correctAnswer: "de" },
  { problem: "Trato ___ dormir.", translation: "Ես փորձում եմ քնել:", solution: "de", options: ["de", "a", "por"], correctAnswer: "de" },
  { problem: "Hablo ___ teléfono.", translation: "Ես խոսում եմ հեռախոսով:", solution: "por", options: ["por", "en", "con"], correctAnswer: "por" },
  { problem: "Empiezo ___ estudiar.", translation: "Ես սկսում եմ սովորել:", solution: "a", options: ["a", "de", "en"], correctAnswer: "a" },
  { problem: "Dejo ___ fumar.", translation: "Ես թողնում եմ (դադարում եմ) ծխել:", solution: "de", options: ["de", "a", "por"], correctAnswer: "de" },
  { problem: "Ayudo ___ mi madre.", translation: "Ես օգնում եմ մորս:", solution: "a", options: ["a", "de", "con"], correctAnswer: "a" },
  { problem: "Paso ___ tu casa.", translation: "Ես անցնում եմ քո տան մոտով:", solution: "por", options: ["por", "para", "a"], correctAnswer: "por" },
  { problem: "Vengo ___ Madrid.", translation: "Ես գալիս եմ Մադրիդից:", solution: "de", options: ["de", "desde", "en"], correctAnswer: "de" },
  { problem: "Salgo ___ clase.", translation: "Ես դուրս եմ գալիս դասից:", solution: "de", options: ["de", "a", "en"], correctAnswer: "de" },
  { problem: "Entro ___ el cuarto.", translation: "Ես մտնում եմ սենյակ:", solution: "en", options: ["en", "a", "de"], correctAnswer: "en" },
  { problem: "Me quejo ___ la comida.", translation: "Ես բողոքում եմ ուտելիքից:", solution: "de", options: ["de", "por", "sobre"], correctAnswer: "de" }
];

export const TIME_CHALLENGES: Challenge[] = [
  { problem: "1:00", translation: "Ժամը մեկն է:", solution: "Es la una", options: ["Es la una", "Son las una", "Es las una"], correctAnswer: "Es la una" },
  { problem: "2:00", translation: "Ժամը երկուսն է:", solution: "Son las dos", options: ["Son las dos", "Es la dos", "Son las doce"], correctAnswer: "Son las dos" },
  { problem: "3:15", translation: "Երեքն անց տասնհինգ (քառորդ):", solution: "Son las tres y cuarto", options: ["Son las tres y cuarto", "Son las tres y quince", "Son las tres menos cuarto"], correctAnswer: "Son las tres y cuarto" },
  { problem: "4:30", translation: "Չորսն անց կես:", solution: "Son las cuatro y media", options: ["Son las cuatro y media", "Son las cuatro y treinta", "Son las cuatro menos media"], correctAnswer: "Son las cuatro y media" },
  { problem: "5:45", translation: "Վեցից քառորդ պակաս:", solution: "Son las seis menos cuarto", options: ["Son las seis menos cuarto", "Son las cinco y cuarenta", "Son las cinco menos cuarto"], correctAnswer: "Son las seis menos cuarto" },
  { problem: "6:10", translation: "Վեցն անց տասը:", solution: "Son las seis y diez", options: ["Son las seis y diez", "Son las seis menos diez", "Es las seis y diez"], correctAnswer: "Son las seis y diez" },
  { problem: "7:50", translation: "Ութից տասը պակաս:", solution: "Son las ocho menos diez", options: ["Son las ocho menos diez", "Son las siete y cincuenta", "Son las ocho y diez"], correctAnswer: "Son las ocho menos diez" },
  { problem: "12:00 (midday)", translation: "Կեսօր է:", solution: "Es el mediodía", options: ["Es el mediodía", "Es la medianoche", "Son las doce"], correctAnswer: "Es el mediodía" },
  { problem: "12:00 (midnight)", translation: "Կեսգիշեր է:", solution: "Es la medianoche", options: ["Es la medianoche", "Es el mediodía", "Son las doce"], correctAnswer: "Es la medianoche" },
  { problem: "8:05", translation: "Ութն անց հինգ:", solution: "Son las ocho y cinco", options: ["Son las ocho y cinco", "Son las ocho menos cinco", "Es las ocho y cinco"], correctAnswer: "Son las eight y cinco" },
  { problem: "9:20", translation: "Ինն անց քսան:", solution: "Son las nueve y veinte", options: ["Son las nueve y veinte", "Son las ocho y veinte", "Es la nueve y veinte"], correctAnswer: "Son las nueve y veinte" },
  { problem: "10:35", translation: "Տասնմեկից քսանհինգ պակաս:", solution: "Son las once menos veinticinco", options: ["Son las once menos veinticinco", "Son las diez y treinta y cinco", "Son las diez menos veinticinco"], correctAnswer: "Son las once menos veinticinco" },
  { problem: "11:55", translation: "Տասներկուսից հինգ պակաս:", solution: "Son las doce menos cinco", options: ["Son las doce menos cinco", "Son las once y cincuenta y cinco", "Son las doce y cinco"], correctAnswer: "Son las doce menos cinco" },
  { problem: "2:15", translation: "Երկուսն անց քառորդ:", solution: "Son las dos y cuarto", options: ["Son las dos y cuarto", "Son las dos y quince", "Son las una y cuarto"], correctAnswer: "Son las dos y cuarto" },
  { problem: "4:25", translation: "Չորսն անց քսանհինգ:", solution: "Son las cuatro y veinticinco", options: ["Son las cuatro y veinticinco", "Son las cinco menos veinticinco", "Es las cuatro y veinticinco"], correctAnswer: "Son las cuatro y veinticinco" },
  { problem: "5:10", translation: "Հինգն անց տասը:", solution: "Son las cinco y diez", options: ["Son las cinco y diez", "Es las cinco y diez", "Son las cinco menos diez"], correctAnswer: "Son las cinco y diez" },
  { problem: "6:40", translation: "Յոթից քսան պակաս:", solution: "Son las siete menos veinte", options: ["Son las siete menos veinte", "Son las seis y cuarenta", "Son las seis menos veinte"], correctAnswer: "Son las siete menos veinte" },
  { problem: "1:30", translation: "Մեկն անց կես:", solution: "Es la una y media", options: ["Es la una y media", "Son las una y media", "Es la una y treinta"], correctAnswer: "Es la una y media" },
  { problem: "3:55", translation: "Չորսից հինգ պակաս:", solution: "Son las cuatro menos cinco", options: ["Son las cuatro menos cinco", "Son las tres y cincuenta y cinco", "Es las cuatro menos cinco"], correctAnswer: "Son las cuatro menos cinco" },
  { problem: "10:15", translation: "Տասն անց քառորդ:", solution: "Son las diez y cuarto", options: ["Son las diez y cuarto", "Son las diez y quince", "Son las nueve y cuarto"], correctAnswer: "Son las diez y cuarto" }
];

export const PRESENT_CHALLENGES: Challenge[] = [
  { problem: "Yo (hablar) ___ español.", translation: "Ես խոսում եմ իսպաներեն:", solution: "hablo", options: ["hablo", "hablas", "habla"], correctAnswer: "hablo" },
  { problem: "Tú (comer) ___ una manzana.", translation: "Դու խնդձոր ես ուտում:", solution: "comes", options: ["como", "comes", "come"], correctAnswer: "comes" },
  { problem: "Él (vivir) ___ en Madrid.", translation: "Նա ապրում է Մադրիդում:", solution: "vive", options: ["vivo", "vives", "vive"], correctAnswer: "vive" },
  { problem: "Nosotros (estudiar) ___ mucho.", translation: "Մենք շատ ենք սովորում:", solution: "estudiamos", options: ["estudiamos", "estudiáis", "estudian"], correctAnswer: "estudiamos" },
  { problem: "Ellos (correr) ___ en el parque.", translation: "Նրանք վազում են այգում:", solution: "corren", options: ["corremos", "corréis", "corren"], correctAnswer: "corren" },
  { problem: "Yo (ser) ___ estudiante.", translation: "Ես ուսանող եմ:", solution: "soy", options: ["soy", "eres", "es"], correctAnswer: "soy" },
  { problem: "Tú (estar) ___ feliz.", translation: "Դու երջանիկ ես:", solution: "estás", options: ["estoy", "estás", "está"], correctAnswer: "estás" },
  { problem: "Él (tener) ___ un perro.", translation: "Նա շուն ունի:", solution: "tiene", options: ["tengo", "tienes", "tiene"], correctAnswer: "tiene" },
  { problem: "Yo (hacer) ___ mi tarea.", translation: "Ես անում եմ իմ տնայինը:", solution: "hago", options: ["hago", "haces", "hace"], correctAnswer: "hago" },
  { problem: "Ustedes (beber) ___ agua.", translation: "Դուք ջուր եք խմում:", solution: "beben", options: ["bebe", "bebemos", "beben"], correctAnswer: "beben" },
  { problem: "Ella (escribir) ___ una carta.", translation: "Նա նամակ է գրում:", solution: "escribe", options: ["escribo", "escribes", "escribe"], correctAnswer: "escribe" },
  { problem: "Nosotros (ir) ___ al cine.", translation: "Մենք գնում ենք կինո:", solution: "vamos", options: ["voy", "vas", "vamos"], correctAnswer: "vamos" },
  { problem: "Yo (querer) ___ un café.", translation: "Ես սուրճ եմ ուզում:", solution: "quiero", options: ["quiero", "quieres", "quiere"], correctAnswer: "quiero" },
  { problem: "Tú (poder) ___ cantar.", translation: "Դու կարող ես երգել:", solution: "puedes", options: ["puedo", "puedes", "puede"], correctAnswer: "puedes" },
  { problem: "Ellos (dar) ___ un regalo.", translation: "Նրանք նվեր են տալիս:", solution: "dan", options: ["damos", "dais", "dan"], correctAnswer: "dan" },
  { problem: "Yo (ver) ___ la televisión.", translation: "Ես հեռուստացույց եմ դիտում:", solution: "veo", options: ["veo", "ves", "ve"], correctAnswer: "veo" },
  { problem: "Nosotros (saber) ___ la verdad.", translation: "Մենք գիտենք ճշմարտությունը:", solution: "sabemos", options: ["sé", "sabes", "sabemos"], correctAnswer: "sabemos" },
  { problem: "Ella (venir) ___ a la fiesta.", translation: "Նա գալիս է խնջույքին:", solution: "viene", options: ["vengo", "vienes", "viene"], correctAnswer: "viene" },
  { problem: "Yo (poner) ___ la mesa.", translation: "Ես սեղանն եմ գցում:", solution: "pongo", options: ["pongo", "pones", "pone"], correctAnswer: "pongo" },
  { problem: "Tú (leer) ___ un libro.", translation: "Դու գիրք ես կարդում:", solution: "lees", options: ["leo", "lees", "lee"], correctAnswer: "lees" }
];

export const TOP_VERBS = [
  { v: "hablar", t: "խոսել" }, { v: "comer", t: "ուտել" }, { v: "vivir", t: "ապրել" },
  { v: "ser", t: "լինել (էություն)" }, { v: "estar", t: "լինել (վիճակ)" }, { v: "tener", t: "ունենալ" },
  { v: "hacer", t: "անել" }, { v: "ir", t: "գնալ" }, { v: "decir", t: "ասել" },
  { v: "ver", t: "տեսնել" }, { v: "poder", t: "կարողանալ" }, { v: "querer", t: "ուզենալ" },
  { v: "saber", t: "գիտենալ" }, { v: "dar", t: "տալ" }, { v: "venir", t: "գալ" },
  { v: "poner", t: "դնել" }, { v: "salir", t: "դուրս գալ" }, { v: "traer", t: "բերել" },
  { v: "oír", t: "լսել" }, { v: "leer", t: "կարդալ" }
];
