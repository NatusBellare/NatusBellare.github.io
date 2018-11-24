<h1>NatusBellare - quick build</h1>

<p>Author: AYuAnohin</p>

<p>Cross-browser compatibility: IE9+.</p>

<p>The template uses a Sass with <strong>Sass</strong> syntax and project structure with source code in the directory <strong>app/</strong> and production folder <strong>dist/</strong>, that contains ready project with optimized HTML, CSS, JS and images.</p>

<h2>How to use</h2>

<ol>
	<li>Install Node Modules: <strong>npm i</strong>;</li>
	<li>Run the template: <strong>gulp</strong>.</li>
</ol>

<h2>Gulp tasks:</h2>
<p>More details<p/>
<ol>
	<li>browser-sync - syncs your files, reload browser if you change them</li>
	<li>gulp - just gulp</li>
	<li>gulp-autoprefixer - just autoprefixer</li>
	<li>gulp-clean-css - minifications all css files</li>
	<li>gulp-concat - concat js files</li>
	<li>gulp-imagemin - compress img files</li>
	<li>gulp-notify - displays errors</li>
	<li>gulp-rename - concat css files</li>
	<li>gulp-rsync - fast deploy on server</li>
	<li>gulp-sass - sass</li>
	<li>gulp-uglify - minification js</li>
	<li>gulp-util - modul gulp</li>
	<li>gulp-eslint - linter js</li>
</ol>

<h2>Rules for working with the starting HTML template</h2>

<ol>
	<li>All HTML files should have similar initial content as in <strong>app/index.html</strong>;</li>
	<li><strong>Template Basic Images Start</strong> comment in app/index.html - all your custom template basic images (og:image for social networking, favicons for a variety of devices);</li>
	<li><strong>Custom Browsers Color Start</strong> comment in app/index.html: set the color of the browser head on a variety of devices;</li>
	<li><strong>Custom HTML</strong> comment in app/index.html - all your custom HTML;</li>
	<li>For installing new jQuery library, just run the command "<strong>bower i plugin-name</strong>" in the terminal. Libraries are automatically placed in the folder <strong>app/libs</strong>. Bower must be installed in the system (npm i -g bower). Then place all jQuery libraries paths in the <strong>'libs'</strong> task (gulpfile.js);</li>
	<li>All custom JS located in <strong>app/js/common.js</strong>;</li>
	<li>All Sass vars placed in <strong>app/sass/_vars.sass</strong>;</li>
	<li>All Bootstrap media queries placed in <strong>app/sass/_media.sass</strong>;</li>
	<li>All jQuery libraries CSS styles placed in <strong>app/sass/_libs.sass</strong>;</li>
	<li>Rename <strong>ht.access</strong> to <strong>.htaccess</strong> before place it in your web server. This file contain rules for files caching on web server.</li>
</ol>
