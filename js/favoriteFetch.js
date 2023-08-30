fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    const productsSection = document.querySelector('.products_section');
    const favoritedCards = JSON.parse(localStorage.getItem('favoritedCards')) || [];

    const filteredProducts = data.products.filter(product => favoritedCards.includes(product.id));

    filteredProducts.forEach(product => {
      const card = document.createElement('div');
      card.className = 'card';

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
      starIcon.style.color = '#F77F00';

      starIcon.addEventListener('click', () => {
        const index = favoritedCards.indexOf(product.id);
        if (index > -1) {
          favoritedCards.splice(index, 1);
          localStorage.setItem('favoritedCards', JSON.stringify(favoritedCards));
          card.remove();
        }
      });

      card.appendChild(image);
      card.appendChild(deviceName);
      card.appendChild(cardDesc);
      cardContainer.appendChild(priceTag);
      cardContainer.appendChild(starIcon);
      card.appendChild(cardContainer);

      productsSection.appendChild(card);
    });
  })
  .catch(error => console.log(error));
