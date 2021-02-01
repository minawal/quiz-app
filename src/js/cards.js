import getAllByDataJs from './getAllByDataJs'
import getByDataJs from './getByDataJs'

export default function cards() {
  const cards = getAllByDataJs('card')

  cards.forEach(card => {
    const show = getByDataJs('show', card)
    const answer = getByDataJs('answer', card)

    show.addEventListener('click', () => {
      answer.classList.toggle('hidden')
    })
  })
}
