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
      <label class="action-bar-title" text="Notificaciones"></label>
    </ActionBar>
    <GridLayout class="page__content">
      <label class="page__content-placeholder" text="Esta es la pagina de Notificaciones"></label>
    </GridLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
import VistaNotificaciones from "~/views/VistaNotificaciones";
export default {
  name: "ReporteCita",
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("VistaNotificaciones");
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