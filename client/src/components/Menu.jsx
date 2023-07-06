import React from 'react'

export const Menu = () => {

    const posts = [
        {
          id:1,
          title: "loremmmmmm",
          desc: "fdgsssssssssssss",
          img: "https://picsum.photos/400/400"
        },
        {
          id:2,
          title: "loremmmmmm",
          desc: "fdgsssssssssssss",
          img: "https://picsum.photos/400/400"
        },
      ]

  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}
