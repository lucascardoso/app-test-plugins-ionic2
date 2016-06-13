import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {TestJasmine} from './test-jasmine';

describe('Test Jasmine', () => {
    beforeEachProviders(() => [TestJasmine]);
    it('should do nothing', () => {
        expect(true).toBeTruthy();
        expect(1 + 1).toBe(2);
    });

    it('should return a non empty array', inject([TestJasmine], (testJasmine) => {
            let result = testJasmine.getAnswers();
            expect(Array.isArray(result)).toBeTruthy;
            expect(result.length).toBeGreaterThan(0);
        }
    ));

    it('should return one random answer as a string', inject([TestJasmine], (testJasmine) => {
            expect(typeof testJasmine.getRandomAnswer()).toBe('string');
        }
    ));

    it('should have both yes and no available in result set', inject([TestJasmine], (testJasmine) => {
            let result = testJasmine.getAnswers();
            expect(result).toContain('Yes');
            expect(result).toContain('No');
        }
    ));

});
