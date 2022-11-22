# readme

A public facing project for expressing developer thoughts and ideas around web development.

## 🚀 Quick start

1. __Start developing.__

    ```shell
    cd readme/
    npm run develop
    ```

1. __Open the code and start customizing!__

    Your site is now running at <http://localhost:8000>!
    Edit `src/pages/index.js` to see your site update in real-time!

1. __Learn more__

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)

## Libraries

This project includes a few custom features for fetching and building content from third party assets.  There are 2 Page building APIs for templating content, and libraries for fetching objects from an s3 bucket, as well as parsing Markdown.

### onCreatePage

`./gatsby-node.js`

This Node API creates a table of contents on the home page and provides a landing spot for users to land. It fetches a "manifest.json" object that is automated to keep up to date with objects added to our s3 bucket.

### createPages

`./gatsby-node.js`

This Node API fetches all object from a configured s3 fetching library.  It converts our markdown to HTML text on build,  providing the text to our Template components at build.

### fetchMarkdown

`./lib/fetchMarkdown`

#### fetch

@params: bucket [String]
@returns: getObject [Function]

A function for configuring an asynchronous function that can fetch objects from a given s3 bucket.

#### getObjects

@params: bucket [String]
@returns: Promise<Response> {Objects<Array>, Error<S3Error>}

Returns an array of objects from an s3 bucket.
