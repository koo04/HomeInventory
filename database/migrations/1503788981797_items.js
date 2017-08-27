'use strict'

const Schema = use('Schema')

class ItemsTableSchema extends Schema {

  up () {
    this.create('items', (table) => {
      table.increments()
      table.timestamps()
      table.string('name').unique()
      table.boolean('canned')
      table.integer('amount')
      table.string('image')
      table.integer('type')
      table.integer('brand')
    })
  }

  down () {
    this.drop('items')
  }

}

module.exports = ItemsTableSchema
