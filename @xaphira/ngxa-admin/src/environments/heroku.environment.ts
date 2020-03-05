export const environment = {
  production: false,
  locale: 'en-US',
  basePath: '/',
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
      protocol: 'https',
      host: 'raw.githubusercontent.com',
    },
    sample: {
      protocol: 'http',
      host: 'localhost',
      port: 8085,
    },
  },
};
