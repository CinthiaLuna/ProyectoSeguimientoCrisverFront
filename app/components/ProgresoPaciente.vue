<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Progreso del paciente">
      <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap" />
      <ActionItem
        icon="res://menu"
        android:visibility="collapsed"
        ios.position="left"
        @tap="onDrawerButtonTap"
      />
      <label class="action-bar-title" text="Progreso del paciente"></label>
    </ActionBar>
    <GridLayout class="page__content">
      <label class="page__content-placeholder" text="Esta es la pagina de progreso del paciente"></label>
    </GridLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
export default {
  name: "ProgresoPaciente",
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage(
      "VistaProgresoPaciente"
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