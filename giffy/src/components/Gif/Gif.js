import './Gif.css'

export default function Gif({title, id, url}) {
    return (
        <a href={`#${id}`} className='Gif'>
            <img alt={title} src = {url}></img>
        </a>
    )
}