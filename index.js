const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose')
const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});


const db = async()=>{
  try{
    await mongoose.connect(`mongodb+srv://sreeyadalla:sreenija@cluster0.lpr3m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(res=>console.log('connected'))
    .catch(e=>
      console.log('failure' ,e)
    )
  }
  catch(e){
    console.log(e)
  }
}
db()


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
