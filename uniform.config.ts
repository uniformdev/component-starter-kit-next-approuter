import type { CLIConfiguration } from "@uniformdev/cli";

require("dotenv").config();

const config: CLIConfiguration = {
  serialization: {
    format: "yaml",
    mode: "mirror",
    directory: "./uniform-data",
    entitiesConfig: {
      composition: {
        push: {
          // May be useful to only create new compositions and not update existing ones to avoid accidental overrides
          mode: "create",
        },
      },
      pattern: {},
      category: {},
      component: {},
      dataType: {},
      signal: {},
      test: {},
      aggregate: {},
      enrichment: {},
      quirk: {},
      projectMapDefinition: {},
      projectMapNode: {},
      redirect: {},
    },
  },
};

module.exports = config;
