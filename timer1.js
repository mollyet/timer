const times = process.argv.slice(2);

const alarm = (delay) => {
  for (let time of delay) {
    if (!(time < 0 || isNaN(time))) {
      let beep = time * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, beep);
    }
  }
};

alarm(times);