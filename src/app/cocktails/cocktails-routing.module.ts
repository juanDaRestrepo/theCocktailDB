import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailPageComponent } from './pages/cocktail-page/cocktail-page.component';

const routes: Routes = [
    {
        path: ':id',
        component: CocktailPageComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class CocktailsRoutingModule { }
