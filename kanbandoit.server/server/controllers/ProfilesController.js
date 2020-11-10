import { Auth0Provider } from '@bcwdev/auth0provider'
import { profilesService } from '../services/ProfilesService'
import BaseController from '../utils/BaseController'

export class ProfilesController extends BaseController {
  constructor() {
    super('/profile')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserProfile)
  }

  async getUserProfile(req, res, next) {
    try {
      const profile = await profilesService.getProfile(req.userInfo)
      res.send(profile)
    } catch (error) {
      next(error)
    }
  }
}
// {subs: ["auth0|5fab03693ab2e4006efd0421"], name: "testing@kanbandoit.com",…}
// createdAt: "2020-11-10T21:17:36.856Z"
// email: "testing@kanbandoit.com"
// id: "befa248f-b842-4f66-84a1-dfd68c4f1b0a"
// name: "testing@kanbandoit.com"
// picture: "https://s.gravatar.com/avatar/a03170a91eda7aa6fdd9e5c30e4b5288?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png"
// subs: ["auth0|5fab03693ab2e4006efd0421"]
// updatedAt: "2020-11-10T21:17:36.856Z"
// __v: 0
// _id: "befa248f-b842-4f66-84a1-dfd68c4f1b0a"
