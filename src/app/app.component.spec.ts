import { AppComponent } from './app.component'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ActivatedRoute } from '@angular/router'

describe('AppComponent', () => {
    let component: AppComponent
    let fixture: ComponentFixture<AppComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppComponent, HttpClientTestingModule],
            providers: [{ provide: ActivatedRoute, useValue: {} }],
        }).compileComponents()

        fixture = TestBed.createComponent(AppComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('it should create the component', () => {
        expect(component).toBeTruthy()
    })
})
