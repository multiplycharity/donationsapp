// import config from '../../../config.json'
require('dotenv').config()
if (!process.env.MAILCHIMP_API_KEY) {
  throw new Error('MAILCHIMP_API_KEY env var should be provided')
}

if (!process.env.MAILCHIMP_LIST_ID) {
  throw new Error('MAILCHIMP_LIST_ID env var should be provided')
}

import Mailchimp from 'mailchimp-api-v3'

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY)

export async function get (req, res, next) {
  mailchimp
    .post(`/lists/${process.env.MAILCHIMP_LIST_ID}/members/`, {
      email_address: req.query.email,
      status: 'subscribed'
    })
    .then(result => {
      res.json({ success: true, result })
    })
    .catch(err => {
      if (err.status === 400 && err.title === 'Member Exists') {
        return res.json({ success: true, error: err })
      }
      console.error(err)
      res.json({ success: false, error: err })
    })
}
