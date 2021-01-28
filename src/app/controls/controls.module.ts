import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module';
import { ProductCardComponent } from './product-card/product-card.component';
import { SearchComponent } from './search/search.component';


@NgModule({
        declarations: [
            ProductCardComponent,
            SearchComponent
        ],
        imports: [
            MaterialModule
        ],
        exports: [
            ProductCardComponent
        ],
        providers: [
        ]
})
export class ControlsModule { }
