let axios = require('axios');
const add = (a, b) => {
    return a + b;
}
const api1 = () => {
    return axios.get('aaa').then(response => {
        console.log(response.data[0].name);
        let res = response.data[0].name
        return res
    }).catch(response => {
        return response
    })
}
const getFullName = (name) => {
    return 'Hello' + getIdWithName(name)
}
const getIdWithName = (name) => {
    return ' 2' + name
}
module.exports = { add, api1, getFullName, getIdWithName };