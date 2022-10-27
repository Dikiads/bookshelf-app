class FormApp extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
                <h2 class="text-center">Input Your Data Book</h2>
                <form id="form">
                    <div class="mb-3">
                    <label for="title" class="form-label"><span><i class="fa-solid fa-book"></i></span> Title</label>
                    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" required>
                    </div>
                    <div class="mb-3">
                    <label for="author" class="form-label"><span><i class="fa-solid fa-at"></i></span> Author</label>
                    <input type="text" class="form-control" id="author" required>
                    </div>
                    <div class="mb-3">
                    <label for="year" class="form-label "><span><i class="fa-solid fa-calendar-days"></i></span> Year</label>
                    <input type="number" class="form-control" id="year" required>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="check">
                        <label class="form-check-label" for="check">finished</label>
                    </div>
                    <button type="submit" class="btn btn-primary"><span><i class="fa-solid fa-right-to-bracket"></i></span>  Submit</button>
                </form>
        `
    }
};

customElements.define('form-app', FormApp);