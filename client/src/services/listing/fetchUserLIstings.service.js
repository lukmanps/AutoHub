import Axios from '../../config/axios.config'

const fetchUserListings = async(id) => {
    try {
        const response = await Axios.get(`/listing/userListing/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default fetchUserListings