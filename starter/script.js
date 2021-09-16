'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
countriesContainer.insertAdjacentHTML('beforeend', html);
countriesContainer.style.opacity = 1;
};

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// // const getCountryAndNeighbour = country => {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     //render country
// //     renderCountry(data);

// //     const [neighbour] = data.borders;

// //     if (!neighbour) return;
// //     const request2 = new XMLHttpRequest();
// //     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
// //     request2.send();

// //     request2.addEventListener('load', function () {
// //       const data2 = JSON.parse(this.responseText);
// //       console.log(data2);
// //       renderCountry(data2);
// //     });
// //   });
// // };

// // getCountryAndNeighbour('poland', 'neighbour');
// // // getCountryData('india');

// const getJSON = function (url,errorMsg='something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg}${response.status}`);
//     return response.json();
//   });
// };
// const getCountry = function (country) {

//   getJSON(`https://restcountries.eu/rest/v2/name/${country}`,'Country not found')

//   // fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//   //   .then(response => {
//   //     console.log(response);
//   //     if (!response.ok)
//   //       throw new Error(`something went wrong${response.status}`);
//   //     return response.json();
//   //   })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
// const neighbour='dsjkf'
//       if (!neighbour) return;

//       return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`,'Country not found went wrong');
//     })
//     // .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message}`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', function () {
//   getCountry('sri lanka');
// });

const whereAmI = function (lat, lng) {
  // if(!longt)

  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) throw new Error (`problem with geocoding ${response.status} `)
      
      return response.json();
    })
    .then(data => console.log(`you are in ${data.city},${data.country}`))


//     return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
//         .then(response => {
//           // console.log(response);
//           if (!response.ok)
//             throw new Error(`something went wrong${response.status}`);
//           return response.json();
//         })
// .then(data=> renderCountry(data[0]))



//   .catch(err => console.error(`${err.message}`));
}


whereAmI(55.6802779000,12.5900501000);

// btn.addEventListener('click', function () {
  

// });