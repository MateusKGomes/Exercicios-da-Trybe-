const sum = require("./script.js");

describe('Teste a funcao sum', () => {
    it('Ao somar 2 + 4 o resultado deve ser igual a 6', () => {
        expect(sum(2, 4)).toBe(6);
    })
})


