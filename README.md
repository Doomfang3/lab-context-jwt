# Context + JWT

## How to run the project

![alt](https://media.giphy.com/media/1l9I0TV4agZYk0iu0P/giphy.gif)

Use `npm run deps` to install dependencies on the frontend and backend.

Use `npm run front` to run the front end and in another terminal `npm run back` to run the backend.

---

## Set up our routes

![alt](https://www.teslarati.com/wp-content/uploads/2021/08/tesla-fsd-beta-10-release-date-.gif)

Setup your Signup and Login routes on the backend, we're gonna work on the verify one later.

---

## Connect your frontend to your backend

![alt](https://pa1.narvii.com/8446/01092b3af502f9a239dd7e0eede70215d5316921r1-540-240_hq.gif)

Use `Fetch` (or `Axios`) to send your signup and login information to your new endpoints (your routes), don't forget to use `bcryptjs` to encrypt and compare the passwords.

_Remember that Fetch needs headers to send JSON._

---

## Create a new Context

![alt](https://media.giphy.com/media/A80TAOwXasiT10ZoSz/giphy.gif)

Use the SessionContext.jsx file to create the context that's going to register your token and make it available across your application.

_Don't forget to wrap your provider around your App._

---

## Record our token to the Local Storage

![alt](https://media.giphy.com/media/PjJ1XUXFkp6FRA2SrB/giphy.gif)

To make sure our token is still there if we refresh the page, we're going to record it to our `Local Storage`.

_You can use the hook from Mantine to do this if you're confortable with it._

---

## Verify the token

![alt](https://media.giphy.com/media/Ib0bV7GnRE2EXnQb1f/giphy.gif)

When the user is going to come back or reload the page, we need to make sure that our token is still valid. Set up a call to your API that will check this token, using the `verify` route.

_You'll need the middleware `isAuthenticated` for this._

## Use the token

![alt](https://media.giphy.com/media/PkimPOMOVbcMU/giphy.gif)

Now on every request, you need to send your token. With `Fetch`, you have to set the `Authorization` inside the `headers` to be `"Bearer ${token}"`.
