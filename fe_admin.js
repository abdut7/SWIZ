const express=require('express');
const path=require('path')
const app=express();
try {
app.use(express.static(path.join(__dirname,'trade-app-frontend')));
app.use((req,res,next)=>{
    res.sendFile(__dirname+'/trade-app-frontend/index.html')
     next()
})
app.get('/*',(req,res)=>{
    res.sendFile(__dirname+'/trade-app-frontend/index.html')
})
app.listen(4001, function () {
    console.log('App is listening on port 4000' );
});
} catch (error) {
    console.log(error);
   // res.sendFile(__dirname,'trade-app-frontend','index.html')
    
}