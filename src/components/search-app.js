class SearchApp extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <label for="search" class="form-label">Search</label>
        <input type="search" class="form-control-sm d-sm-inline-flex h-50" style="width: 50%;" id="search" placeholder="find title/author/year . . . ">
        <button class="btn btn-primary d-sm-inline d-sm-inline-flex" id="btnsearch"><span><i class="fa-solid fa-magnifying-glass"></i></span> Search</button>
        <button class="btn btn-danger d-sm-inline" id="btnclear"><span><i class="fa-regular fa-trash-can"></i></span> Clear</button>
        `
    }
};

customElements.define('search-app', SearchApp);