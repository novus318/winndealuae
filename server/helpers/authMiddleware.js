import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user data to the request object
    req.user = decoded;

    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
};

export default verifyToken;
