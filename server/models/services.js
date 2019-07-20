import mongoose from 'mongoose';

const ServiceSchema = mongoose.Schema({
    service_id: {
        type: Number
    },
    game_logo: {
        type: String
    },
    price: {
        type: Number
    },
    voice: {
        type: String
    },
    voice_length: {
        type: Number
    },
    game: {
        type: String
    },
    order_total: {
        type: Number
    },
    logo: {
        type: String
    },
    tags: {
        type: String
    }
});

mongoose.model('Service', ServiceSchema);
