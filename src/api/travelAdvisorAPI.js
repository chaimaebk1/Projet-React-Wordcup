/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '067d986cffmshe91e183975a1289p1e0d3djsnb73769da8460',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://open-weather-map27.p.rapidapi.com/weather', {
        params: { lat, lon: lng },
        headers: {
          'X-RapidAPI-Key': '067d986cffmshe91e183975a1289p1e0d3djsnb73769da8460',
          'X-RapidAPI-Host': 'open-weather-map27.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
  }
};
