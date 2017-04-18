var PIXI = require('pixi.js');

var vert = require('../fragments/default.vert');
var frag = require('./distort.frag');
/**
 * The ColorMatrixFilter class lets you apply a 4x4 matrix transformation on the RGBA
 * color and alpha values of every pixel on your displayObject to produce a result
 * with a new set of RGBA color and alpha values. It's pretty powerful!
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
function DistortFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        vert,
        // fragment shader
        frag,
        // custom uniforms
        {
            res: { type: 'v2', value: { x: 0, y: 0 } },
            time: { type: '1f', value: 0 },
            amplitude: { type: '1f', value: 10.0 },
            noiseTexture: {type: 'sampler2D', value: null}
        }
    );

    this.res = [1366, 765];
    this.time = 0;
    this.amplitude = 10.0;
    this.noiseTexture = null;
}

DistortFilter.prototype = Object.create(PIXI.Filter.prototype);
DistortFilter.prototype.constructor = DistortFilter;
module.exports = DistortFilter;

Object.defineProperties(DistortFilter.prototype, {
    /**
     * Sets the resolution of the shockwave in normalized screen coords. That is
     * (0,0) is the top-left and (1,1) is the bottom right.
     *
     * @member {object<string, number>}
     * @memberof PIXI.filters.DistortFilter#
     */
    res: {
        get: function ()
        {
            return this.uniforms.res;
        },
        set: function (value)
        {
            this.uniforms.res = value;
        }
    },
    /**
     * Sets the elapsed time of the shockwave. This controls the speed at which
     * the shockwave ripples out.
     *
     * @member {number}
     * @memberof PIXI.filters.DistortFilter#
     */
    time: {
        get: function ()
        {
            return this.uniforms.time;
        },
        set: function (value)
        {
            this.uniforms.time = value;
        }
    },
    /**
     * Sets the elapsed time of the shockwave. This controls the speed at which
     * the shockwave ripples out.
     *
     * @member {number}
     * @memberof PIXI.filters.DistortFilter#
     */
    amplitude: {
        get: function ()
        {
            return this.uniforms.amplitude;
        },
        set: function (value)
        {
            this.uniforms.amplitude = value;
        }
    },
    /**
     * Sets the elapsed time of the shockwave. This controls the speed at which
     * the shockwave ripples out.
     *
     * @member {number}
     * @memberof PIXI.filters.DistortFilter#
     */
    noiseTexture: {
        get: function ()
        {
            return this.uniforms.noiseTexture;
        },
        set: function (value)
        {
            this.uniforms.noiseTexture = value;
        }
    }
});
