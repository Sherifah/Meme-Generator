import React from "react";
import memesData from "../memesData"

function Meme() {
    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : ""
    });

    function handleChange(event) {
        const {name, value} = event.target
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }


    function getMemeImage(event) {
        event.preventDefault()
        const memesArray = allMemeImages.data.memes;
        const randomMeme = memesArray[Math.floor(Math.random() * memesArray.length)];
        
        setMeme((prevMeme) => {
            return {...prevMeme, randomImage : randomMeme.url}
        })
    }

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    
    return(
        <main>
            <div className="meme--form">
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="top-text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText} />
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="bottom-text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText} />
                <input 
                    type="button" 
                    className="form--button" 
                    value="Get a new meme image"
                    onClick={getMemeImage} />
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}

export default Meme;
