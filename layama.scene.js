// Created with Motiva Layama v2.0 2000 https://www.motivacg.com/layama
// Rendered with Layama for Unreal

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "Layama0009", a: "CineCameraActor1", p: new BABYLON.Vector3(330.122, 118.672, 0.789994), l: new BABYLON.Vector3(329.128, 118.561, 0.765848)});
   layamaCameras.push({n: "Layama0002", a: "CineCameraActor", p: new BABYLON.Vector3(-824.587, 395.432, -344.09), l: new BABYLON.Vector3(-823.751, 395, -343.752)});
   layamaCameras.push({n: "Layama0016", a: "CineCameraActor2", p: new BABYLON.Vector3(20.3927, 137.86, 265.978), l: new BABYLON.Vector3(20.1913, 137.683, 265.015)});
   layamaCameras.push({n: "Layama0023", a: "CineCameraActor3", p: new BABYLON.Vector3(-316.628, 171.283, -24.5436), l: new BABYLON.Vector3(-315.659, 171.106, -24.3728)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getOnScreenLogoUsage()
{
   return 0;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

function getUseLocalGeometry()
{
   return 0;
}

