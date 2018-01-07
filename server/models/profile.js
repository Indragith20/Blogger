var mongoose  = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var userDetailsSchema = new Schema({
    firstName:String,
    lastName:String,
    contactNumber:Number,
    password:String,
    userRole:String,
    emailId:String,
    birthDate:String,
    Interests:[],
    profileImage:{type:String,default:'/uploads/default.jpg'},
    activeStatus:Boolean,
    aboutDescription:String,
    followers:[{
        followerId:Number,
        followerName:String,
        followerMailId:String
    }],
    likedBlogs:[]    
});


userDetailsSchema.plugin(AutoIncrement, {inc_field: 'memberId'});
var Model=mongoose.model('User',userDetailsSchema);

module.exports = Model;