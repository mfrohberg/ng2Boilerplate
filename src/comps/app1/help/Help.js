System.register(["angular2/core", "./contributors/contributors", "../../../styles/RefreshTheme"], function(exports_1) {
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
    var core_1, contributors_1, RefreshTheme_1;
    var Help;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contributors_1_1) {
                contributors_1 = contributors_1_1;
            },
            function (RefreshTheme_1_1) {
                RefreshTheme_1 = RefreshTheme_1_1;
            }],
        execute: function() {
            Help = (function (_super) {
                __extends(Help, _super);
                function Help(contributors) {
                    _super.call(this);
                }
                Help = __decorate([
                    core_1.Component({
                        selector: 'Help',
                        providers: [contributors_1.Contributors],
                        template: " <small>I am Help component</small>\n                <ng-content></ng-content>\n                "
                    }), 
                    __metadata('design:paramtypes', [contributors_1.Contributors])
                ], Help);
                return Help;
            })(RefreshTheme_1.RefreshTheme);
            exports_1("Help", Help);
        }
    }
});
//# sourceMappingURL=Help.js.map