export function preloadFonts() {
  const fonts = [
    new FontFace('ArmAllegrou', 'url(/font/ArmAllegroU.woff2) format("woff2")', { style: 'normal', weight: '400' }),
    new FontFace('DavelAghvor', 'url(/font/davel-aghvor.woff2) format("woff2")', { style: 'normal', weight: '400' }),
  ];

  fonts.forEach(font => {
    font.load().then(loadedFont => {
      document.fonts.add(loadedFont);
    });
  });
}
