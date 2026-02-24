window.onload = async function () {

const supabaseUrl = "https://gnproortjmxsuqljsuza.supabase.co";
const supabaseKey = "sb_publishable_croNz3tQRNm9Z79sEMFgSQ_czVsCaD7";

     const supabaseClient = window.supabase.createClient(
        supabaseUrl,
        supabaseKey
    );

    // const wrapper = document.getElementById("categoryWrapper");

    // if (!wrapper) {
    //     console.error("categoryWrapper not found");
    //     return;
    // }

    // wrapper.innerHTML = "";

//     const { data, error } = await supabaseClient
//         .from("users")
//         .select("id, username, profile_url");

//     if (error) {
//         console.error("Supabase Error:", error.message);
//         return;
//     }

//     console.log("LOADED DATA:", data);

//     data.forEach(user => {

//         const img = user.profile_url
//             ? user.profile_url
//             : "/assets/images/food/default.jpg";

//         wrapper.innerHTML += `
//             <div id="${user.id}" class="swiper-slide slider-thumbs__slide slider-thumbs__slide--3h" style="margin-right: 10px;">
// 					<div class="slider-thumbs__image slider-thumbs__image--round-corners">
//                     <a href="category.html">
//                     <img src="${img}" alt="${user.username}" title=""/></a></div>
// 					<div class="slider-thumbs__caption caption">
// 						<div class="caption__content">
// 							<h2 class="caption__title caption__title--smaller">${user.username}</h2>
// 						</div>
// 					</div>
// 				</div> 
//         `;
//     });

    
// // MADE FOR YOU

// const wrapper2 = document.getElementById("madeforyou");
// if (!wrapper) {
//     console.error("categoryWrapper not found");
//     return;
// }

// wrapper2.innerHTML = "";

// // ✅ IDs jo chahiye
// const allowedIds = [8, 11, 13, 7, 10];

// const { data: data2, error2 } = await supabaseClient
//     .from("users")
//     .select("id, username, profile_url")
//     .in("id", allowedIds);   // 🔥 IMPORTANT LINE

// if (error2) {
//     console.error("Supabase Error:", error2.message);
//     return;
// }

// console.log("FILTERED DATA:", data2);

// data2.forEach(user2 => {
//     const img = user2.profile_url
//         ? user2.profile_url
//         : "/assets/images/food/default.jpg";

//     wrapper2.innerHTML += `
//         <div id="${user2.id}" class="swiper-slide slider-thumbs__slide slider-thumbs__slide--1h" style="margin-right: 10px;">
// 					<div class="slider-thumbs__image slider-thumbs__image--round-corners">
// 					<a href="shop-details.html"><img src="${img}" alt="${user2.username}" title=""/></a>
// 						<div class="slider-thumbs__top-right-info">
// 							<div class="slider-thumbs__price">$15</div>
// 						</div>
// 						<div class="slider-thumbs__bottom-right-info">
// 							<div class="slider-thumbs__addtocart addtocart"><a href="#"><img src="/assets/images/icons/black/cart.svg" alt="" title=""/></a></div>
// 						</div>
// 					</div>
// 					<div class="slider-thumbs__caption caption">
// 						<div class="caption__content">
// 							<h2 class="caption__title">${user2.username}</h2>
// 							<a class="caption__category" href="category.html">SALADS</a>
// 						</div>
// 					</div>
// 				</div>         
//     `;
// });



};
