import ColorThief from 'react-native-color-thief';

export const extractColorsFromImage = async (imageUrl) => {
  try {
    const colorPalette = await ColorThief.getPalette(imageUrl, 10); // Extract up to 10 colors
    return colorPalette;
  } catch (error) {
    console.error('Error extracting colors:', error);
    throw error;
  }
};

