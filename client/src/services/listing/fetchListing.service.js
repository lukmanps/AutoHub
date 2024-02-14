import Axios from '../../config/axios.config'

const fetchListing = async(id) => {
    try {
        const response = await Axios.get(`/listing/listing/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default fetchListing;