import { encode, decode } from "@jensforstmann/factorio-blueprint-tools";

const book = `
0eNqtT9EKwjAM/BXJcwdO1Gl/wg8QGd0MEuzSsmZDGf13u4k4FHzyIQ93l8vlBqhsh74llrJy7gp6eDMB9HEGR40EG9AzTkGPbSDHoFe7fF3sV8V2kyYvogLiM95AL6P6x5k8ntSXM5u+VmBNhTYJh068C7KQ1hAnnmrHzx6BLmzsmC53j2l1OqWATTOiyZAFcR4+Ik0t1GP5KvPj1fgAkvBtvg==
`.trim();

const decoded = decode(book);

console.log("decoded", JSON.stringify(decoded, null, 2));
