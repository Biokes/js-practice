print = console.log
const json = '{"result": true , "count": 42}';
const obj = JSON.parse(json)
print(obj.count);
print(obj.result);
print(JSON.stringify(obj))
print(JSON.stringify({x:5, y:6}));