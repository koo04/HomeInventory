'use strict'

const Schema = use('Schema')

class TypesTableSchema extends Schema {

  up () {
    this.create('types', (table) => {
      table.increments()
      table.timestamps()
      table.string('name').unique()
    })
  }

  down () {
    this.drop('types')
  }

}

module.exports = TypesTableSchema
