
(function(win, doc, undefined) {

    var respondage = window['https://github.com/davesmith/breakpoint'] = {
        
        widths: [320, 480, 600, 720, 768, 800, 1024, 1080, 1280, 1440],
        // Breakpoints: http://www.slideshare.net/yiibu/pragmatic-responsive-design
        // 320andup 320, 480, 768, 992 and 1382
        // HD 720, 1080, 1440
        
        update: function() {
            
            // Parse browser width.
            var //respondage = win['https://github.com/davesmith/breakpoint'] || {},
                browserWidth = win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth || 0,
                i = 0,
                widths = respondage.widths,
                len = widths.length,
                lte = Number.POSITIVE_INFINITY,
                gte = 0,
                width,
                lteClassName,
                gteClassName,
                docElemClass = '';
                
            lte = [];
            for (i; i < len; i++) {
                width = widths[i];
                if (browserWidth <= width) {
                    lte.push(width);
                    docElemClass += ' lte' + width;
                }
            }
            lteLength = lte.length;
            for (i = 0; i < len; i++) {
                width = widths[i];
                if (browserWidth > width) {
                    docElemClass += ' gt' + width;
                    for (j = 0; j < lteLength; j++) {
                        docElemClass += ' gt' + width + 'lte' + lte[j];
                    }
                }
            }
            doc.documentElement.className = doc.documentElement.className.replace(/ respondage.*respondage /g, ' respondage ' + docElemClass + ' respondage ');
        }
    };

    // Seed the HTML element class attribute value with a placeholder to be replaced.
    doc.documentElement.className += ' respondage respondage ';
    
    // Fire once.
    respondage.update();
    
    // Handle the resize event.
    var removeEventListenerString = 'removeEventListener',
    addEventListenerString = 'addEventListener',
    resizeString = 'resize';
	function rzr() {
		if (win[removeEventListenerString]) {
			win[removeEventListenerString](resizeString, rzr, false);
		}
		else if (win.detachEvent) {
			win.detachEvent("on" + resizeString, rzr);
		}
		respondage.update();
		if (win[addEventListenerString]) {
			win[addEventListenerString](resizeString, rzr, false);
		}
		else if (win.attachEvent) {
			win.attachEvent("on" + resizeString, rzr);
		}
	}
	if (win[addEventListenerString]) {
		win[addEventListenerString](resizeString, rzr, false);
	}
	else if (win.attachEvent) {
		win.attachEvent("on" + resizeString, rzr);
	}
    else {
        // Old-school fallback.
        win.onresize = update;
    }
// Pass in window, document, undefined.
})(this, this.document);