import React from 'react'

type Params = {
    blogSlug: string
}

const BlogPostPage = ({params} : {params: Params}) => {
    console.log(params)
  return (
    <main>

        <h1>BlogPost</h1>
        <div>{params.blogSlug}</div>
    </main>

  )
}

export default BlogPostPage