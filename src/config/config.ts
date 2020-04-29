import dotenv from 'dotenv'

dotenv.config()

export default {
  apolloUrl: process.env.REACT_APP_APOLLO_SERVER_URL,
}
