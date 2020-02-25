 <template>
    <Page>
        <ActionBar title="Seguimiento a terapia fonologica">
            <GridLayout width="100%" columns="auto, *">
                <Label class="menu" text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
                <Label class="title" text="Seguimiento a terapia fonológica"  col="1"/>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <StackLayout row="0" class="nt-drawer__header">
                    <Image class="nt-drawer__header-image fas t-36" src="res://icon"/>
                    <Label class="nt-drawer__header-brand" text="Nombre"></Label>
                    <Label class="nt-drawer__header-footnote" text="Número de expediente"></Label>
                </StackLayout>

                <Label class="drawer-item" @tap ="IrReporteDiagnostico" text="Reporte de diagnóstico" />
                <Label class="drawer-item" text="Reporte de citas"/>
                <Label class="drawer-item" text="Progreso del paciente"/>
                <label class="drawer-item" text ="Terapias"/>
                <StackLayout class = "hr"></StackLayout>
                <label class ="drawer-item" text ="Notificaciones"/>


            </StackLayout>

            <GridLayout ~mainContent columns="*" rows="*">
                <Label class="message" :text="msg" col="0" row="0"/>
            </GridLayout>
        </RadSideDrawer>
    </Page>
</template>

<script >
import ReporteDiagnostico from "./ReporteDiagnostico";
  export default {
    data() {
      return {
        msg: 'Pantalla principal'
      }
    },
    methods: {
        IrReporteDiagnostico(){
            this.$navigateTo(ReporteDiagnostico)
        }
    },
  }
</script>

<style scoped>
    ActionBar {
        background-color: #333333;
        color: #ffffff;
    }

    .title {
        text-align: left;
        padding-left: 16;
        color:#ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
        background-color: #333333;
        color: #ffffff;
        font-size: 24;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 16;
    }
    .menu{
        color:#ffffff;
    }
</style>
