function sum (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Não coloque valores diferente de numeros');
    }
    return a + b
}

module.exports = sum