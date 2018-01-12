# POST Links

Ever needed to open an URL by clicking a link or a button but without showing your precious `query string` parameters? Suffer no more my friend, for I am here to help!

## How to

Just add a `data-post-href` to the element to be clicked. Every `data-property` attribute will be passed as data for the request.

```html
<button data-post-href="http://example.com/pdf/generate" data-secret-id="123910" data-name="PDF-NAME">
    Download the super secret PDF
</button>
```

You can also change the `target=""`.

```html
<button data-post-href="http://example.com/pdf/generate" data-secret-id="123910" target="_blank">
    Open in new tab the super secret PDF
</button>
```

## How

`post-links` creates a hidden form and submits it everytime an element containing `data-post-href` is clicked.
