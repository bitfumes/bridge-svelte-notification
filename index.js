import BridgeNotify from "./Notify/Bridge.svelte";
import { notify as notifyStore } from "./Notify/store.js";
export const notify = notifyStore;
export default BridgeNotify;
