import { useMemo } from 'react';

export const useSortedPosts = (posts, sort) => {
    return useMemo(() => {
        if (!sort) return posts;

        return [...posts].sort((a, b) => {
            if (!a[sort] || !b[sort]) {
                throw new Error(`Post elements must have a property named "${sort}"`);
            }
            return a[sort].localeCompare(b[sort]);
        });
    }, [posts, sort]);
};

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    return useMemo(() => {
        if (!query) return sortedPosts;
        return sortedPosts.filter(post =>
            post.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, sortedPosts]);
};

export default usePosts;