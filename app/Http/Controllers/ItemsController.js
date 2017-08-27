'use strict'

const Item = use('App/Model/Item')

class ItemsController {
    * index (request, response) {
        const items = yield Item.all()
        console.log(yield Item.all())
        yield response.sendView('items.list', {items: items.toJSON()})
    }
}

module.exports = ItemsController
