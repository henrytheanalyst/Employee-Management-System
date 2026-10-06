import pool from "../db.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup=async (req,res) => {
    try {
        const {organization_name,email,password}=req.body;
        if(!organization_name || !email ||!password){
            return res.status(400).json({
                message:"All fields are required for signup"
            })
        }
        const hashedPassword=await bcrypt.hash(password,12)
        const result=await pool.query(
            `INSERT INTO employers(organization_name,email,password)
             VALUES($1,$2,$3) RETURNING id,organization_name,email`,[organization_name,email,hashedPassword]);
        res.status(201).json({
            message:`User ${email} created successfully`,
            data:result.rows[0]
        })
    } catch (error) {
        console.error(error);
        
        if(error.code === "23505"){
            return res.status(409).json({
                message:"Account exists"
            })
        }
        res.status(500).json({
            message:"Problem encountered in signup"
        })

    }
}

export const login=async (req,res) => {
    try {
        const {email,password}=req.body;
        if(!email ||!password){
            return res.status(400).json({
                message:"All fields are required for login"
            })
        }
        const result=await pool.query(`SELECT * FROM employers WHERE email=$1`,[email]);
        if(result.rows.length === 0){
            return res.status(400).json({
                message:"Account does not exist"
            })
        }
        const user=result.rows[0];
        const passMatch=await bcrypt.compare(password,user.password);
        if(!passMatch){
            return res.status(400).json({
                message:"Incorrect Password"
            })
        }
        const token=jwt.sign(
            {
                id:user.id,
                email:user.email
            },
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        )
        res.status(200).json({
            message:"Login Successful",
            token:token
        })
    } catch (error) {
        res.status(500).json({
            message:"Problem encountered in signup"
        })

    }
}