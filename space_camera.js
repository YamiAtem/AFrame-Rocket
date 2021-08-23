AFRAME.registerComponent('space_camera', {
    schema: {
        move_z: { type: "number", default: 10 },
        message: { type: "string", default: "Houston, Camera is Working" }
    },

    init: function () {
        // Do something when component first attached.
        console.log(this.data.message);
    },

    tick: function () {
        // Do something on every scene tick or frame.
        this.data.move_z += 0.01

        var position = this.el.getAttribute("position")
        position.z = this.data.move_z;

        this.el.setAttribute("position", { x: position.x, y: position.y, z: position.z })
    }
});
