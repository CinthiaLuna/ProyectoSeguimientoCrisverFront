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
      <label class="action-bar-title" text="Reporte de citas"></label>
    </ActionBar>
    <GridLayout class="page__content">
      <label class="page__content-placeholder" text="Esta es la pagina de reporte de citas"></label>
    </GridLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
export default {
  name: "ReporteCita",
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("VistaReporteCitas");
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

