import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CreatePostForm from "../components/CreatePostForm";
import PostList from "../components/PostList";
import { useState } from "react";
import PostListProvider from "../store/PostListStore";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          {/* {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePostForm></CreatePostForm>
          )} */}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
