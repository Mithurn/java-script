// 'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// // NEW COUNTRIES API URL (use instead of the URL shown in videos):
// // https://restcountries.com/v2/name/portugal

// // NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

// ///////////////////////////////////////

const renderCountry = function(data, className = '' ){
    const html = `<article class="country ${className}">
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${((data.population/1000000).toFixed(1))} M People</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
              </div>
            </article>`;
    
            countriesContainer.insertAdjacentHTML('beforeend', html);
            countriesContainer.style.opacity = 1;
     
}

const renderError = function(msg){
  countriesContainer.innerAdjacentText('beforeend',msg);
  countriesContainer.style.opacity = 1;
}


// const getCountryAndNeighbour = function(country){
    
//     //ajax call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET',`https://restcountries.com/v2/name/${country}`);
    
//     request.send();
    
//     request.addEventListener('load',function(){
     
//     const [data] = JSON.parse(request.responseText);
//         console.log(data);
    
//         // render country 1
//         renderCountry(data);


//         //get neighbor country 1
//         const neighbor = data.borders?.[0];

//         if(!neighbor) return;



//         //ajax call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET',`https://restcountries.com/v2/alpha/${neighbor}`);
    
//         request2.send();

//         request2.addEventListener('load',function(){
     
//             const data2 = JSON.parse(request2.responseText);
//                 console.log(data2);

//                 renderCountry(data2, 'neighbour');
    
//     });
// });
    
// }

// getCountryAndNeighbour('portugal');









// usoing fetch api
const getCountryData = function(country){
    fetch(`https://restcountries.com/v2/name/${country}`)
  
    .then
  (response => response.json())

  .then(data => {
    renderCountry(data[0]);
    const neighbor = data[0].borders[0];

    if(!neighbor) return;

    // country 2
    return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
  })
  .then(response => response.json())
  .then(data => renderCountry(data,'neighbour'))
  .catch(err => {
  console.error(`${err} 💥💥💥`);
  renderError(`something went wrong 💥💥💥 ${err.message}.try again!`);
  })
  .finally(()=>{
     countriesContainer.style.opacity=1;
  });
};

btn.addEventListener('click',function(){
  getCountryData('portugal');
})

getCountryData('portugal');

console.log('wassup');





