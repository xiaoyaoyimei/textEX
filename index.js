var xlsx = require('node-xlsx');
var fs = require('fs');
// 解析得到文档中的所有 sheet
var sheets = xlsx.parse('商家版翻译文件to Developer.xlsx');
var yuandata=[],yichulidata=[];


let objzh={},objen={},objpt={},objes={},objnl={},objfr={},objpl={};
var daichuli=sheets[0]['data'];
    for(let rowId in daichuli){
      const row = daichuli[rowId]
      if(rowId>0){
      	if(row[0]){
      		yichulidata.push(row[0])
      		objzh[row[0]]=row[2]
      		objen[row[0]]=row[4]
      		objpt[row[0]]=row[6]
      		objes[row[0]]=row[8]
      		objnl[row[0]]=row[10]
      		objfr[row[0]]=row[12]
      		objpl[row[0]]=row[14]
      	}
      }
      }
    yuandata[0]={name:'zh.js',value:objzh};
    yuandata[1]={name:'en.js',value:objen};
    yuandata[2]={name:'pt.js',value:objpt};
    yuandata[3]={name:'es.js',value:objes};
    yuandata[4]={name:'nl.js',value:objnl};
    yuandata[5]={name:'fr.js',value:objfr};
    yuandata[6]={name:'pl.js',value:objpl};
    yuandata.forEach((item, index) => {
      	 fs.writeFile(item.name, JSON.stringify(item.value, null, '\t'), error => {
			if (error) return console.log("写入文件失败,原因是" + error.message);
			 console.log("写入成功");
			});
    })
	var nary = yichulidata.sort();
	for(var i = 0; i < nary.length - 1; i++) {
//		if(nary[i] != nary[i + 1]) {
//			yichulidata.push([nary[i]])
//		}
		if(nary[i] == nary[i + 1]){
			console.log('重复内容'+nary[i])
		}
	}



//fs.writeFile("test.js", JSON.stringify(objzh, null, '\t'), error => {
//if (error) return console.log("写入文件失败,原因是" + error.message);
//console.log("写入成功");
//});

// 写入文件EXECL
//var xieru = [{
//      name: 'fang',
//      data: yichulidata
//  }
//]
//var buffer = xlsx.build(xieru);
//fs.writeFile('zh.xlsx', buffer, function(err) {
//  if (err) {
//      console.log("Write failed: " + err);
//      return;
//  }
//  console.log("Write completed.");
//});

   // console.log(data)
// 遍历 sheet
//sheets.forEach(function(sheet){
    //console.log(sheets[]);
    // 读取每行内容
//  for(var rowId in sheet['data']){
//      console.log(rowId);
//      var row=sheet['data'][rowId];
//      console.log(row);
//  }
//});
