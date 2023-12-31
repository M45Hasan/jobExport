import React, { useState, useEffect } from "react";
import axios from "../../components/Axios/axios";
import { useSelector } from "react-redux";

const Comment = () => {
  const userDa = useSelector((state) => state);
  const email = userDa?.userData?.userInfo?.email;
  const imgx = userDa?.userData.userInfo?.userImg.length - 1;
  const profile = userDa?.userData.userInfo?.userImg[imgx];
  const [commentData, setCommentData] = useState({
    comment: "",
    email: email,
    url: profile,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(commentData);
    try {
      await axios.post("/jobExpert/api/v1/comment-create", commentData);

      // After successfully creating the comment, fetch the updated comments list
      const response = await axios.get("/jobExpert/api/v1/comment-all");
      setComments(response.data);

      // Clear the comment input field
      setCommentData({ ...commentData, comment: "" });

      alert("Comment created successfully!");
    } catch (error) {
      console.error(error);
      alert("Error creating comment.");
    }
  };

  const [comments, setComments] = useState([]);

  // Fetch comments when the component mounts
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("/jobExpert/api/v1/comment-all");
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(
        `/jobExpert/api/v1/comment-delete/${commentId}?email=${email}`
      );

      // After successfully deleting the comment, fetch the updated comments list
      const response = await axios.get("/jobExpert/api/v1/comment-all");
      setComments(response.data);

      alert("Comment deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Error deleting comment.");
    }
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Create a Comment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="story"
            >
              Comment:
            </label>
            <textarea
              id="comment"
              name="comment"
              value={commentData.comment}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full h-32"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:border-primary"
          >
            Submit Comment
          </button>
        </form>
      </div>
      <div className="max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4">All Comments</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments available.</p>
        ) : (
          <ul>
            {comments.map((comment) => (
              <li key={comment._id} className="mb-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={`http://localhost:5000/uploads/${comment.url}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{comment.comment}</h3>
                    <button
                      onClick={() => handleDeleteComment(comment._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Comment;
