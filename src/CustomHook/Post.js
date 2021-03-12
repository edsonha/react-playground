import useFetch from "./useFetch";

const Post = ({ postId }) => {
  const post = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  return (
    <div>
      <h1>POST</h1>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default Post;
