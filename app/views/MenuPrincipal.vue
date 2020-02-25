<template lang="html">
  <GridLayout rows="auto,*" class="nt-drawer__content">
    <StackLayout row="0" class="nt-drawer__header" backgroundColor="#3F3F3F">
      <label class="nt-drawer__header-brand" text="Nombre"></label>
      <label class ="nt-drawer__header-foornote" text="Número de expediente"></label>
    </StackLayout>
    <ScrollView row="1" class="nt-drawer__body">
      <StackLayout>
        <GridLayout columns="auto,*" class="nt-drawer__list-item" @tap="onNavigationItemTap(VistaReporteDiagnostico)">
          <label col="1" text="Reporte de diagnóstico" class="p-r-10"></label>
        </GridLayout>
        <GridLayout columns="auto,*" class="nt-drawer__list-item" @tap="onNavigationItemTap(ReporteCitas)">
          <label col="1" text="Reporte de Citas" class="p-r-10"></label>
        </GridLayout>
        <GridLayout columns="auto,*" class="nt-drawer__list-item" @tap="onNavigationItemTap(ProgresoPaciente)">
          <label col="1" text="Progreso del paciente" class="p-r-10"></label>
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
import VistaReporteDiagnostico from "./VistaReporteDiagnostico";
import ReporteCitas from "~/components/ReporteCitas";
import ProgresoPaciente from "~/components/ProgresoPaciente";
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";

export default {
  mounted() {
    SelectedPageService.getInstance().selectedPage$.subscribe(
      selectedPage => (this.selectedPage = selectedPage)
    );
  },
  data() {
    return {
      VistaReporteDiagnostico: VistaReporteDiagnostico,
      ReporteCitas: ReporteCitas,
      ProgresoPaciente: ProgresoPaciente,
      selectedPage: ""
    };
  },
  components: {
    VistaReporteDiagnostico,
    ReporteCitas,
    ProgresoPaciente
  },
  methods: {
    onNavigationItemTap(component) {
      this.$navigateTo(component, {
        clearHistory: true
      });
      utils.closeDrawer();
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@nativescript/theme/scss/variables/blue";
.nt-drawer__header {
  color: #ffffff;
}
.nt-drawer__list-item {
  color: #000000;
}
</style>