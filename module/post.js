const mongoose=require("mongoose")
const { Schema } = mongoose;

const postSchema = new Schema({
    postuser:{
type:String,
require:true,
    },
posturl:{
    type:String,

},
postcaption:{
    type:String,

}
},
{ timestamps: true })

module.exports=mongoose.model("post",postSchema)
