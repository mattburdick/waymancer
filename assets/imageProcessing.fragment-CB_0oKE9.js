import{k as e}from"./index-BPC9_yxU.js";import"./helperFunctions-BRxgx-mu.js";import"./imageProcessingFunctions-CG5KguO1.js";var t=`imageProcessingPixelShader`,n=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<imageProcessingDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec4 result=texture2D(textureSampler,vUV);result.rgb=max(result.rgb,vec3(0.));
#ifdef IMAGEPROCESSING
#ifndef FROMLINEARSPACE
result.rgb=toLinearSpace(result.rgb);
#endif
result=applyImageProcessing(result);
#else
#ifdef FROMLINEARSPACE
result=applyImageProcessing(result);
#endif
#endif
gl_FragColor=result;}`;e.ShadersStore[t]||(e.ShadersStore[t]=n);const r={name:t,shader:n};export{r as imageProcessingPixelShader};