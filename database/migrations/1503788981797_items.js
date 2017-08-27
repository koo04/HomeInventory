'use strict'

const Schema = use('Schema')

class ItemsTableSchema extends Schema {

  up () {
    this.create('items', (table) => {
      table.increments()
      table.timestamps()
      table.string('name').unique()
      table.foreign('type').references('types.id')
      table.foreign('brand').references('brands.id')
      table.boolean('canned')
      table.integer('amount')
      table.string('image')
    })
  }

  down () {
    this.drop('items')
  }

}

module.exports = ItemsTableSchema
