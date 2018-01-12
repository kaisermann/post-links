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
var handlePostClick = function (e) {
    e.preventDefault();
    submitHiddenForm(this.href, this.dataset, this.getAttribute('target'));
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
    seek: function seek() {
        var linkEls = document.getElementsByTagName('a');
        for (var i = linkEls.length;i--; ) {
            var linkEl = linkEls[i];
            if (linkEl.getAttribute('method') === 'post' && !linkEl.postLink) {
                linkEl.postLink = 1;
                linkEl.addEventListener('click', handlePostClick);
            }
        }
    },
    open: submitHiddenForm
}

export default index;
//# sourceMappingURL=post-links.m.js.map
