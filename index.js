// Building Metalsmith environment
const Metalsmith = require('metalsmith');
const markdown = require('@metalsmith/markdown');
const layouts = require('@metalsmith/layouts');
const permalinks = require('@metalsmith/permalinks');
const collections = require('@metalsmith/collections');
const publish = require('metalsmith-publish');
const lunr = require('metalsmith-lunr');
const path = require('path');
const fs = require('fs');

// Loading the localization object with the UI labels in Italian and English
const locals = require('./src/assets/js/localization');

// Site generation workflow
Metalsmith(__dirname)
    .metadata({
        sitename: 'CRHACK LAB FOLIGNO 4D',
        generator: 'Metalsmith',
        generator_url: 'https://metalsmith.io/',
        localizationObject: locals,
        dir_icons: '/assets/media/images/icons/',
        dir_banners: '/assets/media/images/banners/',
        dir_logos: '/assets/media/images/logos/',
    })
    .source('./src')
    .destination('build')
    .clean(true)
    .use(publish({
        draft: false
    }))
    .use(markdown())
    .use(addCombinedRef) 
    .use(collectParagraphs())
    .use(
        collections({
            boardmembersCollection: {
                pattern: 'en/team/board/*.html'
            },
            consiglieriCollection: {
                pattern: 'it/team/consiglio/*.html'
            },
            postsCollection: {
                pattern: 'en/blog/*.html',
                sortBy: 'pubdate',
                reverse: true,
            },
            articoliCollection: {
                pattern: 'it/blog/*.html',
                sortBy: 'pubdate',
                reverse: true,
            },
            // newsCollection: {
            //     pattern: 'en/news/*.html',
            //     sortBy: 'pubdate',
            //     reverse: true,
            // },
            // notizieCollection: {
            //     pattern: 'it/news/*.html',
            //     sortBy: 'pubdate',
            //     reverse: true,
            // },
            // events: {
            //     pattern: 'en/events/*.html',
            //     sortBy: 'pubdate',
            //     reverse: true,
            // },
            // eventi: {
            //     pattern: 'it/events/*.html',
            //     sortBy: 'pubdate',
            //     reverse: true,
            // },
            projectsCollection: {
                pattern: 'en/projects/*.html',
                sortBy: 'pubdate',
                reverse: true,
            },
            progettiCollection: {
                pattern: 'it/projects/*.html',
                sortBy: 'pubdate',
                reverse: true,
            },
            // servicesCollection: {
            //     pattern: 'en/services/*.html',
            //     sortBy: 'pubdate',
            //     reverse: true,
            // },
            // strumentiCollection: {
            //     pattern: 'it/services/*.html',
            //     sortBy: 'pubdate',
            //     reverse: true,
            // },
            // volunteersCollection: {
            //     pattern: 'en/volunteers/*.html',
            //     sortBy: 'pubdate',
            //     reverse: true,
            // },
            // volontariCollection: {
            //     pattern: 'it/volunteers/*.html',
            //     sortBy: 'pubdate',
            //     reverse: true,
            // },
            aboutCollection: {
                pattern: 'en/about/*.html',
                sortBy: 'pubdate',
                reverse: true,
            },
            aboutitCollection: {
                pattern: 'it/about/*.html',
                sortBy: 'pubdate',
                reverse: true,
            },
            labsCollection: {
                pattern: 'en/labs/*.html',
                sortBy: 'pubdate',
                reverse: true,
            },
            laboratoriCollection: {
                pattern: 'it/labs/*.html',
                sortBy: 'pubdate',
                reverse: true,
            },
            
        })
    )
    // FILTER TO EVENT
    // .use((files, metalsmith, done) => {
    //     const events = metalsmith.metadata().eventi;
        
    //     // Map through the event data and remove the next and previous references to avoid circular structures
    //     const filteredEvents = events.map(event => {
    //         const { next, previous, ...filteredEvent } = event; // Exclude circular properties
    //         return filteredEvent;
    //     });
        
    //     // Assign the filtered event data back to the metadata
    //     metalsmith.metadata().filteredEvents = filteredEvents;
        
    //     done();
    // })
    .use(permalinks())
    .use(exportPageTitles())
    .use(lunr({           
        field: [
            { name: 'title', boost: 25 },
            { name: 'content', boost: 10 },
        ],
        ref: 'url',
        storeFields: ['title', 'url'],
        indexPath:'assets/json/search-index.json',
    }))
    // .use(sendDataToJs())
    .use(layouts({
        engineOptions: {
            helpers: {
                formattedDate: function (date) {
                    return new Date(date).toLocaleDateString()
                }
            }
        }
    }))
    .build(function(err,files) {
        if (err) {
            if (err) {throw err;}
        }
    });

// This function is used to collect all paragraphs and split them with a hashtag (#) from h1 to h6.    
function collectParagraphs() {
    return (files, metalsmith, done) => {
        Object.keys(files).forEach((filename) =>{
            const file = files[filename];
            const html = file.contents.toString();
            const textOnly = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
            file.content = textOnly
            const paragraphs = file.contents.toString().split(/^#+/);
            file.paragraphs = paragraphs;
        });
        done();
    };
}

// Custom plugin to add combined reference so that before pipe there's the site, after the pipe is the title of the page.
function addCombinedRef(files, metalsmith, done) {
            Object.keys(files).forEach(function (file) {
                const data = files[file];
                let title = data.pageTitle || data.yamlProjectTitle;
                if (!title && data.contents) {
                    const match = data.contents.toString().match(/<h1[^>]*>(.*?)<\/h1>/i);
                    if (match && match[1]) {
                    title = match[1].trim();
                    }
                }
                if (!title) title = 'Untitled';
                data.title = title;
                const site = 'CLF4D';
                const path = file.replace(/\\/g, '/').replace(/^src\//, '').replace(/\.md$/, '.html');
                data.site = site;
                data.url = '/' + path;
                data.combinedRef = `${site} | ${title}`;
                if (file.endsWith('.html')) {
                    console.log(file, '->', data.title);
                }
                console.log(data.combinedRef);
                });
                done();
            }

// Plugin per salvare pageTitle e URL
function exportPageTitles() {
    return (files, metalsmith, done) => {
        const titles = {};

        Object.keys(files).forEach((file) => {
        const data = files[file];
        const title = data.title || data.pageTitle || data.yamlProjectTitle;

        if (title) {
            const url = data.url || '/' + file.replace(/\\/g, '/').replace(/^src\//, '').replace(/\.md$/, '.html');
            titles[url] = title;
            console.log(`✔️ Exporting: ${url} → "${title}"`);
        } else {
            console.warn(`⚠️ Skipped: ${file} has no title`);
        }
        });

        const outputPath = path.join(__dirname, 'build/assets/json/page-titles.json');
        try {
            fs.mkdirSync(path.dirname(outputPath), { recursive: true });
            fs.writeFileSync(outputPath, JSON.stringify(titles, null, 2), 'utf-8');
            
        } catch (err) {
            
        }
        
        done();
    };
}


