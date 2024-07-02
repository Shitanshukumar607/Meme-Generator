import memesData from "../memesData";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    memeImage: "https://i.imgflip.com/tau4.jpg",
    topText: "Top text",
    bottomText: "bottom text",
  });

  function getMemeImage() {
    let x = Math.floor(Math.random() * memesData.data.memes.length);
    console.log(x);
    let url = memesData.data.memes[x].url;
    console.log(url);

    setMeme((prev) => {
      return { ...prev, memeImage: url };
    });
  }

  function handleChange(event) {
    console.log(event.target.value);
    setMeme((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <main>
      <div>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Top Text"
          name="topText"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Bottom Text"
          name="bottomText"
        />
      </div>

      <button onClick={getMemeImage}>Get a new meme image 🖼</button>

      <div className="meme">
        <img src={meme.memeImage} />
        <h2 className="top"> {meme.topText}</h2>
        <h2 className="bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
