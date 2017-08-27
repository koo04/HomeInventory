'use strict'

const Factory = use('Factory')

class TypeSeeder {

  * run () {
    // run model/database factories here
    yield Factory.model('App/Model/Type').create(5)
  }

}

module.exports = TypeSeeder
