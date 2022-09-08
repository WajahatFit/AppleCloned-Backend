
const isAdmin = (req, res, next) => {
    const payload = req.payload;
    if (payload.role === 'admin'){
      next()
    } else {
      return res.status(401).json('Access Denied')
    }
  }
  
  
module.exports = isAdmin;
