const myRemove = require('./myRemove')

describe('verifica a função myRemove', () =>{
it('verifica se o numero do item será removido da array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
});
it('verifica se o numero do item será removido da array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
});
it('verifica se o numero do item será removido da array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).not.toEqual([1, 2, 3, 4, 5])
});
});