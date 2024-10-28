/* eslint-disable @typescript-eslint/no-require-imports */
import cors from 'cors'; // Importando o cors
import express from 'express';
import mongoose from 'mongoose';
import routes from "./routes/routes";

require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL!;
mongoose.connect(MONGO_URL);

const app = express();

// Configurando o CORS
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.use('/', routes);

app.listen(3030, () => {
    console.log("Server running on http://localhost:3000/");
});
