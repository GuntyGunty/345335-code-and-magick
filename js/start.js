'use strict';

var getMaxElement = function (times) {
  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }
  return max;
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

  var getColor = function (element) {
    if (element === names.indexOf('Вы')) {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
  };

  for (var i = 0; i < times.length; i++) {
    var barWidth = 40;
    var indent = 70;
    var initialX = 120;
    var initialY = 80;
    var lineHeight = 15;

    ctx.fillText(Math.floor(times[i]), initialX + indent * i, initialY);
    ctx.fillText(names[i], initialX + indent * i, initialY + histogramHeight + barWidth);

    getColor(i);

    ctx.fillRect(initialX + indent * i, (histogramHeight - (times[i] * step)) + 80 + lineHeight, barWidth, times[i] * step);
  }
};


window.renderStatistics(ctx, names, times);
