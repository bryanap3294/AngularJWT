import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "./auth/auth.guard";
import { HomeComponent } from "./home/home.component";

const appRoutes = [
  { path: "", component: HomeComponent, pathMatch: "full", canActivate: [AuthGuard] },//authguard maneja la condicion de si estas logeado o no
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: '**', component: LoginComponent }//comodin, para rutas que no existen redireccionar al componente
];
export const routing = RouterModule.forRoot(appRoutes);