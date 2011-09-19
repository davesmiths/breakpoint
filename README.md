# Breakpoint
Breakpoint responds to screen size and applies viewport breakpoint classes to the document element. It has no dependencies.

Minified version is 917 bytes.

__Status: Working, just mulling over the class names__

# Usage

Include breakpoint.min.js in your web app in the normal way:

```<script src="breakpoint.min.js"></script>```

Breakpoint has no dependencies and can be used standalone and should not interfere with any JavaScript libraries or frameworks.

# Test Page
Download breakpoint and try out the test page where breakpoints can be edited on the fly.

# Quick Illustration
```

If the breakpoints array = [768]

<table>
    <tr>
        <th>At Screen Width</th>
        <th>Classes on the HTML Element</th>
    </tr>
</table>

At Screen Width     Classes on the HTML Element
320                 lte768
768                 lte768
1024                gt768


If the breakpoints array = [768, 320]

At Screen Width     Classes on the HTML Element
320                 lte320 lte768
768                 gt320  gt320lte768 lte768
800                 gt320  gt768

```

# Using Custom Breakpoints
```

Push new ones onto the default array:
window['https://github.com/davesmith/breakpoint'].push(456);

Or use a completely new set of breakpoints, which overwrites the default:
window['https://github.com/davesmith/breakpoint'].breakpoints = [320, 768];

```

# Perform a Manual Update
The update function is called when the window resizes. If the breakpoints array
is modified dynamically then update can be called without needing to resize the window.
```

window['https://github.com/davesmith/breakpoint'].update();

```



