// Alex Joshua (c) 2022

import axios from 'axios';

export async function getData() {
    const response = await axios.get(`http://localhost:5050/api/data`);
    return response.data;
}

export async function getImage(imageKey) {
    console.log(`Fetching Image ${imageKey}`)
    const response = await axios.get(`http://localhost:5050/image/${imageKey}`, { responseType: 'blob'});
    return response.data;
}