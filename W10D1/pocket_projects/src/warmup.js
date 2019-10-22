const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  const p = document.createElement("P");
  const newDiv = document.createTextNode(string);

  if (htmlElement.hasChildNodes) {
    const children = Array.from(document.querySelectorAll('p'));
    children.forEach( function(child) {
      child.parentNode.removeChild(child);
    });
  }

  // let idk = p.appendChild(newDiv);
  // partyHeader.appendChild(idk);
  //  let headerIdk = p.appendChild(newDiv);
    // htmlElement.appendChild(headerIdk);
  return htmlElement.appendChild(p).appendChild(newDiv);
};

// export default something = "hello"; 

htmlGenerator('Party Time.', partyHeader);