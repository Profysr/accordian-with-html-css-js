let items = document.querySelectorAll(".item");
let accordian = document.querySelector(".accordian");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((faq) => {
      faq.classList.remove("active");
    });
    item.classList.add("active");
  });
});
