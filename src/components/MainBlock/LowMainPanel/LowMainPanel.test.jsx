import { render } from '@testing-library/react';
import { LowMainPanel } from './LowMainPanel';

test('renders correct data based on props', () => {
  const weatherData = {
    wind: {
      speed: 10,
      deg: 180,
    },
    main: {
      humidity: 70,
      pressure: 1000,
    },
    sys: {visibility: 8000,}
  };

  const { getByText } = render(
    <LowMainPanel isLoading={false} weatherData={weatherData} />
  );

  const windSpeedElement = getByText('Скорость ветра');
  const visibilityElement = getByText('Видимость');
  const humidityElement = getByText('Влажность');
  const pressureElement = getByText('Давление');

  expect(windSpeedElement).toBeInTheDocument();
  expect(visibilityElement).toBeInTheDocument();
  expect(humidityElement).toBeInTheDocument();
  expect(pressureElement).toBeInTheDocument();
});
