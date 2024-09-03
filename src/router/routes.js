import PostPage from "../Pages/PostPage";
import OnePostPage from "../Pages/OnePostPage";
import NewPost from "../Pages/NewPost";
import { Route, Routes } from 'react-router-dom';
import NotFound from "../Pages/404";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/posts" element={<PostPage />} />
            <Route path="/OnePostPage/:post_id" element={<OnePostPage />} />
            <Route path="/newPost" element={<NewPost />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default MyRoutes
