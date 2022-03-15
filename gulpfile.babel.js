import {
	series,
	parallel
} from "gulp";

// Import tasks
import server from "./_gulptasks/server";
import pugTask from "./_gulptasks/html";
import jsGlobal from "./_gulptasks/global-js";
import cssGlobal from "./_gulptasks/global-css";
import sassTask from "./_gulptasks/css";
import jsTask from "./_gulptasks/script";
import {
	cleanView
} from "./_gulptasks/clean";
import {
	copyFonts,
	copyImage,
	copyFavicon
} from "./_gulptasks/copy";

exports.default = series(
	cleanView,
	parallel(
		copyFavicon,
		copyImage,
		copyFonts,
	),
	parallel(
		jsGlobal,
		cssGlobal
	),
	sassTask,
	jsTask,
	pugTask,
	server,
)
