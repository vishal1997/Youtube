import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../body/home/home.component';
const routes:Routes = [
    {path:"", component: HomeComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRouterModule {

}

export const RoutingInternalComponents = [
    HomeComponent
] 