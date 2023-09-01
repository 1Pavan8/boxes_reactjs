const Box = (props) => {
  const { className, text } = props;
  return (
    <div className={`${className}`}>
      <h1>{text}</h1>
    </div>
  );
};

const element = (
  <div className="main">
    <h1 className="head">Boxes</h1>
    <div className="subd">
      <Box className="b1" text="Small" />
      <Box className="b2" text="Medium" />
      <Box className="b3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
