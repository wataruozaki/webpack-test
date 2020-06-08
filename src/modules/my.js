export default () => {
  console.log("ths is module");
};

import my from "./modules/my";

console.log("this is index.js");
my();
