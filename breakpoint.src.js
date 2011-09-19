(function(win, doc, undefined) {

    var breakpoint = window['https://github.com/davesmith/breakpoint'] = {
        
        breakpoints: [320, 480, 600, 720, 768, 800, 1024, 1080, 1280, 1440],
        // Breakpoints: http://www.slideshare.net/yiibu/pragmatic-responsive-design
        // 320andup 320, 480, 768, 992 and 1382 (find the reasoning behind 992 and 1382)
        // HD 720, 1080, 1440
        
        update: function() {
            
            // Parse browser width.
            var //breakpoint = win['https://github.com/davesmith/breakpoint'] || {},
                browserWidth = win.innerWidth || docElement.clientWidth || doc.body.clientWidth || 0,
                i = 0,
                breakpoints = breakpoint.breakpoints,
                breakpointsLength = breakpoints.length,
                breakpoints_i,
                docElementClass = '',
                ltePrefix = 'lte',
                gtPrefix = 'gt';
                
            lte = [];
            for (i; i < breakpointsLength; i++) {
                breakpoints_i = breakpoints[i];
                if (browserWidth <= breakpoints_i) {
                    lte.push(breakpoints_i);
                    docElementClass += ' ' + ltePrefix + breakpoints_i;
                }
            }
            lteLength = lte.length;
            for (i = 0; i < breakpointsLength; i++) {
                breakpoints_i = breakpoints[i];
                if (browserWidth > breakpoints_i) {
                    docElementClass += ' ' + gtPrefix + breakpoints_i;
                    for (j = 0; j < lteLength; j++) {
                        docElementClass += ' ' + gtPrefix + breakpoints_i + ltePrefix + lte[j];
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