<template>
  <page class="page">
    <ActionBar class="action-bar" title="Reporte de diagnóstico">
      <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap" />
      <ActionItem
        icon="res://menu"
        android:visibility="collapsed"
        ios.position="left"
        @tap="onDrawerButtonTap"
      />
      <label class="action-bar-title" text="Reporte de diagnóstico"></label>
    </ActionBar>
    <GridLayout class="page__content">
      <label class="page__content-placeholder" text="Esta es la pagina de reporte de diagnóstico"></label>
    </GridLayout>
  </page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
export default {
  name: "ReporteDiagnostico",
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage(
      "VistaReporteDiagnostico"
    );
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

