const axios = require('axios');
const { exec } = require('child_process');
const { mkdirSync, existsSync } = require('fs');

(async () => {
  if (!existsSync('./reposClone')) mkdirSync('./reposClone');
  const { data } = await axios.get('https://api.github.com/orgs/System-Genesis/repos');

  const names = data
    .filter((r) => new Date(r.pushed_at) > new Date().setDate(new Date().getDate() - 2))
    .map((d) => d.name);

  console.log(names);
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    exec(`sh clone.sh ${name}`);
    console.log(i + '/' + names.length + ': end with ' + name);
  }

  console.log('end');

  return;
})();
