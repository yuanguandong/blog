import React from "react";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */
export default function Logo(props) {
  const {fill} = props;
  console.log('props',props)
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="400px"
      height="70px"
      viewBox="0 0 400 70"
      enable-background="new 0 0 400 70"
    >
      <image
        id="image0"
        width="400"
        height="70"
        x="0"
        y="0"
        href="data:image/png;base64,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
ph8qI6pfQ7hDFuzMTZc48q8Gl8r3mD2hhXpb7mxec1hw4Oi5sj2bt/oKvtFVO6dhmw1NHjPU2WGc
qqPAdUSu5/Zy+TcCfUEtDCrPJjgcVKa6tcAZS/9Y1SpWvMKzQgpiUo/TdM/599xfQeIeXuauH7GS
q4bwv8ph85B4vcG/ne3AVMgq3LKrCGL2XN13pkeqBHGff8RMrvOQHpvff5jVjdob/CFFdsO3hAgi
59htAkHS0Q+Qu4bw9Pb1OfEGHOp8mE/crMnusKNkCHLe8BkXx276BElLP0DuGnKNfQMfiqsOMZVx
Hev6u0FuXpN6HHdy7KZPkLT0A+QzD+EPHzVdirmYVPSQPt+dI/TYoq1JEMQ8NfdVjzQJkp5+gNw1
RLXxaNu63wrlBTw2puuWSocrDyJYhVv2vQQxhQWP04MAeqRIkPT0Y8dcXeMh6nOEexZ072jumYrR
8zyhTQO5JRNkTCuGvD6O3bQJkqZ+qExIN/HW3zHbU/qJSupqV0nJb7PdaS1Xp8kVIGQVvjsK/8Dr
eAcHQPh3mh5N/3uIg/gMBwWCRSnBfv2uHtw63lHQxlFuj6EuBDnBCvrK3SAddDDBFoaYTFvVQmk8
kSrW7owJNpjDGtpYdQyz+q39deJTmtdA16MgcvrB/d5Lr8syzwXCbpSvIu5QkxsU6t29i/A8cT4T
JOQr8jMKfoAjuy7LZrAjSZHYMzF+I67uLffC+0KGTBC7xOmH/7XHsTXE1pfUMu67sEPcqzt3Euc3
073nPALuK8kEsUucfvhPSWOv7bVvWaEIHNpjLLBy1/X9ZlArlwg9MkHsEq8fIR7/mPtDXFvWDRhq
9Wv04rm5e0XokQlil2T1AxRXQ9xbVnrpyHbkq9aqycXdK0KPTBCbJK8foHga4tuyUhkdT4McIH7T
sGp1rwg9XAlSN3xbJUsQef3YMUgSb3lhuV9b/fmu4mrnGcbUi7zfxvW7UJ3uLkJhtx2FtzU7CuVx
F0ctQzmL8Ns7xoPbPzjBMYEjZ3rMMT1bzsef7kWXPRDIDQXaKFGiRLEbGpxgCGALEwwDzruSQIlt
5ukFJkTZlQlbuhEkI+N/hrqvgc7IaBQyQTIyNMgEycjQIBMkI0ODTJCMDA0yQTIyNPgPFKUVT+mO
DeUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDctMjZUMjM6NTA6MjcrMDg6MDC54mVnAAAAJXRF
WHRkYXRlOm1vZGlmeQAyMDIxLTA3LTI2VDIzOjUwOjI3KzA4OjAwyL/d2wAAACB0RVh0c29mdHdh
cmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBh
Z2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA3MKKWXNwAAAAXdEVYdFRodW1i
OjpJbWFnZTo6V2lkdGgANDAw6qs5hgAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+y
Vk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjI3MzE0NjI3GcQBSgAAABN0RVh0VGh1bWI6OlNpemUA
MjI4MTdCQuS65VwAAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1n
dmlldzJfOV8xNjI2Njc5NDczOTU4MzAyOF8zMV9bMF00bZfEAAAAAElFTkSuQmCC"
      ></image>
    </svg>
  );
}
