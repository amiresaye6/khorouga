const mongoose = require('mongoose');

const PlacesSchema = mongoose.Schema({
    place_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    place_cover_image: {
        type: String,
        required: true
    }
});

const MetaSchema = mongoose.Schema({
    votes: {
        type: Number,
        default: 0
    },
    favs: {
        type: Number,
        default: 0
    }
});

const TripsSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User' // Assuming you have a User model; update if needed
        },
        trip_name: {
            type: String,
            required: true,
            unique: true
        },
        author: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true,
            default: 0
        },
        description: {
            type: String,
            required: true
        },
        number_of_places: {
            type: Number,
            required: true,
            default: 0
        },
        places: [PlacesSchema], // Array of place objects
        rating: {
            type: Number,
            required: false,
            default: 0
        },
        meta: MetaSchema, // Meta information for the trip
        cover_image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true // Correct option for enabling timestamps
    }
);

const Trips = mongoose.model("Trip", TripsSchema);

module.exports = Trips;
