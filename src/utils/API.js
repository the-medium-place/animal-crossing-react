import axios from 'axios';

const BASEURL = 'http://acnhapi.com/v1';



export default {

    search: function(query, category){
        return axios.get(`${BASEURL}/${category}/${query}`);
    }


}