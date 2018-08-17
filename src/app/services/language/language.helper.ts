import { HttpClient } from "@angular/common/http";

import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


/**
 * Mark strings as translatable within the code.
 * @param {string} str
 * @returns {string}
 */
export function translate(str: string): string {
    return str;
}


/**
 * Factory function that instantiates the translation loader for `.po` files.
 * @param {HttpClient} http
 * @returns {TranslateLoader}
 */
export function createTranslatePoHttpLoader(http: HttpClient): TranslateLoader {
    return new TranslateHttpLoader(http, 'assets/locales/', '.json');
}


/**
 * Handler class for missing translations. Will it will prefix the translation key with
 * the string '[MISSING]: ' to hint missing translations. Will just return the translation
 * key without a prefix if the key is missing on the default language.
 */
export class AppMissingTranslationHandler implements MissingTranslationHandler {

    handle(params: MissingTranslationHandlerParams) {
        if (params.translateService.currentLang === params.translateService.defaultLang) {
            return params.key;
        }
        else {
            return '[MISSING]: ' + params.key;
        }
    }

}