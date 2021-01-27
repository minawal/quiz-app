import { doc } from 'prettier'

console.log('hello world')

const headerHome = document.querySelector('[data-js="header-home"')
const headerBookmarks = document.querySelector('[data-js="header-bookmarks"]')
const headerCreate = document.querySelector('[data-js="header-create"]')
const headerProfile = document.querySelector('[data-js="header-profile"]')

const buttonHome = document.querySelector('[data-js="button-home"]')
const buttonBookmarks = document.querySelector('[data-js="button-bookmarks"]')
const buttonCreate = document.querySelector('[data-js="button-create"]')
const buttonProfile = document.querySelector('[data-js="button-profile"]')

const pageHome = document.querySelector('[data-js="home"]')
const pageBookmarks = document.querySelector('[data-js="bookmarks"]')
const pageCreate = document.querySelector('[data-js="create"]')
const pageProfile = document.querySelector('[data-js="profile"]')

buttonHome.addEventListener('click', () => {
  pageHome.classList.remove('hidden')
  pageBookmarks.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')

  headerHome.classList.remove('hidden')
  headerBookmarks.classList.add('hidden')
  headerCreate.classList.add('hidden')
  headerProfile.classList.add('hidden')

  buttonHome.classList.add('navigation__underline')
  buttonBookmarks.classList.remove('navigation__underline')
  buttonCreate.classList.remove('navigation__underline')
  buttonProfile.classList.remove('navigation__underline')
})

buttonBookmarks.addEventListener('click', () => {
  pageHome.classList.add('hidden')
  pageBookmarks.classList.remove('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')

  headerHome.classList.add('hidden')
  headerBookmarks.classList.remove('hidden')
  headerCreate.classList.add('hidden')
  headerProfile.classList.add('hidden')

  buttonHome.classList.remove('navigation__underline')
  buttonBookmarks.classList.add('navigation__underline')
  buttonCreate.classList.remove('navigation__underline')
  buttonProfile.classList.remove('navigation__underline')
})

buttonCreate.addEventListener('click', () => {
  pageHome.classList.add('hidden')
  pageBookmarks.classList.add('hidden')
  pageCreate.classList.remove('hidden')
  pageProfile.classList.add('hidden')

  headerHome.classList.add('hidden')
  headerBookmarks.classList.add('hidden')
  headerCreate.classList.remove('hidden')
  headerProfile.classList.add('hidden')

  buttonHome.classList.remove('navigation__underline')
  buttonBookmarks.classList.remove('navigation__underline')
  buttonCreate.classList.add('navigation__underline')
  buttonProfile.classList.remove('navigation__underline')
})

buttonProfile.addEventListener('click', () => {
  pageHome.classList.add('hidden')
  pageBookmarks.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.remove('hidden')

  headerHome.classList.add('hidden')
  headerBookmarks.classList.add('hidden')
  headerCreate.classList.add('hidden')
  headerProfile.classList.remove('hidden')

  buttonHome.classList.remove('navigation__underline')
  buttonBookmarks.classList.remove('navigation__underline')
  buttonCreate.classList.remove('navigation__underline')
  buttonProfile.classList.add('navigation__underline')
})
