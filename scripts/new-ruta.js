const fs = require('fs');
const path = require('path');
const ncp = require('ncp');
const replace = require('replace-in-file');
const program = require('commander');

program
  .version('1.0.1')
  .option('-n, --name [name]', 'Name of the new ruta')
  .parse(process.argv);

const name = program.name;

if (!name) {
  console.log('Provide a name please');
  return;
}

const examplePath = path.resolve(__dirname, '../', 'packages', 'example');
const newPath = path.resolve(__dirname, '../', 'packages', name);

const alreadyExists = fs.existsSync(newPath);

if (alreadyExists) {
  console.log(`${name} already exists :(`);
  return;
}

ncp(examplePath, newPath, (err) => {
  if (err) {
    return console.error(err);
  }

  const options = {
    files: [`${newPath}/**/*`],
    from: /example/g,
    to: name,
  };

  replace.sync(options);

  console.log('Done!');
})
