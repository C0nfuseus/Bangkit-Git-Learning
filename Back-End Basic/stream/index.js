const fs = require('fs');
 
const readableStream = fs.createReadStream('./input.txt', {
    highWaterMark: 15
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});

const writeableStream = fs.createWriteStream('output.txt',);

writeableStream.write('Love is gonna get you killed\n');
writeableStream.end('But Pride gonna be the death of you and me');