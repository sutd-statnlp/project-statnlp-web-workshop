import databaseConfig from '@/config/DatabaseConfig'
import DataUtil from '@/utils/DataUtil'

class DatabaseService {
  constructor () {
    firebase.initializeApp(databaseConfig)
    this.database = firebase.database()
  }
  saveUser (user) {
    this.database.ref('users/' + DataUtil.generateUID()).set({
      firstName: user.name,
      affiliation: user.affiliation,
      email: user.email,
      role: user.role,
      customRole: user.customRole,
      agree: user.agree
    })
  }
}

export default new DatabaseService()
