const axios = require('axios');

const fetchPosts = async (api) => {
    try {
        const res = await axios.get(api);
        return res.data
    } catch (e) {
        console.log(e);
    }
}

module.exports = {fetchPosts}
