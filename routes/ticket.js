const express = require('express');
const { CreateTicket, AnnulationTicket, GetTicketinfo } = require('../Controllers/ticket.controllers');
const isOrgan = require('../Middleware/isOrgan');
const router = express.Router();

router.post('/Create', CreateTicket );
router.delete('/AnnulationTicket', AnnulationTicket);
router.get('/GetTicketinfo', GetTicketinfo);

module.exports = router;