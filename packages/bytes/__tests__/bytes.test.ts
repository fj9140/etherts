'use strict';

import * as Bytes from "../src/index";

describe('bytes', () => {
    it('isHexable',()=>{
        expect(Bytes.isHexable(100)).toBe(false);
    });
});
