import React, { useState, useEffect } from 'react';
import PostList from "../components/PostList";
import MySelect from "../components/UI/select/MySelect";
import MyInput from "../components/UI/input/MyInput";
import MyLoader from "../components/MyLoader";

import axios from "axios";
import usePosts from "../hooks/usePosts";
import "./App.css";

const URL = "https://jsonplaceholder.typicode.com/posts";

function PostPage() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedSort, setSelectedSort] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(URL);
            setPosts(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const optionList = [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
    ];

    const filteredPosts = usePosts(posts, selectedSort, search);

    const removePost = (postId) => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    };


    return (
        <div className="w-[80%] h-screen mx-auto bg-[#f5f5f5] p-3">
            <div className="flex flex-col items-center p-4">
                <h1 className="text-4xl font-bold">Мои посты</h1>
                <div className="flex flex-col gap-4 mt-4">
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

                {loading ? (
                    <div className="loader-wrapper w-[300px]">
                        <MyLoader />
                    </div>
                ) : (
                    <PostList
                        remove={removePost}
                        posts={filteredPosts}
                        title="Список постов"
                    />
                )}
            </div>
        </div>
    );
}

export default PostPage;