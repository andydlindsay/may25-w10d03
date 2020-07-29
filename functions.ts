const sayHello = (uniqueName: string): void => {
  console.log(`hello ${uniqueName}`);
  // return `hello ${uniqueName}`;
}

const returningPromise = (age: number): Promise<number> => {
  return new Promise((res, rej) => {
    setTimeout(() => res(age), 1000);
  });
};
