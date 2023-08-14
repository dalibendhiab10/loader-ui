# LoaderUi

LoaderUi is a collection of custom loader components designed for use in Next.js, React, and Vue.js projects.

## Installation

You can install the package via npm:

```sh
npm install loader-ui

Usage
Import and use the loader components in your project as needed.

import React from 'react';
import { RingLoader, WaveLoader, PulsarLoader, RaceByLoader, DotspinnerLoader } from 'loader-ui';

const MyComponent = () => {
  return (
    <div>
      <RingLoader color="#FF0000" show={true} />
      <WaveLoader color="#00FF00" show={true} />
      <PulsarLoader color="#0000FF" show={true} />
      <RaceByLoader color="#FFFF00" show={true} />
      <DotspinnerLoader color="#00FFFF" show={true} />
    </div>
  );
};

export default MyComponent;
```
Components
RingLoader: A loader with a rotating ring animation.
WaveLoader: A loader with a wave-like animation.
PulsarLoader: A loader with a pulsating animation.
RaceByLoader: A loader with a racing animation.
DotspinnerLoader: A loader with spinning dot animations.
Props
Each loader component accepts the following props:

color (string): The color of the loader (hex code or color name).
show (boolean): Controls whether the loader is shown.
