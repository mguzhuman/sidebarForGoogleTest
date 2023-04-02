
## Installation

 Clone the sample project and install dependencies:
```
git clone https://github.com/mguzhuman/sidebarForGoogleTest.git
cd React-Google-Apps-Script
yarn
```
Then [create a new Google Sheets spreadsheet](https://sheets.google.com). Open the Script Editor and copy the script's scriptId. [**Tools > Script Editor**, then **File > Project properties**].

Paste the **scriptId** into the .clasp.json file as below:
```
// .clasp.json
{"rootDir": "dist",
 "scriptId":"...paste scriptId here..."}
```
If you have not enabled Google's Apps Script API, do so by visiting https://script.google.com/home/usersettings.
Log into CLASP to push code to the server from the command line:
```
yarn login:clasp
```
When you're ready, build the app and deploy!
```
npm run deploy:stage
```

or

```bash
npm run deploy:prod
```
Webpack will display any linting errors, bundle your files in `dist`, and push your files to Google's servers using CLASP. You can run `yarn build` to just build.

Using `deploy:stage` will give an easier to debug minified version, where `deploy:prod` will minify it to basic obscurity.

