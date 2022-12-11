import { Application } from 'express'
import handlers from '../controllers/programmingLangaugesController'

const programmingLangaugesRoute = (app: Application) => {
  app.get('/programmingLanguages', handlers.index)
  app.get('/programmingLanguages/:id', handlers.show)
  app.post('/programmingLanguages', handlers.create)
  app.put('/programmingLanguages/:id', handlers.update)
  app.delete('/programmingLanguages/:id', handlers.remove)
}

export default programmingLangaugesRoute
