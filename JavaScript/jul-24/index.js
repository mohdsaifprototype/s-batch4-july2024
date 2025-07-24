let myElement = document.querySelector("#box");

let newElement = document.createElement("section");
newElement.innerHTML = `
<h3>This is a section</h3>
<p>Note this section has been added using JS</p>
`;
// newElement.setAttribute("class", "section");
newElement.style.cssText =
  "background-color: yellow; padding:1rem; margin:.5rem; border:2px solid brown;";

// myElement.append(newElement);

// myElement.removeChild(newElement);
// myElement.appendChild(newElement);
