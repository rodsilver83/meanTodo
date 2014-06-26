/**
 * Created by ccagnas on 26/06/14.
 */

var fs = require('fs');

exports.upload = function (req,res) {
  fs.readFile(req.files.image.path, function (err, data) {
    var newPath = __dirname + "/uploads/" + req.files.image.originalFilename;
    fs.writeFile(newPath, data, function (err) {
      res.redirect("back");
    });
  });
};