import React, { useContext } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { BsFillEmojiSurpriseFill } from "react-icons/bs";
import { BsFillEmojiTearFill } from "react-icons/bs";
import { PostList } from "../store/PostListStore";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card post-card" style={{ width: " 18rem" }}>
        <div className="card-body no-caret ">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost({ postId: post.id })}
              key={post.id}
            >
              <RiDeleteBin5Fill />
            </span>
          </h5>

          <h6 className="card-subtitle mb-2 text-body-secondary">
            {post.subtitle}
          </h6>
          <p className="card-text">{post.body}</p>
          {post.tags?.map((tag) => (
            <span
              className="badge text-bg-primary me-1 cursor-pointer"
              key={tag}
            >
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            <div className="reaction-icons d-flex gap-4 fs-4">
              <BiLike />
              <BiDislike />
              <FaRegHeart />
              <BsFillEmojiSurpriseFill />
              <BsFillEmojiTearFill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
