// global-teardown.js
import { bsLocal } from'./fixtures';
import { promisify } from 'util';
const sleep = promisify(setTimeout);

async function globalTeardown() {
  // Stop the Local instance after your test run is completed, i.e after driver.quit
  let localStopped = false;

  if (bsLocal && bsLocal.isRunning()) {
    bsLocal.stop(() => {
      localStopped = true;
      console.log('Stopped BrowserStackLocal');
    });
    while (!localStopped) {
      await sleep(1000);
    }
  }
};

export default globalTeardown;
