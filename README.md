# Simple Interaction Menu
Add Touch, Click, and Keyboard interactions supported by a simple menu and messaging system.

*Streamlined for generative art sites like fxHash.*

# Demos
* [Full Interactive Demo](https://willstall.github.io/Simple-Interaction-Menu/) - Full Menu System w/ Keyboard Integration
* [Basic Demo](https://willstall.github.io/Simple-Interaction-Menu/simple.html) - Simplified Keyboard Interaction, Simplified Code

# Basic Code Example
```
// create menu
let ui = new UI();      
    ui.ToggleMenu(true);

// demo interaction
let toggles = {};
let toggled = function(key,message_on,message_off)
{
    toggles[key] = !toggles[key];
    let m = toggles[key] ? message_on : message_off;
    ui.Message(m[0],m[1]);
}

// add interactions to menu
ui.Interaction("Change Resolution",['1','to','9'],() => ui.Message('Resolution','Changed') );
ui.Interaction("Pause",['space'],() => toggled('pause',["Paused"],['Unpaused']));
ui.Interaction("Glow",['g','or','d'],() => toggled('glow',["Glow","On"],["glow",'Off']));

// demo messages
document.addEventListener('keydown', () => {ui.Message('key','pressed');} );
```

# Quick Setup
1) Add `<link type="text/css" rel="stylesheet" href="ui.css" />` to your `<head>` tag
2) Add `<script type="text/javascript" src="ui.js"></script>` after your `<body>` tag
3) Add `<script>let ui = new UI(true);</script>` after your `<body>` tag
4) Add a menu item `ui.Interaction("Change Resolution",['key'],() => {});`
5) Create a message with `ui.Message("title","body");`

# Intention
- This ui system is meant to be low-weight, flexible, and easy to integrate.
- Currently one cannot add/remove items from the menu, this is to keep the system lightweight ( *for now* ).
- Please suggest changed and/or give feedback

## The typeface is called *Inter*.

You're free to use and sell it with your project as long as you're not modifying or directly selling the font.

Learn more about the font here: https://github.com/rsms/inter

## This UI was created by generative shader artist @willstall
* [Instagram](https://www.instagram.com/willstall/)
* [Twitter](https://twitter.com/willstall)
* [Github](https://github.com/willstall)
            
Free to use and modify as long as the above copyright line is present.
