// import jwt from 'jsonwebtoken';

// export const authenticateToken = (req, res, next) => {
//   const authHeader = req.header('authorization');

//   const token = req.headers['authorization']?.split(' ')[1]; // Split "Bearer token"
//   if (!token)
//     return res.status(401).json({ error: 'Access denied. No token provided.' });

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(400).json({ error: 'Invalid token.' });
//     req.user = decoded;
//     next();
//   });
// };
