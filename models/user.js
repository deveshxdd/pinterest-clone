const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/userprofile').then(()=>{
    console.log("db connected")
}).catch(()=>{
    console.log("db nott connected")
})
const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      posts: [{

          type: mongoose.Schema.Types.ObjectId,
          ref: 'Post'
        // type: Schema.Types.ObjectId,
        // ref: 'Post'  ye hi hame padhna hai 



      }],
      dp: {
        type: String // Assuming you store the profile picture URL as a string
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      fullName: {
        type: String
      }
})

const User =  mongoose.model('user',userschema)

module.exports = User