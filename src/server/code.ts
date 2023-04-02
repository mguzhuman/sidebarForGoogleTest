import * as publicFunctions from "./slides-utilities";

// Expose public functions

// @ts-ignore
global.onOpen = publicFunctions.onOpen;
// @ts-ignore
global.getObjectData = publicFunctions.getObjectData;
// @ts-ignore
global.getObject = publicFunctions.getObject;
// @ts-ignore
global.showSidebar = publicFunctions.showSidebar;


