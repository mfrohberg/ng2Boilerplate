System.register(['angular2/core', 'angular2/router', "angular2/http", "../sidemenu/Menu", "../sidemenu/MenuItem", "../../services/CommBroker", "../../Conts", "../sliderpanel/Sliderpanel", "../digg/Digg", "../tabs/tabs", "../tabs/tab", "../logout/Logout", "./settings/Settings", "./help/Help", "./todos/Todo1", "./todos/Todo2", "./todos/Todolist", "./todos/Todoitem", "./todos/TodoStatsModel", "./help/contributors/contributors", "../../styles/RefreshTheme"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, router_2, Menu_1, MenuItem_1, CommBroker_1, Conts_1, Sliderpanel_1, Digg_1, tabs_1, tab_1, Logout_1, Settings_1, Help_1, Todo1_1, Todo2_1, Todolist_1, Todoitem_1, TodoStatsModel_1, contributors_1, RefreshTheme_1;
    var App1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Menu_1_1) {
                Menu_1 = Menu_1_1;
            },
            function (MenuItem_1_1) {
                MenuItem_1 = MenuItem_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            },
            function (Digg_1_1) {
                Digg_1 = Digg_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            },
            function (Logout_1_1) {
                Logout_1 = Logout_1_1;
            },
            function (Settings_1_1) {
                Settings_1 = Settings_1_1;
            },
            function (Help_1_1) {
                Help_1 = Help_1_1;
            },
            function (Todo1_1_1) {
                Todo1_1 = Todo1_1_1;
            },
            function (Todo2_1_1) {
                Todo2_1 = Todo2_1_1;
            },
            function (Todolist_1_1) {
                Todolist_1 = Todolist_1_1;
            },
            function (Todoitem_1_1) {
                Todoitem_1 = Todoitem_1_1;
            },
            function (TodoStatsModel_1_1) {
                TodoStatsModel_1 = TodoStatsModel_1_1;
            },
            function (contributors_1_1) {
                contributors_1 = contributors_1_1;
            },
            function (RefreshTheme_1_1) {
                RefreshTheme_1 = RefreshTheme_1_1;
            }],
        execute: function() {
            App1 = (function (_super) {
                __extends(App1, _super);
                function App1(params, commBroker, Consts) {
                    _super.call(this);
                    var self = this;
                    self.commBroker = commBroker;
                    self.screens = {
                        todos: true,
                        digg: false,
                        settings: false,
                        help: false,
                        logout: false
                    };
                    self.listenMenuChanges();
                }
                App1.prototype.listenMenuChanges = function () {
                    var self = this;
                    self.commBroker.onEvent(Conts_1.Consts.Events().MENU_SELECTION).subscribe(function (e) {
                        var screen = (e.message).toLowerCase();
                        if (!self.screens.hasOwnProperty(screen)) {
                            console.log('no screen by the name of ' + screen);
                            return;
                        }
                        for (var screen_1 in self.screens)
                            self.screens[screen_1] = false;
                        self.screens[screen] = true;
                    });
                };
                App1 = __decorate([
                    core_1.Component({
                        providers: [http_1.HTTP_PROVIDERS, TodoStatsModel_1.default],
                        templateUrl: 'src/comps/app1/App1.html',
                        directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink, Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg,
                            Todo1_1.Todo1, Todo2_1.Todo2, Todolist_1.TodoList, Todoitem_1.TodoItem, Logout_1.Logout, Settings_1.Settings, Help_1.Help, tabs_1.Tabs, tab_1.Tab, contributors_1.Contributors]
                    }), 
                    __metadata('design:paramtypes', [router_2.RouteParams, CommBroker_1.CommBroker, Conts_1.Consts])
                ], App1);
                return App1;
            })(RefreshTheme_1.RefreshTheme);
            exports_1("App1", App1);
        }
    }
});
//# sourceMappingURL=App1.js.map