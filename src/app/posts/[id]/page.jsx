
export const singlePost = async(post_id)=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
  const data = await res.json();
  return data;
}

const SinglePost = async({params}) => {
  const id = await params.id;
  const post = await singlePost(id);
  return (
    <div className="border border-white rounded-lg p-5 flex flex-col gap-3">
        <h2 className="text-xl font-bold">Post Id: {post.id}</h2>
        <p className="text-base font-bold">User Id:- {post.userId}</p>
        <p className="text-base font-bold">Title:- {post.title}</p>
        <p className="text-base font-thin">Details:-{post.body}</p>
        
    </div>
  );
};

export default SinglePost;