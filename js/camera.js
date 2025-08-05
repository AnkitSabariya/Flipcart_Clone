// let data;
const cardBox = document.querySelector(".cardbox");

let key = 0;
function loadProducts() {
  fetch("./json/camera.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((product, index) => {
        const {
          model,
          brand,
          category,
          description,
          price,
          discountPercentage,
          stock,
          images,
          rating,
          id
        } = product;

        const originalPrice = (price / (1 - discountPercentage / 100)).toFixed(
          0
        );
        let currentImg = 0;
        const card = document.createElement("a");
        card.className =
          "bg-white w-full sm:h-[300px] h-auto flex flex-col sm:flex-row p-4 border items-center border-gray-200 rounded-lg shadow-sm hover:shadow-lg cursor-pointer transition";
        card.setAttribute("href", `product.html?id=${id}&json=camera`);
        card.innerHTML = `
      <!-- Left: Image Slider -->
      <div class="relative w-[250px] flex items-center justify-center">
        <img src="${
          images[0]
        }" id="img-${index}" class="object-contain h-[200px] w-full rounded-lg">
      </div>

      <!-- Center: Product Details -->
      <div class="flex-1 px-4">
        <h2 class="text-lg font-bold text-gray-800 mb-1">${model}</h2>
        <p class="text-xs text-gray-600 mb-1">${category} • ${brand}</p>
        <div class="flex items-center text-sm mb-2">
          <span class="bg-green-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-2">${rating.toFixed(
            1
          )} ★</span>
          <span class="text-gray-500">${Math.floor(rating * 10)} Ratings & ${(
          rating * 2
        ).toFixed(0)} Reviews</span>
        </div>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-0.5">
          <li>${description.slice(0, 80)}...</li>
          <li><strong>Stock:</strong> ${stock} units available</li>
          <li><strong>Discount:</strong> ${discountPercentage}%</li>
        </ul>
      </div>

      <!-- Right: Pricing -->
      <div class=" md:min-w-[140px] min-w-full flex flex-col justify-between items-start px-4">
        <div>
          <div class="text-xl font-bold text-gray-800">₹${price}</div>
          <div class="text-sm line-through text-gray-400">₹${originalPrice}</div>
          <div class="text-green-600 text-sm font-medium">${Math.round(
            discountPercentage
          )}% off</div>
        </div>
        
      </div>
    `;

        cardBox.appendChild(card);
        key++;
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
    });
}

loadProducts();
