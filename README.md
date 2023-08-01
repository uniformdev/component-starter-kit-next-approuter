# Uniform Component Starter Kit for Next.js + App Router

⚠️ This project is in Public Preview and not recommended for production yet. For production use cases, please refer to the page router-based implementation [here](https://github.com/uniformdev/uniform-component-starter-kit/). Use it if you are doing a pilot / PoC for a new project and plan on using Next.js App Router and React Server Components. [See the limitations](#limitations) below.

The Component Starter kit gives you the key building blocks to create dynamic and compelling web experiences and demonstrate the power of digital experience composition in Uniform. Just install, customize and start creating.

Built with love by Uniform folks, standing on the shoulders of TailwindCSS, DaisyUI, React and Next.js.

- [Demo](https://csk-next-approuter.vercel.app)
- [Storybook](https://components-storybook.uniform.app/)
- [Docs](https://docs.uniform.app/docs/learn/tutorials/nextjs-app-router)
- Questions/issues/feedback? [Find us in Discord](https://discord.gg/DRMyTKfxJy).

## Getting started

### Prerequisites

- A Uniform account with the ability to create a new empty project. If you don't have a Uniform account, you can request a trial account [here](https://uniform.dev/try?utm_source=component-starter-kit).

### Initial setup

1. Setup your .env file (see .env.example for reference)
   ```bash
   UNIFORM_API_KEY=
   UNIFORM_PROJECT_ID=
   UNIFORM_PREVIEW_SECRET=hello-world
   ```
2. `npm install`
3. Run `npm run uniform:push` and `npm run uniform:publish` to push the content from this starter kit (components, compositions and project map) into your project.

### Run locally in dev mode

`npm run dev` to run locally.

### Build and run locally

`npm run build` and `npm start`

## Complete the setup - install the Theme Pack integration

This integration brings Canvas UI extensions for theme management and new useful visual parameters to help control the look and feel of your components.

1. Open your Uniform project.
1. Head over to Settings > Canvas and configure preview to `http://your-host/api/uniform?secret=hello-world`
1. Navigate to `Manage Integrations` tab and Install `Theme Pack` integration
1. Select one of the themes or create your own and press `Save`
1. Go to the Compositions list, find the "Global" composition and open it in Canvas.
1. To apply theme changes, press `Publish` (even if the composition itself is not changed).
   > Optionally, you can change the main font that will be used along with the theme.
   > Here you can also manage your header and footer content - logo and navigation links.

Important: to apply theme changes, you must re-publish the "Global" composition after every time you change the `theme` on the integration settings page.

## Deployment

Feel free to deploy this app wherever you'd like, we recommend using Vercel for the most enjoyable experience with Next.js App Router.

## Known limitations
We are rapidly iterating on this SDK, so these will soon be resolved.

1. In-line editing is not supported yet.
2. Known issues in preview with content updates.
