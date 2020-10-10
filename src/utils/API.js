import axios from 'axios';

const BASEURL = 'http://acnhapi.com/v1';

const API_URL = 'http://localhost:3001';



export default {

    search: function (query, category) {
        return axios.get(`${BASEURL}/${category}/${query}`);
    },

    testSearch: function (cat) {
        return axios.get(BASEURL + '/' + cat)
    },

    addUser: function (userObj) {
        return axios.post(API_URL + '/api/users', userObj)
    },

    login: function (userObj) {
        return axios.post(API_URL + '/login', userObj);
    },

    // part of creating user
    readSessions: function () {
        return axios.get(`${API_URL}/readsessions`);
    },

    getUserInfo: function (user_id) {
        return axios.get(`${API_URL}/users/${user_id}`);
    },

    getUserFromToken: function(token) {
        return axios.post(`${API_URL}/userFromToken`, {token: token})
    },

    saveBug: function(){},

    saveFish: function(){},

    saveFossil: function(){},
    saveHouseware: function(){},
    saveSeaCreature: function(){},
    saveVillager: function(){},
    saveWallMounted: function(){},
    saveMisc: function(){},




}