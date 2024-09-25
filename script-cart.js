const API_KEY_BASKETS = 'http://localhost:3000/baskets';

// Fillup the basket container
fetch(`${API_KEY_BASKETS}`)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    if (data.result) {
      document.querySelector('#cart-items-container').innerHTML = '';
      for (b of data.basket) {
        console.log(b);

        let dep = b.tripsId.departure;
        let arr = b.tripsId.arrival;
        let price = b.tripsId.price;

        let basketId = b._id;
        console.log('basketId', basketId);

        document.querySelector('#cart-items-container').innerHTML += `
          <div class="cart-item raleway" id="${basketId}">
            <div>${dep} > ${arr}</div>
            <div>${price}€</div>
            <button type="button" class="btn-delete">X</button>
          </div>
          `;
      }
      document.querySelector('#cart-total').textContent =
        'Total : ' + data.totalPriceBasket;
    }
  });

// Connect Del buttons
