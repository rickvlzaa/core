import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import standardTemplate from '../views/standard'
import loadJsonFile from 'load-json-file'
import path from 'path'


export function sendAppPage(Component) {
    return  async (req, res) => {
        const context = {}
        const { url : location } = req

        const markup = renderToString(
            <StaticRouter context={context} location={location}>
                <Component/>
            </StaticRouter>
        );

        const helmet = Helmet.renderStatic()
        const manifest = await loadJsonFile(path.resolve(__dirname, '../../../build', 'manifest.json'))

        res.status(200).send(standardTemplate(markup, helmet, manifest))
    }
}