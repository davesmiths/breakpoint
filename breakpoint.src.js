(function(win, doc, undefined) {

    var breakpoint = window['https://github.com/davesmith/breakpoint'] = {
        
        widths: [320, 480, 600, 720, 768, 800, 1024, 1080, 1280, 1440],
        // Breakpoints: http://www.slideshare.net/yiibu/pragmatic-responsive-design
        // 320andup 320, 480, 768, 992 and 1382 (find the reasoning behind 992 and 1382)
        // HD 720, 1080, 1440
        
        update: function() {
            
            // Parse browser width.
            var //breakpoint = win['https://github.com/davesmith/breakpoint'] || {},
                browserWidth = win.innerWidth || docElement.clientWidth || doc.body.clientWidth || 0,
                i = 0,
                widths = breakpoint.widths,
                widthsLength = widths.length,
                width,
                docElementClass = '',
                ltePrefix = 'lte',
                gtPrefix = 'gt';
                
            lte = [];
            for (i; i < widthsLength; i++) {
                width = widths[i];
                if (browserWidth <= width) {
                    lte.push(width);
                    docElementClass += ' ' + ltePrefix + width;
                }
            }
            lteLength = lte.length;
            for (i = 0; i < widthsLength; i++) {
                width = widths[i];
                if (browserWidth > width) {
                    docElementClass += ' ' + gtPrefix + width;
                    for (j = 0; j < lteLength; j++) {
                        docElementClass += ' ' + gtPrefix + width + ltePrefix + lte[j];
                    }
                }
            }
            docElement.className = docElement.className.replace(new RegExp(" " + breakpointString + ".*" + breakpointString + " ", 'g'), ' ' + breakpointString + ' ' + docElementClass + ' ' + breakpointString + ' ');
        }
    },
    docElement = doc.documentElement,
    breakpointString = 'breakpoint';

    // Seed the HTML element class attribute value with a placeholder to be replaced.
    docElement.className += ' ' + breakpointString + ' ' + breakpointString + ' ';
    
    // Fire once.
    breakpoint.update();
    
    // Handle the resize event.
    var winRemoveEventListener = win.removeEventListener || false,
    winAddEventListener = win.addEventListener || false,
    winAttachEvent = win.attachEvent || false,
    winDetachEvent = win.detachEvent || false,
    resizeString = 'resize';
	function rzr() {
		if (winRemoveEventListener) {
			winRemoveEventListener(resizeString, rzr, false);
		}
		else if (winDetachEvent) {
			winDetachEvent('on' + resizeString, rzr);
		}
		breakpoint.update();
		if (winAddEventListener) {
			winAddEventListener(resizeString, rzr, false);
		}
		else if (winAttachEvent) {
			winAttachEvent('on' + resizeString, rzr);
		}
	}
	if (winAddEventListener) {
		winAddEventListener(resizeString, rzr, false);
	}
	else if (winAttachEvent) {
		winAttachEvent('on' + resizeString, rzr);
	}
    else {
        // Old-school fallback.
        win['on' + resizeString] = update;
    }
// Pass in window, document, undefined.
})(this, this.document);