const router = require('express').Router();
const _ = require('lodash');
const { shortTour } = require('../models/short_tours');

router.get('/', async (req, res, next) => {
    try {
        const shortTours = await shortTour.find().sort('shortTourID').select('-_id -__v');

        res.send({ result: true, data: shortTours });
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const ShortTour = await shortTour.findOne({ shortTourID: req.params.id }).select('-_id -__v');

        if (!ShortTour) return res.send({ result: false, message: 'the shortTour with the given ID was not found' });
        res.send({ result: true, data: ShortTour });
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {


        let ShortTour = new shortTour(_.pick(req.body,
            [
                'name',
                'mobile',
                'tourName',
                'tourDate',
                'personNumber',
                'childNumber',
                'chairNumber',
                'roomNumber',
                'nightNumber',
                'addChairNumber',
                'hotelName',
                'paid',
                'remaining',

            ]));
        await ShortTour.save();
        res.send({ result: true, data: ShortTour });
    } catch (err) {
        next(err);
    }
});


router.put('/:id', async (req, res, next) => {
    try {


        let updateshortTour = await shortTour.findOneAndUpdate({ shortTourID: req.params.id },
            _.pick(req.body, [
                'name',
                'mobile',
                'tourName',
                'tourDate',
                'personNumber',
                'childNumber',
                'chairNumber',
                'roomNumber',
                'nightNumber',
                'addChairNumber',
                'hotelName',
                'paid',
                'remaining',
            ]), { new: true, runValidators: true, context: 'query', upsert: true });


        if (!updateshortTour) return res.send({ result: false, message: 'the updateshortTour with the given ID was not found' });
        res.send({ result: true, data: updateshortTour });

    } catch (err) {
        next(err);
    }
});



router.delete('/:id', async (req, res, next) => {

    try {
        let ShortTour = await shortTour.findOneAndDelete({ shortTourID: req.params.id });

        if (!ShortTour) {
            return res.status(400).send('this shop is not exist');
        }

        res.send(ShortTour);
    } catch (err) {
        next(err)
    }

});



module.exports = router;
