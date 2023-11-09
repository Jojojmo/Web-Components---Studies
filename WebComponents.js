class MyHeader extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.className = 'navbar'; 
        container.innerHTML = `
            <slot></slot>
        `;
    
        shadow.appendChild(this.style());

        shadow.appendChild(container);
    }

    style() {
        const style = document.createElement('style');
        style.textContent = `
        .navbar {
            background-color: #333;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 10px 20px;
            flex-direction: row;
        }
        

        .navbar ::slotted(a) {
            color: white;
            text-decoration: none;
            margin-right: 10px;
        }

        /* Estilo para os botões quando o mouse está sobre eles */
        .navbar ::slotted(a:hover) {
            color: #ddd;
            text-decoration: underline;
        }

            
        
        `;

        return style;
    }
}


class SimpleExemple extends HTMLElement{
    constructor(){
        super() //Herança da classe
        const shadow = this.attachShadow({mode: 'open'}) //Definindo nosso Shadowdom

        const style = document.createElement('style');
        style.textContent = `
        div {
            width: 150px;
            height: 150px;
            background-color: blue;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        p {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            color: lemonchiffon;
        }
        `
        const div = document.createElement('div')

        const text = document.createElement('p')
        text.innerText = 'Simple Exemple'
        div.appendChild(text)

        shadow.appendChild(style)
        shadow.appendChild(div)
    }   
}

class MyPortraid extends HTMLElement{
    
    constructor(){
        super()
        this.build()
    }

    build(){
        const shadow = this.attachShadow({mode: 'open'})

        const model = {
            "triangle":"clip-path: polygon(0% 100%, 50% 0%, 100% 100%);",
            "Star":"clip-path: polygon(40% 0%, 48.8% 28%, 78.4% 28%, 54.4% 45.6%, 63.2% 72.8%, 40% 56%, 16.8% 72.8%, 25.6% 45.6%, 1.6% 28%, 31.2% 28%);",
            "Circle":"border-radius: 50%;"
        }
        
        const div = document.createElement('div')
        shadow.appendChild(div)

        const opition = this.getAttribute('mode')
        shadow.appendChild(this.style(model[opition]))
    }


    style(opition){
        const placeholder = "https://placehold.co/400x400?text=placeholder"
        const style = document.createElement('style');
        style.textContent = `
        div {
            width: 300px;
            height: 300px;
           ${opition || ''}
            position: relative;
            overflow: hidden;
            background-image: url(${this.getAttribute("url") || placeholder});
            background-position: center;
            background-size: cover;
        }
        `;
        return style;
    }

}


customElements.define('my-header', MyHeader);

customElements.define('simple-exemple', SimpleExemple);

customElements.define('my-portraid',MyPortraid)