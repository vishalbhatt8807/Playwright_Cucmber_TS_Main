import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";

const options: LaunchOptions = {
    headless: !true
}
const edgeOptions: LaunchOptions ={
    headless: !true,
    
    channel: 'msedge',
}
export const invokeBrowser = () => {
    const browserType = process.env.npm_config_BROWSER || "edge";
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        case "edge":
            return chromium.launch(edgeOptions);
        default:
            throw new Error("Please set the proper browser!")
    }

}