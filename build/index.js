const fs = require('fs');
const url = require('url')

const basePath = '.';

const problems = [];
const attemptedProblems = ['653', '662'];

fs.readdir(basePath, (err, files) => {
    if (err) throw err;
    const dirs = files.filter(f => /[\d]{3}/.test(f));
    dirs.forEach((d, i) => {
        const readme = url.resolve(basePath, d + '/README.md');
        fs.readFile(readme, 'utf8', (err, data) => {
            if (err) throw err;
            let num, title, status, difficulty, tags;
            // RegExp match num, title, difficulty, tags;
            // console.log('Parsing', readme, '......');
            try {
                [, num, title] = data.match(/^## ([\d]{1,3})\. ([\w \(\)\[\]\-`'"]+)\n/);
                [, difficulty] = data.match(/__\[Difficulty\]__: _`(Easy|Medium|Hard)`_/);
                [, tags] = data.match(/__\[Tag\]__: (.*?)\n/);
                tags = tags.match(/_`([\w ]+)`_/g).map(d => d.replace(/[_`]/g, ''));
            } catch (e) {
                throw e;
            }
            if (attemptedProblems.indexOf(num) === -1) {
                status = 'Solved';
            } else {
                status = 'Attempted';
            }
            const p = { num, status, title, difficulty, tags };
            problems.push(p);
            if (dirs.length === problems.length) {
                fs.writeFile(url.resolve(basePath, 'assets/json/problems.json'), JSON.stringify(problems), (err) => {
                    if (err) throw err;
                    console.log('problems.json generated!')
                }) 
            }
        })
    })
})
