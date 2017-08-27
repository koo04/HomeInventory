'use strict'

const Lucid = use('Lucid')

class Item extends Lucid {
    type () {
        return this.hasOne('App/Models/Type')
    }

    brand () {
        return this.hasOne('App/Models/Brand')
    }
}

module.exports = Item
