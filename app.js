// VIDEO REFERENCIA
// https://www.youtube.com/watch?v=FjAWimmteio

const buttonFrase = document.querySelector('#buttonFrase');
const frase1Output = document.querySelector('#frase1');
const frase2Output = document.querySelector('#frase2');
const frase3Output = document.querySelector('#frase3');
const frase4Output = document.querySelector('#frase4');

let frase1 = [
	'Paciencia, ciencia de la paz.',
	'Para la trampa un plan B.',
	'Le enseñó que un fracaso',
	'La alergia a hacerse cargo',
	'Los peores vicios',
	'Siendo presencia es como',
	'Por tu milagrosa mano',
	'Necesidad de unirme al gheto',
	'En su escala de valores',
	'Que se hayan inventado',
	'Son los oportunistas',
	'La soberbia mira desde más ariba',
	'Y si hemos caído bajo',
	'Perdonenme si voy a desmentir',
	'Te le animabas a todo',
	'Llevame más lejos amor',
	'Empieza el ritual',
];

let frase2 = [
	'Debe ser la herramienta eficaz',
	'Vos no querés ser así',
	'No siempre es perder',
	'Deja un sabor amargo',
	'Son las malas actitudes',
	'Siento conciencia por el todo',
	'Y el milagro de tus pies',
	'De los que apelan a besarte',
	'El pone siempre primero',
	'Las Pastillas del Abuelo',
	'De la desesperanza',
	'Y no llora penas ajenas',
	'Probemos tocando fondo',
	'Varios conceptos que supe sentir',
	'Lo que se pusiera en frente',
	'Esta luna ya la conozco',
	'Nadie dice nada pero',
];

let frase3 = [
	'Cuando nos falta creatividad',
	'Por guita baila el mono',
	'Él lo aprendió, lo masticó',
	'Y va configurando realidad',
	'Los otros son',
	'Raro como el amor',
	'Muchas gracias sr DIOS',
	'En escondites bien secretos',
	'Sobre todo la importancia',
	'Y por supuesto',
	'Mientras más les das',
	'En cambio el autoestima se trasmite',
	'Todo se conecta de algún modo',
	'Absolutismos que ayudaron a vivir',
	'No te quitan lo bailado',
	'Vamos a hacernos el favor',
	'Yo lo siento igual',
];

let frase4 = [
	'',
	'Y vos no tenés swing.',
	'Y por fin supo reír',
	'',
	'Fácilmente razonables',
	'Que su expansión es hacia el centro',
	'Muchas gracias sr DIEZ',
	'Con la locura como estandarte.',
	'De un corazon entero',
	'La 20 que explota',
	'Menos les alcanza',
	'Y contagia cualquier persona buena',
	'Y te sorprende, mi amor.',
	'',
	'Ni te cuentan que se siente',
	'Y que vuele todo hasta el cosmos',
];

function rand() {
	let res = Math.floor(Math.random() * frase1.length);
	frase1Output.innerText = `${frase1[res]}`;
	frase2Output.innerText = `${frase2[res]}`;
	frase3Output.innerText = `${frase3[res]}`;
	frase4Output.innerText = `${frase4[res]}`;
}

buttonFrase.addEventListener('click', rand);
