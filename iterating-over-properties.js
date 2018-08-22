const obj = {
  foo: 'hello',
  bar: 'goodbye',
  fum: 'tomato',
  quux: 'potato',
  spam: 'spam!'
};

for (const key in obj) {
  obj.hasOwnProperty(key)
    ? console.log(obj[key])
    : console.log('No property on key');
}
