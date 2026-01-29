import "./dom";
import "./style.css";

export function fetchData(location) {
  return fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&elements=remove%3Acloudcover%2Cremove%3Adew%2Cremove%3Afeelslikemax%2Cremove%3Afeelslikemin%2Cremove%3Aprecipcover%2Cremove%3Apreciptype%2Cremove%3Apressure%2Cremove%3Asolarenergy%2Cremove%3Asolarradiation%2Cremove%3Avisibility&key=EXQLEW6XYD2UMM9HFYJLMLEH6&contentType=json`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error!", response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // current condition
      console.log(
        data.currentConditions.conditions,
        data.currentConditions.temp,
        data.currentConditions.feelslike,
        data.days[0].tempmax,
        data.days[0].tempmin,
      );
      // 7 days forecast
      console.log(
        data.days[0].datetime,
        data.days[0].temp,
        data.days[1].datetime,
        data.days[1].temp,
        data.days[2].datetime,
        data.days[2].temp,
        data.days[3].datetime,
        data.days[3].temp,
        data.days[4].datetime,
        data.days[4].temp,
        data.days[5].datetime,
        data.days[5].temp,
        data.days[6].datetime,
        data.days[6].temp,
      );
      return data;
    })
    .catch((error) => {
      console.error("Fail to fetch data", error);
    });
}

export function fetchImage(condition) {
  return fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=KH2vrIo53DTpqDgTI371yMGIFgZRVvSu&s=${condition}`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error!", response.status);
      }
      return response.json();
    })
    .then((imageData) => {
      return imageData.data.images.original.url;
    })
    .catch((error) => {
      console.log(error);
    });
}
