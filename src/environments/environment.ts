// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAhE0gX3OhzB0tsyIH2THR6LzhMGatWERs',
    authDomain: 'bet-world-cup.firebaseapp.com',
    databaseURL: 'https://bet-world-cup.firebaseio.com/',
    projectId: 'bet-world-cup',
    // storageBucket: '<your-storage-bucket>',
    // messagingSenderId: '<your-messaging-sender-id>'
  }
};
