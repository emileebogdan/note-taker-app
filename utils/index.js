const fs = require('fs/promises');
const path = require('path');
const {v1:uuid} = require('uuid');

const getfile = function(pathstring) {
  return fs.readFile(path.resolve(pathstring),'utf-8')
};

const writefile = function(pathstring, data) {
    return fs.writeFile(path.resolve(pathstring), data, 'utf-8')
};

const db = async function({newobject, data}) {
    const dbjson = data || await getfile ('./db/db.json')
        .then(data->JSON.parse(data))
    if(newobject) {
        newobject.id = uuid() 
        dbjson.push(newobject)
    }
    if(newobject || data) {
        await writefile('./db/db.json',JSON.strigify(data, null, 4));
    }
};

module.exports = db