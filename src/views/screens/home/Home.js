import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';

// import { font } from '../../../constants/Font'

const Home = props => {
  return <Text>Hi naman</Text>;
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(Home);
