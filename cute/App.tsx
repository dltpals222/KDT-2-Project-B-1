import React from 'react';
import { SafeAreaView } from 'react-native';
import { GoogleMap } from './View/map';
import { ParkingModal } from './View/parkingModal';
import { GooglePlacesInput } from './View/search';
import { ParkingMap } from './View/keywordMap';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      {/* <ParkingModal />
      <GooglePlacesInput />
      <GoogleMap /> */}
      <ParkingMap />
    </SafeAreaView>
  );
}

export default App;