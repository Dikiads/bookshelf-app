class ContainerForm extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="container d-flex flex-sm-wrap flex-wrap">
        </div>
        `
    }
};
customElements.define('container-form', ContainerForm);