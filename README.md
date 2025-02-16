# Uniform Component Starter Kit (CSK6)

This repository is the latest version 6 of the Uniform Component Starter Kit (CSK).
It is built using Next.js 15 App Router, TailwindCSS and TypeScript.

Check out more about CSK and what you can do with it at https://components.uniform.app

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
   UNIFORM_API_KEY=
   UNIFORM_PROJECT_ID=
   UNIFORM_PREVIEW_SECRET=hello-world
   ```
   > Make sure your API key has "Developer" role to be able to push content.
1. `npm install` to install dependencies
1. Run `npm run init` to initialize your project. This will push all content from disk (`.\content` folder) and your design settings (colors, fonts, borders, etc. for this default theme).

### Step 2. Run locally in dev mode

Use `npm run dev` to run locally.
At this point, you should be able to browse your site on localhost:3000 and open your Uniform projects compositions for preview and visual editing.

### Step 3. Install the Design Extensions integration

This integration brings new parameter types for design and layout control via Uniform UI extensions to help control and manage the look and feel of your components.

1. Open your current team page.
   ![Team page](https://res.cloudinary.com/uniform-demos/image/upload/csk-v-next/doc/team_page.png)
1. Navigate to the `Settings` tab, than `Custom Integrations` and add `Design Extensions` as a custom integration using this [manifest](https://github.com/uniformdev/uniform-mesh-integrations/blob/canary/integrations/design-extensions/mesh-manifest.stable.json).
1. Open your project.
   ![Your project](https://res.cloudinary.com/uniform-demos/image/upload/csk-v-next/doc/project_page.png)
1. Navigate to the `Integrations` tab, find the `Design Extensions` integration and install it.

## How to sync content 

The following scripts are created to facilitate sync of content from / to your project and source control. The representation of your project on disk is stored int the `./contnet` folder.

1. Run `npm run push:data` to push data from disk (see `./content`) to your project.
1. Run `npm run pull:data` to pull data from uniform to `./content` folder.

## Other scripts

### **Design Extension Sync**  

## ⚠️ Important  
Whenever you add new **colors, dimensions, fonts, or borders**, your application should recognize these values. To ensure this, you need to run:  

```sh
npm run pull:configuration
```

This command is automatically executed when running:  
- **Development mode:**  
  ```sh
  npm run dev:watch
  ```
- **Build process:**  
  ```sh
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
npm run push:configuration
```
This will update the **Design Extensions Integration** with your new styles.  

## 🌙 Dark Mode Integration  
When developing an application that supports **dark mode**, ensure that your integration recognizes dark theme colors by defining them inside the `.dark` class:  

```css
.dark {
  --text-primary: #752B2B;
  --text-secondary: #391717;
  --text-tertiary: #6F5454;
  --text-light: #ED1616;
  --text-dark: #3E867D;
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
{
  "color": [
    "button",
    "page",
    "text"
  ]
}
```

### **Creating and Pushing Custom Groups**  
You can define your own groups and push them using:  
```sh
npm run push:configuration
```

🔹 **Important:** The **Design Extension Integration** will only display a group **if it contains values**.  

### **Linking Design Tokens to a Group**  
To assign a **design token** to a specific group, the token's name **must** be prefixed with the group name.  

#### **Example: Assigning Colors to a Group**  
For the `page` group to be recognized, you should define colors using the `page-` prefix:  

```css
--page-background-primary: #FFFFFF;
```

After this, the token will be correctly linked to the **Page** section in your **Design Extension Integration**.  

### **Supported Grouping Categories**  
Currently, grouping is supported for:  
✅ **Color tokens**  
✅ **Dimension tokens**  


## Publishing manifest file via CLI

1. Run `npm run publish:manifest` to publish the manifest with A/B testing and personalization configuration.
