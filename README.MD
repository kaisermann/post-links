# POST Links

Ever needed to open an URL by clicking a link or a button but without showing your precious `query string` parameters? Suffer no more my friend, for I am here to help!

## How to

Just add a `method="post"` to a `<a href="...">` element. Every `data-property` attribute will be passed as data for the request.

```html
<a method="post" href="http://example.com/pdf/generate" data-secret-id="123910" data-name="PDF-NAME">
    Download the super secret PDF
</a>
```

You can also change the `target=""`.

```html
<a method="post" href="http://example.com/pdf/generate" data-secret-id="123910" target="_blank">
    Open in new tab the super secret PDF
</a>
```

## How

`post-links` creates a hidden form with and submits it via `POST` everytime a `<a method="post">` is clicked.
