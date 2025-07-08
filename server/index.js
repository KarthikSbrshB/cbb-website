import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// (Contact endpoint removed; handled by EmailJS on frontend)

app.listen(PORT, () => {
    console.log(`CBB backend listening on port ${PORT}`);
});