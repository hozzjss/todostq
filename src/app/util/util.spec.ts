import { generateRequestLink, generateOptions, genRandomId, objectToArray } from 'app/util/util';
import { RequestOptions, Headers } from '@angular/http/';
import { environment as env } from '../../environments/environment'

describe('util', () => {
    it('generate a request link', () => {
        const actual = generateRequestLink('sample');
        const expected = 'http://pilot.tqweem.com/api/sample';
        expect(actual).toEqual(expected);
    });
    it('should generate a random ID', () => {
        expect(genRandomId() === genRandomId()).toBeFalsy();
    });
    it('should generate request options per params', () => {
        const actual = generateOptions('token', 'get', {});
        const search = new URLSearchParams();
        search.set('api_key', env.KEY);
        const expected = new RequestOptions({
            'body': {},
            'headers': new Headers({
                'Accept': 'application/json',
                'Authorization': 'Bearer token'
            }),
            'method': 'get',
            'search': search
        });
        expect(actual).toEqual(expected);
    });
    it('should transform an object of objects to an array of objects', () => {
        expect(objectToArray({ '0': {} })).toEqual([{}]);
    });
});

