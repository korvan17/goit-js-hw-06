function e(e,o){console.log(`'Category: ${e.item(o).querySelector("h2").textContent}`)}function o(e,o){console.log("Elements:",e.item(o).querySelector("ul").children.length)}!function(l){console.log(`Number of categories: ${l.length}`),console.log("");for(let t=0;t<l.length;t+=1)e(l,t),o(l,t),console.log("")}(document.querySelector("#categories").children);
//# sourceMappingURL=task-01.06ebee03.js.map
