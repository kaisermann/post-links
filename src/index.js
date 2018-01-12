let formInitialized = false
let hiddenFormEl

const h = (tag, props = {}) => {
  const el = document.createElement(tag.toUpperCase())
  Object.keys(props).forEach(key => {
    el[key] = props[key]
  })
  return el
}

const handlePostClick = function (e) {
  e.preventDefault()
  // Let's get the action url from a href or a data-post-href attribute
  submitHiddenForm(this.href, this.dataset, this.getAttribute('target'))
}

const submitHiddenForm = (href, dataObj, target = '') => {
  // If form was not initialized, let's... initialize it.
  if (!formInitialized) init()

  hiddenFormEl.action = href
  hiddenFormEl.target = target

  const dataKeys = Object.keys(dataObj)
  const formInputEls = hiddenFormEl.childNodes

  // Set the appropriate inputs for the form submission
  dataKeys.forEach((key, i) => {
    // If there's not an input for a data property, create and append it
    let inputEl = formInputEls[i]
    if (!inputEl) {
      inputEl = h('input', { type: 'hidden' })
      hiddenFormEl.appendChild(inputEl)
    }
    inputEl.name = key
    inputEl.value = dataObj[key]
  })

  // Remove remaining irrelevant inputs
  while (formInputEls[dataKeys.length]) {
    hiddenFormEl.removeChild(formInputEls[dataKeys.length])
  }
  hiddenFormEl.submit()
}

const init = () => {
  formInitialized = true
  hiddenFormEl = h('form', {
    method: 'post',
    name: 'post-links',
    style: 'display: none;'
  })
  document.body.appendChild(hiddenFormEl)
}

export default {
  seek () {
    const linkEls = document.getElementsByTagName('a')
    for (let i = linkEls.length; i--;) {
      const linkEl = linkEls[i]
      if (linkEl.getAttribute('method') === 'post' && !linkEl.postLink) {
        linkEl.postLink = 1
        linkEl.addEventListener('click', handlePostClick)
      }
    }
  },
  open: submitHiddenForm
}
