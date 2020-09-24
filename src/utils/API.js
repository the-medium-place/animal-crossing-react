import axios from 'axios';

const BASEURL = 'http://acnhapi.com/v1';

const API_URL = 'http://localhost:3001';



export default {

    search: function(query, category){
        return axios.get(`${BASEURL}/${category}/${query}`);
    },

    testSearch: function(cat){
        return axios.get(BASEURL + '/' + cat)
    },

    addUser: function(userObj) {
        return axios.post(API_URL+'/api/users', userObj)
    },

    login: function(userObj) {
        return axios.post(API_URL+'/login', userObj);
    }


}