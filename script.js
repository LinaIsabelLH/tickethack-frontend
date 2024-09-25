const API_KEY = 'http://localhost:3000/trips';

const noTripHTML = `
            <img id="not-found-icon" src="images/notfound.png" alt="Trip not found">
            <div class="raleway" id="not-found-text">No trip found.</div>            
`;

const tripHTML = `
 `;

document.querySelector('#btn-search').addEventListener('click', function () {
  console.log(document.querySelector('#date-search').value);

  const inputData = {
    departure: document.querySelector('#departure-search').value,
    arrival: document.querySelector('#arrival-search').value,
    date: document.querySelector('#date-search').value,
  };

  // console.log(inputData);

  fetch(`${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inputData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (data.result) {
        document.querySelector('#card-results').innerHTML = '';

        for (trip of data.trips) {
          console.log('trip:', trip);
          let dep = trip.departure;
          let arr = trip.arrival;
          let price = trip.price;
          let time = trip.time;

          let id = trip._id;

          document.querySelector('#card-results').innerHTML += `
          <div class="result-trip raleway" id="${id}">
            <div>${dep} > ${arr}</div>
            <div>${time}</div>
            <div>${price}€</div>
            <button type="button" class="btn-book">Book !</button>
          </div>
          `;
        }
      } else {
        // no results
        document.querySelector('#card-results').innerHTML = noTripHTML;
      }
    });

  // fetch(`${API_KEY}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // let date = moment(data.trips[0].date);
  //     let date = moment();

  //     // console.log(date.format('DD/MM/YYYY'));
  //     // console.log(data);

  //     document.querySelector('#card-results').innerHTML = `
  //     ${data.trips[0].departure} > ${data.trips[0].arrival} ${date.format(
  //       'h:mm:ss'
  //     )}
  //    `;
  //   });
});
