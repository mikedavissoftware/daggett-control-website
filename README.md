# Daggett Control Company, LLC Website README

## Developed by Mike Davis, owner of Mike Davis Media LLC

This is a website create for an industrial control company, Daggett Control Company, LLC.

This website will include these pages:

- Home
- About Us
- Our Services
- Contact Us

---

## During development, start servers like so:

Back End (Ruby on Rails):

`rails s`

Front End (React with Vite.js):

`npm run dev --prefix client`

CSS Compiler (Tailwind):

`cd client`

`npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch`

---

## Technologies Used

### Image Upload with Active Storage

[Great Breakdown](https://youtu.be/1cw6qO1EYGw)

Build your resources (most importantly, the views):

`rails g scaffold`