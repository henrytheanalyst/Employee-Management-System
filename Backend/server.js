import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import pool from './db.js';
import authRoutes from './Routes/authRoutes.js';
import employeeRoutes from './Routes/employeeRoutes.js';

const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use('/api/auth/',authRoutes);
app.use('/shell/',authRoutes)


app.use('/test',async(req,res)=>{
    try {
        const result=await pool.query(`SELECT NOW()`);
        res.status(200).json({
            message:"Database connection successfull",
            time:result.rows[0].now
        })
    } catch (error) {
        console.error(error);
        
        res.status(500).json({
            message:"Database connection failed",
            error:error
        })
    }
})

const port =Number(process.env.PORT || 3000);

app.listen(port,()=>{
    console.log(`Server up and running on port ${port}`);
    
})