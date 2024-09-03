import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MyLoader from '../components/MyLoader';

export default function OnePostPage() {
    const params = useParams();
    const URL = `https://jsonplaceholder.typicode.com/posts/${params.post_id}`;
    const COMMENTS = `https://jsonplaceholder.typicode.com/comments?postId=${params.post_id}`;

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPost = async () => {
            setLoading(true);
            try {
                const response = await axios.get(URL);
                const commentsResponse = await axios.get(COMMENTS);
                setPost(response.data);
                setComments(commentsResponse.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getPost();
    }, [URL, COMMENTS]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><MyLoader /></div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen">Ошибка: {error.message}</div>;
    }

    if (!post) {
        return (
            <div className="flex justify-center items-center h-screen">
                Пост не найден
            </div>
        );
    }

    return (
        <div className="p-4">
            <TransitionGroup>
                <CSSTransition timeout={300} classNames="post-group">
                    <div className="flex flex-col items-center p-4">
                        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                        <p className="text-lg mb-4">{post.body}</p>
                        <h2 className="text-2xl font-bold mb-4">Комментарии</h2>
                        <div>
                            {comments.length > 0 ? (
                                <ul>
                                    {comments.map((comment) => (
                                        <li key={comment.id} className="mb-2">
                                            <p className="text-lg font-semibold">{comment.name}</p>
                                            <p className="text-sm text-gray-600">{comment.email}</p>
                                            <p>{comment.body}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Комментарии отсутствуют</p>
                            )}
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}