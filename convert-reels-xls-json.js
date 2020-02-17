'use strict';

const reelString = `A
K
PIC1
J
PIC4
Q
A
PIC2
J
Q
PIC1
J
Q
PIC1
J
K
SCAT
A
J
PIC3
Q
PIC2
K
PIC3
J
A
PIC4
Q
PIC1
K
SCAT
Q
K
PIC3
Q
J
PIC2
`;

const reelJson = [];
reelString.split(`\n`).forEach((value) => {

  switch (value) {

    case 'A':
      reelJson.push({ name: 'Ace' });
      break;

    case 'K':
      reelJson.push({ name: 'King' });
      break;

    case 'Q':
      reelJson.push({ name: 'Queen' });
      break;

    case 'J':
      reelJson.push({ name: 'Jack' });
      break;

    case '10':
      reelJson.push({ name: 'Ten' });
      break;

    case '9':
      reelJson.push({ name: 'Nine' });
      break;

    case '8':
      reelJson.push({ name: 'Eight' });
      break;

    case 'WILD':
      reelJson.push({ name: 'Wild' });
      break;

    case 'SCAT':
      reelJson.push({ name: 'Scatter' });
      break;

    case 'PIC1':
      reelJson.push({ name: 'Pic1' });
      break;

    case 'PIC2':
      reelJson.push({ name: 'Pic2' });
      break;

    case 'PIC3':
      reelJson.push({ name: 'Pic3' });
      break;

    case 'PIC4':
      reelJson.push({ name: 'Pic4' });
      break;

    case 'PIC5':
      reelJson.push({ name: 'Pic5' });
      break;

    default:
      reelJson.push({ name: value });
      break;

  }

});

console.log(JSON.stringify(reelJson));
