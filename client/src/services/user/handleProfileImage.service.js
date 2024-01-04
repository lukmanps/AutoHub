import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../../config/firebase.config';

const handleProfileImageUpload = (file, setFilePerc, setFileError, formData, setFormData) => {
    try {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setFilePerc(Math.round(progress));
            },

            (error) => {
                console.log(error)
                setFileError(true);
            },

            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => setFormData({...formData, profileImage: downloadURL}))
                    .catch((err) => {
                        setFileError(true);
                    })
            });

    } catch (error) {
        console.log(error);
        setFileError(true);
    }

}

export default handleProfileImageUpload;