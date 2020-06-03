(async () => {
  const module = await import('./module.js');
  console.log(module);
  console.log(module.SECRET_KEY);

  const Person = module.default;

  const p1 = new Person('Max')

  console.log(p1);
})()
