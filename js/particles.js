var n = 1000;
var xs = [], vs = [];
var dt = 0.02;

var x_range = 0.01; // go to +/- x_range
var v_range = 1.4; // similar

// Populate
for (var i=0; i<n; i++) {
  x = 2*x_range*(Math.random() - 0.5);
  v = 2*v_range*(Math.random() - 0.5);
  xs.push(x);
  vs.push(v);
}

var layout = {
   margin: {
    l: 0,
      r: 0,
    b: 0,
    t: 0
  },
  autosize: true,
  hovermode: false,
  xaxis: {
    range: [-.15, .15],
    showgrid: false,
    zeroline: false,
    visible: false,
    fixedrange: true
  },
  yaxis: {
    range: [-2, 2],
    showgrid: false,
    zeroline: false,
    visible: false,
    fixedrange: true
  },
};

var config = {
  displayModeBar: false
}

Plotly.newPlot('simulation', [{
  x: xs,
  y: vs,
  mode: 'markers',
  marker: {
    size: 3,
    },
}],
layout,
config
)

function compute () {
  var dx, dv;
  var xh, yh, zh;
  var dt = 0.0002;

  for (var i = 0; i < n; i++) {
    var x = xs[i];
    var v = vs[i];
    //var a = -10 * (0.1*x-0.005*x*x*x);
    var a = -10*Math.sin(20*x);
    xs[i] += v * dt;
    vs[i] += a * dt;
  }
}

function update () {
  for (var i=0; i<7; i++) {
		compute();
  }

  Plotly.animate('simulation', {
    data: [{x: xs, y: vs}]
  }, {
    transition: {
      duration: 0
    },
    frame: {
      duration: 0,
      redraw: false
    }
  }, layout);

  requestAnimationFrame(update);
}

requestAnimationFrame(update);
