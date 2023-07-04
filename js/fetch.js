fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    const productsSection = document.querySelector('.products_section');
    const favoritedCards = JSON.parse(localStorage.getItem('favoritedCards')) || [];
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    data.products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product_card';

      const image = document.createElement('img');
      image.src = product.thumbnail;
      image.alt = '';
      image.className = 'card_icon';

      const deviceName = document.createElement('p');
      deviceName.textContent = product.title;
      deviceName.className = 'device_name';

      const cardDesc = document.createElement('p');
      cardDesc.textContent = product.description;
      cardDesc.className = 'card_desc';

      const cardContainer = document.createElement('div');
      cardContainer.className = 'card_container';

      const priceTag = document.createElement('p');
      priceTag.textContent = `$${product.price}`;
      priceTag.className = 'price_tag';

      const starIcon = document.createElement('i');
      starIcon.className = 'fa-solid fa-star';

      const cartIcon = document.createElement('i');
      cartIcon.className = 'fa-solid fa-cart-plus';

      if (favoritedCards.includes(product.id)) {
        card.classList.add('favorite');
        starIcon.style.color = '#F77F00';
      }

      if (cartItems.includes(product.id)) {
        card.classList.add('added-to-cart');
        cartIcon.style.color = '#F77F00';
      }

      starIcon.addEventListener('click', () => {
        if (isUserLoggedIn()) {
          card.classList.toggle('favorite');

          if (card.classList.contains('favorite')) {
            favoritedCards.push(product.id);
            starIcon.style.color = '#F77F00';
          } else {
            const index = favoritedCards.indexOf(product.id);
            if (index > -1) {
              favoritedCards.splice(index, 1);
            }
            starIcon.style.color = '';
          }
          localStorage.setItem('favoritedCards', JSON.stringify(favoritedCards));
        } else {
          alert('Please log in to mark as favorite.');
        }
      });

      cartIcon.addEventListener('click', () => {
        if (isUserLoggedIn()) {
          card.classList.toggle('added-to-cart');

          if (card.classList.contains('added-to-cart')) {
            cartItems.push(product.id);
            cartIcon.style.color = '#F77F00';
          } else {
            const index = cartItems.indexOf(product.id);
            if (index > -1) {
              cartItems.splice(index, 1);
            }
            cartIcon.style.color = '';
          }
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } else {
          alert('Please log in to add to cart.');
        }
      });

      card.appendChild(image);
      card.appendChild(deviceName);
      card.appendChild(cardDesc);
      cardContainer.appendChild(priceTag);
      cardContainer.appendChild(starIcon);
      cardContainer.appendChild(cartIcon);
      card.appendChild(cardContainer);

      productsSection.appendChild(card);
    });
  })
  .catch(error => console.log(error));