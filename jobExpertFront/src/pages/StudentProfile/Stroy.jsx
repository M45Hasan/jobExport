import React from 'react'
import JobExpart from "../../components/JobExpart/JobExpart";
import { useState, useEffect } from "react";

import axios from "../../components/Axios/axios";
import { useSelector } from "react-redux";

const Stroy = () => {
    // const [store, setStore] = useState({});
    // const [story, setStory] = useState('');
    // const userDa = useSelector((state) => state);
    // const email = userDa?.userData?.userInfo?.email;
    // const name = userDa?.userData?.userInfo?.name;
    // const imgx = userDa?.userData.userInfo?.userImg.length - 1

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log(story)
    //     try {

    //         const response = await axios.post('/jobExpert/api/v1/stroy', {
    //             story,
    //             email,
    //             name,
    //             img: userDa?.userData.userInfo?.userImg[imgx]
    //         });


    //         console.log(response.data);

    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    // useEffect(() => {

    //     axios.get('/api/get-stories').then((response) => {
    //         setStore(response.data);
    //     });
    // }, []);

    // const handleDelete = async (storyId) => {
    //     try {

    //         await axios.delete(`/api/delete-story/${storyId}?email=${email}`);


    //         setStore((prevStories) => prevStories.filter((story) => story._id !== storyId));
    //     } catch (error) {
    //         console.error(error);

    //     }
    // }

    // return (
    //     <>
    //         <div className='flex space-x-2'>
    //             <div className="mx-auto mt-2">
    //                 <form onSubmit={handleSubmit}>
    //                     <div className="flex flex-col w-96">
    //                         <label className="text-lg font-semibold mb-2">Student Success Story</label>
    //                         <textarea
    //                             className="w-full h-32 border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
    //                             placeholder="Write your success story here..."
    //                             value={story}
    //                             onChange={(e) => setStory(e.target.value)}
    //                             required
    //                         ></textarea>
    //                         <button
    //                             type="submit"
    //                             className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer"
    //                         >
    //                             Submit
    //                         </button>
    //                     </div>
    //                 </form>
    //             </div>

    //             <div className="mx-auto mt-2">
    //                 <div className="flex flex-col w-96">
    //                     <h1 className="text-lg font-semibold mb-4">Student Success Stories</h1>
    //                     {store?.map((story) => (
    //                         <div key={story._id} className="bg-white rounded-lg shadow-md p-4 mb-4">
    //                             <p className="text-gray-700">{story.content}</p>
    //                             <p className="text-gray-500 mt-2">Submitted by: {story.author}</p>
    //                             {story?.email === email && (
    //                                 <button
    //                                     className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded cursor-pointer"
    //                                     onClick={() => handleDelete(story._id)}
    //                                 >
    //                                     Delete
    //                                 </button>
    //                             )}
    //                         </div>
    //                     ))}
    //                 </div>
    //             </div>

    //         </div>
    //         < JobExpart />

    //     </>
    // )

}
export default Stroy