'use strict'

const Lucid = use('Lucid')

class Brand extends Lucid {

    item() {
        this.belongsToMany('App/Models/Item')
    }

}

module.exports = Brand
