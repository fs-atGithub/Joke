import { useState } from "react";

export function JokeButton(props) {
  const [disabled, setDisabled] = useState(false);

  const disableButton = () => {
    setDisabled(true);
    props.onClick();
  };

  return (
    <button
      className="button"
      onClick={disableButton}
      disabled={disabled}
    >
      😂
    </button>
  );
}
