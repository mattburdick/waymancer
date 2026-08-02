import{A as e}from"./index-BO6nvuHv.js";import"./helperFunctions-CTp0pqcs.js";import"./imageProcessingFunctions-ZIl0zYan.js";var t=`imageProcessingPixelShader`,n=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<imageProcessingDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var result: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);result=vec4f(max(result.rgb,vec3f(0.)),result.a);
#ifdef IMAGEPROCESSING
#ifndef FROMLINEARSPACE
result=vec4f(toLinearSpaceVec3(result.rgb),result.a);
#endif
result=applyImageProcessing(result);
#else
#ifdef FROMLINEARSPACE
result=applyImageProcessing(result);
#endif
#endif
fragmentOutputs.color=result;}`;e.ShadersStoreWGSL[t]||(e.ShadersStoreWGSL[t]=n);const r={name:t,shader:n};export{r as imageProcessingPixelShaderWGSL};