import React from 'react';
import { BottomNavigationTab, Divider } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { BrandBottomNavigation } from '../../components/brand-bottom-navigation.component';
import { PersonIcon, HomeIcon, ProductIcon, ActivityIcon } from '../../components/icons';

export const HomeBottomNavigation = (props): React.ReactElement => {

  const onSelect = (index: number): void => {
    props.navigation.navigate(props.state.routeNames[index]);
  };

  return (
    <SafeAreaLayout insets='bottom'>
      <Divider/>
      <BrandBottomNavigation
        appearance='noIndicator'
        selectedIndex={props.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab
          title='Feed'
          icon={HomeIcon}
        />
        <BottomNavigationTab
          title='Produtos'
          icon={ProductIcon}
        />
        <BottomNavigationTab
          title='Tarefas'
          icon={ActivityIcon}
        />
        <BottomNavigationTab
          title='Minha Conta'
          icon={PersonIcon}
        />
      </BrandBottomNavigation>
    </SafeAreaLayout>
  );
};
