const router = require('express').Router();
const _ = require('lodash');
const { longTour } = require('../models/long_tours');

router.get('/', async (req, res, next) => {
    try {
        const longTours = await longTour.find().sort('longTourID').select('-_id -__v').sort({longTourID:-1});

        res.send({ result: true, data: longTours });
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const LongTour = await longTour.findOne({ longTourID: req.params.id }).select('-_id -__v');

        if (!LongTour) return res.send({ result: false, message: 'the longTour with the given ID was not found' });
        res.send({ result: true, data: LongTour });
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {


        let LongTour = new longTour(_.pick(req.body,
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



        await LongTour.save();
        res.send({ result: true, data: longTour });
    } catch (err) {
        next(err);
    }
});


router.put('/:id', async (req, res, next) => {
    try {


        let updateLongTour = await longTour.findOneAndUpdate({ longTourID: req.params.id },
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


        if (!updateLongTour) return res.send({ result: false, message: 'the updateLongTour with the given ID was not found' });
        res.send({ result: true, data: updateLongTour });

    } catch (err) {
        next(err);
    }
});


router.delete('/:id', async (req, res, next) => {

    try {
        let LongTour = await longTour.findOneAndDelete({ longTourID: req.params.id });

        if (!LongTour) {
            return res.send({ result: false, message: 'the Tour with the given ID was not found' });
        }

        res.send(LongTour);
    } catch (err) {
        next(err)
    }

});



module.exports = router;
