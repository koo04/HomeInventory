'use strict'

const Schema = use('Schema')

class BrandsTableSchema extends Schema {

  up () {
    this.create('brands', (table) => {
      table.increments()
      table.timestamps()
      table.string('name').unique()
    })
  }

  down () {
    this.drop('brands')
  }

}

module.exports = BrandsTableSchema
