# Front-end Development Presentation / PWA / Reference Guide

This repository contains a simple, one-page Gatsby site that fetches content from GraphCMS to fill the different "slides". It is also configured to act as a PWA (Progressive Web App) to demonstrate what a PWA is for mobile users.

Also, Netlify is setup to demonstrate a very simple CI/CD pipeline and to show a standard development work flow of making chances, previewing in development environment, then committing changes to a branch to watch them be automatically deployed.

## Development

  

1. Install dependencies

```shell
	yarn install
```

  

2. Run development server

```shell
	yarn develop
```

  

3. The site should be running on `http://localhost:8000`

  

4. Learn more

  

-  [Documentation](https://www.gatsbyjs.com/docs)

  
## Build Your Bundle

1. Build your Gatsby site
```shell
	yarn build
```  
2. Your static files should be in the `public/` directory


## Deployment

Currently, this site auto-deploys to production when code gets pushed to the `master` branch using Netlify on a free tier. I cannot add anyone extra to this account, but if you have any questions please reach out to Collier Devlin.

> Generally, if the code builds successfully in your local, development environment, chances are high that there won't be any issues in the Netlify pipeline.

### Manual Deployment

1. Build your Gatsby site (see "Build Your Bundle)
2. Copy all the contents on the `public/` directory to a server of your choosing

