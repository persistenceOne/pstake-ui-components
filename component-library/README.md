# component-library

### Initial publish steps
 1. Update name - @username/repo_name, registry url - https://registry.npmjs.org/GITHUB_ORG in package.json
 2. Create .npmrc file in home directory.  ex: nano .npmrcz
 3. Add below code and save it
    ```bash
        registry=https://registry.npmjs.org/
        @YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
        npm.pkg.github.com/:_authToken=YOUR_GITHUB_AUTH_TOKEN // you can find in settings>developer settings> token
 
 4. run - npm publish
 5. Update package.json version whenever publishing new changes.
    