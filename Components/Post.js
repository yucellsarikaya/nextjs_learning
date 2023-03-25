import Link from 'next/link'
import React from 'react'

const Post = ({ post }) => {
    return (
        <>
            <Link href={`/posts/${post.id}`} legacyBehavior>
                <a >
                    <h3 className="card">{post.body}</h3>
                </a>
            </Link>
            <style jsx>{`
            .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: inherit;
                text-decoration:none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
            `}</style>
        </>
    )
}

export default Post