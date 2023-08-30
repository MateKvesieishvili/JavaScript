fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    const cards = document.querySelectorAll('.card');


    for (let i = 0; i < 6; i++) {
      const product = data.products[i];
      const card = cards[i];


      card.querySelector('.card_icon').src = product.thumbnail;
      card.querySelector('.device_name').textContent = product.title;
      card.querySelector('.card_desc').textContent = product.description;
      card.querySelector('.price_tag').textContent = "$" + product.price;
    }
  })
  .catch(error => {
    console.log('Error:', error);
});
const shopButton = document.querySelectorAll(".shop_now");
function scrollToSection(){
  const targetSection = document.getElementById("cards_section");
  targetSection.scrollIntoView({ behavior: "smooth"})
}


const emailInput = document.getElementById('footer_register_input');
const registerButton = document.querySelector('.register_now_btn');

emailInput.addEventListener('input', function() {
  const email = emailInput.value;
  const isValidEmail = validateEmail(email);
  registerButton.disabled = !isValidEmail;

  if (isValidEmail) {
    registerButton.style.backgroundColor = '#F77F00';
    registerButton.style.color = 'white';
    registerButton.style.border = 'none';
  } else {
    registerButton.style.backgroundColor = 'white';
    registerButton.style.color = '#F77F00';
    registerButton.style.border = '#F77F00 1px solid';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  registerButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    console.log("Button clicked!");
    window.location.href = 'register.html';
  });
});



function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

document.querySelector(".footer_link1").addEventListener("click", function(event) {
  event.preventDefault();
  
  const header = document.querySelector("header");
  header.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".footer_link2").addEventListener("click", function(event) {
  event.preventDefault();
  
  const latestItems = document.querySelector("#cards_section");
  latestItems.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".footer_link3").addEventListener("click", function(event) {
  event.preventDefault();
  
  const whyByteMarket = document.querySelector(".why_byteMarket");
  whyByteMarket.scrollIntoView({ behavior: "smooth" });
});
