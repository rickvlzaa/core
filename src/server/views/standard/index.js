function manifestToScripts(manifest, scripts=['/vendors.js', '/app.js'], links=['/app.css']) {
    return {
        scripts: scripts.map(script => {
            return `<script src="${manifest[script]}" type="text/javascript"></script>`
        }).join('\n'),
        links: links.map(link => {
            return `<link href="${manifest[link]}" rel="stylesheet"/>`
        }).join('\n'),
    }
}

export default (html, helmet, manifest) => {
    const { scripts, links } = manifestToScripts(manifest)
    return `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
        <head>
            ${helmet.base.toString()}
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            ${links}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="react-root">${html}</div>
            ${scripts}
        </body>
    </html>
    `;
}