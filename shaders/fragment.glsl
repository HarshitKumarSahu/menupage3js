uniform sampler2D uImages;
varying vec2 vUv;

void main() {
    gl_FragColor = texture2D(uImages,vUv);
}