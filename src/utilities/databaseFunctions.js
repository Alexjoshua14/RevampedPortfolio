// Alex Joshua (c) 2022

import axios from 'axios';

export async function getData() {
    const response = await axios.get(`https://pure-ridge-29779.herokuapp.com/api/data`);
    return response.data;
}

export async function getImage(imageKey) {
    const response = await axios.get(`https://pure-ridge-29779.herokuapp.com/api/image/${encodeURIComponent(imageKey)}`, { responseType: 'blob'});
    return URL.createObjectURL(response.data);
}
