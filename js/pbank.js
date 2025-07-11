let data;
const cardBox = document.querySelector(".cardbox");

function database() {
  data.forEach((product, index) => {
    const {
      category,
      brand,
      model,
      capacity_mAh,
      output_ports,
      input_port,
      price_usd,
      fast_charging,
      weight_g,
      dimensions_mm,
      image_url,
      short_description,
      features
    } = product;

    const card = document.createElement("div");
    card.className =
      "bg-white w-full flex flex-col sm:flex-row p-4 border justify-center items-center border-gray-200 cursor-pointer md:h-auto transition-all duration-300 hover:shadow-xl";

    card.innerHTML = `
      <!-- Image Section -->
      <div class="relative w-full sm:w-1/3 flex items-center justify-center overflow-hidden">
        <img src="${image_url}" class="object-contain h-full max-h-[200px] transition-all duration-300 ease-in-out">
      </div>

      <!-- Details Section -->
      <div class="flex-1 px-4 py-2">
        <h2 class="text-lg font-semibold text-gray-800">${brand} ${model}</h2>
        <ul class="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
          <li>${short_description}</li>
          <li>Category: ${category}</li>
          <li>Capacity: ${capacity_mAh} mAh</li>
          <li>Output Ports: ${output_ports.join(", ")}</li>
          <li>Input Port: ${input_port}</li>
          <li>Fast Charging: ${fast_charging ? "Yes" : "No"}</li>
          <li>Weight: ${weight_g} g</li>
          <li>Dimensions: ${dimensions_mm.join(" x ")} mm</li>
          <li class="text-gray-600 italic">${features}</li>
        </ul>
      </div>

      <!-- Price Section -->
      <div class="text-right min-w-[120px] py-2">
        <div class="text-xl font-bold text-gray-800">$${price_usd}</div>
      </div>
    `;

    cardBox.appendChild(card);
  });
}

async function loadProducts(category = "powerbanks") {
  const res = await fetch(`./json/powerbank.json`);
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
  } else if (["powerbank", "powerbanks"].includes(search)) {
    loadProducts("powerbanks");
  }
}

document.getElementById("search").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    ready();
  }
});

loadProducts();
