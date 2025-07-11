let data;
const cardBox = document.querySelector(".cardbox");

function database() {
  data.forEach((product, index) => {
    const {
      model,
      brand,
      description,
      price,
      images,
      specifications
    } = product;

    let currentImg = 0;

    const card = document.createElement("div");
    card.className =
      "bg-white w-full flex flex-col md:flex-row p-4 border justify-center items-center border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-xl";

    card.innerHTML = `
      <!-- Image Section -->
      <div class="relative w-full md:w-1/3 flex items-center justify-center overflow-hidden">
        <img src="${images[0]}" id="img-${index}" class="object-contain h-full max-h-[200px] transition-all duration-300 ease-in-out">
      </div>

      <!-- Details Section -->
      <div class="flex-1 px-4 py-2 w-full">
        <h2 class="text-lg font-semibold text-gray-800">${brand} ${model}</h2>
        <ul class="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
          <li>${description}</li>
          <li>Processor: ${specifications.processor}</li>
          <li>RAM: ${specifications.ram}</li>
          <li>Storage: ${specifications.storage}</li>
          <li>Display: ${specifications.display}</li>
          <li>Battery: ${specifications.battery}</li>
          <li>GPU: ${specifications.gpu || "-"}</li>
          <li>OS: ${specifications.os || "-"}</li>
          <li>Weight: ${specifications.weight || "-"}</li>
          <li>Ports: ${specifications.ports || "-"}</li>
        </ul>
      </div>

      <!-- Price Section -->
      <div class="text-right min-w-[120px] py-2">
        <div class="text-xl font-bold text-gray-800">₹${price}</div>
      </div>
    `;

    cardBox.appendChild(card);

    const imgEl = card.querySelector(`#img-${index}`);

    // Hover to auto slide images
    let interval;
    card.addEventListener("mouseenter", () => {
      interval = setInterval(() => {
        currentImg = (currentImg + 1) % images.length;
        imgEl.src = images[currentImg];
      }, 1000);
    });

    card.addEventListener("mouseleave", () => {
      clearInterval(interval);
    });
  });
}

async function loadProducts() {
  const res = await fetch(`./json/laptop.json`);
  data = await res.json();
  cardBox.innerHTML = '';
  database();
}

async function ready() {
  let search = document.getElementById("search").value.toLowerCase();
  if (["mobiles", "phones", "mobile"].includes(search)) {
    loadProducts("smartphones");
  } else if (["laptop", "laptops", "lap"].includes(search)) {
    loadProducts("laptops");
  } else if (["tab", "tablet", "tablets"].includes(search)) {
    loadProducts("tablets");
  }
}

document.getElementById("search").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    ready();
  }
});

loadProducts();
