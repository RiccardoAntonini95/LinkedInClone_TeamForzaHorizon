import { useEffect, useState } from "react";
import { STRIVE_KEY_MERLINO } from "../assets/js/auth_keys";
import { url } from "../assets/js/matteoVariables";
import 'bootstrap/dist/css/bootstrap.min.css'


export const AddImage = ({ experience, userId }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    // Handle file selection
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    }

    useEffect(() => {
        console.log(selectedFile)
    }, [selectedFile])

    // Handle form submission
    const handleFormSubmit = async () => {
        const formData = new FormData();
        formData.append('experience', selectedFile);

        try {
            const res = await fetch(`${url}/${userId}/experiences/${experience._id}/picture`, {
                mode: 'cors',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
                },
                body: formData,
            })
            if (!res.ok) {
                throw new Error('Image upload failed');
            }
            alert('Image uploaded successfully');
        } catch (err) {
            console.error('Error uploading image: ', err);
            alert('Error uploading image. Please try again.')
        }
    }

    return (
        <div className="input-field">
            <h6>Add image</h6>
            <form
                encType="multipart/form-data"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleFormSubmit();
                }}>
                <div className="d-flex justify-content-between">
                    <input
                        className="add-file"
                        type="file"
                        accept="image/*"
                        name="addImage"
                        id="addImage"
                        onChange={handleFileChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary submit-image-btn"
                    >Add image</button>
                </div>
            </form>
        </div>
    )
}