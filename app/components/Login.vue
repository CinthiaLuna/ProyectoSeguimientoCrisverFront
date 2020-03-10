<template>
    <page>
        <flexboxLayaout>
            <StackLayout>
              <Label class="header" text="CRISVER"/>

              	<StackLayout class="input-field" marginBottom="25">
                    <Label text="Usuario" /> 
					<TextField class="input" hint="" keyboardType="email" autocorrect="false" autocapitalizationType="none" v-model="user.email"
					 returnKeyType="next" @returnPress="focusPassword" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>
                
				<StackLayout class="input-field" marginBottom="25">
                    <Label text="Contraseña" />
					<TextField ref="password" class="input" hint="Contraseña" secure="true" v-model="user.password" :returnKeyType="isLoggingIn ? 'done' : 'next'"
					 @returnPress="focusConfirmPassword" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>
                <Button:text="Iniciar" @tap="submit" class="btn btn-primary m-t-20" />

            </StackLayout>
        </flexboxLayaout>
    </page>
</template>

<script>
export default {

}
</script>

<style>

</style>