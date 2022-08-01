'use strict'

class BukuController {
    index({ view }) {
        return view.render('welcome');
    }

    daftarBuku({ view }) {
        return view.render('daftar-buku');
    }

    inputBuku({ view }) {
        return view.render('input-buku');
    }
}

module.exports = BukuController