import getAllByDataJs from './getAllByDataJs'
import getByDataJs from './getByDataJs'

export default function counter() {
  const formSections = getAllByDataJs('form-section')

  formSections.forEach(form => {
    const textarea = getByDataJs('textarea', form)
    const counter = getByDataJs('counter', form)

    textarea.addEventListener('input', () => {
      const textLength = textarea.value.length
      counter.textContent = 200 - textLength + '/200'
    })
  })
}
