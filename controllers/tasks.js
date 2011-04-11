var express = module.parent.exports.express
,   Tasks   = module.exports = express.createServer()
,   path    = require("path")
,   TasksController;

var template_path = path.join(__dirname, "../views/tasks");

// Configuration//{{{
Tasks.configure(function(){
  Tasks.set("views", template_path);
  Tasks.use(express.bodyDecoder());
  Tasks.use(express.methodOverride());
  Tasks.use(Tasks.router);
  Tasks.set("view options", {
    layout: "../layout.ejs"
  });
  Tasks.dynamicHelpers({
    });
});

tasksController = {
  index:function(req,res){
    //res.send('hola mundo');
    res.render("index.ejs",{
    });
    res.end()
  }
}

Tasks.get("/", tasksController.index);



