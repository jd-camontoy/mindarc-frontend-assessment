export enum screenTypeConstants {
    DISPLAY_TYPE_DESKTOP = 'desktop',
    DISPLAY_TYPE_MOBILE = 'mobile'
}

type ScreenType = screenTypeConstants.DISPLAY_TYPE_DESKTOP | screenTypeConstants.DISPLAY_TYPE_MOBILE;

export default ScreenType;