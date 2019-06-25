import axios from 'axios';

// export const  searchs =  (term) => {
//      axios.get('https://api.unsplash.com/search/photos', {
//             params: {query: term},
//             headers: {
//             Authorization: 
//             'Client-ID 11da06adedf2a38bf41b93a283823d79160a55c23de0113e0b9dd2199b30cdf7',
//             }
//         });

// }

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 11da06adedf2a38bf41b93a283823d79160a55c23de0113e0b9dd2199b30cdf7',
    }
})