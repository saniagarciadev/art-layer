import React from 'react';
import {Text} from 'react-native-ui-lib';
import {useServices} from '../../services';
import {BButton} from '../button';
import {Section} from '../section';
import {randomNum} from '../../utils/help';
import {Row} from '../row';

type Props = {};

export const NavioSection: React.FC<Props> = ({}) => {
  const {t, navio} = useServices();

  // Methods
  const pushScreen = () => navio.push('Example', {type: 'push'});
  const goBack = () => navio.goBack();
  const globalSetRoot = () => navio.setRoot('tabs', 'AppTabs');
  const stacksPush = () => navio.stacks.push('ProductPageStack');
  const stacksSetRoot = () => navio.stacks.setRoot('MainStack');
  const tabsJumpTo = () => navio.tabs.jumpTo('PlaygroundTab');
  const tabsUpdateOptionsBadge = () =>
    navio.tabs.updateOptions('SettingsTab', {tabBarBadge: randomNum()});
  const tabsUpdateOptionsTitle = () =>
    navio.tabs.updateOptions('SettingsTab', {title: `Random Title ${randomNum()}`});
  const tabsSetRoot = () => navio.tabs.setRoot('AppTabs');
  const drawersToggle = () => navio.drawers.toggle();
  const drawersJumpTo = () => navio.drawers.jumpTo('Playground');
  const drawersSetRoot = () => navio.drawers.setRoot('MainDrawer');
  const modalsShow = () => navio.modals.show('ExampleModal');

  return (
    <Section title={t.do('section.navio.title')}>
      <Text text60R textColor>
        Common
      </Text>
      <BButton marginV-s1 label={t.do('section.navio.button.common.push')} onPress={pushScreen} />
      <BButton marginV-s1 label={t.do('section.navio.button.common.go_back')} onPress={goBack} />
      <BButton
        marginV-s1
        label={t.do('section.navio.button.common.set_root')}
        onPress={globalSetRoot}
      />

      <Text marginT-s4 text60R textColor>
        Stacks
      </Text>
      <BButton marginV-s1 label={t.do('section.navio.button.stacks.push')} onPress={stacksPush} />
      <BButton
        marginV-s1
        label={t.do('section.navio.button.stacks.set_root')}
        onPress={stacksSetRoot}
      />

      <Text marginT-s4 text60R textColor>
        Tabs
      </Text>
      <BButton marginV-s1 label={t.do('section.navio.button.tabs.jump_to')} onPress={tabsJumpTo} />
      <Row>
        <BButton
          flex
          marginV-s1
          marginR-s1
          size="small"
          label={t.do('section.navio.button.tabs.update_badge_options')}
          onPress={tabsUpdateOptionsBadge}
        />
        <BButton
          flex
          marginV-s1
          marginL-s1
          size="small"
          label={t.do('section.navio.button.tabs.update_title_options')}
          onPress={tabsUpdateOptionsTitle}
        />
      </Row>
      <BButton
        marginV-s1
        label={t.do('section.navio.button.tabs.set_root')}
        onPress={tabsSetRoot}
      />

      <Text marginT-s4 text60R textColor>
        Drawers
      </Text>
      <BButton
        marginV-s1
        label={t.do('section.navio.button.drawers.toggle')}
        onPress={drawersToggle}
      />
      <BButton
        marginV-s1
        label={t.do('section.navio.button.drawers.jump_to')}
        onPress={drawersJumpTo}
      />
      <BButton
        marginV-s1
        label={t.do('section.navio.button.drawers.set_root')}
        onPress={drawersSetRoot}
      />

      <Text marginT-s4 text60R textColor>
        Modals
      </Text>
      <BButton marginV-s1 label={t.do('section.navio.button.modals.show')} onPress={modalsShow} />
    </Section>
  );
};
