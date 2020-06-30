import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { SharedModule } from '../../shared/shared.module';
import { PartyMgtRouting } from './party-routing.module';
import { PartyComponent } from './party.component';

@NgModule({
    imports: [
        PartyMgtRouting,
        CommonModule,
        MatTabsModule,
        SharedModule,
        FlexModule,
        MatButtonModule,
    ],
    declarations: [PartyComponent],
})
export class PartyModule {}
