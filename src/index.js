let formInitialized = false
let hiddenFormEl

const h = (tag, props = {}) => {
  const el = document.createElement(tag.toUpperCase())
  Object.keys(props).forEach(key => {
    el[key] = props[key]
  })
  return el
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

const findClosest = (tagName, el) => {
	while(el && el.tagName !== tagName) el = el.parentNode
	return el
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
  listen () {
    window.addEventListener('click', event => {
      const el = findClosest('A', event.target || event.srcElement)
      if (el && el.getAttribute('method') === 'post') {
        event.preventDefault()
        submitHiddenForm(el.href, el.dataset, el.getAttribute('target') || '')
      }
    })
  },
  open: submitHiddenForm
}
