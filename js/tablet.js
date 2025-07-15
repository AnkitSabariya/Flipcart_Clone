const cardBox = document.querySelector(".cardbox");
let key = 0
function loadProducts() {
  fetch("./json/tablet.json")
  .then((res)=> res.json())
  .then((data) =>{
       data.forEach((product, index) => {
    const {
      model,
      brand,
      description,
      price,
      images,
      specifications,
      id
    } = product;

    let currentImg = 0;


    const card = document.createElement("a");
    card.className =
      "bg-white w-full flex flex-col sm:flex-row p-4 border justify-center items-center border-gray-200 cursor-pointer md:h-[250px] transition-all duration-300 hover:shadow-xl";
       card.setAttribute("href", `product.html?id=${id}&json=tablet`);
      card.innerHTML = `
      <!-- Image Section -->
      <div class="relative w-full sm:w-1/3 flex items-center justify-center overflow-hidden">
        <img src="${images[0]}" id="img-${index}" class="object-contain h-full max-h-[200px] transition-all duration-300 ease-in-out">
      </div>

      <!-- Details Section -->
      <div class="flex-1 px-4 py-2">
        <h2 class="text-lg font-semibold text-gray-800">${brand} ${model}</h2>
        <ul class="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
          <li>${description}</li>
          <li>Processor: ${specifications.processor}</li>
          <li>RAM: ${specifications.ram}</li>
          <li>Storage: ${specifications.storage}</li>
          <li>Display: ${specifications.display}</li>
          <li>Battery: ${specifications.battery}</li>
        </ul>
      </div>

      <!-- Price Section -->
      <div class="flex items-start min-w-full md:min-w-[120px] py-2 px-4">
        <div class="text-xl font-bold text-gray-800">₹${price}</div>
      </div>
    `;

    cardBox.appendChild(card);
    key++

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
  })
}

loadProducts();




