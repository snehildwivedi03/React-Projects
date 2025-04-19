import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};
  const deletePost = () => {};
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
