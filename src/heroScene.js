import * as THREE from "three";

export function mountHeroScene(container) {
  if (!container) return () => {};

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.1, 7.4);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  const loader = new THREE.TextureLoader();
  const logoTexture = loader.load("/assets/keep-austin-live-logo.jpg");
  logoTexture.colorSpace = THREE.SRGBColorSpace;
  logoTexture.anisotropy = 8;

  const logoGroup = new THREE.Group();
  scene.add(logoGroup);

  const badge = new THREE.Mesh(
    new THREE.BoxGeometry(3.15, 3.15, 0.08),
    [
      new THREE.MeshStandardMaterial({ color: 0x0d2a1f, metalness: 0.55, roughness: 0.34 }),
      new THREE.MeshStandardMaterial({ color: 0x0d2a1f, metalness: 0.55, roughness: 0.34 }),
      new THREE.MeshStandardMaterial({ color: 0x0d2a1f, metalness: 0.55, roughness: 0.34 }),
      new THREE.MeshStandardMaterial({ color: 0x0d2a1f, metalness: 0.55, roughness: 0.34 }),
      new THREE.MeshBasicMaterial({ map: logoTexture }),
      new THREE.MeshStandardMaterial({ color: 0x07100c, metalness: 0.45, roughness: 0.45 })
    ]
  );
  logoGroup.add(badge);

  const edge = new THREE.Mesh(
    new THREE.TorusGeometry(2.42, 0.015, 8, 180),
    new THREE.MeshBasicMaterial({ color: 0x93cfc2, transparent: true, opacity: 0.72 })
  );
  edge.scale.y = 0.72;
  edge.position.z = -0.2;
  logoGroup.add(edge);

  const rings = new THREE.Group();
  scene.add(rings);
  const ringMaterials = [0x1bb3a7, 0xf5a524, 0xd62828].map(
    (color) => new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.34 })
  );

  for (let i = 0; i < 3; i += 1) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.35 + i * 0.62, 0.01, 8, 220), ringMaterials[i]);
    ring.rotation.x = Math.PI / 2.5;
    ring.rotation.y = i * 0.45;
    rings.add(ring);
  }

  const particleCount = 520;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i += 1) {
    const radius = 2.5 + Math.random() * 5.8;
    const angle = Math.random() * Math.PI * 2;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 5.4;
    positions[i * 3 + 2] = Math.sin(angle) * radius - 1.6;
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({
      color: 0x9fe5d8,
      size: 0.026,
      transparent: true,
      opacity: 0.66,
      depthWrite: false
    })
  );
  scene.add(particles);

  scene.add(new THREE.AmbientLight(0x3bbfa9, 0.9));

  const key = new THREE.PointLight(0xf5a524, 42, 12);
  key.position.set(-3.2, 2.1, 3.8);
  scene.add(key);

  const rim = new THREE.PointLight(0x1bb3a7, 36, 10);
  rim.position.set(3.1, -1.4, 3.2);
  scene.add(rim);

  const red = new THREE.PointLight(0xd62828, 22, 9);
  red.position.set(0, 2.8, 2.2);
  scene.add(red);

  let frameId = 0;
  let disposed = false;

  function resize() {
    const { clientWidth, clientHeight } = container;
    if (!clientWidth || !clientHeight) return;
    renderer.setSize(clientWidth, clientHeight, false);
    camera.aspect = clientWidth / clientHeight;
    camera.position.z = clientWidth < 720 ? 8.7 : 7.4;
    logoGroup.scale.setScalar(clientWidth < 720 ? 0.68 : 1);
    camera.updateProjectionMatrix();
  }

  function animate(time) {
    if (disposed) return;
    const t = time * 0.001;
    logoGroup.rotation.y = Math.sin(t * 0.55) * 0.18;
    logoGroup.rotation.x = Math.sin(t * 0.42) * 0.055;
    logoGroup.position.y = Math.sin(t * 0.8) * 0.08;
    rings.rotation.z = t * 0.12;
    rings.rotation.y = Math.sin(t * 0.18) * 0.18;
    particles.rotation.y = t * 0.035;
    particles.rotation.x = Math.sin(t * 0.08) * 0.08;
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(animate);
  }

  resize();
  const observer = new ResizeObserver(resize);
  observer.observe(container);
  frameId = requestAnimationFrame(animate);

  return () => {
    disposed = true;
    cancelAnimationFrame(frameId);
    observer.disconnect();
    renderer.dispose();
    logoTexture.dispose();
    particleGeometry.dispose();
    scene.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      if (Array.isArray(object.material)) {
        object.material.forEach((material) => material.dispose());
      } else if (object.material) {
        object.material.dispose();
      }
    });
    renderer.domElement.remove();
  };
}
