import WithExtra from "./WithExtra";
import Test from "./Test";

const Extra = ({ title }) => {
  const ExtraHocComponentOne = WithExtra(() => {
    return <p>Content from ExtraHocComponentOne</p>;
  });

  const ExtraHocComponentTwo = WithExtra((props) => (
    <Test property="Props from component" {...props} />
  ));

  return (
    <div>
      <h5>{title}</h5>
      <br />
      <ExtraHocComponentOne />
      <hr />
      <ExtraHocComponentTwo />
    </div>
  );
};

export default Extra;
