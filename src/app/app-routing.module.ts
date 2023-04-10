import { NgModule } from "@angular/core";
import { RouterModule,Routes, } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { DetailsComponent } from "./components/details/details.component";
import { MoreDetailsComponent } from "./components/more-details/more-details.component";
import { RegisterComponent } from "./components/register/register.component";
import { InvaidloginComponent } from "./components/invaidlogin/invaidlogin.component";
import { CategoriesGuard } from "./guard/categories.guard";

const routes : Routes = [
    {path: 'home' , component : HomeComponent},
    {path :'categories',component: CategoriesComponent,canActivate:[CategoriesGuard]},
    {path : 'login' , component : LoginComponent},
    {path:'register',component: RegisterComponent},
    {path:'products/:category' , component:ProductsComponent},
    {path:'invaildlogin',component:InvaidloginComponent},
    {path:'details/:id' ,component : DetailsComponent , 
    children: [
        {path:'moredetails/:productsid', component:MoreDetailsComponent}
    ]
    }, 
    {path :'',redirectTo:'home',pathMatch: 'full'},
    {path : '**', component: NotFoundComponent }
    
];

@NgModule ({
    imports :[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}