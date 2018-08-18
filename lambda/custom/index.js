/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Bienvenido a la Skill de Diccionario Cordobés';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Diccionario Cordobés', speechText)
      .getResponse();
  },
};

const PegoIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'PegoIntent';
  },
  handle(handlerInput) {
    var items = [
      { Query: 'Pego', Result: 'Chorrada, tontería' },
      { Query: 'Fartusco', Result: 'Más que tonto'},
      { Query: 'Enguachirnar', Result: 'Dejar el suelo más que mojado. Regar una planta más de la cuenta'},
      { Query: 'Salmorejo', Result: 'Comida típica cordobesa hecha principalmente de tomate y pan'},
      { Query: 'Cucha', Result: 'Derivada del verbo escuchar aunque ha pasado a tener el valor de mira'},
      { Query: 'Avenate', Result: 'Ataque de locura'},
      { Query: 'Atacarse', Result: 'Remeter la camisa o camiseta en los pantalones'},
      { Query: 'Borococo', Result: 'Que alguna cosa tiene un defecto'},
      { Query: 'Burraco', Result: 'Que algo es muy viejo o antiguo'},
      { Query: 'Achuchar', Result: 'Empujar, apretar'},
      { Query: 'Alargar', Result: 'Que te traigan algo'},
      { Query: 'Bajío', Result: 'Que tienes mal cuerpo aunque tambien se dice para una persona mal encarada'},
      { Query: 'Bichear', Result: 'Voy a mirar a ver si hay algo que me pueda interesar'},
      { Query: 'Eclisáo', Result: 'Que tienes la mente en otro sitio'},
      { Query: 'Curiana', Result: 'Cucaracha'},
      { Query: 'Pizco', Result: 'Un trozo muy pequeño'},
      { Query: 'Farfollas', Result: 'Persona que es muy descuidada'},
      { Query: 'Zarcillos', Result: 'Pendientes'},
      { Query: 'Trabajoso', Result: 'Persona muy rebelde en la convivencia'},
      { Query: 'Zocato', Result: 'Zurdo'},
      { Query: 'Tranquillo', Result: 'Trozo de madera que se ponía en la entrada de la puerta para que no se cerrara'},
      { Query: 'Cardusa', Result: 'Cuando se ha hecho un esfuerzo muy grande'},
      { Query: 'Jartá', Result: 'Mucho de algo'},
      { Query: 'Chuchurrío', Result: 'Mustio'},
      { Query: 'Jeringo', Result: 'Son como las porras para desayunar pero en redondo y antiguamente se enzaltaban en juncos del río para poder llevártelas.'},
      { Query: 'Cipote', Result: 'Palabrota que se refiere al miembro viril. Aunque en Córdoba se refiere a tonto enfatizado ¡Vaya tio cipote ! o enfatizar algo en general ¡Cipote que calor!'},
      { Query: 'Mamarracho', Result: 'Persona o cosa sin gracia'},
      { Query: 'Charnaque', Result: 'Chozo, casa pequeña'},
      { Query: 'Jeyondo', Result: 'Molesto, insufrible'},
      { Query: 'Moña', Result: 'Ramiñete de jazmines pinchados en una horquilla, antes se vendía en la calle y las mujeres se la ponían en el pelo'},
      { Query: 'Pamplina', Result: 'Persona muy puntillosa, tiquismiquisZapatiesta: Jaleo, follón, bronca, pelea.'},
      { Query: 'Graílla', Result: 'Rebate o escalón de la puerta de entrada'},
      { Query: 'Bureo', Result: 'Paseo'},
      { Query: 'Jaramago', Result: 'Malas hierbas'},
      { Query: 'Esaborío', Result: 'Persona antipática'},
      { Query: 'Perra', Result: 'Obsesión con algo'},
      { Query: 'Hocicar', Result: 'Darse de bruces en una caida'},
      { Query: 'Chusmear', Result: 'Pasar el rato de forma divertida'},
      { Query: 'Huchear', Result: 'Exigir algo con mucho apremio'},
      { Query: 'Alferesia', Result: 'Ataque de pánico'},
      { Query: 'Jardalaso', Result: 'Una caida fuerte'},
      { Query: 'Telera', Result: 'Pan doradito por fuera y de miga blanca y esponjosa por dentro. Es fenomenal para el salmorejo y para mojar salsas'},
      { Query: 'Vargas', Result: 'Es un tinto de verano compuesto con vino tinto y gaseosa'},
      { Query: 'Fiti-fiti', Result: 'Mitad de vino negro dulce y vino blanco'},
      { Query: 'Miajón', Result: 'Miga del pan'},
      { Query: 'Colorao', Result: 'Cuando nos referimos al color rojo'},
      { Query: 'Galipuche', Result: 'Bebida aguada'},
      { Query: 'Guindar', Result: 'Mirar, ver'},
      { Query: 'Ruilla', Result: 'Trapo húmedo que sirve para limpiar'},
      { Query: 'Perol', Result: 'Salir al campo y reunirse con amigos o familia donde se hace un arroz'},
      { Query: 'Remear', Result: 'Hacer burla a alguien'},
      { Query: 'Zangarrea', Result: 'Algo que se mueve mucho'},
      { Query: 'Saquito', Result: 'Jersey'}
    ];
    const queryValue = handlerInput.requestEnvelope.request.intent.slots.Query.value;
    var found = items.filter(function(el) {
      return (el.Query.toLowerCase() === queryValue.toLowerCase());
    });

    if (found.length > 0) {
      var speechText = found[0].Query + ' significa ' + found[0].Result;
    } else {
      var speechText = 'No parece que ' + queryValue + ' sea un término cordobés';
    }

    const titleText = 'qué significa '+queryValue;

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(titleText, speechText)
      .getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'Puedes preguntarme por cualquier término cordobés e intentaré aclararte su significado';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Pregunta por un término cordobés', speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Adiós';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Bye', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Lo siento, no he podido entenderte, ¿podrías repetir?')
      .reprompt('Lo siento, no te he podido entender')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    PegoIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
