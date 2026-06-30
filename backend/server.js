import express from 'express'
import 'dotenv/config'
import cors from 'cors';
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';
import interviewRoutes from './routes/interviewRoutes.js'
import companyRouter from './routes/companyRoutes.js';
import router from './routes/sendGridRoute.js';
import geminiRouter from './routes/geminiRoutes.js';

// init
const app = express();

// connect DB
await connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('Server is Running');
});

app.use('/api/user', userRouter);
app.use('/api/interviews', interviewRoutes);
app.use('/api/company', companyRouter);
app.use('/api/email', router);
app.use('/api/msg', geminiRouter);

// server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});
