/*
Requisitos que deve atender
* Implementar
* RIHC 1
* Ações de cadastro, alteração, pesquisa e classificação devem disparar notificações de sucesso
  ou insucesso após sua realização.
* */

/*
* RINF11 - Mostrar a quantidade de eventos realizados e a realizar no mês corrente.
* */
const mongoose = require('mongoose');

const EventoSchema = mongoose.Schema({
  dataevento: { type: Date, default: Date.now },
  hora:  { type: String },
  nome:  { type: String },
  tipo:  { type: String },
  desc:  { type: String },
  convidados:  { type: Number },
});


const Evento = module.exports = mongoose.model('Evento', EventoSchema);