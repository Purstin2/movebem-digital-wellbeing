export const setMobileViewport = (width = 375) => {
  const viewport = document.createElement('meta');
  viewport.name = 'viewport';
  viewport.content = `width=${width}, initial-scale=1`;
  document.head.appendChild(viewport);
}; 
 
 