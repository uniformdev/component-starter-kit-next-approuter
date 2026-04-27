# Uniform Component Starter Kit

This is the latest version of the Uniform Component Starter Kit (CSK) - version 7, built specifically for Next.js 16 App Router with cache components support leveraging React 19, TailwindCSS and TypeScript.

> If you are looking for the Next.js Page Router version, check out this older [repo](https://github.com/uniformdev/uniform-component-starter-kit) instead.

## Prerequisites

- A Uniform account with the ability to create a new empty project. If you don't have a Uniform account, you can request a trial account [here](https://uniform.dev/try).
- Node.js LTS and `git` installed on your machine.

## Getting started

### Step 1. Initial setup

#### Option 1: via Uniform CLI

Run `npx @uniformdev/cli new` and pick `Next.js` -> `Component Starter Kit` from the interactive prompt. Complete the process to deploy a new instance of CSK to your

#### Option 2: manually

1. `git clone` this repo.
2. Create an empty Uniform project in your team.
3. Setup your .env file using your Uniform project connection details (see .env.example for reference)
  ```bash
   UNIFORM_PROJECT_ID=
   UNIFORM_API_KEY=
   UNIFORM_PREVIEW_SECRET=hello-world
  ```
  > Make sure your API key has "Developer" role to be able to push content.
4. `npm install` to install dependencies
5. Run `npm run init` to initialize your project.
  > This command uses `@uniformdev/csk-cli` to push all content from disk (`./content` folder), design settings (colors, fonts, borders, etc.), and publish the context manifest. If CSK variants are available, you'll be prompted to select which one to initialize.

### Step 2. Run locally in dev mode

Use `npm run dev` to run locally.
At this point, you should be able to browse your site on `http://localhost:3000` and open the Home composition in your Uniform project to start visual editing your content.

### Step 3. Install the Design Extensions integration

This integration brings new parameter types for design and layout control via Uniform UI extensions to help control and manage the look and feel of your components.

1. Open your project.
  Your project
2. Navigate to the `Integrations` tab, find the `Design Extensions` integration and install it.

## How to sync content

The following scripts are created to facilitate sync of content between the `./content` folder and your project.

### Complete Project Sync

1. Run `npm run init` to initialize/push everything (content, design extensions, and context manifest) to your Uniform project.
2. Run `npm run uniform:pull` to pull everything (content and design extensions) from your Uniform project to disk.

These commands use `@uniformdev/csk-cli` and handle the complete synchronization workflow. If CSK variants are available, you'll be prompted to select which one to sync.

### Granular Content Sync

**Core** is the default granular sync mode: `pull:content` and `push:content` use it without a suffix. Two other modes are available for full-library sync and developer-scoped sync.

Each mode uses a different `uniform.config.*.ts`, script pair, and (for **core** vs **full**) a different directory under `./content`. **Dev** also targets `./content/core` but only serializes the entity types listed in the config.


| Mode                                   | Scripts                                                   | Config                   | Content directory                  | Purpose                                                                                                                 |
| -------------------------------------- | --------------------------------------------------------- | ------------------------ | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Core** (default, one-component mode) | `npm run pull:content` / `npm run push:content`           | `uniform.config.core.ts` | `./content/core`                   | Single-component / lean starter set—use unless you need full or dev-scoped sync.                                        |
| **Full** (full component library)      | `npm run pull:content:full` / `npm run push:content:full` | `uniform.config.full.ts` | `./content/full`                   | Sync the full component library when you need every packaged component.                                                 |
| **Dev** (developer artifacts only)     | `npm run pull:content:dev` / `npm run push:content:dev`   | `uniform.config.dev.ts`  | `./content/core` (scoped entities) | Sync only developer-owned types: data types, components, content types, and component patterns—no broad project preset. |


> For **dev** sync, what gets included is defined in `uniform.config.dev.ts`. In practice you often use this for components, content types, and patterns; over time you may choose not to pull heavy assets (images, video, and so on) into local work, depending on lifecycle and team preference.

## Other scripts

### **Design Extension Sync**

## ⚠️ Important

Whenever you add new **colors, dimensions, fonts, or borders**, your application should recognize these values. To ensure this, you need to run:

```sh
npm run pull:dex
npm run apply:dex
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

If you prefer managing styles manually, you can modify the predefined configuration files `dex.config.json`. After making changes, apply and push the updated configuration using:

```sh
npm run apply:dex
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

### **Understanding `allowGroups`**

When your project is still using the default configuration, the `allowGroups` field will be **empty**. However, if you add a custom group (e.g., `page`), it will be added to this field automatically.

#### **Example: Adding a Custom Group (Page)**

If you introduce a new group, such as `page`, the `dex.config.json` file will be updated as follows:

```json
allowedGroups: { "color": ["button", "page", "text"] }
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

## Optional Integrations

### Uniform Insights

To enable **[Uniform Insights](https://docs.uniform.app/docs/integrations/data/insights)**, add the following variables to your `.env` file:

```bash
UNIFORM_INSIGHTS_ENDPOINT=
UNIFORM_INSIGHTS_KEY=
```

> Refer to the [Uniform Insights documentation](https://docs.uniform.app/docs/integrations/data/insights) for detailed configuration and usage instructions.

---

### Google Analytics

To integrate **[Google Analytics](https://docs.uniform.app/docs/integrations/data/google-analytics)**, include this variable in your `.env` file:

```bash
GOOGLE_ANALYTICS_ID=
```

> Learn more in the [Google Analytics integration guide](https://docs.uniform.app/docs/integrations/data/google-analytics).

