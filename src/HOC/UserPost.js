import withData from "./WithData";

const UserPost = ({ data }) => {
  return data.map((post) => <div key={post.id}>{post.title}</div>);
};

export default withData(UserPost);
