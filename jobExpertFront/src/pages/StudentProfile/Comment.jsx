
import React, { useState, useEffect } from "react";
import JobExpart from "../../components/JobExpart/JobExpart";
import axios from "../../components/Axios/axios";
import { useSelector } from "react-redux";

const Comment = () => {
    const [comment, setComment] = useState('');
    const [store, setStore] = useState({});
    const userDa = useSelector((state) => state);
    const email = userDa?.userData?.userInfo?.email;
    const imgx = userDa?.userData.userInfo?.userImg.length - 1

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(comment)
        try {

            const response = await axios.post('/jobExpert/api/v1/comment', {
                comment,
                email,
                img: userDa?.userData.userInfo?.userImg[imgx]
            });


            console.log(response.data);

        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className="mx-auto mt-2">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col w-96">
                        <label className="text-lg font-semibold mb-2">Comment</label>
                        <textarea
                            className="w-full h-32 border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Comment here..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
 
            < JobExpart />
        </>
    )
}

export default Comment