import Person from '@/server';

it('should sum', () => {
  const person = new Person();
  expect(person.sayName()).toBe('w2k');
});
