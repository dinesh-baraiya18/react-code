import Counter from "./HOC";

const Click = (props) => {
  const { num, handleIncrement, handleDecrement } = props;
  return (
    <div className="d-flex align-items-center mb-5">
      <button className="btn btn-info" onClick={handleDecrement}>
        -
      </button>
      <span>{num}</span>
      <button className="btn btn-info" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter(Click);
