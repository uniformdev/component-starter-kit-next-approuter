# Uniform Component Starter Kit for Next.js + App Router

This starter is using the latest Next.js 14 with App Router. If you would like to use Page Router instead, head over [here](https://github.com/uniformdev/uniform-component-starter-kit/).

## Resources

The Component Starter kit gives you the key building blocks to create dynamic and compelling web experiences and demonstrate the power of digital experience composition in Uniform. Just install, customize and start creating.

Built with love by Uniform folks, standing on the shoulders of TailwindCSS, DaisyUI, React and Next.js.

- [Demo](https://csk-next-approuter.vercel.app)
- [Storybook](https://components-storybook.uniform.app/)
- [Tutorial](https://docs.uniform.app/docs/learn/tutorials/csk)
- Questions/issues/feedback? [Find us in Discord](https://unfrm.to/discord).

## Prerequisites

- A Uniform account with the ability to create a new empty project. If you don't have a Uniform account, you can request a trial account [here](https://uniform.dev/try).
- Node.js LTS and `git` installed on your machine.

## Getting started

### 1. Initial setup

1. Setup your .env file (see .env.example for reference)
   ```bash
   UNIFORM_API_KEY=
   UNIFORM_PROJECT_ID=
   UNIFORM_PREVIEW_SECRET=hello-world
   ```
   > Make sure your API key has "Developer" role to be able to push content.
2. `npm install` to install dependencies.
3. Run `npm run uniform:push` to push content from disk (see `./content`) to your project.
4. Run `npm run uniform:manifest:publish` to publish the manifest with personalization configuration.

### 2. Run locally in dev mode

`npm run dev` to run locally.
At this point, you should be able to browse your site on localhost:3000 and open it in Uniform Canvas.

### 3. Configure Preview URL

Besides live preview, setting the preview URL enables visual in-line editing and experience management of your Next.js app within the Uniform environment. Enabling this is easy:

1. Open your Uniform project's Settings.
1. Open `Canvas Settings` and configure the preview URL to your localhost endpoint: `http://localhost:3000` and use this for your preview path: `/api/preview?secret=hello-world`
   > Consider changing the `secret` in your .env file. That value must match the `secret` query string used in preview url. The preview can point to a local or deployed version of your Next.js app.

### 4. Install the Theme Pack integration

This integration brings Canvas UI extensions for theme management and new useful visual parameters to help control the look and feel of your components.

1. Navigate to the `Integrations` tab, find the `Theme Pack` integration under 'Starters' and install it.
2. Select one of the themes (Uniform is the default one) or create your own and press `Save`.
3. Go to the Components section, find the `Main Header` pattern and open it.
4. To apply theme changes, press `Publish` (even if the pattern itself wasn't changed), this is necessary to apply theme changes.
   > Optionally, you can change the main font that will be used along with the theme.
   > Here you can also manage your header content - logo and navigation links.

⚠️ Important: to apply the theme changes, you must re-publish the `Main Header` pattern every time you change the `theme` on the integration settings page.

## Deployment

Feel free to deploy this app to the front-end platform of your choice, as long as it supports Next.js App Router :)

## How to change the rendering mode

This app supports all the rendering modes Next.js 14 currently supports - static-site generation (SSG) and server-side rendering on both runtimes - as Node.js runtime (running SSR with a serverless function) and edge runtime (running SSR at the edge node). Learn more about two rendering runtimes [here](https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes).

This app is configured for the ESR (edge-side rendering mode) by default, meaning it runs server-side rendering process at the CDN node closest to the users.

Depending on your requirements, you may choose to change the default mode to SSG, or switch to another rendering runtime.

Not all the CDNs may support the SSR mode, so consult your CDN provider documentation regarding which modes are supported.

### SSG mode

This mode runs your pages through the build-time static site generation process, so there is no runtime involved when visitors request your pages, they are served as static from the CDN node.

⚠️ Important: at this time, preview and in-line editing is not fully supported in SSG mode. Contact our team for the workaround.

Changing to the SSG mode is super straightforward.

1. Open `app/[[...path]]/page.tsx`

2. Find this line 10 that is commented out and enable it:

   ```typescript
   export { generateStaticParams } from '@uniformdev/canvas-next-rsc';
   ```

3. Set `mode="static"` from `server` (line 24):
   ```jsx
   <UniformComposition {...props} route={route} resolveComponent={resolveComponent} mode="static" />
   ```

That's it! Re-deploy your app after this change.

### Controlling edge vs node.js runtime

When using the server mode, the runtime selection is controlled by this line 13 inside `app/[[...path]]/page.tsx`. If you want to switch to the `nodejs` runtime, simply remove or comment out this line and re-deploy your app.

```typescript
export const runtime = 'edge';
```
