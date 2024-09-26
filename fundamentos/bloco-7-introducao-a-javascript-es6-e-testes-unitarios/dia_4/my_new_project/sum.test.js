const sum = require('./sum');

describe('verifica soma', () =>{
    test('verifica soma de dois numeros', () =>{
        expect(sum(1,3)).toBe(4);
    });
    test('verifica dois zeros', () =>{
        expect(sum(0,0)).toBe(0);
    });
   test('verifica se há strings', () =>{
        expect(() =>sum(2,'1')).toThrowError();
        expect(() =>sum(2,'1')).toThrowError('Não coloque valores diferente de numeros');
    });
});