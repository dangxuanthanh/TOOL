import {
	src,
	dest
} from "gulp";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import plumber from "gulp-plumber";
import {
	readFileSync
} from "graceful-fs";

export const jsGlobal = () => {
	let glob = JSON.parse(readFileSync("config.json"))
	return src(glob.js, {
			allowEmpty: true
		})
		.pipe(plumber())
		.pipe(concat("global.min.js"))
		.pipe(uglify())
		.pipe(dest("view/js"))
};

module.exports = jsGlobal;
