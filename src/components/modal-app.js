class ModalApp extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="editmodal">
          <div class="modalku">
            <span class="close-button">&times;</span>
            <h4 class="text-warning text-center">Edit Buku Anda</h4>
            <div class="mb-3">
              <label for="edittitle" class="form-label"> Title</label>
              <input type="text" class="form-control" id="edittitle" aria-describedby="emailHelp" required>
            </div>
            <div class="mb-3">
              <label for="editauthor" class="form-label">Author</label>
              <input type="text" class="form-control" id="editauthor" required>
            </div>
            <div class="mb-3">
              <label for="year" class="form-label ">Year</label>
              <input type="number" class="form-control" id="edityear" required>
            </div>
            <button type="submit" class="btn btn-primary" id="save">Simpan</button>
          </div>
        </div>
        `
    }
};

customElements.define('modal-app', ModalApp);