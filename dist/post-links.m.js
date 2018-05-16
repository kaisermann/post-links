var formInitialized = false;
var hiddenFormEl;
var h = function (tag, props) {
    if ( props === void 0 ) props = {};

    var el = document.createElement(tag.toUpperCase());
    Object.keys(props).forEach(function (key) {
        el[key] = props[key];
    });
    return el;
};
var submitHiddenForm = function (href, dataObj, target) {
    if ( target === void 0 ) target = '';

    if (!formInitialized) 
        { init(); }
    hiddenFormEl.action = href;
    hiddenFormEl.target = target;
    var dataKeys = Object.keys(dataObj);
    var formInputEls = hiddenFormEl.childNodes;
    dataKeys.forEach(function (key, i) {
        var inputEl = formInputEls[i];
        if (!inputEl) {
            inputEl = h('input', {
                type: 'hidden'
            });
            hiddenFormEl.appendChild(inputEl);
        }
        inputEl.name = key;
        inputEl.value = dataObj[key];
    });
    while (formInputEls[dataKeys.length]) {
        hiddenFormEl.removeChild(formInputEls[dataKeys.length]);
    }
    hiddenFormEl.submit();
};
var findClosest = function (tagName, el) {
    while (el) {
        if ((el.nodeName || el.tagName) === tagName) {
            return el;
        }
        el = el.parentNode;
    }
    return null;
};
var init = function () {
    formInitialized = true;
    hiddenFormEl = h('form', {
        method: 'post',
        name: 'post-links',
        style: 'display: none;'
    });
    document.body.appendChild(hiddenFormEl);
};
var index = {
    listen: function listen() {
        window.addEventListener('click', function (event) {
            var el = findClosest('A', event.target || event.srcElement);
            if (el && el.getAttribute('method') === 'post') {
                event.preventDefault();
                submitHiddenForm(el.href, el.dataset, el.getAttribute('target') || '');
            }
        });
    },
    open: submitHiddenForm
}

export default index;
//# sourceMappingURL=post-links.m.js.map
