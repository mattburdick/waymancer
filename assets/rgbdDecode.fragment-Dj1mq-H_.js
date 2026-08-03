import{A as e}from"./index-g7qTEB8O.js";import"./helperFunctions-DOaO9Y3Y.js";var t=`rgbdDecodePixelShader`,n=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}`;e.ShadersStore[t]||(e.ShadersStore[t]=n);const r={name:t,shader:n};export{r as rgbdDecodePixelShader};