
// let categorySection = document.getElementById("categorySection")
// categorySection.setAttribute("class","section relative min-h-[40px] text-black w-full shadow-sm hidden lg:block")
// categorySection.innerHTML = `
// <div class="bg-white shadow-2xl">
//         <div class="flex items-center max-w-[1248px] justify-between h-[40px] m-auto relative text-[14px] font-semibold">
//                 <!-- Dropdown Item -->
//           <div class="group relative h-full flex items-center justify-center grow cursor-pointer">
//             <span class="flex items-center h-full">Electronics <i class="ri-arrow-down-s-line ml-1"></i></span>
//             <!-- Dropdown Menu -->
//             <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-md z-20 w-[220px] py-2">
//               <ul class="text-sm text-gray-800">
//                 <a href="mobile.html" id="mobiles"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mobiles</li></a>
//                 <a href="laptop.html" id="laptops"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Laptops</li></a>
//                 <a href="camera.html" id="cameras"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cameras</li></a>
//                 <a href="tablet.html" id="tablets"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tablets</li></a>
//                 <a href="powerbank.html" id="pbanks"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Power Banks</li></a>
//               </ul>
//             </div>
//           </div>
//           <!-- TVs & Appliances -->
//           <div class="group relative h-full flex items-center justify-center grow cursor-pointer">
//             <span class="flex items-center h-full">TVs & Appliances <i class="ri-arrow-down-s-line ml-1"></i></span>
//             <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-md z-20 w-[220px] py-2">
//               <ul class="text-sm text-gray-800">
//                 <a href="television.html"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Televisions</li></a>
//                 <a href="washingmachine.html"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Washing Machines</li></a>
//                  <a href="refrigerator.html"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Refrigerators</li></a>
//                 <a href="ac.html"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Air Conditioners</li></a>
//                </ul>
//             </div>
//           </div>
//           <!-- Men -->
//           <div class="group relative h-full flex items-center justify-center grow cursor-pointer">
//            <a href="shirt.html"><span class="flex items-center h-full">Men <i class="ri-arrow-down-s-line ml-1"></i></span></a>
//              <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-md z-20 w-[220px] py-2">
//               <ul class="text-sm text-gray-800">
//                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">T-Shirts</li></a>
//                 <a href="shirt.html"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Shirts</li></a>
//                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Jeans</li></a>
//                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Watches</li></a>
//               </ul>
//             </div>
//           </div>
//           <!-- Women -->
//           <div class="group relative h-full flex items-center justify-center grow cursor-pointer">
//             <span class="flex items-center h-full">Women <i class="ri-arrow-down-s-line ml-1"></i></span>
//             <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-md z-20 w-[220px] py-2">
//               <ul class="text-sm text-gray-800">
//                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Kurtas</li></a>
//                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sarees</li></a>
//                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Jeans</li></a>
//                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Handbags</li></a>
//               </ul>
//             </div>
//           </div>
//           <!-- Baby & Kids -->
//           <div class="group relative h-full flex items-center justify-center grow cursor-pointer">
//             <span class="flex items-center h-full">Baby & Kids <i class="ri-arrow-down-s-line ml-1"></i></span>
//             <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-md z-20 w-[220px] py-2">
//               <ul class="text-sm text-gray-800">
//                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Toys</li></a>
//                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Baby Clothes</li></a>
//                  <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">School Supplies</li></a>
//                </ul>
//             </div>
//           </div>
//           <!-- Home & Furniture -->
//           <div class="group relative h-full flex items-center justify-center grow cursor-pointer">
//             <span class="flex items-center h-full">Home & Furniture <i class="ri-arrow-down-s-line ml-1"></i></span>
//             <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-md z-20 w-[220px] py-2">
//               <ul class="text-sm text-gray-800">
//                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Bedsheets</li></a>
//                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Curtains</li></a>
//                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Furniture</li></a>
//               </ul>
//             </div>
//           </div>
//           <!-- Sports, Books & More -->
//           <div class="group relative h-full flex items-center justify-center grow cursor-pointer">
//             <span class="flex items-center h-full">Sports, Books & More <i class="ri-arrow-down-s-line ml-1"></i></span>
//             <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-md z-20 w-[220px] py-2">
//               <ul class="text-sm text-gray-800">
//                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Books</li></a>
//                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Stationery</li></a>
//                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Exercise & Fitness</li></a>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
// `
// let mobileMenu = document.getElementById("mobileMenu")
// mobileMenu.setAttribute("class","lg:hidden bg-white shadow-lg hidden")
// mobileMenu.innerHTML = `
//  <div class="p-4 space-y-3">
//             <div class="border-b pb-2">
//                 <span class="font-medium text-gray-800">Electronics</span>
//                 <div class="ml-4 mt-2 space-y-1 text-sm text-gray-600">
//                     <div><a href="mobile.html">Mobiles</a></div>
//                     <div><a href="laptop.html">Laptops</a></div>
//                     <div><a href="camera.html">Cameras</a></div>
//                     <div><a href="tablet.html">Tablets</a></div>
//                 </div>
//             </div>
//             <div class="border-b pb-2">
//                 <span class="font-medium text-gray-800">TVs & Appliances</span>
//                 <div class="ml-4 mt-2 space-y-1 text-sm text-gray-600">
//                     <div>Televisions</div>
//                     <div>Washing Machines</div>
//                     <div>Refrigerators</div>
//                 </div>
//             </div>
//             <div class="border-b pb-2">
//                 <span class="font-medium text-gray-800">Men</span>
//                 <div class="ml-4 mt-2 space-y-1 text-sm text-gray-600">
//                     <div>T-Shirts</div>
//                     <div><a href="shirt.html">Shirts</a></div>
//                     <div>Jeans</div>
//                 </div>
//             </div>
//             <div class="border-b pb-2">
//                 <span class="font-medium text-gray-800">Women</span>
//                 <div class="ml-4 mt-2 space-y-1 text-sm text-gray-600">
//                     <div>Kurtas</div>
//                     <div>Sarees</div>
//                     <div>Jeans</div>
//                 </div>
//             </div>
//         </div>
// `

//         mobileMenuBtn.addEventListener("click", () => {
//         mobileMenu.classList.toggle("hidden");
//       });

//       // Mobile filter toggle
//       filterBtn.addEventListener("click", () => {
//         sidebar.classList.toggle("hidden");
//         sidebar.classList.toggle("block");

//         if (!sidebar.classList.contains("hidden")) {
//           sidebar.classList.add(
//             "fixed",
//             "top-0",
//             "left-0",
//             "h-[90vh]",
//             "z-50",
//             "overflow-y-auto",
//             "bg-white",
//             "shadow-lg",
//             "rounded-md"
//           );
//           sidebar.classList.remove("w-full"); // Optional: restrict width
//           sidebar.classList.add("w-[90vw]", "max-w-[320px]");
//         } else {
//           sidebar.classList.remove(
//             "fixed",
//             "top-0",
//             "left-0",
//             "h-[90vh]",
//             "z-50",
//             "overflow-y-auto",
//             "bg-white",
//             "shadow-lg",
//             "rounded-md",
//             "w-[90vw]",
//             "max-w-[320px]"
//           );
//           sidebar.classList.add("w-full");
//         }
//       });

//       document.addEventListener("click", (e) => {
//         if (
//           window.innerWidth < 1024 &&
//           !sidebar.contains(e.target) &&
//           !filterBtn.contains(e.target) &&
//           !sidebar.classList.contains("hidden")
//         ) {
//           sidebar.classList.add("hidden");
//           sidebar.classList.remove(
//             "fixed",
//             "top-0",
//             "left-0",
//             "h-[90vh]",
//             "z-50",
//             "overflow-y-auto",
//             "bg-white",
//             "shadow-lg",
//             "rounded-md",
//             "w-[90vw]",
//             "max-w-[320px]"
//           );
//         }
//       });
//       function toggleSearchMobile() {
//         const searchBar = document.getElementById("mobileSearchBar");
//         searchBar.classList.toggle("hidden");
//       }
