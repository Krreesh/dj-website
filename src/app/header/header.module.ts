import {NgModule} from '@angular/core';
import {LanguageSelectorComponent} from './language-selector/language-selector.component';
import {ChangeLanguageButtonComponent} from './language-selector/change-language-button/change-language-button.component';
import {HeaderComponent} from './header.component';
import {NavOptionsComponent} from './nav-options/nav.options.component';
import {CommonModule} from '@angular/common';
import {TranslationModule} from '../translation/translation.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    LanguageSelectorComponent,
    ChangeLanguageButtonComponent,
    HeaderComponent,
    NavOptionsComponent
  ],
  exports: [HeaderComponent],
  imports: [CommonModule, TranslationModule, NgbModule, AppRoutingModule]
})
export class HeaderModule {
}
