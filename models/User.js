import mongose from "mongoose"
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongose.Schema({
    name: String,
    email: String,
    avatarUrl: String,
    facebookId: Number,
    githubId: Number
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongose.model("User", UserSchema);
export default model;