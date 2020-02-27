<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Pagina principal">
      <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"></NavigationButton>
      <ActionItem
        icon="res://menu"
        android:visibility="collapsed"
        ios.position="left"
        @tap="onDrawerButtonTap"
      ></ActionItem>
      <label class="action-bar-title" text="Pagina principal"></label>
    </ActionBar>
    <GridLayout backgroudColor="#faf4ec">
      <label class="page__content-placeholder" text="Esta es la pagina principal"></label>
    </GridLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Home");
  },
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    }
  }
};
</script>



<style scoped lang="scss">
@import "~@nativescript/theme/blue";
.page__content {
  &-placeholder {
    color: #000000;
    font-size: 20;
    vertical-align: center;
  }
}
</style>