import listingCollection from "../models/listing.model.js"

export const createListing = async(req, res, next) => {
    console.log(req.body);
    try {
        const listing = await listingCollection.create(req.body);
        return res.status(201).json(listing);
    } catch (error) {
        console.log(error, " :: Error!");
        next(error)
    }
}