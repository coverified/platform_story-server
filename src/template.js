export const body = (content = '', title = '') => {
    return `<!doctype html>
<html ⚡>
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <link rel="canonical" href="pets.html">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <style amp-boilerplate>body {
        -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        animation: -amp-start 8s steps(1, end) 0s 1 normal both
    }

    @-webkit-keyframes -amp-start {
        from {
            visibility: hidden
        }
        to {
            visibility: visible
        }
    }

    @-moz-keyframes -amp-start {
        from {
            visibility: hidden
        }
        to {
            visibility: visible
        }
    }

    @-ms-keyframes -amp-start {
        from {
            visibility: hidden
        }
        to {
            visibility: visible
        }
    }

    @-o-keyframes -amp-start {
        from {
            visibility: hidden
        }
        to {
            visibility: visible
        }
    }

    @keyframes -amp-start {
        from {
            visibility: hidden
        }
        to {
            visibility: visible
        }
    }</style>
    <noscript>
        <style amp-boilerplate>body {
            -webkit-animation: none;
            -moz-animation: none;
            -ms-animation: none;
            animation: none
        }</style>
    </noscript>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
    <style amp-custom>
        amp-story {
            font-family: sans-serif;
            color: #fff;
            line-height: 1.5;
        }
        
        .content {
            filter: drop-shadow(0 0 .5rem rgba(0,0,0,.42));
        }
    </style>
  </head>
  <body>
    <amp-story standalone title="${title}">
        ${content}
    </amp-story>
  </body>
</html>`;
}

export const page = (title = '', content = '', image = false, url = false, id = '') => {
    return `<amp-story-page id="${id}">
        ${image ? `<amp-story-grid-layer template="fill">
            <amp-img 
                src="${image}"
                width="720" 
                height="1280"
                layout="responsive">
            </amp-img>
        </amp-story-grid-layer>` : ''}
        <amp-story-grid-layer template="vertical" class="content">
            <h1>${title}</h1>
            <p>
                ${content}
            </p>
            ${url ? `<p>
                <a href="${url}" target="_blank" rel="noopener">Weiterlesen</a>
            </p>` : ''}
        </amp-story-grid-layer>
    </amp-story-page>`;
};
