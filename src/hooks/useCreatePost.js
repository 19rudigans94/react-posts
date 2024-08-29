export const createPost = (newPost, setPosts) => {
    if (!setPosts) {
        throw new Error('setPosts is not defined');
    }
    setPosts((prevPosts) => [...prevPosts, newPost]);
}

export default createPost;
