# Simple-Interaction-Menu
Add Touch, Click, and Keyboard interactions supported by a simple menu and messaging system.

*Streamlined for generative art like fxHash.*

# Interactive Demo
https://willstall.github.io/Simple-Interaction-Menu/

# Basic Code Example
https://github.com/willstall/Simple-Interaction-Menu/blob/main/simple.html
```
<script type="text/javascript" src="ui.js"></script>
<script type="text/javascript">

    // create menu
    let startWithMenuOpen = true;
    let closeMenuOnInteraction = true;

    let ui = new UI(closeMenuOnInteraction);      
        ui.ToggleMenu(startWithMenuOpen);

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

</script>
```

# Quick Setup
1) Add `<link type="text/css" rel="stylesheet" href="ui.css" />` to your `<head>` tag
2) Add `<script type="text/javascript" src="ui.js"></script>` after your `<body>` tag
3) Add `<script>let ui = new UI(true);</script>` after your `<body>` tag
4) Add a menu item `ui.Interaction("Change Resolution",['key'],() => {});`
5) Create a message with `ui.Message("title","body");`

## The typeface is called *Inter*.

You're free to use and sell it with your project as long as you're not modifying or directly selling the font.

Learn more about the font here: https://github.com/rsms/inter

## This UI was created by generative shader artist @willstall
* https://www.instagram.com/willstall/
* https://twitter.com/willstall
* https://github.com/willstall
            
Free to use and modify as long as the above copyright line is present.
