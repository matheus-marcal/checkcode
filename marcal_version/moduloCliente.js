/*
TODA CLASSE TERMINADA EM "CLIENTE" QUER DIZER QUE USA OUTROS MODULOS QUE FORAM DEFINIDOS POR MIM
*/
/*This Happens because when using ES Modules we are enforced to specify the file extension in the import statement

import * from "./demo.js"  // Works fine
import * from "./demo" // Will throw error as you see

Note that : The above two options are both valid when using commonJs instead

Share
Improve this answer
Follow*/
/*RESUMO:iMPOR/EXPORT,O que é export em JavaScript?
O export é utilizado quando criamos módulos JavaScript para exportar ligações em tempo real para suas funções, objetos ou valores primitivos de um módulo sejam utilizados por outros programas através de declarações import*/

const {bemVindo} = require('./moduloA.js' )
const {boaNoite, bomDia} = require('./moduloB.js')


console.log(bemVindo)
console.log(boaNoite)
console.log(bomDia)











