 module.exports = ageCheck = (req,res,next)=>{
   const age = parseInt(req.query.age)
   if(age < 18 || !age)
      return res.status(403).send('Access denied')
   next()
}



