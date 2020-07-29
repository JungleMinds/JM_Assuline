const sgMail = require('@sendgrid/mail')

export function handler(event, _, callback) {
  const { SENDGRID_API_KEY, ASSULINE_EMAIL } = process.env
  const values = JSON.parse(event.body)

  sgMail.setApiKey(SENDGRID_API_KEY)
  const msg = {
    personalizations: [
      {
        to: [{ email: ASSULINE_EMAIL }],
      },
    ],
    from: { email: values.email, name: values.name },
    subject: `Contactaanvraag van (potentiële) klant`,
    content: [
      {
        type: 'text/plain',
        value: `Onderstaande (potentiële) klant heeft het contactformulier op de website ingevuld en wil graag benaderd worden:\n\n
E-mailadres: ${values.email}\r
Naam: ${values.name || 'Dit veld is door de aanvrager niet ingevuld'}\r
Telefoonnummer: ${values.phone ||
          'Dit veld is door de aanvrager niet ingevuld'}`,
      },
    ],
  }
  //ES6
  sgMail
    .send(msg)
    .then(response => {
      console.log('EMAIL FROM: ', values.email)
      callback(null, {
        // return null to show no errors
        statusCode: response.statusCode,
        body: JSON.stringify({
          status: response.statusCode,
        }),
      })
    })
    .catch(error => {
      console.log('ERROR: ', JSON.stringify(error))
      callback(error, null)
    })
}
