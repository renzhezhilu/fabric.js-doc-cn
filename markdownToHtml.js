// https://www.cnblogs.com/djtao/p/6224399.html

const marked = require("marked");
marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, language) {
      const hljs = require('highlight.js');
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      return hljs.highlight(validLanguage, code).value;
    },
    pedantic: false,
    gfm: false,
    tables:false,
    breaks: true,
    sanitize: false,
    smartLists: false,
    smartypants: false,
    xhtml: false
  });
const fs = require("fs");
const path = require("path");

const markdownDir = './doc'
const htmlDir = './html'

// 读取md文件夹
// let mdFiles = fs.readdirSync('./doc');
// files.forEach(function(filename) {
//     var fullname = path.join(dir, filename);
//     var stats = fs.statSync(fullname);
//     if (stats.isDirectory()) filename += '/';
//     process.stdout.write(filename + '\t' +
//         stats.size + '\t' +
//         stats.mtime + '\n'
//     );
// });

function readAllMd(dir = markdownDir) {
    return new Promise((res, rej) => {
        let files = []
        let mkdir = []

        function read(dir,ceng=1) {
            let mdFiles = fs.readdirSync(dir);
            mdFiles.forEach(function(filename) {
                var fullname = path.join(dir, filename);
                // console.log(fullname);
                var stats = fs.statSync(fullname);
                if (stats.isDirectory()) {
                    read(fullname,2)
                } else {
                    if (path.extname(fullname) === '.md') {

                            if(!mkdir.includes(dir)&&ceng!=1){
                                mkdir.push(path.basename(dir))
                            }
                        files.push({
                            name: path.basename(fullname).replace('.md',''),
                            dir: path.basename(dir),
                            path: path.basename(fullname),
                            content:fs.readFileSync(fullname,'utf-8')
                        })
                    }

                }
            });

        }
        read(dir)
        res({
            files,mkdir:[...new Set(mkdir)]
        })
    })
}
function creatMkdir(){

}
(async () => {
    // fs.rmdirSync(htmlDir);
    // fs.mkdirSync(htmlDir);
    let allMd = await readAllMd()
    // allMd.mkdir.map(m=>{
    //     fs.mkdirSync(`html/${m}`);
    // })
    // console.log(allMd);
    allMd.files.map(m=>{
        const html = marked(m.content);
        fs.writeFileSync(`./html/${m.dir}/${m.name}.html`,html,'utf-8')
        console.log(m.name);
    })
    // console.log(allMd[2].content, marked(allMd[2].content));
})()


// var files = fs.readFileSync('./package.json', 'utf-8')
// console.log(files);
// const html = marked('# Marked in Node.js\n\nRendered by **marked**.');
// console.log(html);