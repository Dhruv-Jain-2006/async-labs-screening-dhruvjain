import React, { useEffect, useRef } from 'react';

interface ScrollCanvasProps {
  scrollProgress: number; // 0 to 1
}

const TOTAL_FRAMES = 240;

export function ScrollCanvas({ scrollProgress }: ScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const lastRenderedIndexRef = useRef<number>(-1);
  const currentProgressRef = useRef<number>(0);
  const targetProgressRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  // Keep target progress in sync
  useEffect(() => {
    targetProgressRef.current = Math.min(Math.max(scrollProgress, 0), 1);
  }, [scrollProgress]);

  // Preload frames and start animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    function getFrameUrl(index: number) {
      const pad = String(index + 1).padStart(3, '0');
      return `/frames/ezgif-frame-${pad}.jpg`;
    }

    function resizeCanvas() {
      if (!canvas || !ctx) return;
      const dpr = Math.max(window.devicePixelRatio || 1, 1);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      const lastIdx = lastRenderedIndexRef.current;
      if (lastIdx >= 0 && imagesRef.current[lastIdx]) {
        drawFrame(imagesRef.current[lastIdx]!);
      }
    }

    function drawFrame(img: HTMLImageElement) {
      if (!canvas || !ctx || !img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      // Full-screen cover fit
      const hRatio = cw / iw;
      const vRatio = ch / ih;
      const ratio = Math.max(hRatio, vRatio);

      const nw = Math.round(iw * ratio);
      const nh = Math.round(ih * ratio);
      const cx = Math.round((cw - nw) / 2);
      const cy = Math.round((ch - nh) / 2);

      ctx.drawImage(img, 0, 0, iw, ih, cx, cy, nw, nh);
    }

    function getLoadedFrame(targetIdx: number): HTMLImageElement | null {
      const imgs = imagesRef.current;
      if (imgs[targetIdx] && imgs[targetIdx]!.complete && imgs[targetIdx]!.naturalWidth > 0) {
        return imgs[targetIdx];
      }
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = targetIdx - offset;
        if (prev >= 0 && imgs[prev] && imgs[prev]!.complete && imgs[prev]!.naturalWidth > 0) {
          return imgs[prev];
        }
        const next = targetIdx + offset;
        if (next < TOTAL_FRAMES && imgs[next] && imgs[next]!.complete && imgs[next]!.naturalWidth > 0) {
          return imgs[next];
        }
      }
      return null;
    }

    // Preload first frame immediately
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      if (lastRenderedIndexRef.current < 0) {
        drawFrame(firstImg);
        lastRenderedIndexRef.current = 0;
      }
    };
    imagesRef.current[0] = firstImg;

    // Preload remaining frames
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      imagesRef.current[i] = img;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Render loop
    function render() {
      // Smooth RAF lerp
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * 0.14;

      const targetFloat = currentProgressRef.current * (TOTAL_FRAMES - 1);
      const frameIndex = Math.min(Math.max(Math.round(targetFloat), 0), TOTAL_FRAMES - 1);

      if (frameIndex !== lastRenderedIndexRef.current) {
        const img = getLoadedFrame(frameIndex);
        if (img) {
          drawFrame(img);
          lastRenderedIndexRef.current = frameIndex;
        }
      }

      rafIdRef.current = requestAnimationFrame(render);
    }

    rafIdRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="animation-canvas"
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0 block"
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
    />
  );
}
