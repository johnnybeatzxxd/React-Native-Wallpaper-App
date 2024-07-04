import axios from "axios"
import { PIXEL_API_KEY } from '@env';


export const queryImage = (query, pageNumber, category) => {
    query = query.split(" ").join("+");
    const url = 'https://pixabay.com/api/?key=' + PIXEL_API_KEY + '&q=' + query + '&image_type=photo&pretty=true&page=' + pageNumber +'&category=' + category +'&safesearch=true';
    console.log(url);
    return new Promise((resolve, reject) => { 
        axios.get(url)
            .then(response => {
                const images = response.data.hits;
                
                resolve(images); 
            })
            .catch(error => {
                reject(error); 
            });
    });
};