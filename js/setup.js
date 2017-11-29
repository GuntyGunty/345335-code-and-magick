'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var createWizards = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: WIZARD_NAMES[getRandomInteger(0, 7)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, 7)],
      coatColor: COAT_COLORS[getRandomInteger(0, 5)],
      eyecolor: EYE_COLORS[getRandomInteger(0, 4)]
    });
  }
  return wizards;
};


var render = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = createWizards()[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = createWizards()[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = createWizards()[i].eyecolor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < createWizards().length; i++) {
  fragment.appendChild(render(createWizards()[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


