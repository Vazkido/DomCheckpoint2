document.addEventListener("DOMContentLoaded", () => {
  const clr = document.getElementById("color-box");
  const chn = document.getElementById("change-color-btn");

  // Function to generate a random hex color
  function getRandomColor() {
    const x = Math.round(0xffffff * Math.random()).toString(16);
    const y = 6 - x.length;
    const z = "000000";
    const z1 = z.substring(0, y);
    return "#" + z1 + x;
  }

  // Event listener for the button click
  chn.addEventListener("click", () => {
    const newColor = getRandomColor(); //Generate random color
    clr.style.backgroundColor = newColor;
    chn.textContent = newColor;
  });
});
