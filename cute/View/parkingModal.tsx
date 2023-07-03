import React, {useState, useEffect} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const ParkingChooseModal = ({modalState}) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(true);
  }, []);

  const handleNoButton = () => {
    modalState(true);
    setModal(false);
  };

  const handleYesButton = () => {
    modalState(false);
  };

  return (
    <Modal visible={modal} animationType="fade" transparent={true}>
      <View style={modalStyle.modalBackground}>
        <View style={modalStyle.modalContainer}>
          <View style={modalStyle.modalText}>
            <Text>인근 주차장을 추천해 드릴까요?</Text>
          </View>
          <View style={modalStyle.modalbuttonView}>
            <TouchableOpacity
              style={modalStyle.madalbutton}
              onPress={handleNoButton}>
              <Text>아니요</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={modalStyle.madalbutton}
              onPress={handleYesButton}>
              <Text>네</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const modalStyle = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 200,
    height: 150,
    backgroundColor: '#FFF9F9',
  },
  modalText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalbuttonView: {
    height: '30%',
    flexDirection: 'row',
  },
  madalbutton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0D6D6',
  },
});
