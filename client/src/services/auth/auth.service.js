import Axios from '../../config/axios.config';

export const handleRegister = async(data) => {
    try{
        const response = await Axios.post('/auth/register', data);
        return response;
    } catch(err) {
        console.error(err, " :: Axios Error"); //Seperate page for showing could not fetch errors
        throw err.response; 
    }
}

export const handleLogin = async(data) => {
    try {
        const response = await Axios.post('/auth/login', data);
        return response.data;
    } catch (error) {
        throw error.response.data.message
    }
}