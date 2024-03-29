const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const users = require('../data/users.js');
const jwtSecret = '6b49b1141686633a0884ca3688723e6758461c0c17b9e57490586dd7ec5817df699310';

const login = async (req, res, next) => {
    const { userId } = req.body
    // Check if username provided
    if (!userId) {
        return res.status(400).json({
            message: "Username not present",
        })
    }
    try {
        let user;
        if (process.env.USE_DB === 'true') {
          user = await User.findOne({ userId })
        } else {
          user = users.find(u => u.userId === userId)
        }
        
        if (!user) {
        res.status(400).json({
            message: "Login not successful",
            error: "User not found",
        })
        } else {
            const maxAge = 24 * 60 * 60;
            const token = jwt.sign(
                { id: userId },
                jwtSecret,
                {
                    expiresIn: maxAge, // 24hrs in sec
                }
            );
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: maxAge * 1000, // 24hrs in ms
            });
            res.status(201).json({
                user: user.userId,
                token: token
            });
        }
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        });
    }
};

const getUserId = (token) => {
  let userId;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (decodedToken) {
        userId = decodedToken.id
      }
    })
  }
  return String(userId);
}

const auth = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
      jwt.verify(token, jwtSecret, (err, decodedToken) => {
        if (err) {
          return res.status(401).json({ message: "Not authorized" })
        } else {
          if (decodedToken) {
            next()
          }
        }
      })
    } else {
      return res
        .status(401)
        .json({ message: "Not authorized, token not available" })
    }
  }

module.exports = {
    login,
    auth,
    getUserId
};