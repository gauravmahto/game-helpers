'use strict';

const { createInterface } = require('readline');

const { reelStripDefinitions } = require('./reelstrips.out.json');

/**
 * Get the reel strip input from the user.
 * 
 * @returns {Promise<string[]>}
 */
function getReel1Symbols() {

  return new Promise((res, rej) => {

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(`Provide the symbols you want to stop at Reel1 (CSV format): `, (answer) => {

      let error = false;
      const reelSymbols = answer.split(',').map(elem => elem.trim());

      if ((3 !== reelSymbols.length) &&
        (1 !== reelSymbols.length)) {

        error = true;

      }

      rl.close();

      if (error) {

        return rej('Invalid input provided for Reel1. The program will be terminated.');

      }

      return res(reelSymbols);

    });

  });

}

/**
 * Get the reel strip input from the user.
 * 
 * @returns {Promise<string[]>}
 */
function getReel2Symbols() {

  return new Promise((res, rej) => {

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(`Provide the symbols you want to stop at Reel2 (CSV format): `, (answer) => {

      let error = false;
      const reelSymbols = answer.split(',').map(elem => elem.trim());

      if ((3 !== reelSymbols.length) &&
        (1 !== reelSymbols.length)) {

        error = true;

      }

      rl.close();

      if (error) {

        return rej('Invalid input provided for Reel2. The program will be terminated.');

      }

      return res(reelSymbols);

    });

  });

}

/**
 * Get the reel strip input from the user.
 * 
 * @returns {Promise<string[]>}
 */
function getReel3Symbols() {

  return new Promise((res, rej) => {

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(`Provide the symbols you want to stop at Reel3 (CSV format): `, (answer) => {

      let error = false;
      const reelSymbols = answer.split(',').map(elem => elem.trim());

      if ((3 !== reelSymbols.length) &&
        (1 !== reelSymbols.length)) {

        error = true;

      }

      rl.close();

      if (error) {

        return rej('Invalid input provided for Reel3. The program will be terminated.');

      }

      return res(reelSymbols);

    });

  });

}

/**
 * Get the reel strip input from the user.
 * 
 * @returns {Promise<string[]>}
 */
function getReel4Symbols() {

  return new Promise((res, rej) => {

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(`Provide the symbols you want to stop at Reel4 (CSV format): `, (answer) => {

      let error = false;
      const reelSymbols = answer.split(',').map(elem => elem.trim());

      if ((3 !== reelSymbols.length) &&
        (1 !== reelSymbols.length)) {

        error = true;

      }

      rl.close();

      if (error) {

        return rej('Invalid input provided for Reel4. The program will be terminated.');

      }

      return res(reelSymbols);

    });

  });

}

/**
 * Get the reel strip input from the user.
 * 
 * @returns {Promise<string[]>}
 */
function getReel5Symbols() {

  return new Promise((res, rej) => {

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(`Provide the symbols you want to stop at Reel5 (CSV format): `, (answer) => {

      let error = false;
      const reelSymbols = answer.split(',').map(elem => elem.trim());

      if ((3 !== reelSymbols.length) &&
        (1 !== reelSymbols.length)) {

        error = true;

      }

      rl.close();

      if (error) {

        return rej('Invalid input provided for Reel5. The program will be terminated.');

      }

      return res(reelSymbols);

    });

  });

}

/**
 * Get the next valid reel index.
 * 
 * @param {number} index 
 * @param {number} incrementBy 
 * @param {number} maxSize 
 * 
 * @returns {number} The next valid reel index.
 */
function getNextReelIndex(index, incrementBy, maxSize) {

  return ((index + incrementBy) % maxSize);

}

(async function main() {

  let [ reel1Stop, reel2Stop, reel3Stop, reel4Stop, reel5Stop ] = [ -1, -1, -1, -1, -1 ];

  let reel1Symbols = await getReel1Symbols();
  let reel2Symbols = await getReel2Symbols();
  let reel3Symbols = await getReel3Symbols();
  let reel4Symbols = await getReel4Symbols();
  let reel5Symbols = await getReel5Symbols();

  // For Reel1
  reel1Stop = reelStripDefinitions[ 0 ].stops.findIndex((elem, index, arr) => {

    if ((1 === reel1Symbols.length) &&
      (elem.name.toLowerCase() === reel1Symbols[ 0 ].toLowerCase())) {

      return true;

    }

    if ((elem.name.toLowerCase() === reel1Symbols[ 0 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 1, reelStripDefinitions[ 0 ].stops.length) ].name.toLowerCase() === reel1Symbols[ 1 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 2, reelStripDefinitions[ 0 ].stops.length) ].name.toLowerCase() === reel1Symbols[ 2 ].toLowerCase())) {

      return true;

    }

    return false;

  });

  // For Reel2
  reel2Stop = reelStripDefinitions[ 1 ].stops.findIndex((elem, index, arr) => {

    if ((1 === reel2Symbols.length) &&
      (elem.name.toLowerCase() === reel2Symbols[ 0 ].toLowerCase())) {

      return true;

    }

    if ((elem.name.toLowerCase() === reel2Symbols[ 0 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 1, reelStripDefinitions[ 1 ].stops.length) ].name.toLowerCase() === reel2Symbols[ 1 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 2, reelStripDefinitions[ 1 ].stops.length) ].name.toLowerCase() === reel2Symbols[ 2 ].toLowerCase())) {

      return true;

    }

    return false;

  });

  // For Reel3
  reel3Stop = reelStripDefinitions[ 2 ].stops.findIndex((elem, index, arr) => {

    if ((1 === reel3Symbols.length) &&
      (elem.name.toLowerCase() === reel3Symbols[ 0 ].toLowerCase())) {

      return true;

    }

    if ((elem.name.toLowerCase() === reel3Symbols[ 0 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 1, reelStripDefinitions[ 2 ].stops.length) ].name.toLowerCase() === reel3Symbols[ 1 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 2, reelStripDefinitions[ 2 ].stops.length) ].name.toLowerCase() === reel3Symbols[ 2 ].toLowerCase())) {

      return true;

    }

    return false;

  });

  // For Reel4
  reel4Stop = reelStripDefinitions[ 3 ].stops.findIndex((elem, index, arr) => {

    if ((1 === reel4Symbols.length) &&
      (elem.name.toLowerCase() === reel4Symbols[ 0 ].toLowerCase())) {

      return true;

    }

    if ((elem.name.toLowerCase() === reel4Symbols[ 0 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 1, reelStripDefinitions[ 3 ].stops.length) ].name.toLowerCase() === reel4Symbols[ 1 ].toLowerCase()) &&
      (arr[ getNextReelIndex(index, 2, reelStripDefinitions[ 3 ].stops.length) ].name.toLowerCase() === reel4Symbols[ 2 ].toLowerCase())) {

      return true;

    }

    return false;

  });

  // For Reel5
  reel5Stop = reelStripDefinitions[ 4 ].stops.findIndex((elem, index, arr) => {

    if ((1 === reel5Symbols.length) &&
      (elem.name.toLowerCase() === reel5Symbols[ 0 ].toLowerCase())) {

      return true;

    }

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

    console.error(`Couldn't find reel stops for either one or for all of the provided reels' symbols (0-Indexed). Reel1: ${reel1Stop}, Reel2: ${reel2Stop}, Reel3: ${reel3Stop}, Reel4: ${reel4Stop}, Reel5: ${reel5Stop}`);

  }

}());
