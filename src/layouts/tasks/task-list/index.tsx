import React from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Button, Card, Layout, List, Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { ClockIcon } from './extra/icons';
import { Training } from './extra/data';

const data: Training[] = [
  Training.running(),
  Training.run(),
  Training.cicling(),
];

export default (): React.ReactElement => {

  const renderItemHeader = (info: ListRenderItemInfo<Training>): React.ReactElement => (
    <ImageOverlay
      style={styles.itemHeader}
      source={info.item.photo}>
      <View style={styles.itemHeaderDetails}>
        <Text
          category='h4'
          status='control'>
          {info.item.title}
        </Text>
        <Text
          category='s1'
          status='control'>
          {`${info.item.time}h`}
        </Text>
      </View>
    </ImageOverlay>
  );

  const renderItem = (info: ListRenderItemInfo<Training>): React.ReactElement => (
    <Card
      style={styles.item}
      header={() => renderItemHeader(info)}>
      <Layout
        style={styles.itemStyxContainer}
        level='2'>
        <Text
          style={styles.itemStyxText}
          category='h6'>
          {`${info.item.points} pontos`}
        </Text>
        <Button
          style={styles.itemStyxButton}
          size='tiny'
          icon={ClockIcon}>
          {`${info.item.styx} min`}
        </Button>
      </Layout>
      <Text
        style={styles.itemDescription}
        category='s1'>
        {info.item.description}
      </Text>
    </Card>
  );

  return (
    <List
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    marginVertical: 8,
  },
  itemHeader: {
    minHeight: 220,
    padding: 24,
  },
  itemHeaderDetails: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemStyxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    marginHorizontal: -8,
  },
  itemStyxText: {
    marginHorizontal: 16,
    marginVertical: 14,
  },
  itemStyxButton: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 24,
  },
  itemDescription: {
    marginHorizontal: -8,
    marginTop: 16,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemReactionsContainer: {
    flexDirection: 'row',
  },
  itemAddButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
