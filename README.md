# pern-auth

### Create Express App

```bash
npx express-generator api
cd api
npm install
npm start
```

Install Dependencies

### Create Express App

In api folder run the next command to install necessary packages

```bash
npm install express sequelize pg pg-hstore cors jsonwebtoken bcryptjs --save
```
And add this code:

![Add code](docs/images/1_codebase_appjs.png)

express app default port is 3000, set it to 8080 in file api/bin/www like this

![Change Port](docs/images/2_codebase_api_bin_www.png)