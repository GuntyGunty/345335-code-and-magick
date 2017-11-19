'use strict';

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

  var max = -1;
  var maxIndex = -1;

  for(var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  
  for (var i = 0; i < times.length; i++) {
    var barWidth = 40; // px; 
    var indent = 70;    // px;
    var initialX = 120; // px;
    var initialY = 80;  // px;
    var lineHeight = 15;// px;

    ctx.fillRect(initialX + indent * i, (histogramHeight - (times[i] * step)) + 80, barWidth, times[i] * step);
 
    if (times[i] = names.indexOf('Вы')) {
      ctx.fillStyle = 'red';
      ctx.fillText(names[i], initialX + indent * i, initialY + histogramHeight + barWidth);
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillText(names[i], initialX + indent * i, initialY + histogramHeight + barWidth);
  }
};


window.renderStatistics(ctx, names, times);
