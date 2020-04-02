module.exports = function(app, path) {
// Sets up the Express app to handle data parsing
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html")); 
  });

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));  
});
}


