import getByDataJs from './getByDataJs'

export default function navigation() {
  const headerHome = getByDataJs('header-home')
  const headerBookmarks = getByDataJs('header-bookmarks')
  const headerCreate = getByDataJs('header-create')
  const headerProfile = getByDataJs('header-profile')

  const buttonHome = getByDataJs('button-home')
  const buttonBookmarks = getByDataJs('button-bookmarks')
  const buttonCreate = getByDataJs('button-create')
  const buttonProfile = getByDataJs('button-profile')

  const pageHome = getByDataJs('home')
  const pageBookmarks = getByDataJs('bookmarks')
  const pageCreate = getByDataJs('create')
  const pageProfile = getByDataJs('profile')

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
}
