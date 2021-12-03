let spins = ['|', '/', '\\','-','|', '/','-','\\','|']

for (let x = 0; x < spins.length; x++) {
  if (x === spins.length - 1) {
  setTimeout(() => {
    process.stdout.write(`\r${spins[x]}\n`);
  }, 450 + (x * 350));
} else {
  setTimeout(() => {
    process.stdout.write(`\r${spins[x]}  `);
  }, 450 + (x * 300));
}
}