const cardBox = document.querySelector(".cardbox");
let key= 0
function loadProducts() {
  fetch(`./json/laptop.json`)
  .then((res)=> res.json())
  .then((data)=> {
      cardBox.innerHTML = '';
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

    const card = document.createElement("a");
    card.className =
      "bg-white w-full flex flex-col md:flex-row p-4 border justify-center items-center border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-xl";
    // card.setAttribute("href","#")
    card.setAttribute("onclick",`local(${key})`)
    card.innerHTML = `
      <!-- Image Section -->
      <div class="relative w-full md:w-1/3 flex items-center justify-center overflow-hidden">
        <img src="${images[0]}" id="img-${index}" class="object-contain h-full max-h-[200px] md:max-h-[350px] transition-all duration-300 ease-in-out">
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
      <div class="min-w-full flex items-start px-4 md:min-w-[120px] py-2">
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
 
function local(key){
    fetch("./json/laptop.json")
    .then((res)=> res.json())
    .then((data)=> {
      localStorage.clear()
        localStorage.setItem("brand", data[key].brand);
      localStorage.setItem("model", data[key].model);
      localStorage.setItem("desp", data[key].description);
      localStorage.setItem("price", data[key].price);
      localStorage.setItem("image", data[key].images[0]);

      localStorage.setItem("processor", data[key].specifications.processor);
      localStorage.setItem("ram", data[key].specifications.ram);
      localStorage.setItem("storage", data[key].specifications.storage);
      localStorage.setItem("display", data[key].specifications.display);
      localStorage.setItem("battery", specifications.battery);
      localStorage.setItem("gpu", data[key].specifications.gpu);
      localStorage.setItem("os", data[key].specifications.os);
      localStorage.setItem("weight", data[key].specifications.weight);
      localStorage.setItem("ports", data[key].specifications.ports);
        
    })
}
loadProducts();

