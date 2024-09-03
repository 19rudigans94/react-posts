import { Link } from "react-router-dom";

const MyHeader = () => {
    return (
        <header className="flex w-[80%] mx-auto justify-between items-center p-4 bg-gray-700 text-white">
            <h1 className="text-2xl font-bold">My Blog</h1>
            <Link to="/posts">Posts</Link>
            {/* <Link to="/OnePostPage">One Post</Link> */}
            <Link to="/newPost">New Post</Link>
        </header>
    );
};

export default MyHeader
