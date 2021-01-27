import { elements } from './elements.js'

const mainSection = document.querySelector('main')
const cardTemplate = document.querySelector('#element-card')
elements.forEach((element) => {
    const card = cardTemplate.content.cloneNode(true)

    card.querySelector('.tag').innerText = element.tag
    card.querySelector('.name').innerText = element.name
    card.querySelector('.description').innerText = element.description

    card.querySelector('.element').classList.add(element.group)

    mainSection.append(card)
})
