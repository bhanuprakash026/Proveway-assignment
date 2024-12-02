// Get all the pair elements
const pairs = document.querySelectorAll(".pair");

// Loop through each pair element
pairs.forEach((pair) => {
  if (pair.classList.contains("active")) {
    const radioInput = pair.querySelector('input[type="radio"]');
    radioInput.checked = true;
  }

  pair.addEventListener("click", () => {
    pairs.forEach((p) => {
      p.classList.remove("active");
    });

    pair.classList.add("active");
    const radioInput = pair.querySelector('input[type="radio"]');
    radioInput.checked = true;
  });
});

