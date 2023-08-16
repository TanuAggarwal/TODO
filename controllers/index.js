const sqlLite=require('../config/sqlLite');

module.exports.postData=async function(req, res){
    const { title, description} = req.body;
    if(title==null && description==null){
      return res.status(500).json({message:"Data is required. Please enter correct title an description"});
    }
    let completed=0;
    await sqlLite.run("INSERT INTO todos (title, description, completed) VALUES (?, ?, ?)", [title, description, completed], function(err) {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
    res.status(201).json({ id: this.lastID });
    });
  };

  module.exports.getData=async function(req, res){
    await sqlLite.all("SELECT * FROM todos", (err, rows) => {
      if (err) {
        return res.status(500).json({ message:err.message});
      }
      res.json(rows);
    });
  };
  module.exports.getDataById=async function(req, res){
    const id = req.params.id;
    await sqlLite.get("SELECT * FROM todos WHERE id=?",[id],(err, rows) => {
      if (err) {
        return res.status(500).json({ message:err.message});
      }
      res.json(rows);
    });
  };

  module.exports.deleteDataById=async function(req, res){
    const id = req.params.id;
    await sqlLite.run("Delete FROM todos WHERE id=?",[id],(err, rows) => {
      if (err) {
        return res.status(500).json({ message:err.message});
      }
      res.status(200).json({ message:"Data Deleted Sucessfully"});
    });
  };

  module.exports.updateData=async function(req, res){
    const id = req.params.id;
    const {title,description,completed}=req.body;
    let query="UPDATE todos SET "
    if(title!=null){
      query=query.concat("title='?'");
      query=query.replace("?",title);
      if(description!=null || completed!=null){
        query=query.concat(",");
      }
    }
    if(description!=null){
      query=query.concat("description='?'");
      query=query.replace("?",description);
      if(completed!=null){
        query=query.concat(",");
      }
    }
    if(completed!=null){
      query=query.concat("completed='?'");
      query=query.replace("?",completed);
    }
    query=query.concat(" where id=",id);
    console.log(query);
    await sqlLite.run(query,(err, rows) => {
      if(err){ 
        return res.status(500).json({ message:err.message});
      };
      res.status(200).json({ message:"Data Updated Sucessfully"});
    });
  };


