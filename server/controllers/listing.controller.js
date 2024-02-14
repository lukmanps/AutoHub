import listingCollection from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

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

export const getUserListing = async(req, res, next) => {
    if(req.params.id) {
        try {
            const listing = await listingCollection.aggregate([
                {
                    $lookup: {
                        from: 'users',
                        localField: 'user',
                        foreignField: '_id',
                        as: 'listings'
                    }
                }
            ])

            console.log(listing, ":: User Listings");
            res.status(200).json(listing);
        } catch (error) {
            next(error);
        }
    } else {
       return next(errorHandler(401, 'User not logged in!'))
    }
}

export const getListing = async(req, res, next) => {
    try {
        const listing = await listingCollection.findById(req.params.id);
        res.status(200).json(listing);
    } catch (error) {
        return next(errorHandler(500, "Internal Server Error"));
    }
}