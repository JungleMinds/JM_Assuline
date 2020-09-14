const client = require('@sendgrid/mail')

function sendEmail(client, values, receiver) {
  return new Promise((fullfill, reject) => {
    const data = {
      personalizations: [
        {
          to: [{ email: receiver }],
        },
      ],
      from: { email: receiver, name: 'Contact formulier assuline.nl' },
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

    client
      .send(data)
      .then(response => {
        fullfill(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

exports.handler = function(event, context, callback) {
  const { SENDGRID_API_KEY, ASSULINE_EMAIL } = process.env
  const values = JSON.parse(event.body)

  client.setApiKey(SENDGRID_API_KEY)
  sendEmail(client, values, ASSULINE_EMAIL)
    .then(response => {
      console.log('Successfully sent mail')
      callback(null, { statusCode: response.statusCode })
    })
    .catch(err => {
      console.log('Failed to send mail')
      callback(err, null)
    })
}
