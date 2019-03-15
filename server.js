const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
require('./backend/routes')(app);


app.listen(8000, function() {
    console.log("listening on port 8000");
})



// ////////////////////////////////////////////


// app.get('/tasks', function(req, res) {
//     Task.find({}, function(err, tasks) {
//       if (err) {
//         console.log("Something went wrong!", err);
//         res.json({message: "Error", error: err});
//       } else {
//         console.log(tasks)
//         res.json({message: "Success! Displaying all tasks:", tasks: tasks})
//       }
//     })
// })


// app.get('/tasks/:id', function(req, res) {
//     let id = req.params.id;
//     Task.find({_id: id}, function(err, task) {
//     if (err) {
//         console.log("Something went wrong!", err);
//         res.json({message: "Error", error: err});
//     } else {
//         console.log("Success!", task);
//         res.json({message: "Success! Displaying task:", task: task})
//     }
//   })
// })


// app.post('/tasks/new', function(req, res) {
//     console.log("REQUEST", req.body.title)
//     var task = new Task({title: req.body.title, description: req.body.description, completed: req.body.completed });
//     task.save(function(err) {
//       if (err) {
//         console.log("Something went wrong while adding a task!", err);
//         res.json({message: "Something went wrong while adding a task!", error: err});
//       } else {
//         console.log('Successfully added a task!');
//         res.json({message: "Successfully added a task!", task: task})
//       }
//     })
// })


// app.put('/tasks/:id', function(req, res) {
//     let id = req.params.id;
//     Task.findById(id, function(err, task) {
//       if (err) {
//         console.log('something went wrong');
//       } else {
//         if (req.body.title) {
//           task.title = req.body.title;
//         }
//         if (req.body.description) {
//           task.description = req.body.description;
//         }
//         if (req.params.completed) {
//           task.completed = req.body.completed;
//         }
//         task.save(function(err) {
//           if (err) {
//               console.log("Something went wrong while updating task", err);
//               res.json({message: "Something went wrong while updating task!", error: err});
//           } else { 
//               console.log('Successfully updated a task!');
//               res.json(task)
//           }
//         })
//       }
//     })
// })


// app.delete('/tasks/:id', function(req, res) {
//     let id = req.params.id;
//     Task.remove({_id: id}, function(err) {
//       if (err){
//         console.log("Something went wrong whilt removing a task", err);
//         res.json({message: "Error", error: err});
//       }else {
//         console.log('Successfully removed a task!');
//         res.json({message: "Successfully removed a task!"})
//       }
//     })
// })

