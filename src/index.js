let initialized = false
let hiddenFormEl

const h = (tag, props = {}) => {
  const el = document.createElement(tag.toUpperCase())
  Object.keys(props).forEach(key => {
    el[key] = props[key]
  })
  return el
}

const openPostLink = function (e) {
  e.preventDefault()
  const dataObj = Object.assign({}, this.dataset)

  // Let's get the action url from a href or a data-post-href attribute
  hiddenFormEl.action = this.href || this.dataset.postHref
  hiddenFormEl.target = this.getAttribute('target') || ''
  delete dataObj.postHref

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
  initialized = true
  hiddenFormEl = h('form', {
    method: 'post',
    name: 'post-links',
    style: 'display: none;'
  })
  document.body.appendChild(hiddenFormEl)
}

export default {
  seek () {
    if (!initialized) init()
    const linkEls = document.querySelectorAll('[data-post-href]')
    for (let i = linkEls.length; i--;) {
      const linkEl = linkEls[i]
      if (!linkEl.postLink) {
        linkEl.postLink = 1
        linkEl.addEventListener('click', openPostLink)
      }
    }
  }
}
