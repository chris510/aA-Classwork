const domNodeCollection = require('./dom_node_collection.js');

window.$l = function (el){
  const doc = document.querySelectorAll('html');
  const domNode = new domNodeCollection(doc);
  console.log(domNode);
  // console.log(domNode.htmlArr[0].innerHTML);
  // console.log(domNode.htmlArr[1].childNodes);
  // console.log(domNode.htmlArr[2].childNodes);
  // console.log(domNode.htmlArr);
  // console.log(domNode.html(" "));
  console.log(domNode.htmlArr[0].innerHTML);
  domNode.empty();
  console.log(domNode.htmlArr[0].innerHTML);
  // console.log(domNode.htmlArr.childNodes.body);
  // console.log(domNode.htmlArr[0].childNodes[2]);

};

window.$l();


// const test1 = document.querySelector('.test1');
// console.log(test1);

// const sectionP = document.getElementsByClassName('section-paragraph');
// console.log(sectionP);