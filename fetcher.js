const request = require('request');
const fs = require('fs')

const url = process.argv[2]
const localPath = process.argv[3]


function pageDownloader (url, localPath){

  request(url, function (error, response, body) {
    if (error){
      console.log(error)
      return
    }
    fs.writeFile(localPath, body, (error) => {
      if (error){
        console.log(error)
        return
      }
      else {
        console.log(`
        download and saved ${body.length} bytes to ${localPath}
        `)
      }
    })
   
  });

}
if (!url || !localPath){
  console.log("url and localpath are required")
}
else {
  pageDownloader(url, localPath)
}



