import Axios from '../../config/axios.config';

const submitListing = async(data, user) => {
    try {
        const listingData = {
            model: data.data.model,
            make: data.data.make,
            year: data.data.year,
            description: data.data.description,
            fuel: data.data.fuel,
            bodyType: data.data.bodyType,
            price: data.data.price,
            location: data.data.location,
            imageURLs: data.imageURLs,
            user: user
        }
        const response = await Axios.post('/listing/create', listingData);
        if(response.data){
            console.log(response);
            return response.data;
        }
    } catch (error) {
        throw error;
    }
}

export default submitListing;