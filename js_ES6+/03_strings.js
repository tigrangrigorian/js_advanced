function tag(string,name,age) {
  const [s1, s2, s3] = string;
  const ageStr = age > 42 ? 'adult' : 'yang'
  return `${s1}${name}${s2}${ageStr}${s3}`
}

const person = {
  name: 'Max',
  age: 26
}

const output = tag`This person's name is ${person.name}. He is ${person.age}.`

console.log(output);
