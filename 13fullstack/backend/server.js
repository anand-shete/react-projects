import express from 'express';              // works little asynchronously while commonjs works synchronously
import userRoute from './routes/user.js';
import connectDB from './config/db.js';

const app = express();
const PORT = 3000;

await connectDB();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoute)

app.get('/', (req, res) => {
    res.end("Healtcheck passed")
})

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`,))