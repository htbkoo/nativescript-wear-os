# NativeScript WearOS

[![npm](https://img.shields.io/npm/v/nativescript-wear-os.svg)](https://www.npmjs.com/package/nativescript-wear-os)
[![npm](https://img.shields.io/npm/dt/nativescript-wear-os.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-wear-os)

## Installation

```bash
tns plugin add nativescript-wear-os
```

### WearOsLayout

A base layout for Wear OS apps built with NativeScript that automatically handles calculating the inset for circle watch faces. The layout base is an Android ScrollView so when your layout exceeds the screen height, it will scroll by default, removing the need to handle in your layout.

This has no effect on square watches.

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" actionBarHidden="true"
    xmlns:ui="nativescript-wear-os/packages/wear-os-layout">
    <ui:WearOsLayout>
        <StackLayout>
            <Label text="Going to put a long string of text so we can fill the screen with other view components to show how this works on Circle and Square watch faces." class="c-white" textWrap="true" />
            <GridLayout rows="auto, auto, auto" columns="*, *, *">
                <Button text="Go Back" tap="navBack" class="yellowBtn" row="0" col="0" />
                <Image src="res://icon" stretch="aspectFit" row="0" col="1" />
                <Button text="Wow" class="greenBtn" row="0" col="2" />
                <Button text="Fantastic" row="1" col="0" />
                <Label text="Something something something" class="c-white" row="1" col="1" textWrap="true" />
                <Label text="Something Text" row="1" col="2" />
                <Button text="Yay" row="2" col="0" />
                <Image src="res://icon" stretch="aspectFit" row="2" col="1" />
                <Button text="Okay" row="2" col="2" />
            </GridLayout>
        </StackLayout>
    </ui:WearOsLayout>
</Page>
```

| Circle Watch                                                |                        Square Watch                         |
| ----------------------------------------------------------- | :---------------------------------------------------------: |
| ![Cirlce Watch Usage](./screenshots/base-layout/circle.png) | ![Square Watch Usage](./screenshots/base-layout/square.png) |

---

### WearOsListView

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:wear="nativescript-wear-os/packages/listview">
  <StackLayout>
    <wear:WearOsListView height="100%" items="{{ items }}">
      <wear:WearOsListView.itemTemplate>
        <GridLayout rows="*" columns="auto, *">
          <Image src="{{ image }}" row="0" col="0" />
          <Label text="{{ title }}" row="0" col="1" />
        </GridLayout>
      </wear:WearOsListView.itemTemplate>
    </wear:WearOsListView>
  </StackLayout>
</Page>
```

![ListView Gif](./screenshots/listview/demo.gif)

---

### BoxInsetLayout

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" actionBarHidden="true"
    xmlns:ui="nativescript-wear-os/packages/box-inset-layout">
    <ui:BoxInsetLayout>
        <StackLayout height="100%" width="100%">
            <Label text="This is a box inset layout. It's purpose is for short views so you don't have to calculate the inset for your layout manually. So don't try using a ScrollView with it." class="text-white" textWrap="true"/>
            <GridLayout rows="50" columns="*, *">
                <Button col="0" text="Go Back" class="greyBtn" tap="navBack" />
                <Button col="1" text="Okay" class="yellowBtn" />
            </GridLayout>
        </StackLayout>
    </ui:BoxInsetLayout>
</Page>
```

![BoxInsetLayout Usage](./screenshots/box-inset/boxinset.png)
