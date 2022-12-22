// Alex Joshua (c) 2022

import axios from 'axios';

export async function getData() {
    const response = await axios.get(`http://localhost:5050/api/data`);
    return response.data;
}

export async function getImage(imageKey) {
    const response = await axios.get(`http://localhost:5050/api/image/${encodeURIComponent(imageKey)}`, { responseType: 'blob'});
    return URL.createObjectURL(response.data);
}
