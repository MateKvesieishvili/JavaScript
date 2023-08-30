fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    const productsSection = document.querySelector('.products_section');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const filteredProducts = data.products.filter(product => cartItems.includes(product.id));

    filteredProducts.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product_card_order';

      const image = document.createElement('img');
      image.src = product.thumbnail;
      image.className = 'card_icon_order';

      const cardBigContainer = document.createElement('div');
      cardBigContainer.className = 'cardBigContainer'

      
      const deviceName = document.createElement('p');
      deviceName.textContent = product.title;
      deviceName.className = 'device_name_order';

      const cardDesc = document.createElement('p');
      cardDesc.textContent = product.description;
      cardDesc.className = 'card_desc_order';

      const cardContainer = document.createElement('div');
      cardContainer.className = 'card_container_order';

      const priceTag = document.createElement('p');
      priceTag.textContent = `$${product.price}`;
      priceTag.className = 'price_tag_order';

      const starIcon = document.createElement('i');
      starIcon.className = 'fa-solid fa-cart-plus';
      starIcon.style.color = '#F77F00';


      starIcon.addEventListener('click', () => {
        const index = cartItems.indexOf(product.id);
        if (index > -1) {
            cartItems.splice(index, 1);
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          card.remove();
        }
      });

      card.appendChild(image);
      card.appendChild(cardBigContainer);
      cardBigContainer.appendChild(deviceName);
      cardBigContainer.appendChild(cardDesc);
      cardContainer.appendChild(priceTag);
      cardContainer.appendChild(starIcon);
      cardBigContainer.appendChild(cardContainer);
      productsSection.appendChild(card);
    });
  })
  
  .catch(error => console.log(error));
