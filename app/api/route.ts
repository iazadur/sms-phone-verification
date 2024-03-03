export async function GET() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     // 'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const data = await res.json()
  const data = {
    message: "Hello, World!",
  };

  // Your AccountSID and Auth Token from console.twilio.com
  const accountSid = "AC1ef6c9382be4dafd0f24320d07403755";
  const authToken = "d048675d4c1a493785dc812279ccf340";

  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: "Hello from twilio-node",
      to: "+8801991666031", // Text your number
      from: "+19497102287", // From a valid Twilio number
    })
    .then((message:any) => {
        console.log(message.sid);
        return Response.json(message);
    });

}
