class domNodeCollection {
  constructor(htmlArr) {
    this.htmlArr = htmlArr;
  }

  html(str) {
    if (!str) {
      return this.htmlArr[0].innerHTML;
    } else {
      return this.htmlArr[0].innerHTML = str;
    }  
  }

  empty() {
    this.html(" ");
  }  

  append(ele) {
    if (instanceOf HTMLElement )
    const = this.htmlArr[0].ele
  }
}

module.exports = domNodeCollection;