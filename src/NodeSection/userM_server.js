import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';
import pkg from 'pg';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const net = express();
net.use(bodyParser.json());

const allowedOrigins = ["https://personalmedassist-abdul.netlify.app" , 'http://localhost:5173' , 'https://personal-medical-assistance-abdul.onrender.com'];

net.use(cors({
  origin: function(origin , callback){
    if(!origin || allowedOrigins.includes(origin)){
      callback(null , true);
    }
    else{
      callback(new Error("Not Allowed By CORS"));
    }
  },
  methods: ["GET", "POST"],
  credentials: true,
}));

const { Pool } = pkg;

const q = new Pool({
  user: "med_abdul_pro_user",
  password: "5kZhZMazgBMP7Q6uNQC7tsFMmNjQ3vyz",
  host: "dpg-d5oro2hr0fns73agtd30-a.oregon-postgres.render.com",
  port: 5432,
  database: "med_abdul_pro",
  ssl: {
    rejectUnauthorized: false
  }

});

q.query(`
  CREATE TABLE IF NOT EXISTS userMedTable(
    user_id UUID PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_age INT NOT NULL,
    user_gender VARCHAR(50) NOT NULL,
    user_password VARCHAR(500) NOT NULL
  )
`);

// REGISTER
net.post('/register', async (req, res) => {
  const { userName, userAge, userGender, userPassword } = req.body;
  const userIdGen = uuidv4();

  

  try {
    const hashedPassword = await bcrypt.hash(userPassword, 10);

    await q.query(
      `INSERT INTO userMedTable(user_id, user_name, user_age, user_gender, user_password)
       VALUES ($1, $2, $3, $4, $5)`,
      [userIdGen, userName, userAge, userGender, hashedPassword]
    );

    res.status(201).json({ message: "User Registration Success!" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error Registering user' });
  }

  
});

// LOGIN
net.post('/login', async (req, res) => {
  try {
    const { userName, userPassword } = req.body;

    const result = await q.query(
      "SELECT * FROM userMedTable WHERE user_name=$1",
      [userName]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const useUser = result.rows[0];
    console.log(useUser);
    const valid = await bcrypt.compare(userPassword, useUser.user_password);

    if (!valid) {
    
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ id: useUser.user_id }, 'secretkey', { expiresIn: '1h' });

   
     res.json({
      token , user:{id : useUser.user_id , name : useUser.user_name, age:useUser.user_age , gender :useUser.user_gender}
    
    });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: 'Error Logging In..' });
  }
});

net.listen(1230, () => {
  console.log(`Server running on http://localhost:1230`);
  console.log(`Register on http://localhost:1230/register ...`);
  console.log(`Login on http://localhost:1230/login ...`);
});