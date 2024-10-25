import Link from 'next/link'
import React from 'react'

const BlogsListPage = () => {
  return (
    <main>
        <h1>BlogsList</h1>
        <Link href={'/blogs/blog-1'}>Blog 1</Link>
        <Link href={'/blogs/blog-2'}>Blog </Link>
    </main>
  )
}

export default BlogsListPage