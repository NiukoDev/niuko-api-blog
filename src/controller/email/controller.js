import { MAILGUN_DOMAIN, MAILGUN_RECIPIENT } from "../../config.js";
import { mg } from "../../lib/mailgun.js";

export const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await mg.messages.create(MAILGUN_DOMAIN, {
      from: name + " <" + email + ">",
      to: MAILGUN_RECIPIENT,
      subject: "Contacto desde BLOG NK",
      text: message,
    })
      .then(msg => console.log(msg))
      .catch(err => console.log(err));
    
    return res.json({ message: "Email enviado" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
