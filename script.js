import { elements } from './elements.js'

const mainSection = document.querySelector('main')
const cardTemplate = document.querySelector('#element-card')
elements.forEach((element) => {
    const card = cardTemplate.content.cloneNode(true)
    card.querySelector('.tag').innerText = element.tag

    mainSection.append(card)
})
