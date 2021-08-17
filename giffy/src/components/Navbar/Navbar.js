import React, {useState} from 'react'
import { useLocation } from 'wouter';
import "./Navbar.css"

export default function Navbar() {
    const [keyword, setKeyword] = useState('');

    const [path, pushLocation] = useLocation();

    const handleSubmit = evt => {
        evt.preventDefault();
        pushLocation(`/gif/${keyword}`);
        console.log(keyword);
    }

    const handleChange = evt => {
        setKeyword(evt.target.value);
    }

    return (
        <div className="Navbar">
            <img className="Logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsELENQOeaui5xm9XJwTdd3wHHO9BxPvb_Q&usqp=CAU" />
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={keyword}></input>
            </form>
        </div>
    )
}