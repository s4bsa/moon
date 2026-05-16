const giftBox = document.getElementById("giftBox");
const message = document.getElementById("message");

giftBox.addEventListener("click", () => {
  giftBox.classList.toggle("open");
  message.classList.toggle("show");
});
