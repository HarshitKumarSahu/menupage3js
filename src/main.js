import * as THREE from "three";

class Site {
    constructor({dom}) {
        this.time = 0;
        this.container = dom;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.images = [...document.querySelectorAll(".images img")];
        this.material;
        this.imageStore = [];
        this.uStartIndex = 0;
        this.uEndIndex = 1;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 
            75, 
            this.width/this.height, 
            0.1, 
            1000 
        );
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer({
            antialias : true,
            alpha : true,
        });
        this.renderer.setSize( this.width, this.height );
        this.container.appendChild( this.renderer.domElement );

        this.addObjects();
        this.render();
    }

    addObjects() {
        this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
        this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( this.geometry,this.material );
        this.scene.add( this.cube );
    }

    render() {
        this.time++;
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.render( this.scene, this.camera );
        window.requestAnimationFrame(this.render.bind(this));
    }
}

new Site({
    dom : document.querySelector(".canvas"),
});