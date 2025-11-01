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
  return res.json({ status: "success", quote: randomQuote });
});

app.get("/random-age", (req: Request, res: Response) => {
  const randomAge = Math.floor(Math.random() * 100); // Random age between 0 and 99
  return res.json({ status: "success", message: `Your random age is ${randomAge}` });
});

app.get("/random-user", (req: Request, res: Response) => {
  const firstNames: string[] = ["John", "Jane", "Peter", "Susan", "Mike", "Chris", "Patt", "Tom", "Harry"];
  const lastNames: string[] = ["Doe", "Smith", "Jones", "Williams", "Brown", "Rock", "Loe", "Potter", "Helsinki"];

  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const name = `${randomFirstName} ${randomLastName}`;
  const email = `${randomFirstName.toLowerCase()}.${randomLastName.toLowerCase()}@example.com`;
  const age = Math.floor(Math.random() * 50) + 20; // Age between 20 and 69

  return res.json({
    status: "success",
    user: {
      name,
      email,
      age,
    },
  });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


