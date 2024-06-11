import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { RootComponent } from './app/root/root.component';

registerLocaleData(en);

bootstrapApplication(RootComponent, {
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    HttpClientModule
  ]
})
.catch(err => console.error(err));
