import React from 'react'

const PostDetails = ({ post }) => {
    console.log(post)
    return (
        <>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
        </>
    )
}

export const getServerSideProps = async (context) => {
    debugger
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post = await res.json()
    return {
        props: {
            post
        }
    }
}

export default PostDetails