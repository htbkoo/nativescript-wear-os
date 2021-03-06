import { AddChildFromBuilder } from 'tns-core-modules/ui/content-view';
import { View } from 'tns-core-modules/ui/core/view';
export declare class WearOsLayout extends View implements AddChildFromBuilder {
    private _android;
    private _holder;
    private _androidViewId;
    private _childViews;
    private static SCALE_FACTOR;
    constructor();
    readonly android: globalAndroid.widget.ScrollView;
    createNativeView(): globalAndroid.widget.ScrollView;
    initNativeView(): void;
    disposeNativeView(): void;
    onLoaded(): void;
    _addChildFromBuilder(name: string, value: View): void;
    private _adjustInset;
}
