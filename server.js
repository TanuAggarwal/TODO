const express=require('express');
const app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
const route=require('./routes');


app.use('/api',route);





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});