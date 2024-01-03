/* build your own react */
function render(reactElement, containerDomElement) {
  /* your code here! */
  /* react的作用就是把对象渲染成dom */
  const domElement = document.createElement(reactElement.type);

  domElement.innerText = reactElement.children;
  for (const key in reactElement.props) {
    const value = reactElement.props[key];
    domElement.setAttribute(key, value);
  }

  containerDomElement.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    id: "some-link",
    "data-number": 20,
    href: "https://www.google.com",
  },
  children: "Click me!",
};

const containerDomElement = document.querySelector("#root");

render(reactElement, containerDomElement);
