import Counter from "./HOC";

const Hover = (props) => {
  const { num, handleIncrement, handleDecrement } = props;

  return (
    <div className="d-flex align-items-center">
      <button className="btn btn-info" onMouseOver={handleDecrement}>
        -
      </button>
      <span>{num}</span>
      <button className="btn btn-info" onMouseOver={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter(Hover);
