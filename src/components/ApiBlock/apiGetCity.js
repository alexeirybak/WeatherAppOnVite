export const getCity = async (query) => {
  query = query || 'Москва';
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search.php?q=${query}&format=json&addressdetails=1&limit=1`,
  );
  const data = await response.json();

  if (data && data.length > 0) {
    const locationToCheck = [
      data[0]?.name,
      data[0]?.display_name.split(',')[0],
      data[0]?.address?.state,
    ];

    for (const location of locationToCheck) {
      if (location && location.includes(query)) {
        const lon = data[0].lon;
        const lat = data[0].lat;
        return { location, lon, lat };
      }
    }
  }

  throw new Error('Упс! Город не найден, попробуйте другой');
};
