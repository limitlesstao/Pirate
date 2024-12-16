/*脚本引用https://raw.githubusercontent.com/Marol62926/MarScrpt/main/naiyou.js
*/
var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.vip = true

body = JSON.stringify(obj);
$done({body});
