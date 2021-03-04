import withData from "./WithData";

const UserPost = ({ data }) => {
  return !data.length ? (
    <h1>Loading</h1>
  ) : (
    data.map((post) => <div key={post.id}>{post.title}</div>)
  );
};

export default withData(UserPost, "posts");
