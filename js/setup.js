
// 'use strict';

//

// 

// var EYE_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

// var similarListElement = userDialog.querySelector('.setup-similar-list');

// var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// var setup = document.querySelector('.setup');
// var similarListElement = document.querySelector('.setup-similar-list');
// var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

// setup.classList.remove('hidden');


// for (var i = 0; i < 8; i++) {
//     var wizards = [
//         {
//         name: WIZARD_NAMES[i] + WIZARD_SURNAMES[i],
//         coatColor: COOAT_COLOR[i],
//         eyescolor: EYES_COLOR[i]
//         }
//     ];
// }

// var renderWizard = function (wizard) {
//     var wizardElement = similarWizardTemplate.cloneNode(true);
    
//     wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
//     wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    
//     return wizardElement;
//   }

// Файл setup.js
'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYE_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var wizards = [
  {
    name: WIZARD_NAMES[getRandomInteger(0, 8)] + ' ' + WIZARD_SURNAME[getRandomInteger(0, 7)],
    coatColor: COAT_COLOR[getRandomInteger(0, 5)],
    eyecolor: EYE_COLOR[getRandomInteger(0, 4)]
  },
  {
    name: WIZARD_NAMES[getRandomInteger(0, 8)] + ' ' + WIZARD_SURNAME[getRandomInteger(0, 7)],
    coatColor: COAT_COLOR[getRandomInteger(0, 5)],
    eyecolor: EYE_COLOR[getRandomInteger(0, 4)]
  },
  {
    name: WIZARD_NAMES[getRandomInteger(0, 8)] + ' ' + WIZARD_SURNAME[getRandomInteger(0, 7)],
    coatColor: COAT_COLOR[getRandomInteger(0, 5)],
    eyecolor: EYE_COLOR[getRandomInteger(0, 4)]
  },
  {
    name: WIZARD_NAMES[getRandomInteger(0, 8)] + ' ' + WIZARD_SURNAME[getRandomInteger(0, 7)],
    coatColor: COAT_COLOR[getRandomInteger(0, 5)],
    eyecolor: EYE_COLOR[getRandomInteger(0, 4)]
  }
];

var getRender = function () {
  for (var i = 0; i < wizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyecolor;

    similarListElement.appendChild(wizardElement);
  }
};

getRender();
