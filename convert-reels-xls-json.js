'use strict';

const reelString = `10
9
WILD
J
8
PIC1
9
K
A
9
8
K
SCAT
8
10
J
Q
10
PIC3
9
10
PIC2
Q
10
SCAT
A
K
PIC3
9
J
PIC2
8
9
SCAT
8
10
PIC3
J`;

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
