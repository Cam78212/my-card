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
    this.source = "#";
  }

  static get styles() {
    return css`
      :host {
        display: block;
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
  padding: 16px 16px;
  margin: 2px 32px;
  
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
  border: 4px solid #ccc;
  border-radius: 8px;
  margin: 8px 48px;
 

      }
    `;
  }

  render() {
    
    return html`
    <div>${this.title}</div>
    <div class="card">
    <div class="title">${this.name}</div>
    <img src="${this.source}" class="img">
    <p class="description"> The Moon is Earth's only natural satellite. It orbits around Earth at an average distance of 384,399 kilometres, about 30 times Earth's diameter, and completes an orbit every 29.5 days. This is the same length it takes the Moon to complete a rotation.</p>
    <a href="https://hax.psu.edu">
    <button class="btn">more</button>
  </a>
</div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      name: { type: String },
      source: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
