const rimraf = require('rimraf')
const path   = require('path');
const gulp   = require('gulp');

const sourceFiles = [
    'inspiring-leadership.mod',
    'inspiring-leadership/**'
];

const destination = path.join(process.env.HOMEDRIVE + process.env.HOMEPATH, '/Documents/Paradox Interactive/Hearts of Iron IV/mod/');


module.exports = {
    copy: () => {
        for (let glob of sourceFiles) {
            const path = destination + glob
            console.log('Removing:', path)
            rimraf.sync(path)
        }
        return gulp.src(sourceFiles, {base: './'})
            .pipe(gulp.dest(destination));
    }
}
