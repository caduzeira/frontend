import './styles.scss'
import img from './1618346506225.jpg'

function rootStyle(){
    const root = document.getElementById('root')
    root.classList.add('container')
}

function titleComponent(){
    const title = document.createElement('h1')
    title.innerHTML = 'Ola mundo'
    title.classList.add('title')
    return title
}

function imageComponent(){
    const image = new Image()
    image.src = img
    return image
}

rootStyle()
document.getElementById('root').appendChild(titleComponent())
document.getElementById('root').appendChild(imageComponent())
