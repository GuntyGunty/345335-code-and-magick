'use strict';


var getRandomColor = function () {
  var opacity = Math.random().toFixed(2);

  return 'rgba(0, 0, 255, ' + opacity + ')';
};

var getColor = function (condition) {
  return condition ? 'rgba(255, 0, 0, 1)' : getRandomColor();
};

var getMaxElement = function (times) {
  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
      maxIndex = i;
    }
  }

  return times[maxIndex];
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var histogramHeight = 150;
  var step = histogramHeight / (getMaxElement(times) - 0);
  var barWidth = 40;
  var indent = 50;
  var initialX = 120;
  var initialY = 80;
  var lineHeight = 15;

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = getColor(names[i] === 'Вы');
    ctx.fillText(Math.floor(times[i]), initialX + (indent + barWidth) * i, initialY);
    ctx.fillText(names[i], initialX + (indent + barWidth) * i, initialY + histogramHeight + barWidth);
    ctx.fillRect(initialX + (indent + barWidth) * i, (histogramHeight - (times[i] * step)) + 80 + lineHeight, barWidth, times[i] * step);
  }
};
