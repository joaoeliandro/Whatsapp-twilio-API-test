//const twilio = require('twilio') //import
const client = twilio(
    process.env.TWILIO_ACCOUNT_SID = "string account ssid",
    process.env.TWILIO_AUTH_TOKEN = "string of auth"
)

client.messages.create({
    from: 'whatsapp:+14155238886', // number of the API
    to: 'whatsapp:your number', // exemple: +5511994345723
    body: 'Hello, World!... test in javascript' // Message
}).then(message => {
    console.log(message.sid)
})