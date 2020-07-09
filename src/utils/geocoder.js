export const geocoder = (location) => {
    const apiKey = process.env.VUE_APP_GEOCODER_API_KEY
    return apiKey + ' ' + location
};