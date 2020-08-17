import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import ContentView from '../../layouts/product/product-list';

export const ProductListScreen = ({ navigation }): React.ReactElement => {

  return (
    <SafeAreaLayout
      style={styles.container}
      insets='top'>
      <TopNavigation
        title='Produtos'
      />
      <ContentView/>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
