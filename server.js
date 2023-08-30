const express = require('express');
const http = require('http');
const fs = require('fs');

const app = express();
const server = http.createServer(app);


/* 此处加载不常修改的文件 , 修改需要重启才能生效 */
// 加载模板
const template_html = fs.readFileSync(__dirname + '/src/template.html').toString();
const main_pos = template_html.indexOf("<main>") + 6;
const template_before = template_html.substring(0, main_pos), template_after = template_html.substring(main_pos, template_html.length);


app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
    // 加载 index (暂时设为常修改)
    const index_content = fs.readFileSync(__dirname + '/src/html/index.html').toString();
    const index_html = template_before + index_content + template_after;

    res.send(index_html);
});
app.get('*', (req, res) => {
    // 加载 404 (暂时设为常修改)
    const _404_content = fs.readFileSync(__dirname + '/src/html/404.html').toString();
    const _404_html = template_before + _404_content + template_after;

    res.send(_404_html);
});



server.listen(8000, () => {
    console.log('listening on http://localhost:8000/')
});
