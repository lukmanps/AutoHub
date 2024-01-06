import Axios from '../../config/axios.config';

export const signOut = async() => {
    try {
        const response = await Axios.get('/auth/signout');
        return response;
    } catch (error) {
        console.log(error);
    }
}