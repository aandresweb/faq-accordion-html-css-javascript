window.onload = function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((accordionItem) => {
    // Default open item
    if (accordionItem.classList.contains("open")) {
      const content = accordionItem.querySelector(".accordion-body");
      content.style.height = content.scrollHeight + "px";
    }

    accordionItem.addEventListener("click", function (e) {
      // Other accordion item
      accordionItems.forEach(function (otherItems) {
        otherItems.classList.remove("open");
        otherItems.querySelector(".accordion-body").style.height = "0";
      });

      // Selected accordion item
      accordionItem.classList.add("open");
      if (accordionItem.classList.contains("open")) {
        const content = accordionItem.querySelector(".accordion-body");
        content.style.height = content.scrollHeight + "px";
      }
    });
  });
};
