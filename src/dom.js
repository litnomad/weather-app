import { fetchData, fetchImage } from "./index";

const search = document.querySelector("#location");
const button = document.querySelector("button");
const header = document.querySelector("#header");
const subHeader = document.createElement("div");
const conditions = document.createElement("h1");
const temperature = document.createElement("h2");
const minMax = document.createElement("p");
const img = document.createElement("img");
const week = document.querySelector("#week");

button.addEventListener("click", () => {
  fetchData(search.value)
    .then((data) => {
      // todays condition
      conditions.textContent = data.currentConditions.conditions;
      temperature.textContent = data.currentConditions.temp;
      minMax.textContent =
        "Max: " + data.days[0].tempmax + " / " + "Min: " + data.days[0].tempmin;

      header.appendChild(subHeader);
      subHeader.appendChild(conditions);
      subHeader.appendChild(temperature);
      subHeader.appendChild(minMax);

      // current image
      fetchImage(`${data.currentConditions.conditions}`).then((promise) => {
        img.classList.add("condition_image");
        img.src = promise;
        header.appendChild(img);
      });

      // week forecast
      week.innerHTML = "";
      for (let i = 0; i < 7; i++) {
        const box = document.createElement("div");
        const date = document.createElement("p");
        const dateTemp = document.createElement("p");
        date.textContent = data.days[i].datetime;
        dateTemp.textContent = data.days[i].temp;
        week.appendChild(box);
        box.appendChild(date);
        box.appendChild(dateTemp);
      }
    })
    .catch((error) => {
      console.error("Fail to fetch data", error);
    });
});
