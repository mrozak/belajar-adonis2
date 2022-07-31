'use strict'

class BelajarAdonisController {

    index({ request, response }) {
        return 'ini adalah method index';
    }

    create({ request, response }) {
        return 'ini adalah method create';
    }

    update({ request, response }) {
        return 'ini adalah method update';
    }
}

module.exports = BelajarAdonisController