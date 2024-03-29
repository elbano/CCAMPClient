import { NgModule } from '@angular/core';

import {
   MatIconModule,
   MatAutocompleteModule,
   MatInputModule,
   MatFormFieldModule,
   MatSidenavModule,
   MatTooltipModule,
   MatButtonModule,
   MatButtonToggleModule,
   MatExpansionModule,
   MatListModule,
   MatProgressSpinnerModule,
   MatCardModule,
   MatProgressBarModule,
   MatCheckboxModule,
   MatSnackBarModule,
   MatSelectModule,
   MatSliderModule,
   MatMenuModule,
   MatIconRegistry,
   MatTableModule,
   MatPaginatorModule,
   MatTabsModule
} from '@angular/material';

import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
   imports: [
      MatIconModule,
      MatAutocompleteModule,
      MatInputModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatTooltipModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatExpansionModule,
      MatListModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MatCardModule,
      MatCheckboxModule,
      MatSnackBarModule,
      MatSelectModule,
      MatSliderModule,
      MatMenuModule,
      MatTableModule,
      MatPaginatorModule,
      MatTabsModule
   ],
   exports: [
      MatIconModule,
      MatAutocompleteModule,
      MatInputModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatTooltipModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatExpansionModule,
      MatListModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MatCardModule,
      MatCheckboxModule,
      MatSnackBarModule,
      MatSelectModule,
      MatSliderModule,
      MatMenuModule,
      MatTableModule,
      MatPaginatorModule,
      MatTabsModule
   ]
})
export class MaterialModule {
   constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
      matIconRegistry.addSvgIconSet(domSanitizer.
         bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
    }
 }
