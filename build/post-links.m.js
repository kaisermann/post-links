var initialized = false;
var hiddenFormEl;
var h = function (tag, props) {
    if ( props === void 0 ) props = {};

    var el = document.createElement(tag.toUpperCase());
    Object.keys(props).forEach(function (key) {
        el[key] = props[key];
    });
    return el;
};
var openPostLink = function (e) {
    e.preventDefault();
    var dataObj = Object.assign({}, this.dataset);
    hiddenFormEl.action = this.href || this.dataset.postHref;
    hiddenFormEl.target = this.getAttribute('target') || '';
    delete dataObj.postHref;
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
    initialized = true;
    hiddenFormEl = h('form', {
        method: 'post',
        name: 'post-links',
        style: 'display: none;'
    });
    document.body.appendChild(hiddenFormEl);
};
var index = {
    seek: function seek() {
        if (!initialized) 
            { init(); }
        var linkEls = document.querySelectorAll('[data-post-href]');
        for (var i = linkEls.length;i--; ) {
            var linkEl = linkEls[i];
            if (!linkEl.postLink) {
                linkEl.postLink = 1;
                linkEl.addEventListener('click', openPostLink);
            }
        }
    }
}

export default index;
//# sourceMappingURL=post-links.m.js.map
