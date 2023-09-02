import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FooterHeaderStates } from '../utils/footer-header-status';

@Injectable({
  providedIn: 'root'
})
export class FooterHeaderService {

  private manageHeaderState = new BehaviorSubject<boolean>(true);
  private manageFooterState = new BehaviorSubject<boolean>(true);
  public manageHeaderStateObs = this.manageHeaderState.asObservable();
  public manageFooterStateObs = this.manageFooterState.asObservable();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    this.setHeaderFooterState(this.router.url);
    this.router.events.subscribe((_) => {
      this.setHeaderFooterState(this.router.url);
    });
  }

  private setHeaderFooterState(url: string) {
    this.manageHeaderState.next(true);
    this.manageFooterState.next(true);
    Object.values(FooterHeaderStates).forEach((value) => {
      if (url.match(value.path)) {
        this.manageHeaderState.next(value.header);
        this.manageFooterState.next(value.footer);
      }
    });
  }
  
}
