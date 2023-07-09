const nodeMailer = require("nodemailer");

const html = ` 
<h1>Hello World!</h1>
<p>This is a test email.</p>
<img src="cid:unique@openjavascript.info" width = "400">
`;

const emails = ["test2@openjavascript.info", "test3@openjavascript.info"];

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
    to: emails,
    subject: "Testing, testing, 123",
    html: html,
    attachments: [
      {
        filename: "img1.jpg",
        path: "./img1.jpg",
        cid: "unique@openjavascript.info",
      },
      {
        filename: "img2.jpg",
        path: "./img2.jpg",
      },
    ],
  });

  console.log("Message sent" + info.messageId);
  console.log(info.accepted);
  console.log(info.rejected);
}

main().catch((e) => console.log(e));
