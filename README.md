# Simple-Interaction-Menu
Add Touch, Click, and Keyboard interactions supported by a simple menu and messaging system.

*Streamlined for generative art like fxHash.*

# Demo
https://willstall.github.io/Simple-Interaction-Menu/

# Quick Setup
1) Add `<link type="text/css" rel="stylesheet" href="ui.css" />` to your `<head>` tag area
2) Add `<script>let ui = new UI(true);</script>` after your `<body>` tag
3) Add a menu item `ui.Interaction("Change Resolution",['key'],() => {});`

# Full Menu Example


    // custom ui stuff
    let ui = new UI(true);      // define if you want menus to close on click or not
        ui.ToggleMenu(true);    // turn on menu by default

    // custom interactions
    let change_resolution = ( x ) => {
      if(x == 0)
        ui.Message('Anti-Aliasing','disabled');
      else
        ui.Message('Anti-Aliasing',x+'x');
    };

    ui.Interaction("Change Resolution",['key'],() => {});

    ui.Interaction("Change Resolution",['1','to','9'],
        () => {
            ui.Message('use','number keys [ 1-9 ]');
        }
    );

    let glow_enabled = false;
    let toggle_glow = ()=>
    {
        glow_enabled = !glow_enabled;
            let m = glow_enabled == true ? "on" : "off";
            ui.Message('Glow',m);
    };
    ui.Interaction("Toggle Glow",['g','and','d'],toggle_glow);

    let clicked = false;    
    ui.Interaction("Just click me",null,
        () => {
            clicked = !clicked;
            let m = clicked  ? "Clicked" : "Absolutely Clicked";
            ui.Message(m);
    });

    let paused = false;
    let toggle_pause = () =>
    {
        paused = !paused;
        let t = paused ? "Pause" : "Resume";
        ui.Message(t);   
    }
    ui.Interaction("Pause/Resume",['space'],toggle_pause);   

    // custom keyboard stuff
    let on_keyboard_event = e =>
    {
        switch(e.key)
        {
            case "p":
            case " ":
            case "Spacebar":
            toggle_pause() 
                break;
            case "g":
            case "G":
            case "d":
            case "D":
                toggle_glow();
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                change_resolution(e.key);
                break;
            case "esc":
                ui.ToggleMenu(false);
                break;
            default:
                break;
        }

        ui.ToggleMenu(false);  // Just shutting the UI if we press a button, just a preference
    }; 
    document.addEventListener('keydown', on_keyboard_event);


## This UI was created by generative shader artist @willstall
* https://www.instagram.com/willstall/
* https://twitter.com/willstall
* https://github.com/willstall
            
Free to use and modify as long as the above copyright line is present.

## The typeface is called *Inter*.

You're free to use and sell it with your project as long as you're not modifying or directly selling the font.

Learn more about the font here: https://github.com/rsms/inter
