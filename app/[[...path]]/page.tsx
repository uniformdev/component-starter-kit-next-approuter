import {
  PageParameters,
  UniformComposition,
  retrieveRoute,
} from "@uniformdev/canvas-next-rsc";

import { resolveComponent } from "@/canvas/resolver";

// This enables SSG. comment out to use SSR or ESR mode
// export { generateStaticParams } from "@uniformdev/canvas-next-rsc";

// Enable for the edge mode
export const runtime = "edge";

export default async function Home(props: PageParameters) {
  const route = await retrieveRoute(props);
  return (
    <UniformComposition
      {...props}
      route={route}
      resolveComponent={resolveComponent}
      // Change to "static" if you want to use the SSG mode
      // mode="static"
      mode="server"
    />
  );
}
