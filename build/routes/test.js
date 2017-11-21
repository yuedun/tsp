"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
var hash = crypto.createHash('sha1');
hash.update("huo");
var a = hash.digest("hex");
console.log(a);
if (a === "1bfe442d837b7e62e6f1130e6f779c394579d3c4") {
    console.log("yes");
}
else {
    console.log("no");
}
