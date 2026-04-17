import express from 'express';
import authRoute from './routes/authRoute.js'
const app = express();
const PORT = 3000

app.use(express.json());
app.use('/',authRoute)

app.listen(PORT, () => {
    console.log("Server Running!!!")
});
