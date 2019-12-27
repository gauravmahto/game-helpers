'use strict';

const { createInterface } = require('readline');

const reelStripDefinitions = [
  {
    "name": "Reel 1",
    "stops": [
      {
        "name": "Ace"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Wild"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Ace"
      },
      {
        "name": "Pic1"
      },
      {
        "name": "King"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Wild"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Scatter"
      },
      {
        "name": "King"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Pic2"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Pic1"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Scatter"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Pic1"
      },
      {
        "name": "Queen"
      },
      {
        "name": "King"
      },
      {
        "name": "Wild"
      },
      {
        "name": "Ace"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Pic2"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Pic3"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Scatter"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Pic3"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Scatter"
      }
    ]
  },
  {
    "name": "Reel 2",
    "stops": [
      {
        "name": "Ten"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Wild"
      },
      {
        "name": "Ace"
      },
      {
        "name": "King"
      },
      {
        "name": "Pic1"
      },
      {
        "name": "Jack"
      },
      {
        "name": "King"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Pic3"
      },
      {
        "name": "Jack"
      },
      {
        "name": "King"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Jack"
      },
      {
        "name": "King"
      },
      {
        "name": "Wild"
      },
      {
        "name": "Ace"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Ace"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Scatter"
      },
      {
        "name": "King"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Pic2"
      },
      {
        "name": "Ace"
      },
      {
        "name": "King"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Pic3"
      },
      {
        "name": "Ace"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Scatter"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Pic1"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Scatter"
      },
      {
        "name": "Nine"
      },
      {
        "name": "King"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Pic2"
      },
      {
        "name": "Nine"
      },
      {
        "name": "King"
      }
    ]
  },
  {
    "name": "Reel 3",
    "stops": [
      {
        "name": "Ten"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Wild"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Pic3"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Eight"
      },
      {
        "name": "King"
      },
      {
        "name": "Wild"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Pic1"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Pic2"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Ace"
      },
      {
        "name": "Pic1"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Scatter"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Ace"
      },
      {
        "name": "King"
      },
      {
        "name": "Pic2"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Ace"
      },
      {
        "name": "Pic3"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Scatter"
      },
      {
        "name": "King"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Pic1"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Ace"
      },
      {
        "name": "Pic1"
      },
      {
        "name": "Eight"
      }
    ]
  },
  {
    "name": "Reel 4",
    "stops": [
      {
        "name": "King"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Wild"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Pic3"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Ace"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Pic2"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Ace"
      },
      {
        "name": "King"
      },
      {
        "name": "Scatter"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Pic3"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Scatter"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Pic2"
      },
      {
        "name": "Ace"
      },
      {
        "name": "King"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Ace"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Pic1"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Scatter"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Pic2"
      },
      {
        "name": "Nine"
      }
    ]
  },
  {
    "name": "Reel 5",
    "stops": [
      {
        "name": "Ten"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Wild"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Pic1"
      },
      {
        "name": "Nine"
      },
      {
        "name": "King"
      },
      {
        "name": "Ace"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Eight"
      },
      {
        "name": "King"
      },
      {
        "name": "Scatter"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Pic3"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Pic2"
      },
      {
        "name": "Queen"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Scatter"
      },
      {
        "name": "Ace"
      },
      {
        "name": "King"
      },
      {
        "name": "Pic3"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Jack"
      },
      {
        "name": "Pic2"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Nine"
      },
      {
        "name": "Scatter"
      },
      {
        "name": "Eight"
      },
      {
        "name": "Ten"
      },
      {
        "name": "Pic3"
      },
      {
        "name": "Jack"
      }
    ]
  }
];

function getReel1Symbols() {

  return new Promise((res, rej) => {

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(`Provide the symbols you want to stop at Reel1 (CSV format): `, (answer) => {

      let error = false;
      const reel1Symbols = answer.split(',').map(elem => elem.trim());

      if (reel1Symbols.length !== 3) {

        error = true;

      }

      rl.close();

      if (error) {

        return rej('Invalid input provided for Reel1. The program will be terminated.');

      }

      return res(reel1Symbols);

    });

  });

}

function getReel2Symbols() {

  return new Promise((res, rej) => {

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(`Provide the symbols you want to stop at Reel2 (CSV format): `, (answer) => {

      let error = false;
      const reel2Symbols = answer.split(',').map(elem => elem.trim());

      if (reel2Symbols.length !== 3) {

        error = true;

      }

      rl.close();

      if (error) {

        return rej('Invalid input provided for Reel2. The program will be terminated.');

      }

      return res(reel2Symbols);

    });

  });

}

function getReel3Symbols() {

  return new Promise((res, rej) => {

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(`Provide the symbols you want to stop at Reel3 (CSV format): `, (answer) => {

      let error = false;
      const reel3Symbols = answer.split(',').map(elem => elem.trim());

      if (reel3Symbols.length !== 3) {

        error = true;

      }

      rl.close();

      if (error) {

        return rej('Invalid input provided for Reel3. The program will be terminated.');

      }

      return res(reel3Symbols);

    });

  });

}

function getReel4Symbols() {

  return new Promise((res, rej) => {

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(`Provide the symbols you want to stop at Reel4 (CSV format): `, (answer) => {

      let error = false;
      const reel4Symbols = answer.split(',').map(elem => elem.trim());

      if (reel4Symbols.length !== 3) {

        error = true;

      }

      rl.close();

      if (error) {

        return rej('Invalid input provided for Reel4. The program will be terminated.');

      }

      return res(reel4Symbols);

    });

  });

}

function getReel5Symbols() {

  return new Promise((res, rej) => {

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(`Provide the symbols you want to stop at Reel5 (CSV format): `, (answer) => {

      let error = false;
      const reel5Symbols = answer.split(',').map(elem => elem.trim());

      if (reel5Symbols.length !== 3) {

        error = true;

      }

      rl.close();

      if (error) {

        return rej('Invalid input provided for Reel5. The program will be terminated.');

      }

      return res(reel5Symbols);

    });

  });

}

function getNextReelIndex(index, incrementBy, maxSize) {

  return ((index + incrementBy) % maxSize);

}

(async function main() {

  let reel1Symbols, reel2Symbols, reel3Symbols, reel4Symbols, reel5Symbols;
  let [ reel1Stop, reel2Stop, reel3Stop, reel4Stop, reel5Stop ] = [ -1, -1, -1, -1, -1 ];

  reel1Symbols = await getReel1Symbols();
  reel2Symbols = await getReel2Symbols();
  reel3Symbols = await getReel3Symbols();
  reel4Symbols = await getReel4Symbols();
  reel5Symbols = await getReel5Symbols();

  reel1Stop = reelStripDefinitions[ 0 ].stops.findIndex((elem, index, arr) => {

    if ((elem.name.toLowerCase() === reel1Symbols[ 0 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 1, reelStripDefinitions[ 0 ].stops.length) ].name.toLowerCase() === reel1Symbols[ 1 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 2, reelStripDefinitions[ 0 ].stops.length) ].name.toLowerCase() === reel1Symbols[ 2 ].toLowerCase())) {

      return true;

    }

    return false;

  });

  reel2Stop = reelStripDefinitions[ 1 ].stops.findIndex((elem, index, arr) => {

    if ((elem.name.toLowerCase() === reel2Symbols[ 0 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 1, reelStripDefinitions[ 1 ].stops.length) ].name.toLowerCase() === reel2Symbols[ 1 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 2, reelStripDefinitions[ 1 ].stops.length) ].name.toLowerCase() === reel2Symbols[ 2 ].toLowerCase())) {

      return true;

    }

    return false;

  });

  reel3Stop = reelStripDefinitions[ 2 ].stops.findIndex((elem, index, arr) => {

    if ((elem.name.toLowerCase() === reel3Symbols[ 0 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 1, reelStripDefinitions[ 2 ].stops.length) ].name.toLowerCase() === reel3Symbols[ 1 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 2, reelStripDefinitions[ 2 ].stops.length) ].name.toLowerCase() === reel3Symbols[ 2 ].toLowerCase())) {

      return true;

    }

    return false;

  });

  reel4Stop = reelStripDefinitions[ 3 ].stops.findIndex((elem, index, arr) => {

    if ((elem.name.toLowerCase() === reel4Symbols[ 0 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 1, reelStripDefinitions[ 3 ].stops.length) ].name.toLowerCase() === reel4Symbols[ 1 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 2, reelStripDefinitions[ 3 ].stops.length) ].name.toLowerCase() === reel4Symbols[ 2 ].toLowerCase())) {

      return true;

    }

    return false;

  });

  reel5Stop = reelStripDefinitions[ 4 ].stops.findIndex((elem, index, arr) => {

    if ((elem.name.toLowerCase() === reel5Symbols[ 0 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 1, reelStripDefinitions[ 4 ].stops.length) ].name.toLowerCase() === reel5Symbols[ 1 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 2, reelStripDefinitions[ 4 ].stops.length) ].name.toLowerCase() === reel5Symbols[ 2 ].toLowerCase())) {

      return true;

    }

    return false;

  });

  if ((reel1Stop !== -1) &&
    (reel2Stop !== -1) &&
    (reel3Stop !== -1) &&
    (reel4Stop !== -1) &&
    (reel5Stop !== -1)) {

    console.log(`Reel stops: 
      Reel1 = ${reel1Stop + 1}
      Reel2 = ${reel2Stop + 1}
      Reel3 = ${reel3Stop + 1}
      Reel4 = ${reel4Stop + 1}
      Reel5 = ${reel5Stop + 1}
      `);

  } else {

    console.error(`Couldn't find reel stops for either one or for all of the provided reels' symbols (0-Indexed). Reel1: ${reel1Stop}, Reel2: ${reel2Stop}, Reel3: ${reel3Stop}, Reel4: ${reel4Stop}, Reel5: ${reel5Stop}`)

  }

}());
