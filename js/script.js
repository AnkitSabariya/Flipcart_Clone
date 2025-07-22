// Navbar
fetch(`./partials/navbar.html`)
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("mynavbar").innerHTML = html;
     updateCartCounter(); 
  });
// Destop Category
fetch("./partials/category.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("categorySection").innerHTML = data;
  });
// Mobile Responcive Category
fetch("./partials/mobilecate.html")
  .then((res) => res.text())
  .then((mobile) => {
    document.getElementById("mobileMenu").innerHTML = mobile;
  });
// Footer
fetch("./partials/footer.html")
  .then((res) => res.text())
  .then((footer) => {
    document.getElementById("footer").innerHTML = footer;
  });

// Counter
function updateCartCounter() {
  const badge = document.getElementById("cart-counter");
  if (badge) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    badge.textContent = cart.length;
  }
}


updateCartCounter();
// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Mobile filter toggle
filterBtn.addEventListener("click", () => {
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
      "rounded-md"
    );
    sidebar.classList.remove("w-full"); // Optional: restrict width
    sidebar.classList.add("w-[90vw]", "max-w-[320px]");
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
function toggleSearchMobile() {
  const searchBar = document.getElementById("mobileSearchBar");

  if (searchBar.classList.contains("hidden")) {
    searchBar.classList.remove("hidden");
    setTimeout(() => {
      searchBar.classList.remove("scale-y-0", "opacity-0");
      searchBar.classList.add("!scale-y-[1]", "opacity-100");
    }, 10);
    document.getElementById("searchMobile").focus();
  } else {
    searchBar.classList.remove("!scale-y-[1]", "opacity-100");
    searchBar.classList.add("scale-y-0", "opacity-0");
    setTimeout(() => {
      searchBar.classList.add("hidden");
    }, 300);
  }
}
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
    tshirt: "tshirt.html",
    tablet: "tablet.html",
    laptop: "laptop.html",
    bedsheet: "bedsheet.html",
    mobile: "mobile.html",
    iphone: "mobile.html",
    flight: "flight.html",
    furniture: "furniture.html",
    powerbank: "powerbank.html",
    battery: "powerbank.html",
    refrigerator: "refrigerator.html",
    fridge: "refrigerator.html",
    washingmachine: "washingmachine.html",
    television: "television.html",
    tv: "television.html",
    smarttv: "television.html",
    ac: "ac.html",
    airconditioner: "ac.html",
    product: "product.html",
    cart: "cart.html",
    login: "login.html",
    index: "index.html",
  };

  if (pages[query]) {
    window.location.href = pages[query];
  } else {
    alert("No results found for: " + query);
  }
}
