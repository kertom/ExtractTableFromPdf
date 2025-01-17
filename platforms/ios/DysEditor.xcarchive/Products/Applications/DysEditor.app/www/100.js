(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/migtpkzd.sc.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/migtpkzd.sc.entry.js ***!
  \*****************************************************************************/
/*! exports provided: IonItemOption, IonItemOptions, IonItemSliding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonItemOption", function() { return ItemOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonItemOptions", function() { return ItemOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonItemSliding", function() { return ItemSliding; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");
/* harmony import */ var _chunk_2f96b3d2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-2f96b3d2.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-2f96b3d2.js");
/* harmony import */ var _chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-6d7d2f8c.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-6d7d2f8c.js");





class ItemOption {
    constructor() {
        this.disabled = false;
        this.expandable = false;
    }
    onClick(ev) {
        const el = ev.target.closest('ion-item-option');
        if (el) {
            ev.preventDefault();
        }
    }
    hostData() {
        const { disabled, expandable } = this;
        return {
            class: Object.assign({}, Object(_chunk_2f96b3d2_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.color), { [`${this.mode}`]: true, 'item-option-disabled': disabled, 'item-option-expandable': expandable, 'ion-activatable': true })
        };
    }
    render() {
        const TagType = this.href === undefined ? 'button' : 'a';
        return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, { type: "button", class: "button-native", disabled: this.disabled, href: this.href },
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "button-inner" },
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "top" }),
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "horizontal-wrapper" },
                    Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" }),
                    Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon-only" }),
                    Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null),
                    Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" })),
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "bottom" })),
            this.mode === 'md' && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)));
    }
    static get is() { return "ion-item-option"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "el": {
            "elementRef": true
        },
        "expandable": {
            "type": Boolean,
            "attr": "expandable"
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get listeners() { return [{
            "name": "click",
            "method": "onClick"
        }]; }
    static get style() { return ".sc-ion-item-option-ios-h{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit)}.in-list.item-options-end.sc-ion-item-option-ios-h:last-child{padding-right:calc(.7em + var(--ion-safe-area-right))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-list.item-options-end.sc-ion-item-option-ios-h:last-child{padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}.in-list.item-options-start.sc-ion-item-option-ios-h:first-child{padding-left:calc(.7em + var(--ion-safe-area-left))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-list.item-options-start.sc-ion-item-option-ios-h:first-child{padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}.ion-color.sc-ion-item-option-ios-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native.sc-ion-item-option-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:.7em;padding-right:.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native.sc-ion-item-option-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:.7em;padding-inline-start:.7em;-webkit-padding-end:.7em;padding-inline-end:.7em}}.button-inner.sc-ion-item-option-ios{-ms-flex-flow:column nowrap;flex-flow:column nowrap;height:100%}.button-inner.sc-ion-item-option-ios, .horizontal-wrapper.sc-ion-item-option-ios{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}.horizontal-wrapper.sc-ion-item-option-ios{-ms-flex-flow:row nowrap;flex-flow:row nowrap}.sc-ion-item-option-ios-s > *{-ms-flex-negative:0;flex-shrink:0}.sc-ion-item-option-ios-s > [slot=start]{margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-option-ios-s > [slot=start]{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}.sc-ion-item-option-ios-s > [slot=end]{margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-option-ios-s > [slot=end]{margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}.sc-ion-item-option-ios-s > [slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:.9em;font-size:1.8em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-option-ios-s > [slot=icon-only]{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}.item-option-expandable.sc-ion-item-option-ios-h{-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(.65,.05,.36,1);transition-timing-function:cubic-bezier(.65,.05,.36,1)}.item-option-disabled.sc-ion-item-option-ios-h{pointer-events:none}.item-option-disabled.sc-ion-item-option-ios-h   .button-native.sc-ion-item-option-ios{cursor:default;opacity:.5;pointer-events:none}.sc-ion-item-option-ios-h{font-size:16px}.activated.sc-ion-item-option-ios-h{background:var(--ion-color-primary-shade,#3171e0)}.ion-color.activated.sc-ion-item-option-ios-h{background:var(--ion-color-shade)}"; }
    static get styleMode() { return "ios"; }
}

class ItemOptions {
    constructor() {
        this.side = 'end';
    }
    fireSwipeEvent() {
        this.ionSwipe.emit({
            side: this.side
        });
    }
    hostData() {
        const isEnd = Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__["g"])(this.win, this.side);
        return {
            class: {
                [`${this.mode}`]: true,
                [`item-options-${this.mode}`]: true,
                'item-options-start': !isEnd,
                'item-options-end': isEnd
            }
        };
    }
    static get is() { return "ion-item-options"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "fireSwipeEvent": {
            "method": true
        },
        "side": {
            "type": String,
            "attr": "side"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get events() { return [{
            "name": "ionSwipe",
            "method": "ionSwipe",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options,[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end),[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start,[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,#c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:.55px}"; }
    static get styleMode() { return "ios"; }
}

const SWIPE_MARGIN = 30;
const ELASTIC_FACTOR = 0.55;
let openSlidingItem;
class ItemSliding {
    constructor() {
        this.item = null;
        this.openAmount = 0;
        this.initialOpenAmount = 0;
        this.optsWidthRightSide = 0;
        this.optsWidthLeftSide = 0;
        this.sides = 0;
        this.optsDirty = true;
        this.state = 2;
        this.disabled = false;
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    async componentDidLoad() {
        this.item = this.el.querySelector('ion-item');
        await this.updateOptions();
        this.gesture = (await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./chunk-ab1eff20.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-ab1eff20.js"))).createGesture({
            el: this.el,
            queue: this.queue,
            gestureName: 'item-swipe',
            gesturePriority: 100,
            threshold: 5,
            canStart: () => this.canStart(),
            onStart: () => this.onStart(),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.disabledChanged();
    }
    componentDidUnload() {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
        this.item = null;
        this.leftOptions = this.rightOptions = undefined;
        if (openSlidingItem === this.el) {
            openSlidingItem = undefined;
        }
    }
    getOpenAmount() {
        return Promise.resolve(this.openAmount);
    }
    getSlidingRatio() {
        return Promise.resolve(this.getSlidingRatioSync());
    }
    async open(side) {
        if (this.item === null) {
            return;
        }
        const optionsToOpen = this.getOptions(side);
        if (!optionsToOpen) {
            return;
        }
        if (side === undefined) {
            side = (optionsToOpen === this.leftOptions) ? 'start' : 'end';
        }
        const isStartOpen = this.openAmount < 0;
        const isEndOpen = this.openAmount > 0;
        if (isStartOpen && optionsToOpen === this.leftOptions) {
            return;
        }
        if (isEndOpen && optionsToOpen === this.rightOptions) {
            return;
        }
        this.closeOpened();
        this.state = 4;
        requestAnimationFrame(() => {
            this.calculateOptsWidth();
            const width = (side === 'end') ? this.optsWidthRightSide : -this.optsWidthLeftSide;
            openSlidingItem = this.el;
            this.setOpenAmount(width, false);
            this.state = (side === 'end') ? 8 : 16;
        });
    }
    async close() {
        this.setOpenAmount(0, true);
    }
    async closeOpened() {
        if (openSlidingItem !== undefined) {
            openSlidingItem.close();
            openSlidingItem = undefined;
            return true;
        }
        return false;
    }
    getOptions(side) {
        if (side === undefined) {
            return this.leftOptions || this.rightOptions;
        }
        else if (side === 'start') {
            return this.leftOptions;
        }
        else {
            return this.rightOptions;
        }
    }
    async updateOptions() {
        const options = this.el.querySelectorAll('ion-item-options');
        let sides = 0;
        this.leftOptions = this.rightOptions = undefined;
        for (let i = 0; i < options.length; i++) {
            const option = await options.item(i).componentOnReady();
            if (option.side === 'start') {
                this.leftOptions = option;
                sides |= 1;
            }
            else {
                this.rightOptions = option;
                sides |= 2;
            }
        }
        this.optsDirty = true;
        this.sides = sides;
    }
    canStart() {
        const selected = openSlidingItem;
        if (selected && selected !== this.el) {
            this.closeOpened();
            return false;
        }
        return !!(this.rightOptions || this.leftOptions);
    }
    onStart() {
        openSlidingItem = this.el;
        if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (this.openAmount === 0) {
            this.optsDirty = true;
            this.state = 4;
        }
        this.initialOpenAmount = this.openAmount;
        if (this.item) {
            this.item.style.transition = 'none';
        }
    }
    onMove(gesture) {
        if (this.optsDirty) {
            this.calculateOptsWidth();
        }
        let openAmount = this.initialOpenAmount - gesture.deltaX;
        switch (this.sides) {
            case 2:
                openAmount = Math.max(0, openAmount);
                break;
            case 1:
                openAmount = Math.min(0, openAmount);
                break;
            case 3: break;
            case 0: return;
            default:
                console.warn('invalid ItemSideFlags value', this.sides);
                break;
        }
        let optsWidth;
        if (openAmount > this.optsWidthRightSide) {
            optsWidth = this.optsWidthRightSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        else if (openAmount < -this.optsWidthLeftSide) {
            optsWidth = -this.optsWidthLeftSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        this.setOpenAmount(openAmount, false);
    }
    onEnd(gesture) {
        const velocity = gesture.velocityX;
        let restingPoint = (this.openAmount > 0)
            ? this.optsWidthRightSide
            : -this.optsWidthLeftSide;
        const isResetDirection = (this.openAmount > 0) === !(velocity < 0);
        const isMovingFast = Math.abs(velocity) > 0.3;
        const isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
        if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
            restingPoint = 0;
        }
        const state = this.state;
        this.setOpenAmount(restingPoint, true);
        if ((state & 32) !== 0 && this.rightOptions) {
            this.rightOptions.fireSwipeEvent();
        }
        else if ((state & 64) !== 0 && this.leftOptions) {
            this.leftOptions.fireSwipeEvent();
        }
    }
    calculateOptsWidth() {
        this.optsWidthRightSide = 0;
        if (this.rightOptions) {
            this.rightOptions.style.display = 'flex';
            this.optsWidthRightSide = this.rightOptions.offsetWidth;
            this.rightOptions.style.display = '';
        }
        this.optsWidthLeftSide = 0;
        if (this.leftOptions) {
            this.leftOptions.style.display = 'flex';
            this.optsWidthLeftSide = this.leftOptions.offsetWidth;
            this.leftOptions.style.display = '';
        }
        this.optsDirty = false;
    }
    setOpenAmount(openAmount, isFinal) {
        if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (!this.item) {
            return;
        }
        const style = this.item.style;
        this.openAmount = openAmount;
        if (isFinal) {
            style.transition = '';
        }
        if (openAmount > 0) {
            this.state = (openAmount >= (this.optsWidthRightSide + SWIPE_MARGIN))
                ? 8 | 32
                : 8;
        }
        else if (openAmount < 0) {
            this.state = (openAmount <= (-this.optsWidthLeftSide - SWIPE_MARGIN))
                ? 16 | 64
                : 16;
        }
        else {
            this.tmr = setTimeout(() => {
                this.state = 2;
                this.tmr = undefined;
            }, 600);
            openSlidingItem = undefined;
            style.transform = '';
            return;
        }
        style.transform = `translate3d(${-openAmount}px,0,0)`;
        this.ionDrag.emit({
            amount: openAmount,
            ratio: this.getSlidingRatioSync()
        });
    }
    getSlidingRatioSync() {
        if (this.openAmount > 0) {
            return this.openAmount / this.optsWidthRightSide;
        }
        else if (this.openAmount < 0) {
            return this.openAmount / this.optsWidthLeftSide;
        }
        else {
            return 0;
        }
    }
    hostData() {
        return {
            class: {
                [`${this.mode}`]: true,
                'item-sliding-active-slide': (this.state !== 2),
                'item-sliding-active-options-end': (this.state & 8) !== 0,
                'item-sliding-active-options-start': (this.state & 16) !== 0,
                'item-sliding-active-swipe-end': (this.state & 32) !== 0,
                'item-sliding-active-swipe-start': (this.state & 64) !== 0
            }
        };
    }
    static get is() { return "ion-item-sliding"; }
    static get properties() { return {
        "close": {
            "method": true
        },
        "closeOpened": {
            "method": true
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
        },
        "el": {
            "elementRef": true
        },
        "getOpenAmount": {
            "method": true
        },
        "getSlidingRatio": {
            "method": true
        },
        "open": {
            "method": true
        },
        "queue": {
            "context": "queue"
        },
        "state": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "ionDrag",
            "method": "ionDrag",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden}ion-item-sliding,ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}"; }
}
function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
    return (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
}




/***/ })

}]);
//# sourceMappingURL=100.js.map