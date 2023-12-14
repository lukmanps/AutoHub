import Axios from '../../config/axios.config';

export const handleRegister = async(data) => {
    try{
        const response = await Axios.post('/auth/register', data);
        console.log(response);
        return response;
    } catch(err) {
        console.error(err, " :: Axios Error"); //Seperate page for showing could not fetch errors
        throw err.response; 
    }
}