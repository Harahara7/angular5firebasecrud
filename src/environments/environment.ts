// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  //firebase Setup
  firebaseConfig: {
    apiKey: "AIzaSyDayh5ejJkTphIXlQcDmOgUIWGgjR72yUY",
    authDomain: "angular5crud-eb680.firebaseapp.com",
    databaseURL: "https://angular5crud-eb680.firebaseio.com",
    projectId: "angular5crud-eb680",
    storageBucket: "",
    messagingSenderId: "1094442406233"
  }
};
