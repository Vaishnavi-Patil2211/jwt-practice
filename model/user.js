const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{type: String ,reqired:true,unique:true},
    password:{type: String ,required:true}
},

{collection:'users'}
)

const model =mongoose.model('UserSchema', UserSchema)

module.exports = model