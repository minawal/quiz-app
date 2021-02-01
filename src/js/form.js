import getAllByDataJs from './getAllByDataJs'
import getByDataJs from './getByDataJs'

export default function form() {
  const forms = getByDataJs('form')
  const addQuestion = getByDataJs('add-question')
  const formSections = getAllByDataJs('form-section')

  forms.addEventListener('submit', event => {
    event.preventDefault()
    forms.reset()
    addQuestion.focus()

    formSections.forEach(reset => {
      const counter = getByDataJs('counter', reset)
      counter.textContent = '200/200'
    })
  })
}
