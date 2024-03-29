import mongoose, { Schema } from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        model: {
            type: String,
            required: true
        },

        make: {
            type: String,
            required: true
        },

        year: {
            type: Number,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        fuel: {
            type: String,
            required: true
        },

        bodyType: {
            type: String,
            required: true
        },

        location: String,

        imageURLs: {
            type: Array,
            required: true
        },

        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        }
    }, { timestamps: true}
);

const listingCollection = mongoose.model('Listing', listingSchema);

export default listingCollection;