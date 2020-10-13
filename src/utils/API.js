import axios from 'axios';

const BASEURL = 'https://acnhapi.com/v1';

// LOCAL DEV API URL
const API_URL = 'http://localhost:3001';

// DEPLOYED API URL
// const API_URL = 'https://awesome-anch-api.herokuapp.com';

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

    saveBug: function(bugObj, userId){
        console.log(bugObj)
        return axios.post(`${API_URL}/api/bugs/${userId}`, bugObj)
    },

    getUserBugs: function(userId){
        return axios.get(`${API_URL}/api/bugs/${userId}`)
    },

    saveFish: function(fishObj, userId){
        return axios.post(`${API_URL}/api/fish/${userId}`, fishObj)
    },

    getUserFish: function(userId){
        return axios.get(`${API_URL}/api/fish/${userId}`)
    },

    saveFossil: function(fossilObj, userId){
        console.log(fossilObj)
        return axios.post(`${API_URL}/api/fossils/${userId}`, fossilObj)
    },

    getUserFossils: function(userId){
        return axios.get(`${API_URL}/api/fossils/${userId}`)

    },

    saveHouseware: function(housewareObj, userId){
        // return axios.post(`${API_URL}/api/housewares/${userId}`, housewareObj)
        console.log(housewareObj)
    },

    saveSeaCreature: function(seaObj, userId){
        console.log(seaObj)
        return axios.post(`${API_URL}/api/seacreatures/${userId}`, seaObj)
    },

    getUserSeaCreatures: function(userId){
        return axios.get(`${API_URL}/api/seacreatures/${userId}`)

    },

    saveVillager: function(villagerObj, userId){
        console.log(villagerObj)
        return axios.post(`${API_URL}/api/villagers/${userId}`, villagerObj)
    },

    getUserVillagers: function(userId){
        return axios.get(`${API_URL}/api/villagers/${userId}`)

    },

    saveWallMounted: function(wallMountedObj, userId){
        // return axios.post(`${API_URL}/api/wallmounteds/${userId}`, wallMountedObj)
        console.log(wallMountedObj)
    },

    saveMisc: function(miscObj, userId){
        // return axios.post(`${API_URL}/api/misc/${userId}`, miscObj)
        console.log(miscObj)
    },




}