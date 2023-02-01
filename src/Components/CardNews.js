class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build(){
        const componetRoot = document.createElement("div");
        componetRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newContent = document.createElement("p");
        newContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newImg = document.createElement("img");
                newImg.src = this.getAttribute("photo") || "assets/download.png";
        newImg.alt = "fotoNdbr";
        cardRight.appendChild(newImg);





        componetRoot.appendChild(cardLeft);
        componetRoot.appendChild(cardRight);





        return componetRoot;

    }
    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 80%;
            box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        
        
        }
        .card_left > span{
            margin-top: 15px;
            color: gray;
        }
        .card_left > a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none; 
            font-weight: bold;
        }
        
        .card_left > p {
            color: gray;
            font-size: 16px;
            margin-right: 10px;
        }      
        
    
        `




        return style;

    }
}

customElements.define('card-news', CardNews);