import axios from 'axios';



const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



export const getPlacesData = async (sw, ne) => {
    try{
        const {data: { data }} = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              restaurant_tagcategory_standalone: '10591',
              restaurant_tagcategory: '10591',
              limit: '30',
              currency: 'USD',
              open_now: 'false',
              lunit: 'km',
              lang: 'en_US'
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              // 'x-rapidapi-key': 'bef236bb7amsh515d59227b0e057p1db98fjsn96db2d5277c9'
            }
          });

        return data;
    }
    catch(error){
        console.log(error)
    }
}