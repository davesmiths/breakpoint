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
                j = 0,
                breakpoints = breakpoint.breakpoints,
                breakpointsLength = breakpoints.length,
                breakpoint_i,
                breakpoint_j,
                docElementClass = '',
                ltePrefix = 'lte',
                gtPrefix = 'gt',
                gt;
                
            for (i = 0; i < breakpointsLength; i++) {
                breakpoint_i = breakpoints[i];
                gt = 0;
                if (browserWidth > breakpoint_i) {
                    docElementClass += ' ' + gtPrefix + breakpoint_i;
                    gt = 1;
                }
                for (j = 0; j < breakpointsLength; j++) {
                    breakpoint_j = breakpoints[j];
                    if (browserWidth <= breakpoint_j) {
                        docElementClass += ' ' + ltePrefix + breakpoint_j;
                        if (gt === 1) {
                            docElementClass += ' ' + gtPrefix + breakpoint_i + ltePrefix + breakpoint_j;
                        }
                    }
                }
            }
            docElement[className] = docElement[className].replace(breakpointRegExp, ' ' + breakpointString + ' ' + docElementClass + ' ' + breakpointString + ' ');
        }
    },
    docElement = doc.documentElement,
    className = 'className',
    breakpointString = 'Br34kp01nT',
    breakpointRegExp = new RegExp(" " + breakpointString + ".*" + breakpointString + " ", 'g');

    // Seed the HTML element class attribute value with a placeholder to be replaced.
    docElement[className] += ' ' + breakpointString + ' ' + breakpointString + ' ';
    
    // Fire once.
    breakpoint.update();
    
    // Handle the resize event.
    var fls = false,
    winRemoveEventListener = win.removeEventListener || fls,
    winAddEventListener = win.addEventListener || fls,
    winAttachEvent = win.attachEvent || fls,
    winDetachEvent = win.detachEvent || fls,
    resizeString = 'resize';
    function rzr() {
    	if (winRemoveEventListener) {
			winRemoveEventListener(resizeString, rzr, fls);
		}
		else if (winDetachEvent) {
			winDetachEvent('on' + resizeString, rzr);
		}
		breakpoint.update();
		if (winAddEventListener) {
			winAddEventListener(resizeString, rzr, fls);
		}
		else if (winAttachEvent) {
			winAttachEvent('on' + resizeString, rzr);
		}
	}
	if (winAddEventListener) {
		winAddEventListener(resizeString, rzr, fls);
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