'use strict'

class BelajarAdonisController {

    index({ request, response }) {
        const data = request.get();
        console.log(data);
        return true;
    }

    create({ request, response }) {
        // const data = request.post();
        // console.log(data);


        // // request.only
        // const data = request.only(['nama', 'jurusan']);
        // console.log(data);
        // return true;

        // request.except : menambah data kecuali yang di except
        // const data = request.except(['nama', 'jurusan']);
        // console.log(data);
        // return true;

        // request.input
        const nama = request.input('nama', 'muhrozak');
        console.log(nama);
        return true;

    }


    update({ request, response }) {
        return 'ini adalah method update';
    }
}

module.exports = BelajarAdonisController