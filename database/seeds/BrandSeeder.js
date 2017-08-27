'use strict'

const Factory = use('Factory')

class BrandSeeder {

  * run () {
    // run model/database factories here
    yield Factory.model('App/Model/Brand').create(5)
  }

}

module.exports = BrandSeeder
