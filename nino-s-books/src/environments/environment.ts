// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'nino-s-books',
    appId: '1:900580927796:web:bed622bf09131e90395d61',
    storageBucket: 'nino-s-books.appspot.com',
    locationId: 'europe-central2',
    apiKey: 'AIzaSyDYSSPVEYI8PZFdrB61JHta29VZ4qXnmeo',
    authDomain: 'nino-s-books.firebaseapp.com',
    messagingSenderId: '900580927796',
    measurementId: 'G-JGF6C0J686',
  },
  auth: {
    domain: 'dev-7i43r8kg.eu.auth0.com',
    clientId: '93eHGgZCLz5yDrRqZPrgd50ntinkaCOe',
    redirectUri: window.location.origin,
  },
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
