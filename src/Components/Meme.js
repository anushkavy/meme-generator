import { useState, useEffect } from "react";

const apiURL = "https://api.imgflip.com/get_memes";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  function GetMeme() {
    const randNum = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
    console.log(url);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
    console.log(meme);
  }

  useEffect(() => {
    console.log("Effect Ran");
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  return (
    <div className="Main">
      <div className="container">
        <div className="InputBoxes">
          <div className="inputfield">
            <label htmlFor="TText">Top text</label>
            <input
              id="TText"
              type="text"
              placeholder="Shut up"
              className="inputbox"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            ></input>
          </div>
          <div className="inputfield">
            <label htmlFor="BText">Bottom text</label>
            <input
              id="BText"
              type="text"
              placeholder="And take my money"
              className="inputbox"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <button className="getMemeBtn" onClick={GetMeme}>
          Get a new meme image 🖼
        </button>
        {meme.randomImage && (
          <div className="meme">
            <img
              src={meme.randomImage}
              alt="generated meme"
              className="meme--img"
            />

            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Meme;
