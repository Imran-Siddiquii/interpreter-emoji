import React from "react";
import "./styles.css";
import { useState } from "react";
// import data from "./Emoji";
// var counter = 0;

const emojidictonary = {
  "😄": "smiling",
  "😆": "satisfied",
  "😊": "Happy Face",
  "😅": "Smiling face with tears",
  "🤣": "Rolling on the floor laughing",
  "😂": "Lauging with tears",
  "🙃": "Upside down face",
  "😉": "Winking face",
  "😇": "Smiling face with halo",
  "😎": "Smiling face with sunglasses",
  "🤓": "Nerdy face"
};
const newEmoji = Object.keys(emojidictonary);
// console.log(newEmoji);

export default function App() {
  const [inputEmoji, setInputEmoji] = useState("");
  const onChangeHandle = (event) => {
    //processing
    const userInput = event.target.value;
    var matchemoji = emojidictonary[userInput];
    if (matchemoji === undefined) {
      matchemoji = "This one we dont have in data base";
    }
    setInputEmoji(matchemoji);
  };

  const onClickHandler = (emoji) => {
    // console.log(emoji);  //processing
    const userEmoji = emojidictonary[emoji];
    // console.log(userEmoji);
    setInputEmoji(userEmoji);
  };
  return (
    <div className="App">
      <h1>Inside out</h1>
      <input
        type="text"
        placeholder="Enter your emoji"
        onChange={onChangeHandle}
      />
      <h2>{inputEmoji}</h2>
      <h3>we have emoji</h3>
      {newEmoji.map((emoji) => {
        return (
          <>
            <span
              onClick={() => onClickHandler(emoji)}
              style={{
                padding: "5px",
                margin: "2px",
                fontSize: "1.2rem",
                cursor: "pointer",
                border: "1px solid lightgray"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          </>
        );
      })}
      <div> </div>
    </div>
  );
}
