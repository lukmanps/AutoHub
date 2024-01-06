import Axios from '../../config/axios.config';

export const updateUserInfo = async(data, id) => {
    try {
        const response = await Axios.post(`/update-user-info/${id}`, data);
        console.log(response, 'Respnse');
        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response;
    }
}