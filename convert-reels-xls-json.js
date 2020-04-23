'use strict';

const fs = require('fs');

const reelStrips = require('./reelStrips');

const finalData = {
  reelStripDefinitions: []
};

[ reelStrips.reelString1, reelStrips.reelString2,
reelStrips.reelString3, reelStrips.reelString4,
reelStrips.reelString5 ].forEach((reelString, index) => {

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
        if (value) {
          reelJson.push({ name: value });
        }
        break;

    }

  });

  finalData.reelStripDefinitions.push({
    name: `Reel ${++index}`,
    stops: reelJson
  });

});

const fileData = JSON.stringify(finalData, null, 2);
console.log(fileData);
fs.writeFileSync('./reelstrips.out.json', fileData);
