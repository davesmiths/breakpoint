# Breakpoint
Responds to screen width by toggling classes on the HTML element based on a customisable 
array of viewport breakpoints.

__Status: Working, mulling over the class names__

# Test Page
Download breakpoint and try out the test page where breakpoints can be edited on the fly.

# Quick Illustration
```

// If the breakpoint array = [768]

At Screen Width  Classes on the HTML Element
320              lte768
768              lte768
1024             gt768


// If the breakpoint array = [768, 320]

At Screen Width  Classes on the HTML Element
320              lte320 lte768 lte320lte768
768              gt320  lte768 gt320lte768
800              gt320  gt768  gt320gt768

```