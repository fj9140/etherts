"use strict";

interface Hexable{
    toHexString():string;
}

export function isHexable(value:any):value is Hexable{
    return !!(value.toHexString);
}
