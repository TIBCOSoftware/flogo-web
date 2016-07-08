import path from 'path';

import gulp from 'gulp';
import less from 'gulp-less';

import {CONFIG} from '../../config';

/**
 * Compile less files into css files for production.
 * Excludes component less files as they will be inlined into the components,
 */
gulp.task('prod.client.less', 'Compile less files into css files for production.', () => {
  let dest = path.join(CONFIG.paths.dist.public, 'assets');
  return gulp.src(CONFIG.paths.distLess, {cwd: CONFIG.paths.source.client})
    .pipe(less({paths: CONFIG.paths.lessImports}))
    .pipe(gulp.dest(dest));
});