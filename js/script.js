fetch("./partials/category.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("categorySection").innerHTML = data;
  });

fetch(`./partials/navbar.html`)
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("mynavbar").innerHTML = html;
  });
fetch("./partials/mobilenav.html")
  .then((res) => res.text())
  .then((dataa) => {
    document.getElementById("mobileMenu").innerHTML = dataa;
  });
function toggleSearchMobile() {
  const searchBar = document.getElementById("mobileSearchBar");
  searchBar.classList.toggle("hidden");
}
// ✅ Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
mobileMenuBtn?.addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("hidden");
});
// ✅ Mobile Search Toggle

// ✅ Mobile Filter Toggle
filterBtn?.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  sidebar.classList.toggle("block");

  if (!sidebar.classList.contains("hidden")) {
    sidebar.classList.add(
      "fixed",
      "top-0",
      "left-0",
      "h-[90vh]",
      "z-50",
      "overflow-y-auto",
      "bg-white",
      "shadow-lg",
      "rounded-md",
      "w-[90vw]",
      "max-w-[320px]"
    );
    sidebar.classList.remove("w-full");
  } else {
    sidebar.classList.remove(
      "fixed",
      "top-0",
      "left-0",
      "h-[90vh]",
      "z-50",
      "overflow-y-auto",
      "bg-white",
      "shadow-lg",
      "rounded-md",
      "w-[90vw]",
      "max-w-[320px]"
    );
    sidebar.classList.add("w-full");
  }
});

document.addEventListener("click", (e) => {
  if (
    window.innerWidth < 1024 &&
    !sidebar.contains(e.target) &&
    !filterBtn.contains(e.target) &&
    !sidebar.classList.contains("hidden")
  ) {
    sidebar.classList.add("hidden");
    sidebar.classList.remove(
      "fixed",
      "top-0",
      "left-0",
      "h-[90vh]",
      "z-50",
      "overflow-y-auto",
      "bg-white",
      "shadow-lg",
      "rounded-md",
      "w-[90vw]",
      "max-w-[320px]"
    );
  }
});

function searchProduct() {
  let query = "";

  if (window.innerWidth < 1024) {
    query = document.getElementById("searchMobile").value.trim().toLowerCase();
  } else {
    query = document.getElementById("search").value.trim().toLowerCase();
  }

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
  };

  if (pages[query]) {
    window.location.href = pages[query];
  } else {
    alert("No results found for: " + query);
  }
}
