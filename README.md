# Favourites API with typeScript

## Description

- Each user have a unique id, and he authenticate using a non-empty email and a password.
- Each user is able to save a list of favs. Each fav have an title , description and link, and each list is defined by a unique id and a name.
- The system allows the following actions:
  - Create a new list with a given name (auto-generate the unique id)
  - Get the users lists
  - Get an individual list for the user
  - Add items to a given list (based on the generated id)
  - All endpoints have to be secured with Bearer Auth (JWT) Bearer
  - It have validations for ensure that the password is strong enough

## How to run

Complete .env variables like .env.example then

```
1. npm install
2. npm start (production mode)
3. npm run dev (developer mode)
4. npm run test (run tests)
```

## Documentation:

All api documentatión is Here:
[https://documenter.getpostman.com/view/14468374/UyxjF68y](https://documenter.getpostman.com/view/14468374/UyxjF68y)

## By: Emerson Asto
