class AppNav extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <nav class="navbar navbar-light bg-light shadow-sm p-3 mb-5 bg-body rounded">
                <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="./public/image/bookshelf.ico" alt="" width="30" height="24"> <span class="text-bold">BookShelf</span>
                </a>
                <ul class="nav justify-content-end text-dark">
                    <li class="nav-item">
                    <a class="nav-link text-dark" aria-current="page" href="#">Home</a>
                    </li>
                </ul>
                </div>
            </nav>
        `
    }
};

customElements.define('app-nav', AppNav);