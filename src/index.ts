import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});


// Array of quotes
const quotes: string[] = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "The best way to predict the future is to create it. – Peter Drucker"
];

// Route to get a random quote
app.get("/quotes", (req: Request, res: Response) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  return res.json({ quote: randomQuote });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


