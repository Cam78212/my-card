import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';

  }

  constructor() {
    super();
    this.title = "My card",
    this.name = "defualt",
    this.source = "#",
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block
        }
      :host([fancy]) .card {
        background-color: var(--my-card-fancy-bg, #FF0000)
        }

.title{
  color: white;
  font-size: 32px;
  padding: 8px 8px;
  margin: 12px 150px;
  
}

.description{
  color: white;
  font-size: 16px;
}

.card {
  background-color: blue;
  border: solid black;
  width: 400px;
  border: 4px solid;
  padding: 8px;
  margin: 16px;
  
}

.btn {
  background-color: white;
  color: blue;
  font-size: 16px;
  border-radius: 10%;
  padding: 16px 16px 16px 16px;
  margin: 12px 150px;
  
}

.btn:focus,
.btn:hover {
  background-color: blue;
  color: white;
}

.img{
  width: 304px;
  aspect-ratio: 1/1;
  border: 4px solid #ccc;
  border-radius: 8px;
  margin: 8px 48px;
}

details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }
 

    `;
  }

  render() {
    
    return html`
    <div>${this.title}</div>
    <div class="card">
    <div class="title">${this.name}</div>
    <img src="${this.source}" class="img">
    <details ?open="${this.fancy}" @toggle="${this.openChanged}">
    <summary>Description</summary>
    <div class = "description">
    <slot></slot>
    <a href="https://hax.psu.edu">
    <button class="btn">more</button>
    </a>
  </div>
  </details>
  </div>`;
  }

  openChanged(event){
    console.log(event.target);
    this.fancy = event.target.open;
  }

  static get properties() {
    return {
      title: { type: String },
      name: { type: String },
      source: { type: String },
      fancy: { type: Boolean, reflect: true}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
