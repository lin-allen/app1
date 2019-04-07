import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'region',
                loadChildren: './region/region.module#App1RegionModule'
            },
            {
                path: 'country',
                loadChildren: './country/country.module#App1CountryModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#App1LocationModule'
            },
            {
                path: 'department',
                loadChildren: './department/department.module#App1DepartmentModule'
            },
            {
                path: 'task',
                loadChildren: './task/task.module#App1TaskModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#App1EmployeeModule'
            },
            {
                path: 'job',
                loadChildren: './job/job.module#App1JobModule'
            },
            {
                path: 'job-history',
                loadChildren: './job-history/job-history.module#App1JobHistoryModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App1EntityModule {}
