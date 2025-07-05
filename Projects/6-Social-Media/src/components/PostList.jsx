import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/PostListStore";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, addInitalPost } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    if (postList.length > 0) return; // avoid refetching

    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitalPost(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up fetch request");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMsg />}
      {!fetching &&
        postList.map((post) => (
          <Post key={`${post.id}-${post.userId}`} post={post} />
        ))}
    </>
  );
};

export default PostList;
