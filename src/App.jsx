import { useState } from "react";
import axios from "axios";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";
import usePosts from "./hooks/usePosts";
import MyLoader from "./components/MyLoader";
import "./App.css";

const URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await axios.get(URL);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 3000);
  };

  
  const optionList = [
    { value: "title", name: "По названию" },
    { value: "body", name: "По описанию" },
  ];

  const filteredPosts = usePosts(posts, selectedSort, search);

  const removePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const createPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div className="w-[80%] h-screen mx-auto bg-[#f5f5f5] p-3">
      <div className="flex flex-col items-center p-4">
        <h1 className="text-4xl font-bold">Мои посты</h1>
        <div className="flex flex-col gap-4 mt-4">
          <PostForm create={createPost} />
          <div className="flex">
            <MySelect
              value={selectedSort}
              defaultValue="Сортировка"
              options={optionList}
              onChange={setSelectedSort}
              className="mr-4"
            />
            <MyInput
              type="text"
              placeholder="Поиск поста"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[300px]"
            />
          </div>
        </div>

        {loading ? (<div className="loader-wrapper w-[300px]">
          <MyLoader />
        </div>) : (
          <PostList
            remove={removePost}
            posts={filteredPosts}
            title="Список постов"
          />)}

        <MyButton
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mt-4"
          onClick={getPosts}
        >
          Загрузить
        </MyButton>
      </div>
    </div>
  );
}

export default App;