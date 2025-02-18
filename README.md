# Uniform Component Starter Kit

This is the latest version of the Uniform Component Starter Kit (CSK) - version 6, built specifically for Next.js 15 App Router leveraging React 19, TailwindCSS and TypeScript.

> If you are looking for the Next.js Page Router version, check out this older [repo](https://github.com/uniformdev/uniform-component-starter-kit) instead.

## Key changes in v6

1. This version is built specifically for Next.js 15 and React 19, leveraging the latest Uniform SDK v20+, enabled for all the latest Uniform DXP features!
1. Minimalistic and simplified approach:
   - zero external dependencies besides @uniformdev, minimum distractions - essentials only in the core version.
   - Zero components added by default, can add components into your codebase with `npm run component:extract` and customize how you see fit
   - More templates and solution recipes coming as stand-alone packages.
1. Revamped theme management system based on a new Design Extensions integration that supports design tokens
1. More atomic components supporting the authorable components paradigm
1. Internationalization / localization ready
1. Removed daisyui
1. Included standard sitemap implementation
1. Server-side rendering by default. Static site generation can be enabled on top.
1. Dev Experience updates: `component:scaffold` and `component:extract` flows, watch mode for design extension update sync and a developer config for content sync that scopes the operation to developer artifacts only.

Check out more about it [here](https://components.uniform.app) where you can copy and paste components from right into your project!

## Prerequisites

- A Uniform account with the ability to create a new empty project. If you don't have a Uniform account, you can request a trial account [here](https://uniform.dev/try).
- Node.js LTS and `git` installed on your machine.

## Getting started

### Step 1. Initial setup

#### Option 1: via Uniform CLI

Run `npx @uniformdev/cli new` and pick `Next.js` -> `Component Starter Kit` from the interactive prompt. Complete the process to deploy a new instance of CSK to your

#### Option 2: manually

1. `git clone` this repo.
1. Create an empty Uniform project in your team.
1. Setup your .env file using your Uniform project connection details (see .env.example for reference)
   ```bash
   UNIFORM_PROJECT_ID=
   UNIFORM_API_KEY=
   UNIFORM_PREVIEW_SECRET=hello-world
   ```
   > Make sure your API key has "Developer" role to be able to push content.
1. `npm install` to install dependencies
1. Run `npm run init` to initialize your project.
   > This will push all content from disk (`.\content` folder) and your design settings (colors, fonts, borders, etc. for this default theme).

### Step 2. Run locally in dev mode

Use `npm run dev` to run locally.
At this point, you should be able to browse your site on `http://localhost:3000` and open the Home composition in your Uniform project to start visual editing your content.

### Step 3. Install the Design Extensions integration

This integration brings new parameter types for design and layout control via Uniform UI extensions to help control and manage the look and feel of your components.

1. Open your project.
   ![Your project](https://res.cloudinary.com/uniform-demos/image/upload/csk-v-next/doc/project_page.png)
1. Navigate to the `Integrations` tab, find the `Design Extensions` integration and install it.

## How to sync content

The following scripts are created to facilitate sync of content between the `./content` folder and your project.

1. Run `npm run push:content` to push data from disk (see `./content`) to your Uniformproject.
1. Run `npm run pull:content` to pull data from your Uniform project to `./content` folder.

Alternatively you can use `npm run pull:content:dev` and `npm run push:content:dev` to pull and push developer-owned content to your local project. The scope of the developer-owned content is defined in the `uniform.config.dev.ts` file.

> Developer-owned content typically scoped to components, content types, component patterns but can vary based on the stage of your project lifecycle and your preferences. For example, at some point, you may not want to sync assets like images, videos, etc.

## Other scripts

### **Design Extension Sync**

## ⚠️ Important

Whenever you add new **colors, dimensions, fonts, or borders**, your application should recognize these values. To ensure this, you need to run:

```sh
npm run pull:dex
```

This command is automatically executed when running:

- **Development mode:**
  ```bash
  npm run dev:watch
  ```
- **Build process:**
  ```bash
  npm run build
  ```

## 🔄 Automatic Synchronization

When modifying an **existing value**, your app will automatically fetch the updated configuration in **two cases**:

1. If you are in **preview mode** (within the canvas).
2. If the **WATCH** environment variable is set to `true`.

## 🎨 Working with Styles

If you prefer managing styles manually, you can modify the predefined configuration files located in the `styles/` directory:

- `styles/border.css`
- `styles/colors.css`
- `styles/dimensions.css`
- `styles/fonts.css`

After making changes, push the updated configuration using:

```sh
npm run push:dex
```

This will update the **Design Extensions Integration** with your new styles.

## 🌙 Dark Mode Integration

When developing an application that supports **dark mode**, ensure that your integration recognizes dark theme colors by defining them inside the `.dark` class:

```css
.dark {
  --text-primary: #752b2b;
  --text-secondary: #391717;
  --text-tertiary: #6f5454;
  --text-light: #ed1616;
  --text-dark: #3e867d;
}
```

This ensures that the **Design Extension Integration** correctly identifies and applies dark mode styling.

## 🗂 Managing Groups in Design Extension

By default, the **Design Extension** includes two predefined groups:

- `button`
- `text`

### **Understanding `allowGroups.json`**

When your project is still using the default configuration, the `allowGroups.json` file will be **empty**. However, if you add a custom group (e.g., `page`), it will be added to this file automatically.

#### **Example: Adding a Custom Group (Page)**

If you introduce a new group, such as `page`, the `allowGroups.json` file will be updated as follows:

```json
{ "color": ["button", "page", "text"] }
```

### **Creating and Pushing Custom Groups**

You can define your own groups and push them using:

```sh
npm run push:dex
```

🔹 **Important:** The **Design Extension Integration** will only display a group **if it contains values**.

### **Linking Design Tokens to a Group**

To assign a **design token** to a specific group, the token's name **must** be prefixed with the group name.

#### **Example: Assigning Colors to a Group**

For the `page` group to be recognized, you should define colors using the `page-` prefix:

```css
--page-background-primary: #ffffff;
```

After this, the token will be correctly linked to the **Page** section in your **Design Extension Integration**.

### **Supported Grouping Categories**

Currently, grouping is supported for:  
✅ **Color tokens**  
✅ **Dimension tokens**

## Publishing manifest file via CLI

1. Run `npm run uniform:publish` to publish the manifest with A/B testing and personalization configuration.
