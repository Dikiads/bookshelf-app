class IkhtisarApp extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
                <h3 class="text-center border-bottom">Ikhtisar Your Book in bookshelf</h3>
                <table class="table pt-4">
                
                    <tr>
                    <th>Jumlah Buku</th>
                    <td><span class="count">0</span> buku</td>
                    </tr>
                    <tr>
                    <th>Selesai Terbaca</th>
                    <td><span class="finish">0</span> buku</td>
                    </tr>
                    <tr>
                    <th>Belum Selesai Terbaca</th>
                    <td><span class="unfinish">0</span> buku</td>
                    </tr>
                
                </table>
                <div class="card mb-3" style="max-width: 600px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="./public/image/diki.png" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">About Me</h5>
                        <p class="card-text">
                        <span>Diki Al Amin Darussalam, S.Pd.</span>
                        <span class="d-block">Kp. Kubang Angsana RT 01 RW 02 Ds. Sukamulya Kec. Pakenjeng Garut</span>
                        <span v>Full Stack Engineer</span>
                        </p>
                        <p class="card-text"><small class="text-muted">Last updated 23 Oktober 2022</small></p>
                    </div>
                    </div>
                </div>
                </div>
        `
    }
};
customElements.define('ikhtisar-app', IkhtisarApp)