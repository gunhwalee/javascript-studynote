const helloDiv = document.createElement("div");
const sayHello = (times) =>
  new Array(times).fill(1).map((_, i) => `Hello ${i + 1}`);

helloDiv.innerHTML = sayHello(10).join("<br/>");
document.body.appendChild(helloDiv);
