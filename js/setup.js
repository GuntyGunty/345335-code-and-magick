'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var nameHolder = setup.querySelector('.setup-user-name');
var submitButton = setup.querySelector('.setup-submit');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEye = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

document.querySelector('.setup-similar').classList.remove('hidden');

////добавление листенеров на открытие-закрытие/////

var onPopupEntrPress = function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
};

var submitForm = function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
    return;
  }
};

var openPopup = function (evt) {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  setupOpen.removeEventListener('keydown', onPopupEntrPress);
  submitButton.addEventListener('keydown', submitForm);
};

var closePopup = function (evt) {
  if (nameHolder.focused) {
    return;
  } else {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    submitButton.removeEventListener('keydown', submitForm);
    setupOpen.addEventListener('keydown', onPopupEntrPress);
  }
};


var onPopupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});


////добавление листенеров на цвет/////

var changeCoatColor = function () {
  wizardCoat.style.fill = COAT_COLORS[getRandomInteger(0, 5)];
  wizardCoat.style.cursor = 'pointer';
};

wizardCoat.addEventListener('click', function () {
  changeCoatColor();
});

var changeEyeColor = function () {
  wizardEye.style.fill = EYE_COLORS[getRandomInteger(0, 4)];
  wizardEye.style.cursor = 'pointer';
};


wizardEye.addEventListener('click', function () {
  changeEyeColor();
});


wizardFireball.addEventListener('click', function () {
  changeFireColor();
});


var changeFireColor = function () {
  wizardFireball.style.fill = COAT_COLORS[getRandomInteger(0, 5)];
  wizardFireball.style.cursor = 'pointer';
};

////добавление листенеров на создание персонажа/////

var getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getWizards = function (wizardsCount) {
  var wizards = [];

  for (var i = 0; i < wizardsCount; i++) {
    wizards.push({
      name: WIZARD_NAMES[getRandomInteger(0, 7)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, 7)],
      coatColor: COAT_COLORS[getRandomInteger(0, 5)],
      eyecolor: EYE_COLORS[getRandomInteger(0, 4)]
    });
  }
  return wizards;
};

var wizard = getWizards(4);

var getWizardElement = function (element) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = element.name;
  wizardElement.querySelector('.wizard-coat').style.fill = element.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = element.eyecolor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizard.length; i++) {
  fragment.appendChild(getWizardElement(wizard[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
