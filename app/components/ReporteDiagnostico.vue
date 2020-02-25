<template>
  <page class="page">
    <ActionBar class="action-bar" title="Reporte de diagnóstico" backgroundColor="#3F3F3F">
      <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap" />
      <ActionItem
        icon="res://menu"
        android:visibility="collapsed"
        ios.position="left"
        @tap="onDrawerButtonTap"
      />
    </ActionBar>
    <StackLayout>
      <label class="action-bar-title" text="Reporte de diagnóstico"></label>
    </StackLayout>
    <GridLayout>
      <label class="page__content-placeholder" text="Esta es la pagina de reporte de diagnóstico"></label>
    </GridLayout>
  </page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
export default {
  name: "ReporteDiagnostico",
  mounted: function() {
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
</style>

