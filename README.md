# Ce que j'ai appris ✨

## Mettre en place une scène

```js
const scene = new THREE.Scene();
````

## Gestion de la caméra

```js
const camera = new THREE.PerspectiveCamera(
  100, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
);
```

## Gestion du rendu

Affiche le rendu 2D de notre scène 3D.

```js
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

## Ajout d'une forme simple dans une scène

```js
// Création d'un cube avec sa géométrie et son matériau
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: _params.color });
const cube = new THREE.Mesh(geometry, material);

// Ajout d'un label (exemple : https://github.com/mrdoob/three.js/blob/master/examples/css2d_label.html)
const label = cssRenderer.addLabel('CSS2DObject / CSS2DRenderer');

cube.add(label);     // Intègre le label sur le cube
scene.add(cube);     // Intègre le cube dans la scène
camera.position.z = 2; // Positionne la caméra
```

## Animation

```js
renderer.setAnimationLoop(animate); // 60 fps
```

## Intégration de l'addon CSS2DRenderer & CSS2DObject

Utile pour ajouter un texte simple par-dessus (description, label, etc.) et le styliser en CSS.

> Inconvénient : il faut gérer un second rendu en permanence.

## Intégration de l'interface dat.gui

> Cf. : [https://github.com/dataarts/dat.gui](https://github.com/dataarts/dat.gui)
