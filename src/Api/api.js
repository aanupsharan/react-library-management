import axios from 'axios';

export const getApi = (url) => {
   return axios.get(url)
        .then(res => {
            return res.data;
        })
}

export const postApi = (url, data) => {
    return axios.post(url, data).then(() => {
        return axios.get(url)
            .then(res => {
                return res.data;
            });
    })
}

export const deleteApi = (url, deleteUrl) => {
    return axios.delete(deleteUrl).then(() => {
            return axios.get(url)
                .then(res => {
                    return res.data
                });
        });
}
