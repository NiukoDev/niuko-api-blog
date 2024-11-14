import { MAILGUN_API_KEY } from "../config.js";
import FormData from "form-data";
import Mailgun from "mailgun.js";
const mailgun = new Mailgun(FormData);

export const mg = mailgun.client({
  username: "api",
  key: MAILGUN_API_KEY,
});
