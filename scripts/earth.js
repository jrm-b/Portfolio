import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import bump from '../assets/images/textures/earth-bump2k-min.jpg';
import night from '../assets/images/textures/earth-night2k-min.jpg';
import cloud from '../assets/images/textures/earth-cloud-transparent.png';


export function earth(){

    let earthCanvas = document.getElementById('earth-canvas');
    let earthCanvasSize = earthCanvas.getBoundingClientRect();

    // SCENE
    const scene = new THREE.Scene();
    
    // CAMERA
    const camera = new THREE.PerspectiveCamera(75,
        earthCanvasSize.width / earthCanvasSize.height,
        0.1,
        10000
        );
    camera.lookAt( 0, 0, 0 );
    scene.add( camera );
    camera.position.z = 1;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias:true });
    renderer.setSize( earthCanvasSize.width, earthCanvasSize.height);
    renderer.setPixelRatio( devicePixelRatio );
    renderer.autoClear = false;
    
    earthCanvas.appendChild( renderer.domElement );

    // ORBITCONTROLS
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.enableZoom = false;

    // LIGHTS
    const ambientLight = new THREE.AmbientLight( 0xffffff, 0 );

    const pointLight = new THREE.PointLight( 0xffffff, 100 );
    pointLight.position.set( 5, 3, 5 );

    scene.add( ambientLight, pointLight );

    // GEOMETRY
    const earthGeometry = new THREE.SphereGeometry( 0.6, 32, 32 );
    const cloudGeometry = new THREE.SphereGeometry( 0.62, 32, 32 );
    
    // TEXTURES
    const earthMapTexture = new THREE.TextureLoader().load(night);
    const earthBumpTexture = new THREE.TextureLoader().load(bump);
    // const earthSpecularTexture = new THREE.TextureLoader().load('../assets/images/textures/earth-specular2k.tif');

    const cloudMapTexture = new THREE.TextureLoader().load(cloud);

    // MATERIALS - MESHS
    const earthMaterial = new THREE.MeshPhongMaterial({
        map: earthMapTexture,
        bumpMap: earthBumpTexture,
        bumpScale: 0.3,
        // specularMap: earthSpecularTexture,
    });
    const earthMesh = new THREE.Mesh( earthGeometry, earthMaterial );
    scene.add( earthMesh );

    const cloudMaterial = new THREE.MeshPhongMaterial({
        map: cloudMapTexture,
        transparent: true,
    });
    const cloudMesh = new THREE.Mesh( cloudGeometry, cloudMaterial );
    scene.add( cloudMesh );

    // window.addEventListener( 'resize', onWindowResize );
    animate();

    function animate(){
        requestAnimationFrame(animate);

        earthMesh.rotation.y += 0.001;
        // earthMesh.rotation.x += 0.001;

        cloudMesh.rotation.y += 0.001;
        // cloudMesh.rotation.x += 0.001;

        renderer.render( scene, camera );
    }
    function onWindowResize(){
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( 550, 300 );
    }

}

