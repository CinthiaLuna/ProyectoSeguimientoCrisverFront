 <template lang="html">
  <GridLayout rows="auto,*" class="nt-drawer__content">
    <StackLayout row="0" class="nt-drawer__header" backgroundColor="#3F3F3F">
      <label class="nt-drawer__header-brand" text="Nombre"></label>
      <label class ="nt-drawer__header-foornote" text="Número de expediente"></label>
    </StackLayout>
    <ScrollView row="1" class="nt-drawer__body" backgroundColor="#faf4ec">
      <StackLayout>
        <GridLayout columns="auto,*":class="'nt-drawer__list-item' +  (selectedPage === 'VistaReporteDiagnostico' ? '-selected': '')" @tap="onNavigationItemTap(VistaReporteDiagnostico)">
          <Image src="res://IconoReporteDiagnostico.png"  /> 
          <label col="1" text="Reporte de diagnóstico" class="p-r-10"></label>
        </GridLayout>
        <GridLayout columns="auto,*":class="'nt-drawer__list-item'+  (selectedPage === 'VistaReporteCitas' ? '-selected': '')" @tap="onNavigationItemTap(VistaReporteCitas)">
          <label col="1" text="Reporte de Citas" class="p-r-10"></label>
        </GridLayout>
        <GridLayout columns="auto,*":class="'nt-drawer__list-item' +  (selectedPage === 'VistaProgresoPaciente' ? '-selected': '')" @tap="onNavigationItemTap(VistaProgresoPaciente)">
          <label col="1" text="Progreso del paciente" class="p-r-10"></label>
        </GridLayout>
        <GridLayout columns="auto,*":class="'nt-drawer__list-item' + (selectedPage === 'VistaTerapia' ? '-seleted': '')" @tap="onNavigationItemTap(VistaTerapia)">
          <Label col="1" text="Terapias" class="p-r-10"></label>
        </GridLayout>
        <GridLayout columns="auto,*":class="'nt-drawer__list-item' + (selectedPage === 'VistaNotificaciones' ? '-seleted': '')" @tap="onNavigationItemTap(VistaNotificaciones)">
          <Label col="1" text="Notificaciones" class="p-r-10"></label>
          
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
import VistaReporteDiagnostico from "./VistaReporteDiagnostico";
import VistaReporteCitas from "./VistaReporteCitas";
import VistaProgresoPaciente from "./VistaProgresoPaciente";
import VistaTerapia from "./VistaTerapia";
import VistaNotificaciones from "./VistaNotificaciones";
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
      VistaReporteCitas: VistaReporteCitas,
      VistaProgresoPaciente: VistaProgresoPaciente,
      VistaTerapia: VistaTerapia,
      VistaNotificaciones: VistaNotificaciones,
      selectedPage: ""
    };
  },
  components: {
    VistaReporteDiagnostico,
    VistaReporteCitas,
    VistaProgresoPaciente,
    VistaTerapia,
    VistaNotificaciones
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
.nt-icon {
  fas {
    font-weight: 400;
  }
}
</style>