export const geocoder = async (location) => {
    const apiKey = process.env.VUE_APP_GEOCODER_API_KEY
    const searchUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`
    const response = await fetch(searchUrl);
    return await response.json();
};