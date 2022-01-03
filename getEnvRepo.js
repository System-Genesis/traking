const axios = require('axios');
const { appendFileSync, writeFileSync } = require('fs');

(async () => {
  writeFileSync(`./envs.txt`, '');
  const { data } = await axios.get('https://api.github.com/orgs/System-Genesis/repos');
  const names = data.map((d) => d.name);

  for (let i = 0; i < names.length; i++) {
    try {
      const name = names[i];
      await setEnv(name, '.env');
    } catch (error) {}
  }
  // await setEnv('taskmanager', '.env');
  // await setEnv('splitter', '.env');
  // await setEnv('basic_match', '.env.dev');
  // // await setEnv('merger', '.env');
  // await setEnv('merges_api', '.env.dev');
  // await setEnv('selector', '.env');
  // await setEnv('build_entity', '.env');
  // await setEnv('build_rogd', '.env.dev');
  // await setEnv('create_rgbe', '.env');

  console.log('end');

  return;
})();
async function setEnv(serviceName, envFile) {
  const { data } = await axios.get(
    `https://raw.githubusercontent.com/System-Genesis/${serviceName}/dev/${envFile}`
  );
  const serviceEnv = data.split('\n').filter((x) => x);
  writeFileSync(`./${serviceName}.txt`, '');
  appendFileSync('./envs.txt', '================\n');
  appendFileSync('./envs.txt', `  ${serviceName.toUpperCase()}\n`);
  appendFileSync('./envs.txt', '================\n\n');
  serviceEnv.forEach((a) => {
    appendFileSync('./envs.txt', JSON.stringify(a).replace('"', '').replace('"', '') + '\n');
    appendFileSync(
      `./${serviceName}.txt`,
      JSON.stringify(a).replace('"', '').replace('"', '') + '\n'
    );
  });
  appendFileSync('./envs.txt', '\n');
}
