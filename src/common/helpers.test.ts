import { formatYearsMonths, classModifier } from './helpers';
/**
 * * @jest-environment jsdom
 * This file contains tests for the helper functions used in the application.
 * It includes tests for formatting date differences in years and months,
 * as well as for applying CSS class modifiers based on conditions.
 */
describe('formatYearsMonths', () => {
    it('should return correct format for years and months', () => {
        const from = new Date('2020-01-01');
        const to = new Date('2022-03-01');
        expect(formatYearsMonths(from, to)).toBe('In 2 years and 2 months');
    });

    it('should return only years if months are zero', () => {
        const from = new Date('2019-01-01');
        const to = new Date('2021-01-01');
        expect(formatYearsMonths(from, to)).toBe('In 2 years');
    });

    it('should return only months if years are zero', () => {
        const from = new Date('2022-01-01');
        const to = new Date('2022-05-01');
        expect(formatYearsMonths(from, to)).toBe('In 4 months');
    });

    it('should handle zero difference', () => {
        const from = new Date('2022-01-01');
        const to = new Date('2022-01-01');
        expect(formatYearsMonths(from, to)).toBe('');
    });
});

describe('classModifier', () => {
    const styles = {
        root: 'root',
        'root--final': 'root--final',
        'root--top': 'root--top',
        'root--bottom': 'root--bottom',
    };
    it('should return base class when no modifiers are true', () => {
        const result = classModifier(styles, 'root', {});
        expect(result).toBe('root');
    });
    it('should return base class with final modifier', () => {
        const result = classModifier(styles, 'root', { final: true });
        expect(result).toBe('root root--final');
    });
    it('should return base class with top modifier', () => {
        const result = classModifier(styles, 'root', { top: true });
        expect(result).toBe('root root--top');
    });
    it('should return base class with bottom modifier', () => {
        const result = classModifier(styles, 'root', { bottom: true });
        expect(result).toBe('root root--bottom');
    });
    it('should return base class with multiple modifiers', () => {
        const result = classModifier(styles, 'root', { final: true, top: true });
        expect(result).toBe('root root--final root--top');
    });
    it('should handle undefined modifiers', () => {
        const result = classModifier(styles, 'root', { final: true, top: undefined });
        expect(result).toBe('root root--final');
    });
});