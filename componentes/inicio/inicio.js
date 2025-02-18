// Crear la estructura de la carta dinámicamente
const body = document.body;

// Crear el contenedor de la carta
const card = document.createElement('div');
card.classList.add('card');

// Crear el contenido interno de la carta
const cardInner = document.createElement('div');
cardInner.classList.add('card-inner');

// Crear la cara frontal de la carta
const cardFront = document.createElement('div');
cardFront.classList.add('card-front');
cardFront.innerHTML = '<h1>¡Abre la carta!</h1>';

// Crear la cara trasera de la carta
const cardBack = document.createElement('div');
cardBack.classList.add('card-back');
cardBack.innerHTML = `<p>Hi to whoever is reading this, I just wanted to thank you for your details, they really brighten my day and I would like to know if you want to end this and at least try to get to know each other. I could talk to you whenever you want, no shame, bye, take care. <br><br>-B </p>`;

// Agregar las caras al contenedor interno
cardInner.appendChild(cardFront);
cardInner.appendChild(cardBack);

// Agregar el contenedor interno a la carta
card.appendChild(cardInner);

// Agregar la carta al body
body.appendChild(card);

// Añadir el evento de clic para abrir/cerrar la carta
card.addEventListener('click', () => {
    card.classList.toggle('open');
});