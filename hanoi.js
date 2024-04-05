let diskNumber = 3;

let A = Array.from({length: diskNumber}, (_, i) => '-'.repeat(diskNumber - i));
let B = [];
let C = [];

function formatDisk(disk, towerWidth) {
  const diskWidth = disk.length;
  const padding = towerWidth - diskWidth;
  const paddingLeft = ' '.repeat(padding / 2);
  const paddingRight = ' '.repeat(Math.ceil(padding / 2));
  return paddingLeft + disk + paddingRight;
}

function formatTower(tower) {
  const maxDisks = diskNumber;
  const towerWidth = diskNumber * 2 - 1;
  let formatted = tower.map(disk => formatDisk(disk, towerWidth));
  while (formatted.length < maxDisks) {
    formatted.push(' '.repeat(towerWidth));
  }
  return formatted.reverse(); // On place le ptit disque en haut
}

function printTowers() {
  console.clear();
  let fA = formatTower(A);
  let fB = formatTower(B);
  let fC = formatTower(C);

  for (let i = 0; i < diskNumber; i++) {
    console.log(`|${fA[i]}| |${fB[i]}| |${fC[i]}|`);
  }
  console.log('-'.repeat(diskNumber * 6 + 2));
}

async function moveDisk(from, to) {
  to.push(from.pop());
  printTowers();
  await new Promise(resolve => setTimeout(resolve, 1000));
}

async function hanoi(disks, source, destination, auxiliary) {
  if (disks === 1) {
    await moveDisk(source, destination);
    return;
  }
  await hanoi(disks - 1, source, auxiliary, destination);
  await moveDisk(source, destination);
  await hanoi(disks - 1, auxiliary, destination, source);
}

async function startHanoi() {
  printTowers();
  await new Promise(resolve => setTimeout(resolve, 1000));
  await hanoi(diskNumber, A, C, B);
  console.log('Pas très droite la tour mais terminée');
}

startHanoi();
