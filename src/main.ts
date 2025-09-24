import * as dat from 'dat.gui';
import * as THREE from 'three';
import { CssRenderer } from "./css2renderer";

const _params = {color: 0xff0000}

const cssRenderer = new CssRenderer();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:_params.color});
const cube = new THREE.Mesh( geometry, material );

const label = cssRenderer.addLabel('CSS2DObject / CSS2DRenderer');

cube.add(label)
scene.add(cube)
camera.position.z = 2

renderer.setAnimationLoop( animate );
window.addEventListener('resize', resize);
guiInit();


function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.z += 0.01;
  cssRenderer.render(scene, camera);
  renderer.render( scene, camera );
}

function resize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  cssRenderer.setSize(window.innerWidth, window.innerHeight);
}

function changeColor(value:string){
  material.color = new THREE.Color(value);
}

function guiInit(){
  const gui = new dat.GUI();
  gui.add(window, "innerWidth").listen().onChange(resize);
  gui.add(window, "innerHeight").listen().onChange(resize);
  gui.addColor(_params, "color").onChange(changeColor);
  gui.open();
}
