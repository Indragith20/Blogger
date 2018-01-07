var mongoose  = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var blogDetailsSchema = new Schema({
    blogTitle:String,
    blogFullStory:String,
    blogDescription:String,
    blogCategory:String,
    blogImage:{type:String,default:'/uploads/default.jpg'},
    blogOwner:{
        memberId:Number,
        memberName:String
    },
    likes:[{
        memberId:Number,
        memberName:String
    }],
    comments:[{
        commenterId:Number,
        commentor:String,
        comments:String
    }],
    views:Number

},{timestamps:true});

blogDetailsSchema.plugin(AutoIncrement, {inc_field: 'blogId'});
var Model=mongoose.model('blog',blogDetailsSchema);

module.exports = Model;