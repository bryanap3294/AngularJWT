import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "./auth/auth.guard";

const appRoutes = [
  { path: "", component: AppComponent, pathMatch: "full", canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" }
];
export const routing = RouterModule.forRoot(appRoutes);