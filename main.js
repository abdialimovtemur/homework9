const cards_buy = document.querySelector(".cards_buy");
const new_cards = document.querySelector(".new_cards");
const market_cards = document.querySelector(".market_cards")
import { getBydata, newProductData, recomendedProductsData } from "./data.js";

const renderGetBydata = async () => {
    const data = await getBydata();

    if (data && data.length > 0) {
        cards_buy.innerHTML = data.map(
            (item) => `
            <div class="flex flex-col items-start gap-4 shadow-2xl py-6 p-3 mx-4 my-3">
            <div class="flex items-center justify-center w-full"><img src="${item.img}" alt="img"></div>
            <div class="flex justify-start items-start">
            <p class="text-[#FF4343] text-xl font-bold mr-6">${item.sale} ₽</p>
            <p class="text-[#4646468C] line-through">${item.price}</p>
            </div>
            <p>${item.info}</p>
            </div>
            `
        ).join(''); 
    } else {
        cards_buy.innerHTML = '<p>malumotlar yoq</p>'; 
    }
};
renderGetBydata();




const renderNewproductdata = async () => {
    const data = await newProductData();

    if (data && data.length > 0) {
        new_cards.innerHTML = data.map(
            (item) => `
            <div class="flex flex-col items-start gap-4 shadow-2xl py-6 p-3 mx-4 my-3">
            <div class="flex items-center justify-center w-full"><img src="${item.img}" alt="img"></div>
            <div class="flex justify-start items-start">
            <p class="text-[#000] text-xl font-bold mr-6">${item.price} ₽</p>
            </div>
            <p>${item.info}</p>
            </div>
            `
        ).join(''); 
    } else {
        cards_buy.innerHTML = '<p>malumotlar yoq</p>'; 
    }
};
renderNewproductdata();





const renderRecomendedProductsData = async () => {
    const data = await recomendedProductsData();

    if (data && data.length > 0) {
        market_cards.innerHTML = data.map(
            (item) => `
            <div class="flex flex-col items-start gap-4 shadow-2xl py-6 p-3 mx-4 my-3">
            <div class="flex items-center justify-center w-full"><img src="${item.img}" alt="img"></div>
            <div class="flex justify-start items-start">
            <p class="text-[#000] text-xl font-bold mr-6">${item.price} ₽</p>
            </div>
            <p>${item.info}</p>
            </div>
            `
        ).join(''); 
    } else {
        cards_buy.innerHTML = '<p>malumotlar yoq</p>'; 
    }
};
renderRecomendedProductsData();
