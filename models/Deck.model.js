const { Schema, model } = require("mongoose");

const deckSchema = new Schema(
  {
    
    name:{
      type:String,
      required: true,
      trim: true
    },
    archetype: {
      type: String,
      
      default: "Unknown",
      trim: true

    },
    cards: { type: [Number], default: [] },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    valid: {
      type: Boolean,
      default: false,
    },

    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Deck = model("Deck", deckSchema);
module.exports = Deck;
