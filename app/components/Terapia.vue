<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Reporte de citas">
      <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap" />
      <ActionItem
        icon="res://menu"
        android:visibility="collapsed"
        ios.position="left"
        @tap="onDrawerButtonTap"
      />
      <label class="action-bar-title" text="Terapias"></label>
    </ActionBar>
    <GridLayout class="page__content">
      <label class="page__content-placeholder" text="Esta es la pagina de terapias"></label>
    </GridLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
export default {
  name: "Terapia",
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("VistaTerapia");
  },
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    }
  }
};
</script>
<style scoped lang="scss">
@import "~/app.scss";
@import "~@nativescript/theme/blue";
</style>
