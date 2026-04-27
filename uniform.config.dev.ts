import { uniformConfig } from '@uniformdev/cli/config';

module.exports = uniformConfig({
  preset: 'none',
  config: {
    serialization: {
      directory: './content/core',
      entitiesConfig: {
        dataType: {},
        component: {},
        contentType: {},
        componentPattern: {},
      },
    },
  },
});
