import config from '../../config.json'

const saveToMailchimp = async email => {
  try {
    const response = await axios.post(
      `https://us19.api.mailchimp.com/3.0/lists/${config.MAILCHIMP_LIST_ID}/members`,
      {
        email_address: $emailStore,
        status: 'subscribed'
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:
            'Basic ' +
            Buffer.from(`user:${config.MAILCHIMP_API_KEY}`, 'utf8').toString(
              'base64'
            )
        }
      }
    )

    if (
      response.status < 300 ||
      (response.status === 400 && response.body.title === 'Member Exists')
    ) {
      return { success: true, response }
    } else {
      return { success: false, response }
    }
  } catch (error) {
    return { success: false, error }
  }
}

export default saveToMailchimp
