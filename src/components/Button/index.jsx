import "./Button.css";

const Button = (props) => {
  return (
    <button className="button-submit" type="submit">
      {props.title}
    </button>
  );
};

export default Button;
