import{k as e}from"./index-BPC9_yxU.js";var t=`fogVertexDeclaration`,n=`#ifdef FOG
varying vec3 vFogDistance;
#endif
`;e.IncludesShadersStore[t]||(e.IncludesShadersStore[t]=n);var r=`fogVertex`,i=`#ifdef FOG
vFogDistance=(view*worldPos).xyz;
#endif
`;e.IncludesShadersStore[r]||(e.IncludesShadersStore[r]=i);