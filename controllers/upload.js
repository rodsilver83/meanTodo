/**
 * Created by ccagnas on 26/06/14.
 */
var fs = require('fs');
var path = require('path');
var appDir = path.dirname(require.main.filename);

var crypto = require('crypto');

exports.upload = function (req,res) {
  var hash = crypto.createHash('md5').update(req.files.image.originalFilename+Date.now()).digest('hex');
  var ext = path.extname(req.files.image.originalFilename);

  fs.readFile(req.files.image.path, function (err, data) {
    var newPath = appDir + "/uploads/" + hash + ".jpg";
    fs.writeFile(newPath, data, function (err) {
      if(err) {
        res.send(err);
      }

      res.json(hash + ext);
    });
  });
};