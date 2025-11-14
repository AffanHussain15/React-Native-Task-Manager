import {
  FlatList,
  Image,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import DashboardWrapper from '../../components/DashboardWrapper';
import Header from '../../components/Header';
import Line from '../../components/Line';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import COLOR from '../../utils/Color';
import { FONTS } from '../../utils/Fonts';

const ManageStatus = ({ navigation }) => {
  const [statusName, setStatusName] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const taskData = [
    { id: '1', status: 'ToDo', statusColor: '#0AB20A', actions: true },
    { id: '2', status: 'In Progress', statusColor: '#FFAE00', actions: true },
    { id: '3', status: 'Done', statusColor: '#2BFF00', actions: true },
  ];

  useFocusEffect(
    useCallback(() => {
      navigation.getParent().setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    }, []),
  );

  const colorOptions = [
    '#007AFF',
    '#4CAF50',
    '#F44336',
    '#FFEB3B',
    '#3F51B5',
    '#FF9800',
    '#FF5722',
    '#00BCD4',
    '#E91E63',
    '#9C27B0',
  ];

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSave = () => {
    if (statusName && selectedColor) {
      console.log('Status Name:', statusName, 'Color:', selectedColor);
      toggleModal();
    }
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.statusContainer}>
        <View
          style={[styles.statusCircle, { backgroundColor: item.statusColor }]}
        />
        <Text style={styles.statusText}>{item.status}</Text>
      </View>
      {item.actions && (
        <View style={styles.actionContainer}>
          <TouchableOpacity>
            {/* <Ionicons name="pencil-outline" size={20} color="#FFFFFF" /> */}
            <Image
              style={styles.pencil}
              source={require('../../assets/pencilLine.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionSpacer}>
            <Ionicons name="trash-outline" size={20} color={COLOR.SECONDARY} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.dot}
              source={require('../../assets/sixDot.png')}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <DashboardWrapper>
      <Header
        navigation={navigation}
        title="Manage Statuses"
        icon={require('../../assets/plusCircle.png')}
        onIconPress={toggleModal}
      />
      <Line />

      <FlatList
        data={taskData}
        renderItem={renderTaskItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />

      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add New Status</Text>
            <Text style={styles.label}>Status Name</Text>
            <TextInput
              style={styles.input}
              value={statusName}
              onChangeText={setStatusName}
              placeholder="Enter status name"
              placeholderTextColor="#A9B4C2"
            />
            <Text style={styles.label}>Select a Color</Text>
            <View style={styles.colorContainer}>
              {colorOptions.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.colorCircle,
                    { backgroundColor: color },
                    selectedColor === color && styles.selectedColor,
                  ]}
                  onPress={() => setSelectedColor(color)}
                />
              ))}
              <TouchableOpacity style={styles.addColor}>
                <Text style={styles.addText}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={toggleModal}
              >
                <Text style={styles.buttonText2}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={toggleModal}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </DashboardWrapper>
  );
};

export default ManageStatus;

const styles = StyleSheet.create({
  listContent: {
    padding: 10,
    backgroundColor: COLOR.WHITE,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.INPUTWHITE,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusCircle: {
    width: 16,
    height: 16,
    borderRadius: 50,
    marginRight: 10,
  },
  dot: {
    width: 11,
    height: 18,
    tintColor: COLOR.SECONDARY
  },
  pencil: {
    width: 20,
    height: 20,
    tintColor: COLOR.SECONDARY
  },
  statusText: {
    color: COLOR.BLACK,
    fontSize: 16,
    fontWeight: '500',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  actionSpacer: {
    marginHorizontal: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: COLOR.BLUE,
    padding: 20,
    borderRadius: 10,
    width: '90%',
    maxWidth: 400,
  },
  modalTitle: {
    color: COLOR.WHITE,
    fontSize: 18,
    fontFamily: FONTS.SEMIBOLD,
    marginBottom: 15,
  },
  label: {
    color: COLOR.WHITE,
    fontSize: 14,
    marginBottom: 5,
    fontFamily: FONTS.MEDIUM
  },
  input: {
    backgroundColor: COLOR.BLUE,
    color: COLOR.WHITE,
    borderWidth: 0.7,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 15,
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedColor: {
    borderColor: COLOR.WHITE,
  },
  addColor: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#2A3A4A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: COLOR.WHITE,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  cancelButton: {
    backgroundColor: '#DEEBF8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: COLOR.BLUE,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: COLOR.WHITE,
    fontSize: 12,
    fontFamily: FONTS.MEDIUM
  },
  buttonText2: {
    color: COLOR.BLUE,
    fontSize: 12,
    fontFamily: FONTS.MEDIUM
  },
});
