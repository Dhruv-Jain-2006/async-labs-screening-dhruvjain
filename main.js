import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const TOTAL_FRAMES = 240;
const canvas = document.getElementById('animation-canvas');
const ctx = canvas.getContext('2d', { alpha: false });

const images = [];
let lastRenderedIndex = -1;
let currentProgress = 0;
let targetProgress = 0;

function getFrameUrl(index) {
  const pad = String(index + 1).padStart(3, '0');
  return `/frames/ezgif-frame-${pad}.jpg`;
}

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  if (lastRenderedIndex >= 0 && images[lastRenderedIndex]) {
    drawFrame(images[lastRenderedIndex]);
  }
}

function drawFrame(img) {
  if (!img || !img.complete || img.naturalWidth === 0) return;

  const cw = canvas.width;
  const ch = canvas.height;
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;

  const hRatio = cw / iw;
  const vRatio = ch / ih;
  const ratio = Math.max(hRatio, vRatio);

  const nw = iw * ratio;
  const nh = ih * ratio;
  const cx = (cw - nw) / 2;
  const cy = (ch - nh) / 2;

  ctx.drawImage(img, 0, 0, iw, ih, cx, cy, nw, nh);
}

function getLoadedFrame(targetIdx) {
  if (images[targetIdx] && images[targetIdx].complete && images[targetIdx].naturalWidth > 0) {
    return images[targetIdx];
  }
  for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
    const prev = targetIdx - offset;
    if (prev >= 0 && images[prev] && images[prev].complete && images[prev].naturalWidth > 0) {
      return images[prev];
    }
    const next = targetIdx + offset;
    if (next < TOTAL_FRAMES && images[next] && images[next].complete && images[next].naturalWidth > 0) {
      return images[next];
    }
  }
  return null;
}

function preloadFrames() {
  // Preload first frame with highest priority and render immediately
  const firstImg = new Image();
  firstImg.src = getFrameUrl(0);
  firstImg.onload = () => {
    images[0] = firstImg;
    if (lastRenderedIndex < 0) {
      drawFrame(firstImg);
      lastRenderedIndex = 0;
    }
  };
  images[0] = firstImg;

  // Preload all remaining frames in batches
  for (let i = 1; i < TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = getFrameUrl(i);
    images[i] = img;
  }
}

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 1.0,
  touchMultiplier: 1.2,
});

lenis.on('scroll', ({ progress }) => {
  targetProgress = Math.min(Math.max(progress, 0), 1);
});

// Animation render loop
function raf(time) {
  lenis.raf(time);

  // Smooth lerping to guarantee seamless frame-to-frame interpolation
  currentProgress += (targetProgress - currentProgress) * 0.14;

  const targetFrameFloat = currentProgress * (TOTAL_FRAMES - 1);
  const frameIndex = Math.min(Math.max(Math.round(targetFrameFloat), 0), TOTAL_FRAMES - 1);

  if (frameIndex !== lastRenderedIndex) {
    const img = getLoadedFrame(frameIndex);
    if (img) {
      drawFrame(img);
      lastRenderedIndex = frameIndex;
    }
  }

  requestAnimationFrame(raf);
}

window.addEventListener('resize', resizeCanvas);

// Initial setup
resizeCanvas();
preloadFrames();
requestAnimationFrame(raf);
