const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const places = [];
// console.log(places);

const getData = async() => {
    const response = await fetch(endpoint);
    if(response.status != 200) console.log("Could not fetch the data");
    const data = await response.json();
    return data;
}

getData().then((data) => {
    // console.log(data);
    places.push(...data);
})

const matchData = (searchInput, places) => {
    const inputSearch = new RegExp(searchInput, "gi");
    return places.filter((place) => {  
        return place.city.match(inputSearch);
    })
}

function commaFy(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
    // console.log(this.value);
    const data = matchData(this.value, places);
    const result = data.map((place) => {
        const value = new RegExp(this.value, "gi");
        const city = place.city.replace(value, `<span class="hl">${this.value}</span>`)
        const state = place.state.replace(value, `<span class="hl">${this.value}</span>`)
        return  (`
                <li>There are ${data.length} results for given search</li>
                <li>
                    <span class="span">${city}, ${state}</span>
                    <span class"population">${commaFy(place.population)}</span>
                </li>
                `);
    });
    suggestions.innerHTML = result;
}

const input = document.querySelector("input");
const suggestions = document.querySelector(".suggestions");

input.addEventListener("click", displayMatches);
input.addEventListener("keyup", displayMatches);
