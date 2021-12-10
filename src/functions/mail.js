const nodemailer = require('nodemailer')

exports.handler = function(event, context, callback) {
  const { ASSULINE_EMAIL, HOTMAIL_USER, HOTMAIL_PASS } = process.env

  const values = JSON.parse(event.body)

  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: HOTMAIL_USER,
      pass: HOTMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `Assuline.nl <${HOTMAIL_USER}>`,
    to: ASSULINE_EMAIL,
    subject: `Contactaanvraag van (potentiële) klant`,
    text: `
      Onderstaande (potentiële) klant heeft het contactformulier op de website ingevuld en wil graag benaderd worden:\n\n
      E-mailadres: ${values.email}\r
      Naam: ${values.name || 'Dit veld is door de aanvrager niet ingevuld'}\r
      Telefoonnummer: ${values.phone ||
        'Dit veld is door de aanvrager niet ingevuld'}`,
  }

  transporter.sendMail(mailOptions, err => {
    if (err) {
      console.info('Failed to send email...')
      callback(err, null)
    } else {
      console.info('Email succesfully sent!')
      return callback(null, {
        statusCode: 202,
        body: 'Email succesfully sent!',
      })
    }
  })
}
