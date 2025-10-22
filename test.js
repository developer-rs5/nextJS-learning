
const readline = require('readline');

const header = `
============================================================
||                HACKING TOOL - developer rs             ||
||             (totally fictional, for memes only)         ||
============================================================
`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maskNumber(lastTwo) {
  return `${'*'.repeat(9)}${lastTwo}`;
}

function fakeIP() {
  return `${randomInt(11, 223)}.${randomInt(0,255)}.${randomInt(0,255)}.${randomInt(1,254)}`;
}

function fakePrivateIP() {
  const ranges = ['10', '172', '192'];
  const r = ranges[randomInt(0, ranges.length-1)];
  if (r === '10') return `10.${randomInt(0,255)}.${randomInt(0,255)}.${randomInt(1,254)}`;
  if (r === '172') return `172.${randomInt(16,31)}.${randomInt(0,255)}.${randomInt(1,254)}`;
  return `192.168.${randomInt(0,255)}.${randomInt(1,254)}`;
}

function fakeMac() {
  const hex = '0123456789ABCDEF';
  let parts = [];
  for (let i=0;i<6;i++){
    parts.push(hex.charAt(randomInt(0,15)) + hex.charAt(randomInt(0,15)));
  }
  return parts.join(':');
}

function fakeISP() {
  const isp = ['Airtel Broadband', 'JioFiber', 'Tata Communications', 'SouthNet ISP', 'Zenux Connect'];
  return isp[randomInt(0, isp.length-1)];
}

function fakePorts() {
  const common = [22, 80, 443, 8080, 3306, 21, 23, 25];
  let out = [];
  common.forEach(p => {
    const state = Math.random() < 0.25 ? 'OPEN' : 'CLOSED';
    out.push({port: p, proto: 'tcp', state});
  });
  return out;
}

function prettyLine(k,v) {
  return `${k.padEnd(18)} : ${v}`;
}

async function dramaticType(text, speed = 6) {
  for (const ch of text) {
    process.stdout.write(ch);
    await sleep(randomInt(5, 20) + (10 - speed));
  }
  process.stdout.write('\n');
}

async function progressBar(label, durationMs = 1200) {
  const steps = 24;
  const stepTime = Math.max(10, Math.floor(durationMs / steps));
  process.stdout.write(label + ' [' + ' '.repeat(steps) + '] 0%');
  process.stdout.cursorTo(label.length + 2); // after label + space + '['
  for (let i=0;i<=steps;i++){
    const pct = Math.floor((i/steps)*100);
    process.stdout.cursorTo(label.length + 2);
    process.stdout.write('#'.repeat(i) + ' '.repeat(steps - i) + `] ${String(pct).padStart(3)}%`);
    await sleep(stepTime + randomInt(-20,40));
  }
  process.stdout.write('\n');
}

async function main() {
  console.clear();
  console.log(header);
  await dramaticType('Welcome, operator. Enter target (ip/domain/handle):', 8);

  rl.question('> ', async (target) => {
    console.log('');
    await dramaticType(`Initializing exploit frame for "${target}"...`, 7);
    await progressBar('Resolving target', 1400);
    await progressBar('Establishing backdoor', 1200);
    await progressBar('Harvesting telemetry', 1300);
    await theatricalWait();

    // The specific tracked numbers & tower location requested by papa Rishabh:
    const tracked1 = maskNumber('36'); // *********92
    const tracked2 = maskNumber('35'); // *********27
    const towerLocation = 'Jalore PVT';

    // Generate fake other info
    const pubIp = fakeIP();
    const privIp = fakePrivateIP();
    const mac = fakeMac();
    const isp = fakeISP();
    const ping = `${randomInt(10, 250)} ms`;
    const os = ['Linux (arm64)','Ubuntu 22.04','Windows 10 Pro','Debian 12','FreeBSD'][randomInt(0,4)];
    const ports = fakePorts();

    console.log('--- Result: telemetry dump ---\n');
    console.log(prettyLine('TARGET', target || 'unknown'));
    console.log(prettyLine('TRACKED NUMBER 1', tracked1));
    console.log(prettyLine('TRACKED NUMBER 2', tracked2));
    console.log(prettyLine('TOWER LOCATION', towerLocation));
    console.log('');
    console.log(prettyLine('PUBLIC IP', pubIp));
    console.log(prettyLine('PRIVATE IP', privIp));
    console.log(prettyLine('MAC ADDR', mac));
    console.log(prettyLine('ISP', isp));
    console.log(prettyLine('PING', ping));
    console.log(prettyLine('OS / HOST', os));
    console.log('');
    console.log('PORT SCAN (simulated):');
    ports.forEach(p => {
      console.log(`  - ${String(p.port).padEnd(5)} ${p.proto.padEnd(4)}  ${p.state}`);
    });
    console.log('');
    console.log('EXTRA:');
    console.log('  - geolocation  : Rajasthan, India (simulated)');
    console.log('  - owner        : Private Subscriber');
    console.log('  - last-active  : 2025-10-18 21:00:12');
    console.log('');
    console.log('============================================================');
    console.log('NOTE: This is a fake terminal output for entertainment only.');
    console.log('Do not use for illegal activity. developer rs takes no responsibility.');
    rl.close();
  });
}

async function theatricalWait() {
  // Extra typing flourish
  await dramaticType('Injecting kernel mem-spectre...', 7);
  await sleep(300);
  await dramaticType('Bypassing bogus firewall signature...', 8);
  await sleep(250);
  await dramaticType('Decrypting harmless cookies...', 6);
  await sleep(250);
}

main().catch(err => {
  console.error('Fatal:', err);
  rl.close();
});
