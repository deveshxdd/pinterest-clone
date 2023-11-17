const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/userpost').then(()=>{
//     console.log("db connected")
// }).catch(()=>{
//     console.log("db not conneccted")
// })    mongoose ko aap bss ekjagah hi connect krkste ho

// Define the post schema
const postSchema = new  mongoose.Schema({
    likes: {
      type: Array,
     default: []
     /// like ke andar jo v user like krega uski id store krenge
    },
    user:{
type: mongoose.Schema.Types.ObjectId,
ref:'User'
    },
    // jo v post h wo kis user ne kiya hai uski id yaha mil jaaegi 
    // user ke ander agar type string hota to string likhte type number to number likhte waise hi agar type id h to mongoose.schmea.type.objectid
    // ab hume pata hai ki jo andar id hai wo user ki dalni hai lekin ye baat mongoose ko kaise pata chalega so wo use ref: 'user'
    postText: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  // Create the Post model
  const Post =  mongoose.model('Post', postSchema);
  
  module.exports = Post;