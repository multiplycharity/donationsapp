import { Schema, model } from 'mongoose'

const webhookSchema = new Schema({
  data: { type: Object, required: true }
})

export const Webhook = model('Webhook', webhookSchema)

export async function post (req, res, next) {
  const wh = new Webhook({ data: req.body })

  console.log('wh: ', wh)
  await wh.save()
  console.log('gere')

  return res.end(JSON.stringify({ success: true }))
  next()
  //   if (true) {
  //     res.setHeader('Content-Type', 'application/json')
  //     res.end('Works')
  //   } else {
  //     next()
  //   }
}
