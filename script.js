const countriesList = document.querySelector("#country"); 
const wrapperDiv = document.querySelector(".wrapper")

const endpoint = "https://restcountries.com/v3.1/all"; 

let countries; 

const getAllCountries = () =>{
    fetch(endpoint)
    .then(response => response.json())
    .then((data) => setAllCountries(data))
    .catch((error) => console.error(error))
}

const setAllCountries = (data) => {
    countries = data; 
        countries.forEach(country => {
            let option = document.createElement("option");
            option.setAttribute("class", "option")
            option.innerHTML = country.name.common;
            option.value = country.name.common;
            countriesList.add(option);

        });
}

const addContent = (e) => {
    const country = countries.filter(c => c.name.common === e.target.value)[0];
    console.log(country)
    wrapperDiv.innerHTML = "";
    wrapperDiv.insertAdjacentHTML("beforeend", 
    `<img src="${country.flags.png}" alt="flags"> 
     <p class="population">Population: ${country.population}</p>
     <p class="region">Region: ${country.region} </p> `

    )
} 

countriesList.addEventListener("change", addContent);

getAllCountries()
;
