'use strict'

const Lucid = use('Lucid')

class Type extends Lucid {

    item () {
        this.belongsToMany('App/Models/Item')
    }

}

module.exports = Type
