import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
const Post = ({ post }) => {
  return (
    <>
      <div className="card post-card" style={{ width: " 18rem" }}>
        <div className="card-body no-caret ">
          <h5 className="card-title">
            {post.title}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cursor-pointer">
              <RiDeleteBin5Fill />
            </span>
          </h5>

          <h6 className="card-subtitle mb-2 text-body-secondary">
            {post.subtitle}
          </h6>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag, index) => {
            return (
              <span
                className="badge text-bg-primary me-1 cursor-pointer"
                key={index}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Post;
