
  attribute float size;
  attribute float alpha;

  // varying float vSize;
  // varying float vAlpha;
  varying vec2 vUvCoords;
  uniform mat3 projectionMatrix;

  uniform float time;
  uniform float avrg;

  uniform float mx;
  uniform float my;

  uniform vec2 mouse;

  uniform sampler2D texture;

  varying vec3 vPosition;


  void main() {
    // vPosition = position;
    vUvCoords = uv;
    // vNormal = normal;

    vec3 newPosition = position;

    // vSize = size;
    // vAlpha = alpha;

    // if ( alpha > 0.7 ) {
    //  // vSize += avrg*0.5;
    //   newPosition.z -= sin(avrg/20.0/vSize);
    //   // newPosition.x -= avrg/vSize;
    //   // newPosition.y -= avrg/vSize;
    // }

    newPosition.y += 1.0 + sin(time+position.y*0.25)* 2.4+5.0 ;
    // newPosition.x += 1.0 + cos(time+position.x*0.25)* 2.4+5.0 ;
    // newPosition.x += 1.0 + (position.x*mx*50.0) ;
    newPosition.z -= 50.5;

    //newPosition += 1.0 +  vec3(0.0, 0.0, 4.0) * 0.2 +  ((sin(sin(time*0.1)*0.2*position.x)*3.0)*1.0);
    //newPosition += 1.0 +  vec3(0.0, 4.0, 0.0) * 0.2 +  ((sin(sin(time*0.1)*0.2*position.y)*3.0)*1.0);
    vPosition = newPosition;

    vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
    // gl_PointSize = 10.0*vSize;
    gl_Position = projectionMatrix * mvPosition;

    // newPosition = position.xyz + vec3(5.0, 2.0, 1.0) * (sin(colorVal));
    // newPosition += colorVal;
    // gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
  