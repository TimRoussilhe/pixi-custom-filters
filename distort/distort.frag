
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec2 res;
uniform float time;
uniform float amplitude;

// Simple sine wave


// void mainImage( out vec4 fragColor, in vec2 fragCoord )
// {
// 	// Get the UV Coordinate of your texture or Screen Texture, yo!
// 	vec2 uv = fragCoord.xy / iResolution.xy;

// 	// Flip that shit, cause shadertool be all "yolo opengl"
// 	uv.y = -1.0 - uv.y;

// 	// Modify that X coordinate by the sin of y to oscillate back and forth up in this.
// 	uv.x += sin(uv.y*10.0+iGlobalTime)/10.0;

// 	// The theory be that you turn this sucka into basically a graph
// 	// (like on them TI-80 whatevers)
// 	// The sin of y says that y at 0 is the start of your sin wave
// 	// Then the bottom of your image is the end of one sin wave
// 	// (go ahead and delete them 10s and give her a try)
// 	// This will show 3 images waving back and forth like the JUST DON'T CARE
// 	// That's because ya'll is waving the x from -1 to 1 (-1, 0, 1)
// 	// So we need to get all amplitude and freqency on this bitch
// 	// That's where the 10s come in, and they could be any one of them numbers
// 	// the multply by 10 increases the frequency making the waves tight or loose as ... well ... you know...
// 	// the divide by 10 decreases that amplitude til it's wavy as FUCK
// 	// So play around with them shits.


// 	// Get the pixel color at the index.
// 	vec4 color = texture2D(iChannel0, uv);

// 	fragColor = color;
// }
// uniform vec4 filterClamp;

// #define AMPLITUDE 0.2
// #define SPEED 0.05

// uniform sampler2D noiseTexture;

// vec4 rgbShift( in vec2 p , in vec4 shift) {

//     shift *= 2.0*shift.w - 1.0;
//     vec2 rs = vec2(shift.x,-shift.y);
//     vec2 gs = vec2(shift.y,-shift.z);
//     vec2 bs = vec2(shift.z,-shift.x);

//     float r = texture2D(uSampler, p+rs, 0.0).x;
//     float g = texture2D(uSampler, p+gs, 0.0).y;
//     float b = texture2D(uSampler, p+bs, 0.0).z;

//     return vec4(r,g,b,1.0);
// }

// vec4 noise( in vec2 p ) {
//     return texture2D(noiseTexture, p, 0.0);
// }

// vec4 vec4pow( in vec4 v, in float p ) {
//     // Don't touch alpha (w), we use it to choose the direction of the shift
//     // and we don't want it to go in one direction more often than the other
//     return vec4(pow(v.x,p),pow(v.y,p),pow(v.z,p),v.w);
// }

// void main()
// {
// 	vec2 p = vTextureCoord;
//     vec4 color = vec4(0.0,0.0,0.0,1.0);

//     // Elevating shift values to some high power (between 8 and 16 looks good)
//     // helps make the stuttering look more sudden
//     vec4 shift = vec4pow(noise(vec2(SPEED*time,2.0*SPEED*time/25.0 )),8.0)
//         		*vec4(AMPLITUDE,AMPLITUDE,AMPLITUDE,1.0);;

//     vec2 uv = vTextureCoord;
//     uv.x += sin(uv.y*10.0+time*2.0)/10.0;
//     //vec4 color = texture2D(uSampler, uv);

//     color += rgbShift(uv, shift);

//     //Sin wave


// 	gl_FragColor = color;
// }

void main()
{
	// // Get the UV Coordinate of your texture or Screen Texture, yo!
	// vec2 uv = vTextureCoord.xy / res.xy;
	vec2 uv = vTextureCoord;

	// Flip that shit, cause shadertool be all "yolo opengl"
    // uv.y = -1.0 - uv.y;

	// Modify that X coordinate by the sin of y to oscillate back and forth up in this.
	uv.x += sin(uv.y*10.0+time*2.0)/amplitude;

	// The theory be that you turn this sucka into basically a graph
	// (like on them TI-80 whatevers)
	// The sin of y says that y at 0 is the start of your sin wave
	// Then the bottom of your image is the end of one sin wave
	// (go ahead and delete them 10s and give her a try)
	// This will show 3 images waving back and forth like the JUST DON'T CARE
	// That's because ya'll is waving the x from -1 to 1 (-1, 0, 1)
	// So we need to get all amplitude and freqency on this bitch
	// That's where the 10s come in, and they could be any one of them numbers
	// the multply by 10 increases the frequency making the waves tight or loose as ... well ... you know...
	// the divide by 10 decreases that amplitude til it's wavy as FUCK
	// So play around with them shits.

	// Get the pixel color at the index.
	vec4 color = texture2D(uSampler, uv);
    // vec4 clamp = texture2D(uSampler, clamp(vTextureCoord.xy, filterClamp.xy, filterClamp.zw));

	gl_FragColor = color;
}


//Another wave
//also good example of shadertoy to PIXI

// SHADERTOY
// void mainImage( out vec4 fragColor, in vec2 fragCoord )
// {
// 	vec2 uv = fragCoord.xy / iResolution.xy;
// 	vec4 color = texture2D(iChannel0,vec2(uv.x,-uv.y+0.5*sin(iGlobalTime+uv.x*4.0)));
// 	float lum = 0.5*sin(iGlobalTime+uv.x*4.0) + 1.0 - sqrt(uv.y*.25);

// 	fragColor = color*lum;
// }

// PIXI
// void main()
// {
// 	vec2 uv = vTextureCoord;
//     // vec4 color = texture2D(uSampler,vec2(uv.x,uv.y));
// 	vec4 color = texture2D(uSampler,vec2(uv.x ,uv.y*sin(time+uv.x*4.0)));
// 	float lum = 0.5*sin(time+uv.x*4.0) + 1.0 - sqrt(uv.y*.25);

//     gl_FragColor = color * lum;
// }
