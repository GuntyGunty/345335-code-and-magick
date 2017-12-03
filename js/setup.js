'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']

var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupWizardForm = setup.querySelector('.setup-wizard-form');
var submitButton = setup.querySelector('.setup-submit');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEye = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

document.querySelector('.setup-similar').classList.remove('hidden');

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

submitButton.addEventListener('click', submitForm);
submitButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    submitForm();
  }
});

var openPopup = function (evt) {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function (evt) {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if (document.activeElement !== setupUserName && evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var submitForm = function () {
  if (setupUserName.checkValidity()) {
    setupWizardForm.submit();
  }
};

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLORS[getRandomInteger(0, COAT_COLORS.length)];
});

wizardEye.addEventListener('click', function () {
  wizardEye.style.fill = EYE_COLORS[getRandomInteger(0, EYE_COLORS.length)];
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = FIREBALL_COLORS[getRandomInteger(0, FIREBALL_COLORS.length)];
});

var getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var createWizards = function (wizardsCount) {
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

var wizard = createWizards(4);

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