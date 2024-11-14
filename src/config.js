import { config } from "dotenv";
config();

export const DATABASE_URL = process.env.DATABASE_URL;
export const PORT = process.env.PORT;
export const ORIGIN = process.env.ORIGIN;
export const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
export const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
export const MAILGUN_RECIPIENT = process.env.MAILGUN_RECIPIENT;