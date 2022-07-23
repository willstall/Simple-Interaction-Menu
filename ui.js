class Message
{
    constructor(title,message)
    {
        this.title = document.createElement("h1");
        this.title.innerHTML = title;

        this.container = document.createElement("div");
        this.container.classList.add("message","fadeaway");
        this.container.appendChild(this.title);

        if(message != null && message != undefined)
        {
            this.message = document.createElement("p");
            this.message.innerHTML = message;            
            this.container.appendChild(this.message);
        }

        this.container.addEventListener("animationend", this.destroy.bind(this), false);
    }

    destroy( e )
    {
        this.container.removeEventListener("animationend", this.destroy, false);
        this.container.remove();
        delete this;
    }
}

class Interaction
{
    constructor(name,key_titles,func)
    {
        this.name = document.createElement("p");
        this.name.innerHTML = name;
        this.name_container = document.createElement("div");
        this.name_container.appendChild(this.name);

        this.container = document.createElement("div");
        this.container.classList.add("interaction");
        
        this.container.appendChild(this.name_container);

        if(key_titles != undefined && key_titles != null)
        {
            this.keys = document.createElement("div");
            for(let i =0; i<key_titles.length;i++)
            {
                let k;
                switch(key_titles[i].toLowerCase())
                {
                    case 'to':
                    case 'and':
                    case 'or':
                            k = document.createElement("h1");
                            k.innerHTML = key_titles[i];                    
                        break;
                    default:
                        let t = document.createElement("h1");
                            t.innerHTML = key_titles[i];
                            t.classList.add('noselect');
                            k = document.createElement("div");
                            k.classList.add("key");
                            k.appendChild(t);
                }
                k.classList.add('noselect');
                this.keys.appendChild(k);
            }
            this.container.prepend(this.keys);
        }
        this.func = func;
    }
}

class UI
{
    constructor( autoclose )
    {
        this.messages = document.createElement("div");
        this.messages.classList.add("messages");

        this.interactions = document.createElement("div");
        this.interactions.classList.add("interactions");
        this.interactionReferences = [];

        this.container = document.createElement("div");
        this.container.classList.add("ui","noselect");

        this.container.appendChild(this.messages);
        this.container.appendChild(this.interactions);
        this.container.addEventListener("mousedown",this.OnPress.bind(this));

        this.autoclose = (autoclose != null && autoclose != undefined) ? autoclose : true;
        
        document.body.prepend(this.container);
    }

    OnPressInteraction( e )
    {
        e.stopImmediatePropagation();

        if(!this.ui.enabled)
            return;
        
        this.container.style.pointer = "default";
        this.func();

        if(this.ui.autoclose)
            this.ui.ToggleMenu(false);
    }

    OnPress( e )
    {
        this.ToggleMenu();
    }

    Message( title, message )
    {
        let m = new Message(title,message);
        this.messages.appendChild(m.container);
        return m;
    }

    Interaction(name,key_titles,func)
    {
        let i = new Interaction(name,key_titles,func);
            i.ui = this;

        if(func != null && func != undefined)    
            i.container.addEventListener("mousedown",this.OnPressInteraction.bind(i));

        this.interactions.appendChild(i.container);

        return i;
    }

    ToggleMenu( showMenu )
    {

        if(showMenu != undefined)
            this.enabled = !showMenu;
        
        if(this.enabled)
        {
            this.interactions.classList.remove("menu_on");
            this.enabled = false;
        }else{
            this.interactions.classList.add("menu_on");
            this.enabled = true;
        }
    }
}