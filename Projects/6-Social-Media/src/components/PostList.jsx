import React from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/PostListStore";
const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {/* <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post> */}
    </>
  );
};

export default PostList;
