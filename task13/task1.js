process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    const chunkReverse = chunk.split('').reverse().join('');
    process.stdout.write(`${chunkReverse} \n`);
  }
});