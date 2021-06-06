const express = require('express');
const app = express();
const {sequelize} = require('./models');
const {curriculum, skill_item, skill} = require('./models'); // 추가요

sequelize.sync({force:false,})
.then(()=>{
    console.log('접속 완료');
}).catch(()=>{
    console.log('접속 실패');
})

app.get('/',async (res,req)=>{
    let result = await skill_item.findAll();
    console.log(result);
    res.json({result});
})

app.listen(3000,()=>{
    console.log('server start port : 3000')
})