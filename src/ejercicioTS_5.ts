//EJERCICIO 5
//Tengo un error que no sé como resolver en la línea 10, en el número 39

const swap = <T>(arg1: T[], arg2: T[]): T => {
  return <T>[arg2[0], arg1[0]];
};

let age: number, occupation: string;

[age, occupation] = swap(39, "Placement officer");

console.log("Occupation: ", occupation);
console.log("Age: ", age);
