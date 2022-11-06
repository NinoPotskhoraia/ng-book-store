// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'nino-s-book-store',
    appId: '1:291448226478:web:b0c9f1681e41ac0d74233f',
    storageBucket: 'nino-s-book-store.appspot.com',
    locationId: 'europe-central2',
    apiKey: 'AIzaSyA_5vorPjapR9BP1lcSFi3oXYMjaXCtLU0',
    authDomain: 'nino-s-book-store.firebaseapp.com',
    messagingSenderId: '291448226478',
    measurementId: 'G-G62PD2E42S',
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
