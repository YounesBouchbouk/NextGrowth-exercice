function closeModule() {
  const modeldiv = document.getElementById("model");
  console.log(modeldiv.classList.contains("hidden"));
  // check if the popup already hidden to diplay it
  if (modeldiv.classList.contains("hidden")) {
    modeldiv.classList.remove("hidden");
    modeldiv.classList.add("diplay");
  } else {
    // here if the popup is opended to close It
    modeldiv.classList.add("hidden");
    modeldiv.classList.remove("diplay");
  }
}
