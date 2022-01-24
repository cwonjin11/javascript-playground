

document.addEventListener("DOMContentLoaded", () => {

    // const URL = "https://restcountries.com/v3.1/all"

    const searchBtn = document.querySelector(".search-btn")
    const searchBar = document.querySelector(".search-bar")
    const result = document.querySelector(".result")
    const searchSection = document.querySelector(".search-section");

    searchBtn.addEventListener("click", () => {
        console.log(searchBar.value)
        let url = `https://restcountries.com/v3.1/name/${searchBar.value}`
        fetch(url)
        .then(res => res.json())
        .then(data => displayContries(data))
    })

    // enble Enter key
    searchBar.addEventListener("keypress", (e) => {
        if(e.keyCode === 13) {
            searchBtn.click()
        }
    })


    const displayContries = (data) => { 
        result.innerHTML = ""
        data.forEach((country) => {
            const div = document.createElement("div")
            div.className = "card d-flex m-5 shadow";
            div.style.width = "18rem";
            div.innerHTML =  `

           
            <img src="${country.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${country.name.official}</h5>
              <p class="card-text">${country.maps.googleMaps}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Capital: ${country.capital}</li>
              <li class="list-group-item">Currency: ${Object.keys(country.currencies)} </li>
            </ul>
            <div class="card-body">
              <a href="${country.maps.googleMaps}" class="card-link" target="_blank">google maps</a>
              <a href="${country.maps.openStreetMaps}" class="card-link">open street maps</a>
            </div>
          </div>
            `

            result.appendChild(div)
        })

    }

    
})



// const print = async () => {
//     output.innerHTML = "I have been printed"
// }
// console.log(print())
// print().then(res => console.log(res))


// const practice = async() => {
//     const response = await fetch("https://restcountries.com/v3.1/all")
//     // console.log(response)
//     const data =  await response.json()
//     console.log(data)
//     // return data

    
//     output.innerHTML = `${data[0].name}`

// }

// practice().then(data => console.log(data)).catch(err => console.log('errors: '+ err.message))
