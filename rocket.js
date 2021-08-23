AFRAME.registerComponent('rocket', {
    schema: {
        move_y: { type: "number", default: 1 },
        message: { type: "string", default: "Houston, Rocket is Working" }
    },

    init: function () {
        // Do something when component first attached.
        console.log(this.data.message);
    },

    tick: function () {
        // Do something on every scene tick or frame.
        

        var position = this.el.getAttribute("position")
        this.data.move_y += 0.01
        position.y = this.data.move_y;

        this.el.setAttribute("position", { x: position.x, y: position.y, z: position.z })
    }
});
