import mongoose from 'mongoose'

const connection = {}

const connect = async () => {
  if (connection.isConnected) {
    return
  }
//Ghaith - not safe/secure enough for production use
  const db = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/flights_db', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateFindIndex: true,
    useUnifiedTopology: true,
  })

  connection.isConnected = db.connections[0].readyState
  console.log(connection.isConnected)
}

export default connect