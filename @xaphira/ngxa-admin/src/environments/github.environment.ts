export const environment = {
  production: true,
  locale: 'en-US',
  basePath: '/xaphira/@xaphira/ngxa-admin/',
  host: {
    auth: {
      protocol: 'https',
      host: 'xa-api.herokuapp.com',
    },
    security: {
      protocol: 'https',
      host: 'xa-api.herokuapp.com',
    },
    master: {
      protocol: 'https',
      host: 'xa-api.herokuapp.com',
    },
    file: {
      protocol: 'https',
      host: 'xa-api.herokuapp.com',
    },
    notification: {
      protocol: 'https',
      host: 'xa-api.herokuapp.com',
    },
    pacs: {
      host: 'raw.githubusercontent.com',
    },
    sample: {
      protocol: 'http',
      host: 'localhost',
      port: 8085,
    },
  },
};
