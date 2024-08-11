const mongoose = require('mongoose');

const TripsSchema = mongoose.Schema(
    {
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
            required: true,
            default: 0
        },
        number_of_places: {
            type: Number,
            required: true,
            default: 0
        },
        places: {
            place_name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            meta: {
                votes: {
                    type: Number,
                    default: 0
                },
                favs: {
                    type: Number,
                    default: 0
                }
            },
            location: {
                type: String,
                required: true
            },
        },
        rating: {
            type: Number,
            required: false,
            default: 0
        },
        meta: {
            votes: {
                type: Number,
                default: 0
            },
            favs: {
                type: Number,
                default: 0
            }
        },
        cover_image: {
            type: String,
            required: false
        }
    },
    {
        Timestamp: true
    }
);


const Trips = mongoose.model("Trip", TripsSchema);

module.exports = Trips;
