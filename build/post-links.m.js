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
    submitHiddenForm(this.href, this.dataset, this.getAttribute('target') || '');
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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFBLENBQUksa0JBQWtCO0FBQ3RCLEdBQUEsQ0FBSTtBQUVKLEtBQUEsQ0FBTSxLQUFLLEdBQUssRUFBQSxLQUFBLEdBQVEsSUFBZCxHQUFxQjtJQUM3QixLQUFBLENBQU0sS0FBSyxRQUFBLENBQVMsYUFBVCxDQUF1QixHQUFBLENBQUksV0FBSjtJQUNsQyxNQUFBLENBQU8sSUFBUCxDQUFZLE1BQVosQ0FBbUIsT0FBbkIsQ0FBMkIsR0FBQSxJQUFPO1FBQ2hDLEVBQUEsQ0FBRyxJQUFILENBQUEsQ0FBQSxDQUFVLEtBQUEsQ0FBTTtJQUNwQjtJQUNFLE9BQU87QUFDVDtBQUVBLEtBQUEsQ0FBTSxrQkFBa0IsVUFBVSxHQUFHO0lBQ25DLENBQUEsQ0FBRSxjQUFGO0lBRUEsZ0JBQUEsQ0FBaUIsSUFBQSxDQUFLLE1BQU0sSUFBQSxDQUFLLFNBQVMsSUFBQSxDQUFLLFlBQUwsQ0FBa0IsU0FBbEIsQ0FBQSxFQUFBLENBQStCO0FBQzNFO0FBRUEsS0FBQSxDQUFNLG9CQUFvQixJQUFNLEVBQUEsT0FBUyxFQUFBLE1BQUEsR0FBUyxJQUF6QixHQUFnQztJQUV2RCxJQUFJLENBQUM7UUFBaUIsSUFBQTtJQUV0QixZQUFBLENBQWEsTUFBYixDQUFBLENBQUEsQ0FBc0I7SUFDdEIsWUFBQSxDQUFhLE1BQWIsQ0FBQSxDQUFBLENBQXNCO0lBRXRCLEtBQUEsQ0FBTSxXQUFXLE1BQUEsQ0FBTyxJQUFQLENBQVk7SUFDN0IsS0FBQSxDQUFNLGVBQWUsWUFBQSxDQUFhO0lBR2xDLFFBQUEsQ0FBUyxPQUFULEVBQWtCLEdBQUssRUFBQSxHQUFOLEdBQVk7UUFFM0IsR0FBQSxDQUFJLFVBQVUsWUFBQSxDQUFhO1FBQzNCLElBQUksQ0FBQyxTQUFTO1lBQ1osT0FBQSxDQUFBLENBQUEsQ0FBVSxDQUFBLENBQUUsU0FBUztnQkFBRSxNQUFNOztZQUM3QixZQUFBLENBQWEsV0FBYixDQUF5QjtRQUMvQjtRQUNJLE9BQUEsQ0FBUSxJQUFSLENBQUEsQ0FBQSxDQUFlO1FBQ2YsT0FBQSxDQUFRLEtBQVIsQ0FBQSxDQUFBLENBQWdCLE9BQUEsQ0FBUTtJQUM1QjtJQUdFLE9BQU8sWUFBQSxDQUFhLFFBQUEsQ0FBUyxTQUFTO1FBQ3BDLFlBQUEsQ0FBYSxXQUFiLENBQXlCLFlBQUEsQ0FBYSxRQUFBLENBQVM7SUFDbkQ7SUFDRSxZQUFBLENBQWEsTUFBYjtBQUNGO0FBRUEsS0FBQSxDQUFNLFVBQU8sR0FBTTtJQUNqQixlQUFBLENBQUEsQ0FBQSxDQUFrQjtJQUNsQixZQUFBLENBQUEsQ0FBQSxDQUFlLENBQUEsQ0FBRSxRQUFRO1FBQ3ZCLFFBQVEsTUFEZSxDQUFBO1FBRXZCLE1BQU0sWUFGaUIsQ0FBQTtRQUd2QixPQUFPOztJQUVULFFBQUEsQ0FBUyxJQUFULENBQWMsV0FBZCxDQUEwQjtBQUM1QjtBQUVBLGVBQWU7SUFDYixPQUFRO1FBQ04sS0FBQSxDQUFNLFVBQVUsUUFBQSxDQUFTLG9CQUFULENBQThCO1FBQzlDLEtBQUssR0FBQSxDQUFJLElBQUksT0FBQSxDQUFRLE9BQVEsQ0FBQSxNQUFNO1lBQ2pDLEtBQUEsQ0FBTSxTQUFTLE9BQUEsQ0FBUTtZQUN2QixJQUFJLE1BQUEsQ0FBTyxZQUFQLENBQW9CLFNBQXBCLENBQUEsR0FBQSxDQUFrQyxNQUFsQyxDQUFBLEVBQUEsQ0FBNEMsQ0FBQyxNQUFBLENBQU8sVUFBVTtnQkFDaEUsTUFBQSxDQUFPLFFBQVAsQ0FBQSxDQUFBLENBQWtCO2dCQUNsQixNQUFBLENBQU8sZ0JBQVAsQ0FBd0IsU0FBUztZQUN6QztRQUNBO0lBQ0EsQ0FWZSxDQUFBO0lBV2IsTUFBTTs7QUFuRVIiLCJmaWxlIjoiaW5kZXguanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGZvcm1Jbml0aWFsaXplZCA9IGZhbHNlXG5sZXQgaGlkZGVuRm9ybUVsXG5cbmNvbnN0IGggPSAodGFnLCBwcm9wcyA9IHt9KSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcudG9VcHBlckNhc2UoKSlcbiAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICBlbFtrZXldID0gcHJvcHNba2V5XVxuICB9KVxuICByZXR1cm4gZWxcbn1cblxuY29uc3QgaGFuZGxlUG9zdENsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vIExldCdzIGdldCB0aGUgYWN0aW9uIHVybCBmcm9tIGEgaHJlZiBvciBhIGRhdGEtcG9zdC1ocmVmIGF0dHJpYnV0ZVxuICBzdWJtaXRIaWRkZW5Gb3JtKHRoaXMuaHJlZiwgdGhpcy5kYXRhc2V0LCB0aGlzLmdldEF0dHJpYnV0ZSgndGFyZ2V0JykgfHwgJycpXG59XG5cbmNvbnN0IHN1Ym1pdEhpZGRlbkZvcm0gPSAoaHJlZiwgZGF0YU9iaiwgdGFyZ2V0ID0gJycpID0+IHtcbiAgLy8gSWYgZm9ybSB3YXMgbm90IGluaXRpYWxpemVkLCBsZXQncy4uLiBpbml0aWFsaXplIGl0LlxuICBpZiAoIWZvcm1Jbml0aWFsaXplZCkgaW5pdCgpXG5cbiAgaGlkZGVuRm9ybUVsLmFjdGlvbiA9IGhyZWZcbiAgaGlkZGVuRm9ybUVsLnRhcmdldCA9IHRhcmdldFxuXG4gIGNvbnN0IGRhdGFLZXlzID0gT2JqZWN0LmtleXMoZGF0YU9iailcbiAgY29uc3QgZm9ybUlucHV0RWxzID0gaGlkZGVuRm9ybUVsLmNoaWxkTm9kZXNcblxuICAvLyBTZXQgdGhlIGFwcHJvcHJpYXRlIGlucHV0cyBmb3IgdGhlIGZvcm0gc3VibWlzc2lvblxuICBkYXRhS2V5cy5mb3JFYWNoKChrZXksIGkpID0+IHtcbiAgICAvLyBJZiB0aGVyZSdzIG5vdCBhbiBpbnB1dCBmb3IgYSBkYXRhIHByb3BlcnR5LCBjcmVhdGUgYW5kIGFwcGVuZCBpdFxuICAgIGxldCBpbnB1dEVsID0gZm9ybUlucHV0RWxzW2ldXG4gICAgaWYgKCFpbnB1dEVsKSB7XG4gICAgICBpbnB1dEVsID0gaCgnaW5wdXQnLCB7IHR5cGU6ICdoaWRkZW4nIH0pXG4gICAgICBoaWRkZW5Gb3JtRWwuYXBwZW5kQ2hpbGQoaW5wdXRFbClcbiAgICB9XG4gICAgaW5wdXRFbC5uYW1lID0ga2V5XG4gICAgaW5wdXRFbC52YWx1ZSA9IGRhdGFPYmpba2V5XVxuICB9KVxuXG4gIC8vIFJlbW92ZSByZW1haW5pbmcgaXJyZWxldmFudCBpbnB1dHNcbiAgd2hpbGUgKGZvcm1JbnB1dEVsc1tkYXRhS2V5cy5sZW5ndGhdKSB7XG4gICAgaGlkZGVuRm9ybUVsLnJlbW92ZUNoaWxkKGZvcm1JbnB1dEVsc1tkYXRhS2V5cy5sZW5ndGhdKVxuICB9XG4gIGhpZGRlbkZvcm1FbC5zdWJtaXQoKVxufVxuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBmb3JtSW5pdGlhbGl6ZWQgPSB0cnVlXG4gIGhpZGRlbkZvcm1FbCA9IGgoJ2Zvcm0nLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgbmFtZTogJ3Bvc3QtbGlua3MnLFxuICAgIHN0eWxlOiAnZGlzcGxheTogbm9uZTsnXG4gIH0pXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGlkZGVuRm9ybUVsKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNlZWsgKCkge1xuICAgIGNvbnN0IGxpbmtFbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpXG4gICAgZm9yIChsZXQgaSA9IGxpbmtFbHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICBjb25zdCBsaW5rRWwgPSBsaW5rRWxzW2ldXG4gICAgICBpZiAobGlua0VsLmdldEF0dHJpYnV0ZSgnbWV0aG9kJykgPT09ICdwb3N0JyAmJiAhbGlua0VsLnBvc3RMaW5rKSB7XG4gICAgICAgIGxpbmtFbC5wb3N0TGluayA9IDFcbiAgICAgICAgbGlua0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUG9zdENsaWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgb3Blbjogc3VibWl0SGlkZGVuRm9ybVxufVxuIl19

export default index;
//# sourceMappingURL=post-links.m.js.map
