/*
 * Define the variables coming from webpack's DefinePlugin. This variables do not
 * really exist as they are replaced by webpack during compile time. This is just
 * to make typescript happy.
 */
declare const BUILD_VERSION: string;
declare const BUILD_DATE: string;
declare const BUILD_DEVELOPMENT: boolean;
declare const BUILD_PRODUCTION: boolean;
declare const BUILD_TEST: boolean;
