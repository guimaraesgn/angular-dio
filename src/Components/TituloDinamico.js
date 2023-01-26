class TituloDinamico extends HTMLElement{
    constructor(){
        super();


        const shadow = this.attachShadow({mode: "open"});

        //base do component
        const componetRoot = document.createElement("h1");
        componetRoot.textContent = 'Gabriel'

        //estilizar component
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;

            }
        
        `;
        
        //enviar para shadow
        shadow.appendChild(componetRoot);
        shadow.appendChild(style);
        
    }
}


customElements.define('titulo-dinamico', TituloDinamico);