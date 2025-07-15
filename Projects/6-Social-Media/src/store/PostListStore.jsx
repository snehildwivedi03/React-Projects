import { createContext, useReducer, useState, useEffect } from "react";

// ✅ Named export: use this when importing context in other components
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});

// ✅ Reducer function
const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return currPostList.filter((post) => post.id !== action.payload.postId);

    case "ADD_POST":
      return [action.payload, ...currPostList];

    case "ADD_INITIAL_POST":
      return [...action.payload, ...currPostList];

    default:
      return currPostList;
  }
};

// ✅ Provider component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false); // ✅ Moved here

  // Add single post
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitalPost = (posts) => {
    const existingIds = new Set(
      postList.map((post) => `${post.id}-${post.userId}`)
    );

    const uniqueNewPosts = posts.filter(
      (post) => !existingIds.has(`${post.id}-${post.userId}`)
    );

    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: uniqueNewPosts,
    });
  };

  const deletePost = ({ postId }) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  useEffect(() => {
    if (postList.length > 0) return;

    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitalPost(data.posts);
        setFetching(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
        } else {
          console.error("Fetch error:", error);
          setFetching(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        fetching,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// ✅ Default export: use this to wrap your App
export default PostListProvider;
