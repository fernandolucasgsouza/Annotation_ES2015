function randomInteger(min, max) {
   if (min > max) {
      const temp = min;
      min = max;
      max = temp;
   }
   const value = Math.random() * ((max + 1) - min) + min;
   return Math.floor(value);
}

let option = 0;
while (option != -1) {
   option = randomInteger(-1, 10);
   console.log(`number equal ${option}`);
}

