AFRAME.registerComponent('rocket_box', {
  schema: {
    message: { type: 'string', default: "Houston, Box Rocket has Loaded" },
    move_x: { type: 'number', default: 0 }
  },

  init: function () {
    // Do something when component first attached.
    console.log(this.data.message);
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
    window.addEventListener('click', (event) => {
      this.data.move_x += 0.005
    });

    var position = this.el.getAttribute("position")
    position.x = position.x + this.data.move_x;

    this.el.setAttribute("position", { x: position.x, y: position.y, z: position.z })
  }
});
