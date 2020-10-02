# NestMenu
>__used in angular project__

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.11.

# Install
>__npm install nest-menu__

## Usage
_(stackblitz example)_

---------------------------------------------------------------------------------------
[Click to Demo Project](https://stackblitz.com/edit/angular-nest-menu?file=src/index.html)  

---------------------------------------------------------------------------------------

## USEAGE SCREENSHOOTS

### with plain dict data

       //data  a very big dict(only k:v, no array)
       public dict:any = {"@angular":{"common":{"http":{"testing":{}},"locales":{"extra":{},"global":{}},"upgrade":{},"bundles":{},"__ivy_ngcc__":{"fesm2015":{"http":{}}},"testing":{},"fesm2015":{"http":{}},"esm2015":{"http":{"src":{},"testing":{"src":{}}},"upgrade":{"src":{}},"src":{"location":{},"directives":{},"pipes":{},"i18n":{}},"testing":{"src":{}}}},"compiler-cli":{"src":{"diagnostics":{},"transformers":{},"metadata":{},"ngtsc":{"diagnostics":{"src":{}},"partial_evaluator":{"src":{}},"scope":{"src":{}},"entry_point":{"src":{}},"core":{"src":{},"api":{"src":{}}},"metadata":{"src":{}},"perf":{"src":{}},"annotations":{"src":{}},"imports":{"src":{}},"resource":{"src":{}},"util":{"src":{}},"switch":{"src":{}},"cycles":{"src":{}},"shims":{"src":{}},"reflection":{"src":{}},"modulewithproviders":{"src":{}},"incremental":{"src":{}},"translator":{"src":{}},"transform":{"src":{}},"file_system":{"src":{}},"typecheck":{"src":{},"api":{}},"routing":{"src":{}},"indexer":{"src":{}}}},"ngcc":{"src":{"execution":{"cluster":{},"tasks":{"queues":{}}},"host":{},"writing":{"cleaning":{}},"locking":{"lock_file_with_child_process":{}},"logging":{},"entry_point_finder":{},"migrations":{},"dependencies":{},"rendering":{},"analysis":{},"packages":{},"sourcemaps":{}}},"node_modules":{"locate-path":{},"p-locate":{},"find-up":{},"is-fullwidth-code-point":{},"yargs-parser":{"lib":{}},"strip-ansi":{},"path-exists":{},"ansi-styles":{},"cliui":{},"source-map":{"dist":{},"lib":{}},".bin":{},"string-width":{},"color-convert":{},"yargs":{"locales":{},"lib":{}},"ansi-regex":{},"color-name":{},"semver":{"bin":{}},"emoji-regex":{"es2015":{}},"wrap-ansi":{}}},"core":{"schematics":{"utils":{"typescript":{}},"migrations":{"undecorated-classes-with-decorated-fields":{},"module-with-providers":{},"static-queries":{"strategies":{"template_strategy":{},"test_strategy":{},"usage_strategy":{}},"angular":{}},"move-document":{},"undecorated-classes-with-di":{"decorator_rewrite":{}},"template-var-assignment":{"angular":{}},"dynamic-queries":{},"renderer-to-renderer2":{},"missing-injectable":{}}},"src":{},"bundles":{},"__ivy_ngcc__":{"fesm2015":{}},"testing":{},"fesm2015":{},"esm2015":{"src":{"view":{},"change_detection":{"differs":{}},"metadata":{},"sanitization":{},"compiler":{},"util":{},"render3":{"features":{},"instructions":{},"interfaces":{},"util":{},"jit":{},"styling":{},"i18n":{}},"debug":{},"zone":{},"di":{"jit":{},"interface":{}},"reflection":{},"render":{},"testability":{},"interface":{},"linker":{},"i18n":{}},"testing":{"src":{}}}},"cli":{"lib":{"cli":{},"config":{}},"tasks":{},"utilities":{},"node_modules":{"uuid":{"dist":{"esm-browser":{},"umd":{},"esm-node":{},"bin":{}}},".bin":{},"ansi-colors":{"types":{}}},"commands":{},"plugins":{},"bin":{"postinstall":{}},"models":{}},"router":{"upgrade":{},"bundles":{},"__ivy_ngcc__":{"fesm2015":{}},"testing":{},"fesm2015":{},"esm2015":{"upgrade":{"src":{}},"src":{"utils":{},"operators":{},"directives":{},"components":{}},"testing":{"src":{}}}},"platform-browser":{"animations":{},"bundles":{},"__ivy_ngcc__":{"fesm2015":{}},"testing":{},"fesm2015":{},"esm2015":{"src":{"browser":{"tools":{}},"security":{},"dom":{"events":{},"debug":{}}},"animations":{"src":{}},"testing":{"src":{}}}},"material":{"tooltip":{"testing":{}},"datepicker":{},"stepper":{},"sort":{"testing":{}},"grid-list":{"testing":{}},"prebuilt-themes":{},"sidenav":{"testing":{}},"core":{"error":{},"typography":{},"line":{},"animation":{},"label":{},"style":{},"testing":{},"ripple":{},"focus-indicators":{},"selection":{"pseudo-checkbox":{}},"color":{},"datetime":{},"option":{},"density":{},"theming":{},"common-behaviors":{}},"schematics":{"ng-add":{"fonts":{},"theming":{}},"ng-generate":{"dashboard":{"files":{"__path__":{"__name@dasherize@if-flat__":{}}}},"address-form":{"files":{"__path__":{"__name@dasherize@if-flat__":{}}}},"navigation":{"files":{"__path__":{"__name@dasherize@if-flat__":{}}}},"tree":{"files":{"__path__":{"__name@dasherize@if-flat__":{}}}},"table":{"files":{"__path__":{"__name@dasherize@if-flat__":{}}}}},"ng-update":{"migrations":{"misc-ripples-v7":{},"misc-checks":{},"package-imports-v8":{},"hammer-gestures-v9":{}},"typescript":{},"data":{}}},"slide-toggle":{"testing":{}},"bottom-sheet":{"testing":{}},"card":{"testing":{}},"icon":{"testing":{}},"progress-bar":{"testing":{}},"bundles":{},"radio":{"testing":{}},"form-field":{"testing":{"control":{}}},"button-toggle":{"testing":{}},"tabs":{"testing":{},"tab-nav-bar":{}},"checkbox":{"testing":{}},"__ivy_ngcc__":{"fesm2015":{"icon":{}}},"input":{"testing":{}},"tree":{"data-source":{}},"table":{"testing":{}},"select":{"testing":{}},"progress-spinner":{"testing":{}},"expansion":{"testing":{}},"fesm2015":{"tooltip":{},"sort":{},"grid-list":{},"sidenav":{},"core":{},"slide-toggle":{},"bottom-sheet":{},"card":{},"icon":{},"progress-bar":{},"radio":{},"form-field":{"testing":{}},"button-toggle":{},"tabs":{},"checkbox":{},"input":{},"table":{},"select":{},"progress-spinner":{},"expansion":{},"toolbar":{},"autocomplete":{},"snack-bar":{},"divider":{},"button":{},"paginator":{},"badge":{},"dialog":{},"list":{},"menu":{},"slider":{}},"toolbar":{"testing":{}},"chips":{},"autocomplete":{"testing":{}},"snack-bar":{"testing":{}},"divider":{"testing":{}},"button":{"testing":{}},"paginator":{"testing":{}},"badge":{"testing":{}},"dialog":{"testing":{}},"list":{"testing":{}},"menu":{"testing":{}},"esm2015":{"tooltip":{"testing":{}},"datepicker":{},"stepper":{},"sort":{"testing":{}},"grid-list":{"testing":{}},"sidenav":{"testing":{}},"core":{"error":{},"line":{},"animation":{},"label":{},"testing":{},"ripple":{},"selection":{"pseudo-checkbox":{}},"datetime":{},"option":{},"common-behaviors":{}},"slide-toggle":{"testing":{}},"bottom-sheet":{"testing":{}},"card":{"testing":{}},"icon":{"testing":{}},"progress-bar":{"testing":{}},"radio":{"testing":{}},"form-field":{"testing":{"control":{}}},"button-toggle":{"testing":{}},"tabs":{"testing":{},"tab-nav-bar":{}},"checkbox":{"testing":{}},"input":{"testing":{}},"tree":{"data-source":{}},"table":{"testing":{}},"select":{"testing":{}},"progress-spinner":{"testing":{}},"expansion":{"testing":{}},"toolbar":{"testing":{}},"chips":{},"autocomplete":{"testing":{}},"snack-bar":{"testing":{}},"divider":{"testing":{}},"button":{"testing":{}},"paginator":{"testing":{}},"badge":{"testing":{}},"dialog":{"testing":{}},"list":{"testing":{}},"menu":{"testing":{}},"slider":{"testing":{}}},"slider":{"testing":{}}},"compiler":{"src":{"css_parser":{},"template_parser":{},"aot":{},"view_compiler":{},"render3":{"view":{"i18n":{}}},"jit":{},"output":{},"ml_parser":{},"expression_parser":{},"schema":{},"compiler_util":{},"i18n":{"serializers":{}}},"bundles":{},"__ivy_ngcc__":{"fesm2015":{}},"testing":{"src":{"output":{}}},"fesm2015":{},"esm2015":{"src":{"css_parser":{},"template_parser":{},"aot":{},"view_compiler":{},"render3":{"view":{"i18n":{}}},"jit":{},"output":{},"ml_parser":{},"expression_parser":{},"schema":{},"compiler_util":{},"i18n":{"serializers":{}}},"testing":{"src":{"output":{}}}}},"animations":{"bundles":{},"__ivy_ngcc__":{"fesm2015":{"browser":{}}},"browser":{"testing":{}},"fesm2015":{"browser":{}},"esm2015":{"src":{"players":{}},"browser":{"src":{"render":{"css_keyframes":{},"web_animations":{}},"dsl":{"style_normalization":{}}},"testing":{"src":{}}}}},"flex-layout":{"core":{"typings":{"style-utils":{},"base":{},"media-observer":{},"stylesheet-map":{},"utils":{},"tokens":{},"style-builder":{},"basis-validator":{},"breakpoints":{"data":{}},"match-media":{"mock":{}},"media-marshaller":{},"media-trigger":{}}},"esm5":{},"server":{"typings":{}},"typings":{"core":{"style-utils":{},"base":{},"media-observer":{},"stylesheet-map":{},"utils":{},"tokens":{},"style-builder":{},"basis-validator":{},"breakpoints":{"data":{}},"match-media":{"mock":{}},"media-marshaller":{},"media-trigger":{}},"utils":{},"esm5":{"core":{"style-utils":{},"base":{},"media-observer":{},"stylesheet-map":{},"utils":{},"tokens":{},"style-builder":{},"basis-validator":{},"breakpoints":{"data":{}},"match-media":{"mock":{}},"media-marshaller":{},"media-trigger":{}},"utils":{},"server":{},"flex":{"flex-align":{},"layout":{},"flex-fill":{},"flex":{},"flex-order":{},"flex-offset":{},"layout-align":{},"layout-gap":{}},"extended":{"style":{},"show-hide":{},"img-src":{},"class":{}},"grid":{"auto":{},"grid-align":{},"align-rows":{},"row":{},"rows":{},"columns":{},"areas":{},"gap":{},"column":{},"align-columns":{},"area":{}}},"server":{},"flex":{"flex-align":{},"layout":{},"flex-fill":{},"flex":{},"flex-order":{},"flex-offset":{},"layout-align":{},"layout-gap":{}},"extended":{"style":{},"show-hide":{},"img-src":{},"class":{}},"grid":{"auto":{},"grid-align":{},"align-rows":{},"row":{},"rows":{},"columns":{},"areas":{},"gap":{},"column":{},"align-columns":{},"area":{}}},"bundles":{},"flex":{"typings":{"flex-align":{},"layout":{},"flex-fill":{},"flex":{},"flex-order":{},"flex-offset":{},"layout-align":{},"layout-gap":{}}},"__ivy_ngcc__":{"esm2015":{}},"extended":{"typings":{"style":{},"show-hide":{},"img-src":{},"class":{}}},"grid":{"typings":{"auto":{},"grid-align":{},"align-rows":{},"row":{},"rows":{},"columns":{},"areas":{},"gap":{},"column":{},"align-columns":{},"area":{}}},"esm2015":{}},"cdk":{"stepper":{},"layout":{},"observers":{},"schematics":{"update-tool":{"utils":{}},"utils":{"vendored-ast-utils":{},"ast":{}},"ng-add":{},"ng-generate":{"drag-drop":{"files":{"__path__":{"__name@dasherize@if-flat__":{}}}}},"ng-update":{"migrations":{},"typescript":{},"data":{},"html-parsing":{}}},"scrolling":{},"portal":{},"drag-drop":{"directives":{}},"overlay":{"dispatchers":{},"position":{},"scroll":{}},"bundles":{},"collections":{},"__ivy_ngcc__":{"fesm2015":{}},"node_modules":{"parse5":{"lib":{"common":{},"extensions":{"position-tracking":{},"location-info":{},"error-reporting":{}},"parser":{},"utils":{},"serializer":{},"tokenizer":{},"tree-adapters":{}}}},"testing":{"protractor":{},"testbed":{"fake-events":{}}},"a11y":{"high-contrast-mode":{},"aria-describer":{},"key-manager":{},"focus-trap":{},"live-announcer":{},"focus-monitor":{},"interactivity-checker":{}},"tree":{"control":{}},"table":{},"fesm2015":{"testing":{}},"platform":{"features":{}},"bidi":{},"keycodes":{},"text-field":{},"coercion":{},"accordion":{},"clipboard":{},"esm2015":{"stepper":{},"layout":{},"observers":{},"scrolling":{},"portal":{},"drag-drop":{"directives":{}},"overlay":{"dispatchers":{},"position":{},"scroll":{}},"collections":{},"testing":{"protractor":{},"testbed":{"fake-events":{}}},"a11y":{"high-contrast-mode":{},"aria-describer":{},"key-manager":{},"focus-trap":{},"live-announcer":{},"focus-monitor":{},"interactivity-checker":{}},"tree":{"control":{}},"table":{},"platform":{"features":{}},"bidi":{},"keycodes":{},"text-field":{},"coercion":{},"accordion":{},"clipboard":{}}},"forms":{"bundles":{},"__ivy_ngcc__":{"fesm2015":{}},"fesm2015":{},"esm2015":{"src":{"directives":{"reactive_directives":{}}}}},"platform-browser-dynamic":{"bundles":{},"__ivy_ngcc__":{"fesm2015":{}},"testing":{},"fesm2015":{},"esm2015":{"src":{"resource_loader":{}},"testing":{"src":{}}}}}}

       //
        <div
            fxLayout="row"
            fxLayoutAlign="start center"
        >
            <button mat-button color="primary" [disabled]="true">nest data with plain dict</button>
            <nv-nest-menu [data]="dict"></nv-nest-menu>
        </div>


![](/Images/dict.png)  

### with nest dict data
       //data   nest-dict(each element with a children:[])
       public nest:any = {"disp_name":"DevFestFL","icon_name":"","children":[{"disp_name":"Speakers","icon_name":"group","children":[{"disp_name":"Michael Prentice","icon_name":"person","route":"michael-prentice","children":[{"disp_name":"Create Enterprise UIs","icon_name":"star_rate","route":"material-design"}]},{"disp_name":"Stephen Fluin","icon_name":"person","route":"stephen-fluin","children":[{"disp_name":"What's up with the Web?","icon_name":"star_rate","route":"what-up-web"}]},{"disp_name":"Mike Brocchi","icon_name":"person","route":"mike-brocchi","children":[{"disp_name":"My ally, the CLI","icon_name":"star_rate","route":"my-ally-cli"},{"disp_name":"Become an Angular Tailor","icon_name":"star_rate","route":"become-angular-tailer"}]}]},{"disp_name":"Sessions","icon_name":"speaker_notes","children":[{"disp_name":"Create Enterprise UIs","icon_name":"star_rate","route":"material-design"},{"disp_name":"What's up with the Web?","icon_name":"star_rate","route":"what-up-web"},{"disp_name":"My ally, the CLI","icon_name":"star_rate","route":"my-ally-cli"},{"disp_name":"Become an Angular Tailor","icon_name":"star_rate","route":"become-angular-tailer"}]},{"disp_name":"Feedback","icon_name":"feedback","route":"feedback"}]}

       //
        <div
            fxLayout="row"
            fxLayoutAlign="start center"
        >
            <button mat-button color="primary" [disabled]="true">nest data with .children</button>
            <nv-nest-menu [data]="nest"></nv-nest-menu>
        </div>


![](/Images/nest.png) 


### with default icon (same as key)
       //data   a dict(only k:v, no array)
       public icon:any = = {
            alarm:{
                group:{
                    person:{
                        star_rate:{
                        }
                    }
                },
                speaker_notes:{
                    star_rate:{
                    },
                },
                feedback:{
                }
          }
       }
       //
        <div
            fxLayout="row"
            fxLayoutAlign="start center"
        >
            <button mat-button color="primary" [disabled]="true">with default-icon same as display-name</button>
            <nv-nest-menu [data]="icon" [enable_auto_icon]="true"></nv-nest-menu>
        </div>
        
         
![](/Images/enable_auto_icon.png) 

### without default icon 
       //data   a dict(only k:v, no array)
       public icon:any = = {
            alarm:{
                group:{
                    person:{
                        star_rate:{
                        }
                    }
                },
                speaker_notes:{
                    star_rate:{
                    },
                },
                feedback:{
                }
          }
       }
       //
        <div
            fxLayout="row"
            fxLayoutAlign="start center"
        >
            <button mat-button color="primary" [disabled]="true">with default-icon same as display-name</button>
            <nv-nest-menu [data]="icon" [enable_auto_icon]="false"></nv-nest-menu>
        </div>
        
         
![](/Images/disable_auto_icon.png) 

## Code scaffolding

Run `ng generate component component-name --project nest-menu` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project nest-menu`.
> Note: Don't forget to add `--project nest-menu` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build nest-menu` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build nest-menu`, go to the dist folder `cd dist/nest-menu` and run `npm publish`.

## Running unit tests

Run `ng test nest-menu` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
