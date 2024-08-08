const Collection = require('../models/collection-model.js');

/**
 * Makes a new Collection to group a list of job applications
 * 
*/
createCollection = async (req, res) =>{
    const body = req.body;
    if (!body.collectionName) {
        return res.status(400).json({
            success: false,
            error: 'You Must provide a name',
        })
    }

    const newCollection = new Collection(body);
    console.log("creating collection: " + JSON.stringify(newCollection));

    newCollection.save()
    .then(() => {
        return res.status(201).json({
            success: true,
            collection: newCollection,
            message: 'Created Collection'
        })
    }).catch((error)=>{
        return res.status(400).json({
            error,
            message: 'Collection not created try again'
        })
    })
}

/**
 * Deletes a collection 
 */
deleteCollection = async (req, res) =>{
    Collection.findById({_id: req.params.id},(err, collection)=>{
        if(err) return res.status(404).json({
            err, 
            message: "Collection not found"
        })

        Collection.findOneAndDelete({ _id: req.params.id }, () => {
            return res.status(200).json({ success: true, data: collection })
        }).catch(err => console.log(err))
    });
}

module.exports = {
    createCollection,
    deleteCollection

}