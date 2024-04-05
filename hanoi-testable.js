function initializeTowers(diskNumber) {
  let A = Array.from({length: diskNumber}, (_, i) => '-'.repeat(diskNumber - i));
  let B = [];
  let C = [];
  return { A, B, C };
}

function moveDisk(from, to) {
  to.push(from.pop());
}

async function hanoi(disks, source, destination, auxiliary, towers) {
  if (disks === 1) {
    moveDisk(source, destination);
    return;
  }
  await hanoi(disks - 1, source, auxiliary, destination, towers);
  moveDisk(source, destination);
  await hanoi(disks - 1, auxiliary, destination, source, towers);
}

module.exports = { initializeTowers, moveDisk, hanoi };
