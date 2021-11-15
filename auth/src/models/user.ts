import mongoose from "mongoose";

// interface for typesciprt for creating a new user
// what it takes to create a new user
interface UserAttrs {
  email: string;
  password: string;
}

// interface that describes the properties that a User Model has
// what the intire collection of user takes
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// interface that desrcibe the properties of User Document
// what properties a single user has '
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};
const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

const buildUser = (attrs: UserAttrs) => {
  return new User(attrs);
};

export { User };
