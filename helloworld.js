/**
 * Created by haifeng on 16/3/29.
 */

var fs = require('fs')

module.exports = function (path, ext, callback){
	var fileList = new Array();
	var regex = new RegExp("\\." + ext + "$");
	var i = 0;
	fs.readdir(path, function thisCall(err, list){
		if(err){
			return callback(err);
		}else{
			list.forEach(function (file){
				if(regex.test(file)){
					fileList[i] = file;
					i ++;
				}
			})
			return callback(null, fileList);
		}
	})

}