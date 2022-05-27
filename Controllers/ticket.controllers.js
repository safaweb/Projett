const Event = require('../models/Event');
const ticket = require('../models/Ticket')
const jwt = require('jsonwebtoken');
const config = require('config');

const secret = config.get('secret');

// const date = require('date')

//****** */ cree une ticket **********
exports.CreateTicket = async (req, res) => {
    const { Date, NumPlaceReserve, id_Event } = await req.body;
    const token = req.headers.authorization;
    // console.log(req.headers)
    const decodedToken = await jwt.verify(token, secret);
    const id_User = await decodedToken.id;

    // const today= await date.now()
    try {
        let evt = await Event.findOne({ id_Event })
        if (!evt) {
            return res.status(501).json("Vérifier l'evenement")
        }
        // else if(Date <= today){
        //  res.status(301).json("L'evenement")
        // }

        console.log(`nombre de place reste ${evt.NumPlaceRest}`)
        const x = await (evt.NumPlaceRest - NumPlaceReserve)
        console.log(NumPlaceReserve)
        console.log(`x=${x}`)
        evt = await Event.findByIdAndUpdate(id_Event, { NumPlaceRest: x })
        console.log(evt.NumPlaceRest)

        if (evt.NumPlaceRest <= 0) {
            return res.status(301).json('Les tickets sont complé')
        }
        for (pas = 0; pas < NumPlaceReserve; pas++) {

            const array = await Event.findById(id_Event)
            const array2 = await array.numberTickedispo


            console.log(array2)
            const array3 = await array2.shift()
            console.log(array2)

            const updtevent = await Event.findOneAndUpdate({ _id: id_Event }, { numberTickedispo: array2 })
            let NewTicket = await new ticket({
                TicketNum: updtevent.numberTickedispo[0],
                Date,
                id_Event,
                id_User
            })
            await NewTicket.save();
        }
        return res.send("ticke saved");
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}


// ****** Annulation ticket

exports.AnnulationTicket = async (req, res) => {


    try {
        const ticket = await Ticket.findOneByIdAndDelete(req.body._id)
        const event = await Event.findByIdAndUpdate(ticket.id_Event, { NumPlaceRest: NumPlaceRest + ticket.NumPlaceReserve })

        res.status(301).json("Ticket annuler par successe")

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }

}