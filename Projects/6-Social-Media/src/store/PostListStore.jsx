import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id != action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postSubtitle, postBody, postTags) => {
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();
    console.log(uniqid);

    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: uniqid,
        title: postTitle,
        subtitle: postSubtitle,
        body: postBody,
        reactions: 2,
        userId: userId,
        tags: postTags,
      },
    });
  };
  const deletePost = ({ postId }) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Mumbai",
    subtitle: "Travel",
    body: "I am going to Mumbai for a business trip. I will be there for 3 days. I am looking forward to meeting my clients and exploring the city.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "travel", "business", "mumbai"],
  },
  {
    id: "2",
    title: "Eating Out at Dominos",
    subtitle: "Dominos",
    body: "I am going to Dominos for a pizza party with my friends. I am looking forward to eating pizza and having fun.",
    reactions: 5,
    userId: "user-10",
    tags: ["food", "pizza", "dominos", "party"],
  },
];

export default PostListProvider;
