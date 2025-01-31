import Link from "next/link";

export const getPost = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  return data;
}
const Posts = async() => {
  const posts = await getPost();
  return (
    <div className=" max-w-7xl mx-auto grid grid-cols-4 gap-6 py-12">
      {posts.map(post=> <div key={post.id} className="border border-white rounded-lg p-5 flex flex-col gap-3">
        <h2 className="text-xl font-bold">Post Id: {post.id}</h2>
        <p className="text-base font-bold">Title:- {post.title}</p>
        <p className="text-base font-thin">Details:-{post.body}</p>
        <Link href={`/posts/${post.id}`}>
        <button className="bg-white text-black px-3 py-2 rounded-md">Details</button>
        </Link>
      </div>)}
    </div>
  );
};

export default Posts;