import React, { useContext, useRef } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { PiGifFill } from "react-icons/pi";
import { GoPaperclip } from "react-icons/go";

import { PostList } from "../store/PostListStore";

const CreatePostForm = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postTagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postTags = postTagsElement.current.value.split(/(\s)/);
    addPost(userId, postTitle, postBody, postTags);
  };
  return (
    <>
      <form className="post-container m-5 w-75 rounded" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="title" className="form-label">
            User Id
          </label>
          <input
            type="text"
            className="form-control"
            ref={userIdElement}
            id="user-id"
            placeholder="Enter your user id"
            required
          />
        </div>
        {/* cmnt */}

        <div className="mb-3 ">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            ref={postTitleElement}
            id="title"
            placeholder="Enter the title"
            required
          />
        </div>
        <div className="mb-3 rounded ">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            className="form-control"
            id="body"
            ref={postBodyElement}
            rows="5"
            placeholder="Tell us more about this post"
          ></textarea>
        </div>
        <div className="mb-3 ">
          <label htmlFor="tags" className="form-label">
            Add tags
          </label>
          <input
            type="text"
            className="form-control"
            ref={postTagsElement}
            id="tags"
            placeholder="Enter your tags"
            required
          />
        </div>
        <div className="alert alert-secondary post-action " role="alert">
          <div className=" d-flex align-items-center  gap-4 fs-4">
            <GoPaperclip className="reaction-icons" />
            <MdAddPhotoAlternate className="reaction-icons" />
            <FaVideo className="reaction-icons" />
            <PiGifFill className="reaction-icons" />
          </div>
        </div>
        <button type="submit" className="btn btn-info w-25">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePostForm;
