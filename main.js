const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", function (event) {
  let x = event.offsetX;
  let y = event.offsetY;
  let span = document.createElement("span");
  span.style.left = x + `px`;
  span.style.top = y + `px`;
  let size = Math.random() * 25;
  span.style.width = size + `px`;
  span.style.height = size + `px`;
  bodyEl.append(span);
  setTimeout(() => span.remove(), 3000);
});
