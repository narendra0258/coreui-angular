var AppBreadcrumbModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// App Breadcrumb Component
import { AppBreadcrumbService } from './app-breadcrumb.service';
import { AppBreadcrumbComponent } from './app-breadcrumb.component';
import { CuiBreadcrumbComponent } from './cui-breadcrumb.component';
// @dynamic
let AppBreadcrumbModule = AppBreadcrumbModule_1 = class AppBreadcrumbModule {
    static forRoot(config) {
        return {
            ngModule: AppBreadcrumbModule_1,
            providers: [
                AppBreadcrumbService
            ]
        };
    }
};
AppBreadcrumbModule = AppBreadcrumbModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule],
        exports: [AppBreadcrumbComponent, CuiBreadcrumbComponent],
        declarations: [AppBreadcrumbComponent, CuiBreadcrumbComponent]
    })
], AppBreadcrumbModule);
export { AppBreadcrumbModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYXBwLWJyZWFkY3J1bWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxRQUFRLEVBQXNCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQywyQkFBMkI7QUFDM0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFcEUsV0FBVztBQU1YLElBQWEsbUJBQW1CLDJCQUFoQyxNQUFhLG1CQUFtQjtJQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQVk7UUFDekIsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBbUI7WUFDN0IsU0FBUyxFQUFFO2dCQUNULG9CQUFvQjthQUNyQjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVRZLG1CQUFtQjtJQUwvQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBRSxZQUFZLEVBQUUsWUFBWSxDQUFFO1FBQ3ZDLE9BQU8sRUFBRSxDQUFFLHNCQUFzQixFQUFFLHNCQUFzQixDQUFFO1FBQzNELFlBQVksRUFBRSxDQUFFLHNCQUFzQixFQUFFLHNCQUFzQixDQUFFO0tBQ2pFLENBQUM7R0FDVyxtQkFBbUIsQ0FTL0I7U0FUWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbi8vIEFwcCBCcmVhZGNydW1iIENvbXBvbmVudFxyXG5pbXBvcnQgeyBBcHBCcmVhZGNydW1iU2VydmljZSB9IGZyb20gJy4vYXBwLWJyZWFkY3J1bWIuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1icmVhZGNydW1iLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEN1aUJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2N1aS1icmVhZGNydW1iLmNvbXBvbmVudCc7XHJcblxyXG4vLyBAZHluYW1pY1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUgXSxcclxuICBleHBvcnRzOiBbIEFwcEJyZWFkY3J1bWJDb21wb25lbnQsIEN1aUJyZWFkY3J1bWJDb21wb25lbnQgXSxcclxuICBkZWNsYXJhdGlvbnM6IFsgQXBwQnJlYWRjcnVtYkNvbXBvbmVudCwgQ3VpQnJlYWRjcnVtYkNvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBCcmVhZGNydW1iTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFwcEJyZWFkY3J1bWJNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBBcHBCcmVhZGNydW1iTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBBcHBCcmVhZGNydW1iU2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=