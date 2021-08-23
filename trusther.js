AFRAME.registerComponent('thruster', {
    schema: {
        move_y: { type: "number", default: 0 },
        message: { type: "string", default: "Houston, Thruster is Working" }
    },

    init: function () {
        // Do something when component first attached.
        console.log(this.data.message);
    },

    tick: function () {
        // Do something on every scene tick or frame.
        window.addEventListener('click', (event) => {
            this.data.move_y -= 0.0001
        });

        var position = this.el.getAttribute("position")
        position.y = position.y + this.data.move_y;

        this.el.setAttribute("position", { x: position.x, y: position.y, z: position.z })
    }
});
