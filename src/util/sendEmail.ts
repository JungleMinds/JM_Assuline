const sendEmail = async (contactDetails: {
  name: string
  email: string
  phone: string
}) => {
  try {
    const url =
      'https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send'
    const headers = {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    }
    const data = {
      personalizations: [
        { to: [{ email: process.env.ASSULINE_EMAIL_ADDRESS }] },
      ],
      from: { email: contactDetails.email },
      subject: 'Coming from Assuline website',
      content: [
        {
          type: 'text/plain',
          value: `
            Name: ${contactDetails.name || 'Not provided'},
            Email: ${contactDetails.email},
            Phone: ${contactDetails.phone || 'Not provided'}`,
        },
      ],
    }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response
  } catch (error) {
    throw new Error(error)
  }
}

export default sendEmail
