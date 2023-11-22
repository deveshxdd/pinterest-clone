const express = require('express')
const app = express()
const port = 6001
const User = require('./models/user')
const post = require('./models/post')

app.get('/createuser',async(req,res)=>{
const userdetails = await User.create({
    username: "iamdevesh12",
      password: "12345tt",
      email: "udevesh721@gmail.com",
      fullName: "Devesh Upadhyay"
      // jo v humne user banaya h uski id banke taiyar hogyi hai
})
res.send(userdetails)
})
 // tumne user bana liya jisse tumhe ek id mili user ki waise hi jb tum post banaoge to uski ek id milegi jise tum user 
 // section wale post me jo ek array hai waha daal doge

app.get('/createpost',async(req,res)=>{
  const userpost =  await post.create({
      postText: "durgesh photo",
      user: "65575271613245d085ae37df"
      // user ki id find krni h jisme post kiya h aur uske andar post ki id array me daal deni h jisse posts ki collection mil jaaegi
   }) 

   let user = await User.findOne({_id:"65575271613245d085ae37df"})
   user.posts.push(userpost._id)
   // hume khud se save krna hota hai
   await user.save()
   res.send("<h1>done</h1>")
})
// ab jo post banega uski ek id v milegi jise hume jo posts hai uske array ke andar dalna hai 
// jo user bana uske paas ek unique id hai aur jo post bana uske paas ek unique id hai
// hamara main task ye h ki jo post jis user se related hai unke lia ek data association model banae 

app.get('/alluserposts',async(req,res)=>{
    const userpost = await User.findOne({_id:"65575271613245d085ae37df"}).populate('posts')
    res.send(userpost)
})

// ye jitne v posts h unki id return krrha hai lekin hum unka aachar thodi dalenege hume to id ke jagah data chahia


//----> MAGIC DEKHO TUMNE USER KE ANDAR JO POSTS ARRAY USME TUMNE POSTS IN ID DALI THI AUR UNKO REF KIYA THA POST JO BANA RHE USME SO AGAR
// HUM POPULATE(jis v schema ko populate krna hai ) USE KRE TO WO ID SE JO V POST HAI UNKI DETAILS KO DHUNDH LEGA

app.listen(port,()=>{
    console.log("server started at port ",port)
})