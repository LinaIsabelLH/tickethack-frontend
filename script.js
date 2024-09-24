const API_KEY = 'http://localhost:3000/trips';

const noTripHTML = `
            <div id="not-found-icon"> <img src="images/notfound.png" alt="Trip not found"> </div>
            <div class="raleway">No trip found.</div>            
`;

document.querySelector('#btn-search').addEventListener('click', function () {
  console.log(document.querySelector('#date-search').value);

  fetch(`${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      // let date = moment(data.trips[0].date);
      let date = moment();

      // console.log(date.format('DD/MM/YYYY'));
      // console.log(data);

      document.querySelector('#card-results').innerHTML = `
      ${data.trips[0].departure} > ${data.trips[0].arrival} ${date.format(
        'h:mm:ss'
      )}
     `;
    });
});
