const myFizzBuzz = require('./myFizzBuzz')

describe ('verifica a função myFizzBuzz', () => {
it ('verifica se o numero chamado é divisível por 3 e 5, só por 3 e só por 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(25)).toBe('buzz');
    expect(myFizzBuzz(8)).toBe(8);
    expect(myFizzBuzz('3')).toBe(false);
    });
});