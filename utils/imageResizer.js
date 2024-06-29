export function resizeImage(width, height, maxWidth, maxHeight) {
    // Calculate aspect ratio
    const aspectRatio = width / height;
  
    // Define a range of desired heights
    const desiredHeights = [150, 160, 190, 200, 250, 300, 350, 400];
  
    // Find the closest desired height based on aspect ratio
    let closestHeight = desiredHeights[0]; // Default to the smallest height
    let minDifference = Infinity;
  
    for (const desiredHeight of desiredHeights) {
      const calculatedWidth = desiredHeight * aspectRatio;
      const difference = Math.abs(calculatedWidth - maxWidth);
      if (difference < minDifference) {
        minDifference = difference;
        closestHeight = desiredHeight;
      }
    }
  
    // Ensure the calculated width doesn't exceed maxWidth
    const newWidth = Math.min(closestHeight * aspectRatio, maxWidth);
  
    return {
      width: '100%',
      height: closestHeight,
    };
  }
  