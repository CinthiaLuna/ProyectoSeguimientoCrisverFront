<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Progreso del paciente" backgroundColor="#3F3F3F">
      <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap" />
      <ActionItem
        icon="res://menu"
        android:visibility="collapsed"
        ios.position="left"
        @tap="onDrawerButtonTap"
      />
    </ActionBar>
    <StackLayout>
      <label class="action-bar-title" text="Progreso del paciente"></label>
    </StackLayout>
    <GridLayout>
      <label class="page__content-placeholder" text="Esta es la pagina de progreso del paciente"></label>
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
</style>