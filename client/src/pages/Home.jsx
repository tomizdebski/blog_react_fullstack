import React from 'react'
import { Link } from 'react-router-dom'

function Home() {


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
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div key={post.id} className="post">
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home