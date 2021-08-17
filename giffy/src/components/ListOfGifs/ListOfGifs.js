import React, {useState, useEffect} from 'react'

import Gif from '../Gif/Gif'
import getGifs from '../../services/getGifs';

import "./ListOfGifs.css"

export default function ListOfGifs({params}) {
    const {keyword} = params;

    const [gifs, setGifs] = useState([]);

    useEffect(function () {
     getGifs({keyword}).then(gifs => setGifs(gifs));
    }, [keyword]);
  

    return <div className="ListOfGifs">
        {
            gifs.map(gif => 
                <Gif 
                    key={gif.id} 
                    title={gif.title} 
                    url={gif.url} 
                    id={gif.id} 
                />
            )
        
        }
    </div>
        


}