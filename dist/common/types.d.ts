import { EventHandler } from './events';
export declare type GuiSize = {
    width: number;
    height: number;
};
export declare type SelectionSize = GuiSize;
export interface SelectionChangedHandler extends EventHandler {
    name: 'SELECTION_CHANGED';
    handler: (hasSelection: boolean) => void;
}
export interface ChangeGuiSizeHandler extends EventHandler {
    name: 'CHANGE_GUI_SIZE';
    handler: (guiSize: GuiSize) => void;
}
//# sourceMappingURL=types.d.ts.map