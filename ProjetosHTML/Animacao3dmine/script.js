import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

gsap.registerPlugin(ScrollTrigger);
// CENARIO
const cena = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 15

// RENDERIZADOR
const renderizador = new THREE.WebGLRenderer({alpha:true});
renderizador.setSize(window.innerWidth, window.innerHeight);
document.querySelector(".bee").appendChild(renderizador.domElement)
// ILUMINAÇÃO
const ambientLight = new THREE.AmbientLight("white", .5)
const directionalLight = new THREE.DirectionalLight("white", 3)
directionalLight.position.x = -3
directionalLight.position.z = 3
cena.add(ambientLight, directionalLight)

let bee;
let mixer;
const loader = new GLTFLoader();
loader.load("assets/bee.glb", (ObjectBee) =>{
    bee = ObjectBee.scene;
    const beeAnimation = ObjectBee.animations[0]

    //MIXER
    mixer = new THREE.AnimationMixer(bee);
    mixer.clipAction(beeAnimation).play();
    cena.add(bee);
    bee.position.z = -16
    bee.position.x = 15
    bee.position.y = -6
    bee.rotation.y = 2.6
    rotacionar()
});

function rotacionar(){
    gsap.to(bee.position, {
        x: -7,
        scrollTrigger: {
            start: "20% 40%",
            end: "70% 50%",
            scrub: 2
        }
    })
}
function animate(){
    if (mixer) mixer.update(0.01)
    requestAnimationFrame(animate);
    renderizador.render(cena, camera)
}
animate()