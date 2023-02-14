import React from "react";

function Meme() {
    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : ""
    });

    //For meme image API 
    const [allMemesImages, setAllMemesImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setAllMemesImages(data.data.memes))
    }, [])

    //To get text input in the form
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
        //const memesArray = allMemesImages.data.memes; //Since we are getting our memes from an api as an array
        const randomMeme = allMemesImages[Math.floor(Math.random() * allMemesImages.length)];
        
        setMeme((prevMeme) => {
            return {...prevMeme, randomImage : randomMeme.url}
        })
    }
    
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
