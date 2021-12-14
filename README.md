# Assuline

[![Netlify Status](https://api.netlify.com/api/v1/badges/4440166d-5d55-4e9d-a376-212cd4ebcfcd/deploy-status)](https://app.netlify.com/sites/assuline/deploys)

A rebuild of the Assuline website using Gatsby.

## 🚀 Quick start

1. **Install**

   Use yarn to install all dependencies.

   ```sh
   yarn
   ```

2. **Set environment variables**

   Copy `.env` file and create and paste a new `.env.local` file. Get the environment variables you need from Netlify or one of the contributors.

3. **Start developing.**

   Navigate into your new site’s directory and start it up.

   ```sh
   yarn start
   ```

   Your site is now running at [http://localhost:8000](http://localhost:8000)

## 🧪 Local testing Nodemailer

To test Nodemailer in your local environment:

- open a new terimal tab
- export NODE_ENV=production
- export HOTMAIL_USER=email@hotmail.com (this will be used to send emails)
- export HOTMAIL_PASS=password
- export ASSULINE_EMAIL=your@email.to.test (this will get the emails from form submit)
- `yarn start:functions`

## 🧑‍💻 Contributors

- Tijmen Overman - [tijmen.overman@jungleminds.nl](mailto:tijmen.overman@jungleminds.nl?subject=[Github]%20Assuline)
- Bart Beemster - [bart.beemster@jungleminds.nl](mailto:bart.beemster@jungleminds.nl?subject=[Github]%20Assuline)
- Süheyb Coşkun - [suheyb.coskun@jungleminds.nl](mailto:suheyb.coskun@jungleminds.nl?subject=[Github]%20Assuline)
