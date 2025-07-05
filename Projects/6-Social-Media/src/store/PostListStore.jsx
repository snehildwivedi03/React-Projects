import { createContext, useReducer } from "react";

// ✅ Named export: use this when importing context in other components
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitalPost: () => {},
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

  // Add single post
  const addPost = (userId, postTitle, postSubtitle, postBody, postTags) => {
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const uniqid = randLetter + Date.now();

    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: uniqid,
        title: postTitle,
        subtitle: postSubtitle,
        body: postBody,
        reactions: 2,
        userId,
        tags: postTags,
      },
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

  // Delete a post by ID
  const deletePost = ({ postId }) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        addInitalPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// ✅ Default export: use this to wrap your App
export default PostListProvider;
