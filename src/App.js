import "./styles.css";
import { useState } from "react";
import { JokeButton } from "./components/JokeButton";

export default function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((state) => ++state);
  };

  return (
    <div className="app">
      <div className="status">
        {counter === 0 &&
          "You didn't laugh at any of the jokes 😐"}
        {counter > 0 &&
          `You laughed ${counter} time(s)! 😂`}
      </div>
      <div className="joke-list">
        <div className="joke">
          <span className="joke-text">
            What’s the best thing about Switzerland?
            <br />I don’t know, but the flag is a big plus.
          </span>
          <span className="joke-button">
            <JokeButton onClick={increaseCounter} />
          </span>
        </div>
        <div className="joke">
          <span className="joke-text">
            Did you hear about the mathematician who’s
            afraid of negative numbers?
            <br />
            He’ll stop at nothing to avoid them.
          </span>
          <span className="joke-button">
            <JokeButton onClick={increaseCounter} />
          </span>
        </div>
        <div className="joke">
          <span className="joke-text">
            Why do we tell actors to “break a leg?”
            <br />
            Because every play has a cast.
          </span>
          <span className="joke-button">
            <JokeButton onClick={increaseCounter} />
          </span>
        </div>
        <div className="joke">
          <span className="joke-text">
            Helvetica and Times New Roman walk into a bar.
            <br />
            “Get out of here!” shouts the bartender. “We
            don’t serve your type.”
          </span>
          <span className="joke-button">
            <JokeButton onClick={increaseCounter} />
          </span>
        </div>
        <div className="joke">
          <span className="joke-text">
            Yesterday I saw a guy spill all his Scrabble
            letters on the road. I asked him, “What’s the
            word on the street?”
          </span>
          <span className="joke-button">
            <JokeButton onClick={increaseCounter} />
          </span>
        </div>
        <div className="joke">
          <span className="joke-text">
            Once my dog ate all the Scrabble tiles. For days
            he kept leaving little messages around the
            house.
          </span>
          <span className="joke-button">
            <JokeButton onClick={increaseCounter} />
          </span>
        </div>
      </div>
    </div>
  );
}
