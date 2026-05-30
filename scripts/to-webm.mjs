// Convert a video to a bandwidth-friendly VP9 WebM using the bundled
// ffmpeg-static binary (no system ffmpeg needed).
//
// Usage:
//   bun run video:webm <input> [output.webm] [maxWidth=1280] [crf=34]
// Example:
//   bun run video:webm public/hero-bg.mp4
//   bun run video:webm public/clip.mp4 public/clip.webm 1920 32
import { execFileSync } from "node:child_process";
import ffmpeg from "ffmpeg-static";

const [input, output, maxWidth = "1280", crf = "34"] = process.argv.slice(2);

if (!input) {
    console.error(
        "Usage: bun run video:webm <input> [output.webm] [maxWidth=1280] [crf=34]"
    );
    process.exit(1);
}

const out = output || input.replace(/\.[^.]+$/, ".webm");

execFileSync(
    ffmpeg,
    [
        "-y",
        "-i", input,
        "-an", // background videos are muted; drop audio to save bytes
        "-c:v", "libvpx-vp9",
        "-b:v", "0",
        "-crf", crf,
        "-row-mt", "1",
        "-deadline", "good",
        "-cpu-used", "2",
        "-vf", `scale='min(${maxWidth},iw)':-2`,
        out,
    ],
    { stdio: "inherit" }
);

console.log(`\nWrote ${out}`);
