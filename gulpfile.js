const rimraf = require('rimraf')
const path   = require('path');
const gulp   = require('gulp');

const sourceFiles = [
    'inspiring-leadership.mod',
    'inspiring-leadership/**'
];

const destination = path.join(process.env.HOMEPATH, '/Documents/Paradox Interactive/Hearts of Iron IV/mod/');

for (let glob of sourceFiles) {
    rimraf.sync(destination + glob)
}

module.exports = {
    copy: () => {
        return gulp.src(sourceFiles, {base: './'})
            .pipe(gulp.dest(destination));
    }
}
