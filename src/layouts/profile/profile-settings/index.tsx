import React from 'react';
import { ScrollView } from 'react-native';
import { Button, StyleService, useStyleSheet } from '@ui-kitten/components';
import { ProfileAvatar } from './extra/profile-avatar.component';
import { ProfileSetting } from './extra/profile-setting.component';
import { CameraIcon } from './extra/icons';
import { Profile } from './extra/data';

const profile: Profile = Profile.daniloPedrosa();

export default ({ navigation }): React.ReactElement => {

  const styles = useStyleSheet(themedStyle);

  const renderPhotoButton = (): React.ReactElement => (
    <Button
      style={styles.editAvatarButton}
      status='basic'
      icon={CameraIcon}
    />
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <ProfileAvatar
        style={styles.profileAvatar}
        source={profile.photo}
        editButton={renderPhotoButton}
      />
      <ProfileSetting
        style={[styles.profileSetting, styles.section]}
        hint='Nome'
        value={profile.firstName}
      />
      <ProfileSetting
        style={styles.profileSetting}
        hint='Sobrenome'
        value={profile.lastName}
      />
      <ProfileSetting
        style={styles.profileSetting}
        hint='Sexo'
        value={profile.gender}
      />
      <ProfileSetting
        style={styles.profileSetting}
        hint='Idade'
        value={`${profile.age}`}
      />
      <ProfileSetting
        style={styles.profileSetting}
        hint='Peso'
        value={`${profile.weight} kg`}
      />
      <ProfileSetting
        style={styles.profileSetting}
        hint='Altura'
        value={`${profile.height} cm`}
      />
      <ProfileSetting
        style={[styles.profileSetting, styles.section]}
        hint='Email'
        value={profile.email}
      />
      <ProfileSetting
        style={styles.profileSetting}
        hint='Telefone'
        value={profile.phoneNumber}
      />
      {/* <Button
        style={styles.doneButton}
        onPress={onDoneButtonPress}>
        DONE
      </Button> */}
    </ScrollView>
  );
};

const themedStyle = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
  },
  contentContainer: {
    paddingVertical: 24,
  },
  profileAvatar: {
    aspectRatio: 1.0,
    height: 124,
    alignSelf: 'center',
  },
  editAvatarButton: {
    aspectRatio: 1.0,
    height: 48,
    borderRadius: 24,
  },
  profileSetting: {
    padding: 16,
  },
  section: {
    marginTop: 24,
  },
  doneButton: {
    marginHorizontal: 24,
    marginTop: 24,
  },
});
