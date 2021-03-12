import User from "./User";
import Post from "./Post";

const CustomHook = () => {
  return (
    <div>
      <User userId={5} />
      <Post postId={15} />
    </div>
  );
};

export default CustomHook;
