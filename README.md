# MyFca

> This is a project to submit the test sent on 01/03/2019

- This project is built as a RESTful API to make use of HTTP requests to GET, PUT, POST and DELETE data.
- The implementation of all the CRUD APIs is made by using Nodejs and Mongoose.
- The documentation of this APIs is implemented using Swagger.
- For a secure access of the API, JWT authentication is implemented with the use of Passportjs.


## Usage

Clone this repository, install dependencies and start application:

#### Clone and install dependencies
```bash
git clone https://github.com/logu/n2SPGMnrmgDRpEYrYBtQWr4RBjUEJ9b6qv59k7bw logu-test
cd logu-test
npm install
```
#### Start MongoDB
```bash
mongod
```

#### Run project
```bash
npm run start
```

Nodemon is used to launch the app on dev mode.

The codesbase in the project are all written in ES6, babel is used to transpile to ES5.


## Testing

#### Unit test
```bash
npm run test
```
The test here is checking mainly the algorithm to calculate combinations

#### Swagger
When the APP is running Swagger is available on :

 http://localhost:8080/api-docs/v1

All Api entrypoints can be tested using swagger interface

#### Postman
A postman collection to test all the end point is available here :
https://www.getpostman.com/collections/ab1c5c54b80aaa5eb71f

In the top bar of the Postman Client on the left side, click on the ``` Import ``` button.

Click on the ``` Import From Link ``` tab in the Import menu and paste in the following link

---
**NOTE**

To access any protected route in the project, the user agent should send the JWT,
in the Authorization header using the Bearer schema.
The content of the header should look like the following:

```
Authorization: Bearer <token>
```

To get a token :

1.  A user needs to be created using the signup endpoint :

```bash
curl -X POST \
  http://localhost:8080/api/v1/users/signup \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: 65c7da6f-5f0a-4aa6-ae95-3fb4670fe1b8' \
  -H 'cache-control: no-cache' \
  -d 'user=lki2&password=azerty&undefined='

```

2. Once the user is created, the login endpoint is used to get a token

```bash
curl -X POST \
  http://localhost:8080/api/v1/users/login \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: 12b9bc0f-a6a0-4daa-bc58-a0817e4c4b76' \
  -H 'cache-control: no-cache' \
  -d 'user=john&password=myfonciapassword&undefined='
```

3. copy the token returned by this request.
4. Send the token in header to all API calls ie :

```bash
    curl -X GET \
      http://localhost:8080/api/v1/clients \
      -H 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjN2MzOTcxODI5N2QwNjMzZWEzYTFkNCIsImlhdCI6MTU1MTY0NzUxMiwiZXhwIjoxNTUxNzMzOTEyfQ.SzyMfS4EHAIaQXU0pA9_Fja4VfBg2uOP63Ox5y3uBsI'
```

---

## Build 

A build process is available to get a ES5 transpiled version of the project. 
```bash
npm run build
```

## What's inside?

- [express.js](http://expressjs.com) framework
- all code is written ES6/ES7 and transpiled by [babel](http://babeljs.io)
- [npm scripts](https://github.com/voronianski/express-api-sample/blob/master/package.json#L6) for task automation
- Passportjs is used to implement JWT authentication
- mongoose is used to access mongoDb database
- for the unit mocha and chai is implemented
