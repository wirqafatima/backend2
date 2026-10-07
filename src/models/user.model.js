import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: [45, 'Name cannot exceed 45 characters'],
        unique: true,
    },

    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true,

    },
    otp: {
        type: String,
        trim: true
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ["user", "admin", "super-admin"],
        default: "user"
    }
}, {
    timestamps: true
}
);

const User = mongoose.model('User', userSchema);

export default User;
