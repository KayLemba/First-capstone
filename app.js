const data = [
  {
    id: 1,
    pic: './images/kilnam.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Yochai Benkler',
    designation: ' Pilot with over 37years flying experience',
    history: 'He is an experienced pilot , entrepreneur, Burning Circle airshow sponsor , flight instructor an Burning Circle Flight Academy.',
  },
  {
    id: 2,
    pic: './images/yochai.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Kilnam Chor',
    designation: 'Pilot with over 30years flying experience',
    history: 'He is an experienced pilot , entrepreneur, Burning Circle airshow sponsor , flight instructor an Burning Circle Flight Academy.',
  },
  {
    id: 3,
    pic: './images/sohyeong.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'SohYeong Noh',
    designation: 'Korean webdeveloper and entrepreneur for 20 yeas in Tech',
    history: 'She is a webdeveloper, computer engineer, Burning Circle airshow sponsor.',
  },
  {
    id: 4,
    pic: './images/julia.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Julia Leda',
    designation: 'Southafrican Air news Magazine Author and Editor with 30years experience',
    history: 'She is a magazine editor and author and she will publish all activities that will be held at the event in her magazine',
  },
  {
    id: 5,
    pic: './images/lila.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Stephanie',
    designation: 'Southafrican Air news Magazine Author and Editor with 20years experience',
    history: 'She is a magazine editor and author and she will publish all activities that will be held at the event in her magazine.',
  },
  {
    id: 6,
    pic: './images/reagan.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Reagan Storch',
    designation: 'Zambian born experienced photographer and Graphic Designer with 15 years experience',
    history: 'He is a photographer, graphic designer, Burning cirle airshow sponsor and the founder of International studios.',
  },
];

const speakerContainer = document.createElement('section');
speakerContainer.setAttribute('class', 'featured-speakers');
speakerContainer.setAttribute('id', 'speakers');

data.forEach((speakerPara) => {
  const speakerSection = document.createElement('div');
  speakerSection.setAttribute('class', 'speaker-section');
  speakerSection.setAttribute('id', 'each-speaker');

  const imageSection = document.createElement('div');
  imageSection.setAttribute('class', 'speaker-image-section');
  const image = document.createElement('img');
  image.setAttribute('class', 'speaker-image');
  image.setAttribute('src', speakerPara.pic);
  image.setAttribute('alt', speakerPara.altText);

  imageSection.appendChild(image);
  speakerSection.appendChild(imageSection);

  const contentSection = document.createElement('div');
  contentSection.setAttribute('class', 'speaker-details');
  contentSection.setAttribute('id', 'about-speaker');

  const speakerName = document.createElement('h2');
  speakerName.setAttribute('class', 'speaker-name');
  speakerName.textContent = speakerPara.nameOfSpeaker;
  contentSection.appendChild(speakerName);

  const speakerDesignation = document.createElement('p');
  speakerDesignation.setAttribute('class', 'speaker-designation');
  speakerDesignation.textContent = speakerPara.designation;
  contentSection.appendChild(speakerDesignation);

  const dotText = document.createElement('p');
  dotText.setAttribute('id', 'dots');
  dotText.textContent = '.........';
  contentSection.appendChild(dotText);

  const speakerHistory = document.createElement('p');
  speakerHistory.setAttribute('class', 'speaker-history');
  speakerHistory.textContent = speakerPara.history;
  contentSection.appendChild(speakerHistory);

  speakerSection.appendChild(contentSection);
  speakerContainer.appendChild(speakerSection);
});

const body = document.querySelector('body');
const partners = document.getElementById('partners');
body.insertBefore(speakerContainer, partners);