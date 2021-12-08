const mainSection = document.getElementById('main-section');

// h1
const weatherHeading = document.createElement('h1');
weatherHeading.textContent = "Weather Report";
mainSection.appendChild(weatherHeading)

// LOCATION
const cityContainer = document.createElement('div');
cityContainer.setAttribute("class", "frosted");
cityContainer.setAttribute("id", "city-container");
const city = document.createElement('input');
city.setAttribute("class", "frosted");
city.setAttribute("id", "city-name");
city.setAttribute("type","text");
city.setAttribute("placeholder","Mountain House");
cityContainer.appendChild(city);
// reset city name element

mainSection.appendChild(cityContainer);


// SKY MODE
const skyMode = ["Morning", "Midday", "Sunset", "Midnight"];
const skyContainer = document.createElement('div');
skyContainer.setAttribute("id", "sky-container");

skyMode.forEach(mode => {
    let skyTheme = document.createElement('div');
    skyTheme.setAttribute("class", `sky-color ${mode}`);
    skyTheme.setAttribute("id", `${mode}`)
    skyTheme.setAttribute("onclick", "changeSky(this.id)");
    skyContainer.appendChild(skyTheme);
});

// add to select element at bottom

mainSection.append(skyContainer);

const changeSky = (id) => {
    document.body.setAttribute("class", `${id} `)
}


// WEATHER STATION

const state = {
    temp: 92
};

const updateTemp = () => {
    const temperature = document.querySelector("#temperature");
    temperature.textContent = `${state.temp}`;
}

const raiseTemp = () => {
    state.temp += 1;
    updateTemp();
}

const lowerTemp = () => {
    state.temp -= 1;
    updateTemp();
}


// Register Events

const registerEventHandlers = () => {
    const incTemp = document.querySelector("#incTemp");
    incTemp.addEventListener("click", raiseTemp);

    const decTemp = document.querySelector("#decTemp");
    decTemp.addEventListener("click", lowerTemp);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);

// add emoji weather
// make a box for landscape
// sky changes should effect the box