const fs = require('fs');
const path = require('path');

const sourceFolder = './'; 
const targetFolder = './spdf'; 
const targetFolder2 = './stxt';

if (!fs.existsSync(targetFolder)) {
  fs.mkdirSync(targetFolder);
}

if (!fs.existsSync(targetFolder2)) {
    fs.mkdirSync(targetFolder2);
  }

fs.readdirSync(sourceFolder).forEach(file => {
  const filePath = path.join(sourceFolder, file);
  const fileExtension = path.extname(file);

  if (fileExtension.toLowerCase() === '.pdf') {
    const targetFilePath = path.join(targetFolder, file);

    
    fs.renameSync(filePath, targetFilePath);
    console.log(`Moved ${file} to ${targetFolder}`);
  }
  if(fileExtension.toLowerCase()==='.txt'){
    const targetFilePath=path.join(targetFolder2,file);
    fs.renameSync(filePath, targetFilePath);
    console.log(`Moved ${file} to ${targetFolder2}`)
  }
});


