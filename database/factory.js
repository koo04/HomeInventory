'use strict'

/*
|--------------------------------------------------------------------------
| Model and Database Factory
|--------------------------------------------------------------------------
|
| Factories let you define blueprints for your database models or tables.
| These blueprints can be used with seeds to create fake entries. Also
| factories are helpful when writing tests.
|
*/

const Factory = use('Factory')

/*
|--------------------------------------------------------------------------
| User Model Blueprint
|--------------------------------------------------------------------------
| Below is an example of blueprint for User Model. You can make use of
| this blueprint inside your seeds to generate dummy data.
|
*/
Factory.blueprint('App/Model/User', (fake) => {
  return {
    username: fake.username(),
    email: fake.email(),
    password: fake.password()
  }
})
Factory.blueprint('App/Model/Item', (fake) => {
  return {
    name: fake.word(),
    canned: fake.bool(),
    amount: fake.integer({min: 0, max: 30}),
    image: fake.avatar({protocol: 'https'}),
    type: fake.integer({min: 1, max: 4}),
    brand: fake.integer({min: 1, max: 4})
  }
})
Factory.blueprint('App/Model/Brand', (fake) => {
  return {
    name: fake.word()
  }
})
Factory.blueprint('App/Model/Type', (fake) => {
  return {
    name: fake.word()
  }
})
