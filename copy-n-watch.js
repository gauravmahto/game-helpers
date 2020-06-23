const { watch, copyFile: copyFileAsync, promises: { stat, readFile } } = require('fs');
const { normalize, join } = require('path');
const { promisify } = require('util');
const { createHash } = require('crypto');

const [ copyFile ] = [ promisify(copyFileAsync) ];

const srcPath = normalize('C:/B2BCP_games/gdk');
const destPath = normalize('C:/B2BCP_games/lone-star-platform/node_modules/@aristocrat/gdk');

const timers = new Map();
async function changeDetected(eventType, filename) {

  try {

    let absoluteSrcPath = '';
    let absoluteDestPath = '';

    let isValidChange = (eventType === 'change');

    if (isValidChange) {

      try {

        absoluteSrcPath = join(srcPath, filename);
        absoluteDestPath = join(destPath, filename);

        const fileStats = await stat(absoluteSrcPath);
        isValidChange = fileStats.isFile();

      } catch (err) {

        isValidChange = false;

        // console.error(err, err.stack);

      }

    }

    if (isValidChange) {

      isValidChange = (filename.startsWith(normalize('src/')) ||
        filename.startsWith(normalize('lib/')));

    }

    if (isValidChange) {

      const srcFileHash = createHash('sha256');
      const destFileHash = createHash('sha256');

      const srcFileBuffer = await readFile(absoluteSrcPath);
      const destFileBuffer = await readFile(absoluteDestPath);

      srcFileHash.update(srcFileBuffer);
      destFileHash.update(destFileBuffer);

      isValidChange = (srcFileHash.digest('hex') !== destFileHash.digest('hex'));

    }

    if (isValidChange) {

      const copier = async () => {

        clearTimeout(timers.get(filename));
        timers.delete(filename);

        try {

          await copyFile(absoluteSrcPath, absoluteDestPath);

          console.log(`COPY - ${absoluteSrcPath} -> ${absoluteDestPath}`);

        } catch (err) {

          console.error(err, err.stack);

        }

      };

      clearTimeout(timers.get(filename));
      timers.delete(filename);
      timers.set(filename, setTimeout(copier, 1000));

    }

  } catch (err) {

    console.error(err, err.stack);

  }

}

(async () => {

  try {

    watch(srcPath, {
      recursive: true
    }, changeDetected);

  } catch (err) {

    console.error(err, err.stack);

  }

})();
