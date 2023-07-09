const nodeMailer = require("nodemailer");

const html = ` 
<h1>Hello World!</h1>
<p>This is a test email.</p>
`;

async function main() {
  const transporter = nodeMailer.createTransport({
    host: "mail.openjavascript.info",
    port: 465,
    secure: true,
    auth: {
      user: "test@openjavascript.info", // use your own email
      pass: "NodeMailer123",
    },
  });

  const info = await transporter.sendMail({
    from: "test@openjavascript.info", // use your own email
    to: "test2@openjavascript.info", // use your own 2:nd email
    subject: "Testing, testing, 123",
    html: html,
  });

  console.log("Message sent" + info.messageId);
}

main().catch((e) => console.log(e));
