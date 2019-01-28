import { Component, Renderer2 } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'google-challenge';
  myValue = 0;
  disableButtons: boolean = false;

  //listenerFn: () => void; // Render2 approach
  subscription: Subscription; // RxJS approach

  constructor(private renderer: Renderer2) {

  }

  ngOnDestroy() {
    this.turnMouseTrackOff();
  }

  increment(event) {
    ++this.myValue;
  }

  decrement(event){
    --this.myValue;
  }

  turnMouseTrackOff() {
    // Render2 approach.
    //this.listenerFn(); // unsubscribe the document mouse move event
    //this.listenerFn = undefined; // @NOTE: without doing this, the Fn still sticks around.

    // RxJS approach.
    try { // adding this for unit test.. since it was ..
      this.subscription.unsubscribe();
    } catch(ex) {

    }

    this.subscription = undefined; // @NOTE: without doing this, the Fn still sticks around.

    this.disableButtons = false;
  }

  toggleTrackMouseMove() {
    //console.log(this.listenerFn);
    console.log(this.subscription);

    //if(this.listenerFn) {
    if(this.subscription) {
      this.turnMouseTrackOff();
    } else {
      this.disableButtons = true;

      // Render2 approach.
      //this.listenerFn = this.renderer.listen(document, 'mousemove', (event) => {
      //  this.myValue = event.clientX;
      //});

      // RxJS approach.
      this.subscription = fromEvent(document, 'mousemove')
        .subscribe((event: MouseEvent) => {
          this.myValue = event.clientX;
       });

   }
  }

}
