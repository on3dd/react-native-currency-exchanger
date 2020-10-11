import React, {
  useContext,
  useEffect,
  useState
} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  RefreshControl,
  StyleSheet
} from 'react-native';

import { darken } from 'polished';

import { AppContext } from '@utils/contexts/AppContext';

import fetchSymbols from '@actions/fetchSymbols';
import changeCurrency from '@actions/changeCurrency';

import { DARKEN_AMOUNT } from '@utils/constants';

import container from '@styles/container';
import heading from '@styles/heading';

import CurrencyType from '@typesdir/CurrencyType';
import Symbol from '@typesdir/Symbol';
import RootState from '@typesdir/states/root';

import SideMenuOption from '@components/SideMenuOption';

type SideMenuProps = {
  type: CurrencyType;
}

const SideMenu: React.FC<SideMenuProps> = (
  { type }: SideMenuProps
) => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const symbols = useSelector((state: RootState) => state.symbols);

  useEffect(() => {
    dispatch(fetchSymbols());
  }, [symbols.data.length]);

  const context = useContext(AppContext);

  const backgroundColor = () => ({
    backgroundColor: darken(
      DARKEN_AMOUNT,
      context.style.view.backgroundColor
    )
  });

  const onPress = (symbol: Symbol) => {
    dispatch(changeCurrency({ type, symbol }));
  }

  const onRefresh = () => {
    setRefreshing(true);

    dispatch(fetchSymbols());

    setRefreshing(false);
  };


  return (
    <View style={{
      ...container,
      ...styles.menu,
      ...backgroundColor(),
    }}>
      <Text style={{ ...context.style.text, ...heading }}>
        Currencies
      </Text>

      <SafeAreaView style={styles.scrollContainer}>
        <FlatList
          data={symbols.data}
          initialNumToRender={10}
          keyExtractor={(item) => item.code}
          contentContainerStyle={styles.options}
          renderItem={({ item }) => (
            <SideMenuOption
              key={item.code}
              code={item.code}
              description={item.description}
              onPress={() => onPress(item)}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
        </FlatList>
      </SafeAreaView>
    </View >
  )
}

const styles = StyleSheet.create({
  menu: {
    paddingBottom: 0,
  },
  scrollContainer: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  options: {
    flexGrow: 1,
  },
})

export default SideMenu;
