<template>
  <v-row v-if="avatars.length" class="ma-0">
    <v-avatar
      v-for="(avatar, index) in avatars"
      :key="`avatar-list-item-${index}-${avatar}`"
      :class="index !== 0 ? 'ml-n4 bordered-avatar' : ''"
      size="36"
    >
      <v-img :src="avatar" />
    </v-avatar>
    <v-avatar color="grey" class="ml-n4 bordered-avatar blueGreyAlt--text body-2" size="36">
      +5
    </v-avatar>
  </v-row>
</template>

<script>
export default {
  name: 'OverlappingAvatarList',
  props: {
    avatars: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.bordered-avatar {
  border-color: white !important;
  border-width: 2px;
  border-style: solid;
}
</style>
