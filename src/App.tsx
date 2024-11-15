import '@mantine/core/styles.css';

import { MantineProvider, Container } from '@mantine/core';
import { theme } from './theme';
import BusinessCard from '.';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Container size="xs" style={{ padding: 20 }}>
      <BusinessCard />
      </Container>
    </MantineProvider>
  );
}
