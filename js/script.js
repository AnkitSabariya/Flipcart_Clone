function searchProduct() {
  const query = document.getElementById("search").value.trim().toLowerCase();

  if (!query) return; 

  const pages = {
    camera: "camera.html",
    dslr: "camera.html",
    shirt: "shirt.html",
    tshirt: "shirt.html",
    tablet: "tablet.html",
    laptop: "laptop.html",
    bedsheet: "bedsheet.html",
    mobile: "mobile.html",
    flight: "flight.html",
    furniture: "furniture.html",
    powerbank: "powerbank.html",
    furniture: "furniture.html",
  };

  if (pages[query]) {
    window.location.href = pages[query];
  } else {
    return;
  }
}
