const fs = require('fs');
const archiver = require('archiver');
const readline = require('readline');

const pkg = require('./package.json');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cuál es el correo con el que te registraste en laboratoria? ', (email) => {


  const output = fs.createWriteStream(`${email.replace('@','_').replace('.', '_')}-${pkg.name}.zip`);
  const archive = archiver('zip');

  output.on('close', function () {
      console.log(archive.pointer() + ' total bytes');
      console.log('archiver has been finalized and the output file descriptor has closed.');
  });

  archive.on('error', function(err){
      throw err;
  });

  archive.pipe(output);

  // append files from a sub-directory, putting its contents at the root of archive
  archive.directory('src/', false);

  rl.close();
  archive.finalize();
});
