// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBQtHtCGHlK1BMkGPPFbUiVjlbZludAh_8',
    authDomain: 'personregistration.firebaseapp.com',
    databaseURL: 'https://personregistration.firebaseio.com',
    projectId: 'personregistration',
    storageBucket: 'personregistration.appspot.com',
    messagingSenderId: '760755344168'
  }
};
