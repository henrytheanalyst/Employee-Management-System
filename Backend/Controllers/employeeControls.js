import pool from "../db.js";
export const createEmployee=async (req,res) => {
    try {
        const {fullname,email,team}=req.body;
        if(!fullname|| !email ||!team){
            return res.status(401).json({
                message:"All fields are required"
            })
        }
        const result=await pool.query(`INSERT INTO employees(fullname,email,team) VALUES $1,$2,$3 `,[fullname,email,team]);
        res.status(201).json({
            message:`Employee ${fullname} created successfully `
        })
    } catch (error) {
        console.error(error);
        
        if(error.code === "23505"){
            return res.status(400).json({
                message:"Email exists"
            })
        }
        res.status(500).json({
            message:"Error encountered in employee creation"
        })
    }
}