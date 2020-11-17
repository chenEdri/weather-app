
import axios from 'axios'
import {Storage} from './storage-service.js'
// autocomplete for search
// "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=4calwjpDsJwDreKR9GP7QWUkrwGXA7mZ&q=tok"
//OytAocYfQkFRf0zlUNLuofKrD5XD6EAM
//	4calwjpDsJwDreKR9GP7QWUkrwGXA7mZ

//serach forcast 5 days with location key
//"http://dataservice.accuweather.com/forecasts/v1/daily/5day/226396?apikey=4calwjpDsJwDreKR9GP7QWUkrwGXA7mZ"

const resolveData = res => res.data
const gLocalItems = []

export const itemService = {
    getAutoComplete,
    getLocationForcast,
    saveToFav,
    loadFavorites
}

function getAutoComplete(location){
    return axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=OytAocYfQkFRf0zlUNLuofKrD5XD6EAM&q=${location}`)
    .then(resolveData)
}

function getLocationForcast(location){
   const key = location.Key;
   console.log(key);
   return axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=OytAocYfQkFRf0zlUNLuofKrD5XD6EAM`)
   .then(resolveData)
}


function loadFavorites() {
    const favorites = Storage.loadFromStorage('fav');
    return favorites;
}

function saveToFav(items){
    Storage.saveToStorage('fav', items);
}
