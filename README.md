# Express-Mongoose-Passport-OAuth Server

**Description**

Express-Mongoose-Passport-OAuth Server is boiler code created to better understand PassportJS in a Node, Express, Mongoose, OAuth environment. 

**Setup**

1) After cloning the repo, running `npm install` in the root folder will install the following npm packages:

    * npm i cookie-session
    * npm i ejs (development purposes only)
    * npm i express
    * npm i mongoose (can be switched out for mysql/sequelize)
    * npm i passport-google-oauth20 (Google Authentication) 

2) Add your web firebase configuration in the `config` folder `keys.js` file.

``` config > keys.js
module.exports = {
    google: {
        clientID: '<clientID>',
        clientSecret: '<clientSecret>',
    },
    mongodb: {
        dbURI: 'mongodb://localhost/<databaseName>'
    },
    session: {
        cookieKey: `<cookieKey>`
    }
}
```

**Future Development**

    * Facebook Authentication Integration
    * React Native Integration
    * React Integration
    * Axios Integration
    * MySQL/Sequelize Integration
    * Basically this may be evolve into a hackathon kind of deal.






