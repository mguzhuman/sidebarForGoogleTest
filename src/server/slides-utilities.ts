const onOpen = () => {
	SlidesApp.getUi()
		.createAddonMenu()
		.addItem("show Sidebar", "showSidebar")
		.addToUi();
};

const getObject = () => {
	return SlidesApp.getActivePresentation().getSelection()
}
const getObjectData = () => {
	const selection = getObject();

	const elements = selection.getPageElementRange()

	if (elements) {
		const pageElement = elements.getPageElements()[0]
		const selectionType = pageElement.getPageElementType();
		switch (selectionType) {
			case SlidesApp.PageElementType.IMAGE:
				return {type: "Image", text: ""};
			case SlidesApp.PageElementType.SHAPE:
				return {type: "Shape", text: pageElement.asShape().getText().asString()};
			case SlidesApp.PageElementType.UNSUPPORTED:
				return {type: "Unsupported", text: '"'};
			case SlidesApp.PageElementType.VIDEO:
				return {type: "Video", text: ""};
			case SlidesApp.PageElementType.TABLE:
				return {type: "Table", text: ""};
			case SlidesApp.PageElementType.GROUP:
				return {type: "Group", text: ""};
			case SlidesApp.PageElementType.LINE:
				return {type: "Line", text: ""};
			case SlidesApp.PageElementType.WORD_ART:
				return {type: "Word art", text: pageElement.asWordArt().getRenderedText()};
			case SlidesApp.PageElementType.SHEETS_CHART:
				return {type: "Sheets chart", text: ""};
			default:
				return {type: selectionType, text: ""}
		}
	} else {
		return {type: "", text: ""}
	}
}

const showSidebar = () => {
	const html: GoogleAppsScript.HTML.HtmlOutput = HtmlService
		.createHtmlOutputFromFile("sidebar").setTitle("Get info element")
	SlidesApp
		.getUi()
		.showSidebar(html);
};

export {
	onOpen,
	showSidebar,
	getObjectData,
	getObject
};
