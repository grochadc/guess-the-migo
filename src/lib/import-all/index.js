export default function importAll(dir, rx){
  let newDir = '../'+dir;
  let fileKeys = require.context(newDir, false, rx);
  fileKeys.map(fileName =>{
    let str = newDir+fileName.slice(2);
    return str;
  })
}
