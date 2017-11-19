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

    var histogramWidth = 150;
    var step = histogramWidth / (max - 0);

    for(var i = 0; i < times.length; i++) {
        
            ctx.fillRect(120, 80 + 50 * i, times[i] * step, 40);
            ctx.fillText(names[i], 120 + histogramWidth + 20, 80 + 15 + 40 * i);
          }


    // ctx.translate(180, 390);
    // ctx.rotate(-90 * Math.PI / 180);
    // ctx.fillRect(120, 80, times[0] * step, 20);
    // ctx.fillText(names[0], 120 + histogramWidth + 20, 80 + 15 + 40 * i);
    // ctx.fillRect(120, 110, times[1] * step, 20);
    // ctx.fillRect(120, 140, times[2] * step, 20);
    // ctx.fillRect(120, 170, times[3] * step, 20);
};


window.renderStatistics(ctx, names, times);
