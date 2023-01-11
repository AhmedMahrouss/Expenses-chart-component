let drawing3 = document.querySelector('.drawing :nth-child(3)');
let drawing4 = document.querySelector('.drawing :nth-child(4)');
let maxPrice = document.querySelector('.hover :first-child');
let minPrice = document.querySelector('.hover :nth-child(2)');

drawing3.onmouseover= ()=>{
maxPrice.style.visibility='visible'
}
drawing3.onmouseleave = ()=>{
maxPrice.style.visibility = 'hidden'
}

drawing4.onmouseover= ()=>{
minPrice.style.visibility='visible'
}
drawing4.onmouseleave = ()=>{
minPrice.style.visibility = 'hidden'
}
