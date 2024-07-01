import memesData from "../memesData";
import { useState } from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    let x = Math.floor(Math.random() * memesData.data.memes.length);
    console.log(x);
    console.log(memesData.data.memes[x].url);
    setMemeImage(memesData.data.memes[x].url);
  }

  return (
    <main>
      <div>
        <input type="text" placeholder="Top Text" />
        <input type="text" placeholder="Bottom Text" />
      </div>

      <button onClick={getMemeImage}>Get a new meme image 🖼</button>

      <img src={memeImage} />
    </main>
  );
}
