import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterLink, Router} from 'angular2/router';
import {Lib} from "../../Lib";
import {RefreshTheme} from "../../styles/RefreshTheme";

@Component({
    providers: [AppManager],
    selector: 'AppManager',
    template: `
    <div id="appEntry">
        <small>I am AppManager component</small>
        <div id="appSelector" class="noScroll container" >
            <div align="center" style="padding-top: 100px">
                <button (click)="goToApp1(event)" data-ripple-color="black" type="button" name="mailWasp" class="btn btn-default">
                <i style="margin: 20px; padding: 20px; font-size: 5em" class="fa fa-paper-plane"></i> <span
                        data-localize="none"></span>
                        <small>App 1</small>
                        <small>Loads Asynchronously via router</small>
                 </button>
                <button (click)="goToApp2(event)" data-ripple-color="black" type="button" name="everNodes" class="btn btn-default">
                <i style="margin: 20px; padding: 20px ; font-size: 5em" class="fa fa-rocket"></i> <span
                        data-localize="none"></span>
                        <small>App 2</small>
                        <small>Loads Asynchronously via router</small>
                </button>

            </div>
        </div>
        <div id="appMailWaspContent" class="noScroll container" style="display: none">
        </div>
        <div id="appEverNodesContent" class="noScroll container" style="display: none">
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES, RouterLink]
})
export class AppManager extends RefreshTheme {
    private myRouter:Router;
    constructor(router:Router) {
        super();
        this.myRouter = router;

        // if you wish to subscribe to router calls
        //this.myRouter.parent.subscribe(function(e){
        //    console.log(`Route ${e}`);
        //});
    }

    ngAfterViewInit() {
    }

    private goToApp1() {
        setTimeout(e=>this.myRouter.navigate(['/App1']),500);

    }

    private goToApp2() {
        setTimeout(e=>this.myRouter.navigate(['/App2']),500);
    }
}


