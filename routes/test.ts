import * as crypto from "crypto";
const hash = crypto.createHash('sha1');
hash.update("huo")
const a = hash.digest("hex")
console.log(a)
if (a==="1bfe442d837b7e62e6f1130e6f779c394579d3c4") {
    console.log("yes");
} else {
    console.log("no");
    
}