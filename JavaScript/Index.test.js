import {generateMessage} from '../Menu.js';

describe('Matchers Arrays', () => {
    test('Madrid existe en el array', () => {
        expect(generateMessage()).toContain('Madrid');
    });
    test('Guadalajara no existe en el array', () => {
        expect(generateMessage()).not.toContain('Guadalajara');
    })
    test('El array semana tiene 9 elementos', () => {
        expect(generateMessage()).toHaveLength(9);
    })
});